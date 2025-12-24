# vitrin-base-theme

A Zid theme created with Vitrin CLI based on the Soft Theme template.

## Development

### Building the theme

```bash
vitrin build
```

### Preview on dev store

```bash
vitrin preview <store-id>
```

### Push to Zid

```bash
vitrin push
```

## Structure

- `assets/` - CSS, JavaScript, and image files
- `components/` - Reusable component templates
- `sections/` - Dynamic sections for the theme editor
- `templates/` - Template files for different page types
- `layout.jinja` - Main layout file
- `header.jinja` - Header template
- `footer.jinja` - Footer template
- `locals/` - Localization files (ar.json, en.json)
- `query.json` - Query configuration for product data

## Features

- RTL/LTR support based on language
- Responsive design
- Product filtering and search
- Shopping cart functionality
- User account pages
- Wishlist support
- Multi-language support (Arabic & English)

## Customization

### Theme Colors

The theme uses CSS variables for easy customization. Edit the `:root` section in `assets/main.css` to change colors:

```css
:root {
  --primary-color: {{store.settings.branding.colors.primary}};
  --text-color-primary-bg: {{store.settings.branding.colors.secondary}};
}
```

### Fonts

The theme supports custom fonts through the store settings. The default font is Changa.

## Support

For support, please contact the theme developer or visit the Vitrin CLI documentation.
