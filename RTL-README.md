# RTL (Right-to-Left) Support for Arabic Localization

This implementation provides comprehensive RTL support for Arabic and other RTL languages in your Shopify theme.

## Files Created

### 1. `assets/rtl.css`

- Contains all RTL-specific CSS styles
- Handles text direction, alignment, and layout adjustments
- Includes overrides for elements that should remain LTR (like prices, SKUs)

### 2. `assets/rtl-support.js`

- JavaScript for dynamic RTL language detection
- Automatically applies RTL styles when RTL languages are detected
- Listens for language changes and updates styles accordingly
- Provides utility functions for RTL detection

### 3. `snippets/rtl-detection.liquid`

- Liquid snippet for server-side RTL detection
- Sets appropriate HTML attributes (`dir`, `lang`)
- Adds CSS classes for styling
- Provides immediate RTL styles for faster rendering

### 4. `layout/theme.liquid` (Updated)

- Includes RTL detection snippet
- Loads RTL CSS and JavaScript files
- Ensures RTL support is available on all pages

## Supported RTL Languages

The implementation supports the following RTL languages:

- Arabic (ar)
- Hebrew (he)
- Persian/Farsi (fa)
- Urdu (ur)
- Kurdish (ku)
- Dhivehi (dv)
- Pashto (ps)
- Sindhi (sd)
- Yiddish (yi)
- And many more...

## How It Works

1. **Server-side Detection**: The Liquid snippet detects RTL languages based on `request.locale.iso_code`
2. **Client-side Enhancement**: JavaScript provides additional detection and dynamic updates
3. **CSS Application**: RTL-specific styles are applied automatically
4. **Element Overrides**: Certain elements (prices, SKUs) remain LTR for better readability

## Testing RTL Functionality

To test RTL functionality:

1. **Enable Arabic Language**: Go to Shopify Admin > Settings > Languages
2. **Add Arabic**: Add Arabic as a language option
3. **Switch Language**: Use the language selector to switch to Arabic
4. **Verify RTL**: Check that:
   - Text is right-aligned
   - Layout flows right-to-left
   - Icons are mirrored appropriately
   - Prices and SKUs remain left-aligned

## Browser Console Testing

You can test RTL functionality in the browser console:

```javascript
// Check if current language is RTL
console.log(window.isRTLLanguage());

// Get current language
console.log(window.getCurrentLanguage());

// Check RTL configuration
console.log(window.RTL_CONFIG);
```

## Customization

### Adding More RTL Languages

Edit the `rtl_languages` array in `snippets/rtl-detection.liquid`:

```liquid
{%- assign rtl_languages = 'ar,he,fa,ur,ku,dv,ps,sd,yi,arc,bcc,bqi,ckb,glk,lrc,mzn,pnb,prs,luz,ks' | split: ',' -%}
```

### Custom RTL Styles

Add your custom RTL styles to `assets/rtl.css`:

```css
[dir="rtl"] .your-custom-class {
  text-align: right;
  direction: rtl;
}
```

### Override Specific Elements

To keep certain elements LTR in RTL mode:

```css
[dir="rtl"] .keep-ltr {
  direction: ltr;
  text-align: left;
}
```

## Troubleshooting

### RTL Not Working

1. Check if Arabic is enabled in Shopify Admin
2. Verify language files are uploaded
3. Check browser console for JavaScript errors
4. Ensure RTL files are properly included in theme.liquid

### Mixed Direction Issues

- Prices, SKUs, and currency should remain LTR
- Use the provided CSS overrides for specific elements
- Test with different content lengths

### Performance

- RTL detection happens both server-side and client-side
- CSS is loaded conditionally
- JavaScript is deferred for better performance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Internet Explorer 11+ (with some limitations)

## Notes

- RTL support is automatically enabled when Arabic language is selected
- The implementation is backward compatible with LTR languages
- All existing functionality remains unchanged for LTR languages
- RTL styles are applied progressively for better performance
