export default function sanitizeHTML(html) {
    // Удаляем все теги <script> и их содержимое
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
    // Удаляем все теги <iframe> и их содержимое
    html = html.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  
    return html;
  }