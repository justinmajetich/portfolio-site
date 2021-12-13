/**
 * Formats font name to pass a parameter then concatenates to Google Fonts API stub.
 * @param {string} fontName Name of the Google Font.
 * @returns Formatted URL
 */
export default function GetGoogleFontsURL(fontName) {
    
    const url = 'https://fonts.googleapis.com/css2?family=' + fontName.replace(/\s/g, '+') + ':wght@400..700'

    return url
}