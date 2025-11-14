# Daikon Font Files

Please place your Daikon font files in this directory with the following naming convention:

## Required Font Files:

### Regular Weights:
- `Daikon-Light.woff2` (weight: 300)
- `Daikon-Regular.woff2` (weight: 400)
- `Daikon-Medium.woff2` (weight: 500)
- `Daikon-SemiBold.woff2` (weight: 600)
- `Daikon-Bold.woff2` (weight: 700)

### Italic Weights:
- `Daikon-LightItalic.woff2` (weight: 300, italic)
- `Daikon-Italic.woff2` (weight: 400, italic)
- `Daikon-MediumItalic.woff2` (weight: 500, italic)
- `Daikon-SemiBoldItalic.woff2` (weight: 600, italic)
- `Daikon-BoldItalic.woff2` (weight: 700, italic)

## Notes:
- If you have different file names or formats (e.g., `.woff`, `.ttf`, `.otf`), you can update the font paths in `app/layout.tsx`
- The system will automatically fall back to system fonts if Daikon files are not found
- WOFF2 format is recommended for best performance and browser support

