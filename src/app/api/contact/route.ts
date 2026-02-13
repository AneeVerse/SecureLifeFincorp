import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            firstName, lastName, email, phone, message, subject,
            source, businessType, mainRiskConcern, selectedServices,
            annualTurnover, extraInfo, userLocation, userPincode, userIp
        } = body;

        // Validate required fields
        if (!firstName || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Prepare email content
        const fullName = lastName ? `${firstName} ${lastName}` : firstName;
        const emailSubject = subject || 'New Inquiry from SecureLife Fincorp Website';
        const formSource = source === 'hero' ? 'Hero Modal Form' : (source === 'high-intent-modal' ? 'High Intent Modal' : 'Contact Page');

        // Handle Services / Risks
        const services = selectedServices || mainRiskConcern;
        const servicesDisplay = Array.isArray(services) ? services.join(', ') : (services || '');

        // Append geolocation data to message as requested
        const geoInfo = `\n\n--- Geolocation Info ---\nLocation: ${userLocation || 'Unknown'}\nPincode: ${userPincode || 'Unknown'}\nIP Address: ${userIp || 'Unknown'}`;
        const finalMessage = message ? (message + geoInfo) : geoInfo;

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #00D26A 0%, #00B85F 100%); padding: 30px; border-radius: 16px 16px 0 0;">
                    <h1 style="color: #000; margin: 0; font-size: 24px;">New Inquiry Received</h1>
                    <p style="color: rgba(0,0,0,0.7); margin: 10px 0 0 0;">From: ${formSource}</p>
                </div>
                
                <div style="background: #f9f9f9; padding: 30px; border: 1px solid #eee; border-top: none;">
                    <h2 style="color: #333; font-size: 18px; margin-top: 0;">Contact Details</h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 140px;">Full Name:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">
                                <a href="mailto:${email}" style="color: #00D26A;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Phone:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">
                                <a href="tel:${phone}" style="color: #00D26A;">${phone}</a>
                            </td>
                        </tr>
                        ${businessType ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Business Type:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">${businessType}</td>
                        </tr>
                        ` : ''}
                        ${servicesDisplay ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Interested Services:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">${servicesDisplay}</td>
                        </tr>
                        ` : ''}
                        ${annualTurnover ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Turnover:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">${annualTurnover}</td>
                        </tr>
                        ` : ''}
                    </table>

                    ${message ? `
                    <div style="margin-top: 20px;">
                        <h3 style="color: #333; font-size: 16px; margin-bottom: 10px;">Message:</h3>
                        <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee; color: #555; line-height: 1.6;">
                            ${finalMessage.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${extraInfo ? `
                    <div style="margin-top: 15px; font-size: 12px; color: #888;">
                        <strong>Audit Info:</strong> ${extraInfo}
                    </div>
                    ` : ''}
                </div>

                <div style="background: #0a0a0a; padding: 20px; border-radius: 0 0 16px 16px; text-align: center;">
                    <p style="color: #666; margin: 0; font-size: 12px;">
                        This email was sent from SecureLife Fincorp website
                    </p>
                </div>
            </div>
        `;

        // Send notification to Owner
        const ownerMailPromise = transporter.sendMail({
            from: `"SecureLife Fincorp" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            replyTo: email,
            subject: `New Lead: ${fullName} (${servicesDisplay.split(',')[0] || 'Inquiry'})`,
            html: htmlContent,
        });

        // Send to Google Sheets
        let sheetsPromise: Promise<any> = Promise.resolve();
        if (process.env.GOOGLE_APPS_SCRIPT_URL) {
            sheetsPromise = fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: formSource,
                    formType: 'Website Inquiry',
                    name: fullName,
                    email: email,
                    phone: phone,
                    message: finalMessage,
                    extraInfo: extraInfo || `Services: ${servicesDisplay}`,
                    businessType: businessType || '',
                    services: servicesDisplay,
                    turnover: annualTurnover || ''
                }),
            }).then(res => res.json())
                .catch(err => console.error('Google Sheets Error:', err));
        }

        // Send confirmation to Customer
        const customerMailPromise = transporter.sendMail({
            from: `"SecureLife Fincorp" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We've received your request - SecureLife Fincorp`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 16px;">
                    <div style="background: linear-gradient(135deg, #00D26A 0%, #00B85F 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: #000; margin: 0; font-size: 24px;">Thank You, ${firstName}!</h1>
                    </div>
                    <div style="padding: 30px; color: #333; line-height: 1.6;">
                        <p>We've received your inquiry regarding our <strong>Insurance Solutions (Fire, Health, Cyber, etc.)</strong>.</p>
                        <p>Our team of experts is reviewing your selected services and will get back to you shortly.</p>
                        <p style="margin-top: 30px;">Best Regards,<br><strong>SecureLife Fincorp Team</strong></p>
                    </div>
                </div>
            `,
        });

        // Wait for all tasks to complete
        await Promise.all([ownerMailPromise, customerMailPromise, sheetsPromise]);

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
