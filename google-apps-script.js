function doPost(e) {
    try {
        // IMPORTANT: Replace with your actual Google Sheet ID
        const SHEET_ID = '1CMZGgfKz7zxQ2kdCvF_zKb7gXaQt1TVIv07j1dboZk0';

        const ss = SpreadsheetApp.openById(SHEET_ID);
        const sheet = ss.getSheets()[0];

        // Parse the incoming data
        const data = JSON.parse(e.postData.contents);

        // Get current timestamp in IST
        const getIndianTime = () => {
            const now = new Date();
            const utcTime = now.getTime();
            const istOffset = 5.5 * 60 * 60 * 1000;
            const istTime = new Date(utcTime + istOffset);

            const year = istTime.getUTCFullYear();
            const month = String(istTime.getUTCMonth() + 1).padStart(2, '0');
            const day = String(istTime.getUTCDate()).padStart(2, '0');
            let hours = istTime.getUTCHours();
            const minutes = String(istTime.getUTCMinutes()).padStart(2, '0');
            const seconds = String(istTime.getUTCSeconds()).padStart(2, '0');

            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const displayHours = String(hours).padStart(2, '0');

            return `${day}/${month}/${year}, ${displayHours}:${minutes}:${seconds} ${ampm} (IST)`;
        };

        // Prepare row data
        const rowData = [
            getIndianTime(),                           // A: Timestamp
            data.source || 'Direct',                  // B: Source
            data.formType || 'Inquiry',               // C: Form Type
            data.name || '',                           // D: Name
            data.email || '',                          // E: Email
            "'" + (data.phone || ''),                  // F: Phone
            data.businessType || '',                   // G: Business Type
            data.services || '',                       // H: Services/Risk Concerns
            data.message || '',                        // I: Message
            data.extraInfo || ''                       // J: Extra Info
        ];

        // Add the row to the sheet
        sheet.appendRow(rowData);

        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({
                success: true,
                message: 'Data saved successfully'
            }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        console.error('Error:', error);
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                message: 'Error saving data: ' + error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput('Google Apps Script is working!')
        .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up sheet headers (run this once manually)
function setupSheetHeaders() {
    const SHEET_ID = '1CMZGgfKz7zxQ2kdCvF_zKb7gXaQt1TVIv07j1dboZk0';
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheets()[0];

    const headers = [
        'Timestamp',               // A
        'Source',                 // B
        'Form Type',               // C
        'Name',                    // D
        'Email',                   // E
        'Phone',                   // F
        'Business Type',           // G
        'Services/Risk Concerns',  // H
        'Message',                 // I
        'Extra Info'               // J
    ];

    // Clear existing headers and add new ones
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Format headers
    sheet.getRange(1, 1, 1, headers.length)
        .setBackground('#00D26A') // Brand Green
        .setFontColor('#000000')
        .setFontWeight('bold');

    // Freeze first row
    sheet.setFrozenRows(1);
}
