import DOMPurify from 'dompurify';

export const sanitizeHtml = (html: string): string => {
  if (typeof window === 'undefined') return html;
  return DOMPurify.sanitize(html);
};

export const sanitizeText = (text: string): string => {
  return text.replace(/[<>]/g, '');
};