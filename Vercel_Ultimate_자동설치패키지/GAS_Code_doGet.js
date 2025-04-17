
function doGet(e) {
  const sheetId = e.parameter.sheet;
  const worker = e.parameter.worker;
  const title = e.parameter.title || "자동설치기";
  const theme = e.parameter.theme || "dark";
  const defaultCat = e.parameter.cat || "전체";
  const max = e.parameter.max || "100";
  const todayLabel = e.parameter.today || "조회수";

  if (!sheetId || !worker) {
    return ContentService.createTextOutput("❌ 누락된 파라미터: sheet 또는 worker").setMimeType(ContentService.MimeType.TEXT);
  }

  const template = HtmlService.createTemplateFromFile("template").getRawContent();
  const sheetURL = `https://script.google.com/macros/s/${sheetId}/exec`;

  const filled = template
    .replaceAll("{{WEB_APP_URL}}", sheetURL)
    .replaceAll("{{WORKER_URL}}", worker)
    .replaceAll("{{TITLE}}", title)
    .replaceAll("{{DEFAULT_CATEGORY}}", defaultCat)
    .replaceAll("{{MAX_CARDS}}", max)
    .replaceAll("{{TODAY_LABEL}}", todayLabel);

  return ContentService
    .createTextOutput(filled)
    .setMimeType(ContentService.MimeType.HTML)
    .setHeader("Content-Disposition", "attachment; filename=index.html");
}
