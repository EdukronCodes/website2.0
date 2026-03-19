# Quick Start Guide - Edukron Nuxt.js Version

## 🚀 Getting Started

The new Edukron platform is now running with Nuxt.js 4, Vue.js 3, and Tailwind CSS!

### What's Running Right Now

✅ **Development Server**: http://localhost:3000
- Hot Module Replacement (HMR) enabled
- Auto-reload on file changes
- DevTools available with Shift + Alt + D

### Key Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Stop the server
# Press Ctrl + C in terminal, or:
# pkill -f "nuxt dev"
```

## 📚 Architecture Overview

### Project Structure

```
Nuxt App (Frontend)
├── Pages (Routing)
│   ├── / (Home)
│   ├── /about
│   ├── /category/[categoryId]
│   └── /category/[categoryId]/[topicIndex]
│
├── Components
│   ├── AppNavbar (Search, Theme, Navigation)
│   └── AppSidebar (Topics, Category, Search)
│
└── Composables
    └── useContent (Topic Management)

↓ Uses ↓

Content Layer
├── markdown.js (1000+ topic configuration)
└── docs/ (1010+ markdown files)
```

### Page Flow

```
Home (/) 
  ↓ (Select Category)
Category Overview (/category/[id])
  ↓ (Select Topic) 
Topic Content (/category/[id]/[index])
  ↓ (Navigation)
Previous/Next Topic or Back to Home
```

## 🎨 Design Features

### Glassmorphism UI
- **Navbar**: Blurred background with semi-transparent glass effect
- **Sidebar**: Animated panel with smooth transitions
- **Cards**: Modern card design with hover effects
- **Overall Theme**: Dark mode with blue/purple accents

### Interactive Elements
- 🔍 **Search**: Real-time search across all topics
- 🎯 **Navigation**: Smooth category and topic transitions
- 📱 **Responsive**: Adapts to all screen sizes
- 🌙 **Theme Toggle**: Light/Dark mode switcher

## 📂 Content Structure

### Adding New Content

1. **Update Topic Configuration**
   ```javascript
   // public/markdown.js
   'category-id': {
     name: 'Category Name',
     emoji: '📚',
     topics: ['Topic 1', 'Topic 2', ...]
   }
   ```

2. **Create Markdown File**
   ```
   public/docs/category-id/001-topic-name.md
   ```

3. **Refresh Browser** (HMR handles it automatically)

### Current Structure

- **12 Categories** with 80-100 topics each
- **1010+ Markdown Files** in `public/docs/`
- **Configuration**: `public/markdown.js`

## 🔧 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Modify Glassmorphism Effect

Edit `assets/css/globals.css`:
```css
.glass {
  backdrop-filter: blur(10px); /* Adjust blur */
  background: rgba(255, 255, 255, 0.1); /* Adjust opacity */
}
```

### Add New Routes

Create file in `pages/` directory:
- `pages/new-page.vue` → `/new-page`
- `pages/[param].vue` → `/[dynamic-param]`
- `pages/folder/page.vue` → `/folder/page`

## ⚡ Performance Tips

- Content loads on-demand (lazy loading)
- Smooth CSS animations (GPU accelerated)
- Optimized routing with async data
- Minimal bundle size with tree-shaking

## 🐛 Troubleshooting

### Sidebar Not Showing Topics?
```bash
# Restart the dev server
npm run dev
```

### Search Not Working?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check DevTools console for errors
3. Verify markdown.js is in `public/` folder

### Styling Issues?
```bash
rm -rf .nuxt
npm run dev
# Let Tailwind rebuild the CSS
```

## 📝 Useful Files

| File | Purpose |
|------|---------|
| `pages/index.vue` | Home page with categories |
| `components/AppNavbar.vue` | Top navigation & search |
| `components/AppSidebar.vue` | Left sidebar with topics |
| `composables/useContent.ts` | Content management logic |
| `layouts/default.vue` | Main layout wrapper |
| `tailwind.config.ts` | Theme configuration |
| `public/markdown.js` | Topic configuration |
| `public/docs/` | Markdown content files |

## 🌐 Deployment Preview

When you're ready to deploy:

```bash
# Generate static files
npm run generate

# Output will be in .output/public/
# This folder contains everything needed for static hosting
```

Can deploy to:
- Vercel (easiest)
- Netlify
- GitHub Pages
- Any static hosting

## 📞 Need Help?

- Read `NUXT_README.md` for detailed documentation
- Check `docs/` folder for learning materials
- Inspect components for code examples

---

**Development Server**: http://localhost:3000  
**Built with**: Nuxt.js 4 + Vue.js 3 + Tailwind CSS

Press Ctrl+C to stop the server when ready.
