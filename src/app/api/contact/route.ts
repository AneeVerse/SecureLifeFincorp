import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, message, subject, source } = body;

        // Validate required fields
        if (!firstName || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        // For production, use environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'your-email@gmail.com',
                pass: process.env.EMAIL_PASS || 'your-app-password',
            },
        });

        // Prepare email content
        const fullName = lastName ? `${firstName} ${lastName}` : firstName;
        const emailSubject = subject || 'New Inquiry from SecureLife Fincorp Website';
        const formSource = source === 'hero' ? 'Hero Modal Form' : 'Contact Page';

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
                        ${subject ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Subject:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">${subject}</td>
                        </tr>
                        ` : ''}
                    </table>

                    ${message ? `
                    <div style="margin-top: 20px;">
                        <h3 style="color: #333; font-size: 16px; margin-bottom: 10px;">Message:</h3>
                        <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee; color: #555; line-height: 1.6;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
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

        // Send email
        await transporter.sendMail({
            from: `"SecureLife Fincorp" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
            to: process.env.EMAIL_TO || 'recipient@example.com',
            replyTo: email,
            subject: emailSubject,
            html: htmlContent,
        });

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
