function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date().toLocaleString("vi-VN"),
      data.name,
      data.phone,
      data.email,
      data.content || "",
    ]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return jsonResponse({ status: "ok" });
}
