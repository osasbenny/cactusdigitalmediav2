# cPanel Deployment Instructions

## Quick Start

Your production build is ready for cPanel deployment! Follow these steps:

### Step 1: Download the Build

Download the file: `cactusdigitalmedia-cpanel-build.zip` (3.9 MB)

### Step 2: Upload to cPanel

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Upload `cactusdigitalmedia-cpanel-build.zip`

### Step 3: Extract Files

1. In cPanel File Manager, right-click on `cactusdigitalmedia-cpanel-build.zip`
2. Select **Extract**
3. Extract to the current directory (`public_html`)
4. Delete the zip file after extraction

### Step 4: Verify Deployment

Visit your domain in a browser. You should see the Cactus Digital Media website live!

## Important Notes

### .htaccess Configuration (Required for React Router)

Since this is a Single Page Application (SPA) with client-side routing, you need to add a `.htaccess` file to handle routing properly.

Create a file named `.htaccess` in your `public_html` directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that all routes (like `/about`, `/services`, `/portfolio`, etc.) work correctly.

### File Structure After Extraction

```
public_html/
├── index.html          # Main HTML file
├── .htaccess          # Apache configuration (you need to create this)
└── assets/            # All JavaScript, CSS, and other assets
    ├── index-*.js
    ├── index-*.css
    └── [other bundled files]
```

### Custom Domain Setup

If you're using a subdomain or subdirectory:

1. **Subdomain** (e.g., `demo.yourdomain.com`):
   - Extract files to the subdomain's root directory
   - Update `.htaccess` RewriteBase if needed

2. **Subdirectory** (e.g., `yourdomain.com/demo`):
   - Extract to `public_html/demo/`
   - Update `.htaccess` RewriteBase to `/demo/`

### Performance Optimization

For better performance, consider:

1. **Enable Gzip Compression** - Add to `.htaccess`:
   ```apache
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>
   ```

2. **Browser Caching** - Add to `.htaccess`:
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

### SSL/HTTPS

Make sure your domain has an SSL certificate installed (most cPanel hosting provides free Let's Encrypt SSL). The website will work better with HTTPS enabled.

### Troubleshooting

**Issue: Blank page or 404 errors on routes**
- Solution: Make sure `.htaccess` file is created and mod_rewrite is enabled on your server

**Issue: Assets not loading**
- Solution: Check file permissions (should be 644 for files, 755 for directories)

**Issue: WhatsApp button not working**
- Solution: Update the phone number in the code before building (currently set to +234 123 456 7890)

## Color Scheme

The website now uses the updated color palette:
- **Deep Navy**: #0d1a2b (headers, footer, primary elements)
- **Warm Gold**: #d2a84a (CTA buttons, accents)
- **Light Warm Gray**: #f9f9f7 (page backgrounds)
- **Charcoal**: #4a4a4a (body text)

## Support

For any deployment issues, contact your hosting provider's support team or refer to cPanel documentation.

---

**Build Date**: November 7, 2024  
**Build Size**: 15 MB (uncompressed), 3.9 MB (compressed)  
**Framework**: React 19 + Vite  
**Styling**: TailwindCSS 4
