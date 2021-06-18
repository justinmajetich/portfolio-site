/**
 * Parses a string delineated by '\n' into paragraphs.
 * @param {string} text The string to parse.
 * @param {Component} ParagraphStyle Component to wrap parsed paragraphs. Defaults to HTML <p> element.
 * @returns 
 */
export default function ParseTextToParagraphs(text, ParagraphStyle = `p`) {
    return text.split('\n').map((paragraph, i) => <ParagraphStyle key={i}>{paragraph}</ParagraphStyle>);
}