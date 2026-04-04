const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export async function submitToGoogleSheets(data: Record<string, string>) {
  if (!SHEETS_URL) {
    throw new Error("Google Sheets URL not configured");
  }

  const response = await fetch(SHEETS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Submission failed");

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json();
  }
  return { success: response.ok };
}
