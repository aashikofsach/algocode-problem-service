// const marked = require("marked"); // this is not working as importing as normal common js is not supposted in latest version of marked 
const sanitizeHtml = require("sanitize-html");
var TurndownService = require("turndown");

async function markdownSanitizer(markdownContent) {
  var turndownService = new TurndownService();
  const {marked} = await import("marked");

  // markdown to HTML
  const convertedHtml = marked.parse(markdownContent);

  // sanitize the HTML
  const sanitizedHtml = sanitizeHtml(convertedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  });

  // HTML to Mark down
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = markdownSanitizer; 
