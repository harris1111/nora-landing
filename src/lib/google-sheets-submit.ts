const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export async function submitToGoogleSheets(data: Record<string, string>) {
  if (!SHEETS_URL) {
    throw new Error("Google Sheets URL not configured");
  }

  // Use no-cors mode with form data to avoid CORS preflight
  // Google Apps Script doesn't return readable response in no-cors,
  // so we assume success if no network error
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  await fetch(SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });

  return { success: true };
}
