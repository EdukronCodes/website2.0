# GitHub Pages Deployment Guide

## What is GitHub Pages?

GitHub Pages is a free hosting service that deploys websites directly from your GitHub repository.

## Prerequisites

- GitHub account
- Git installed on your computer
- Repository created

## Step 1: Prepare Your Repository

Ensure your repository has:
- `index.html` in the root directory
- All CSS, JavaScript, and other assets
- `README.md` for documentation

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **main** branch
5. Keep folder as **/root**
6. Click **Save**

## Step 3: Access Your Site

Your site will be available at:
```
https://username.github.io/repository-name
```

For example:
```
https://EdukronCodes.github.io/website2.0
```

## Custom Domain (Optional)

To use your own domain:

1. In GitHub Pages settings, add domain to "Custom domain"
2. Update your domain's DNS records (usually CNAME)
3. Wait for DNS propagation (24-48 hours)

## Step 4: Update Links

If deploying to a subdirectory (`/repository-name`), update links:

```html
<!-- Instead of: -->
<link rel="stylesheet" href="/css/style.css">

<!-- Use: -->
<link rel="stylesheet" href="./css/style.css">
```

## Commit and Push

```bash
# Initialize git (if not already done)
git init

# Add files
git add .

# Commit
git commit -m "Initial site deployment"

# Push to GitHub
git push origin main
```

## Troubleshooting

### Site not showing?
- Check Settings > Pages
- Ensure index.html is in root
- Wait 1-2 minutes for deployment

### 404 errors on pages?
- Use relative paths: `./docs/page.html`
- Avoid absolute paths: `/docs/page.html`

### CSS/JS not loading?
- Check browser console for errors
- Verify file paths are correct
- Clear browser cache (Ctrl+Shift+Delete)

## Best Practices

1. Use relative paths for all assets
2. Test locally before pushing
3. Keep repository organized
4. Add .gitignore for unnecessary files
5. Include comprehensive README

## Local Testing

Before deploying, test locally:

```bash
# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Visit http://localhost:8000
```

## Continuous Deployment

GitHub Pages auto-deploys on push to main branch. No additional setup needed!

## Next Steps

Your site is now live! Share the link and continue building amazing content.
