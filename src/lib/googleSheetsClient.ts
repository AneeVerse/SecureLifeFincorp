const GOOGLE_SHEETS_WEBHOOK_URL =
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_SHEET_API_URL; // Checking alternatives if any

const jsonHeaders = { 'Content-Type': 'application/json' };

const logPrefix = (context?: string) => (context ? `[Google Sheets] ${context}` : '[Google Sheets]');

export const sendToGoogleSheets = async (payload: any, context = '') => {
    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
        console.warn(`${logPrefix(context)} Missing webhook URL.`);
        return;
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`${logPrefix(context)} Request failed`, response.status, errorText);
        }

        return response;
    } catch (error) {
        console.error(`${logPrefix(context)} Request error`, error);
    }
};

export { GOOGLE_SHEETS_WEBHOOK_URL };
