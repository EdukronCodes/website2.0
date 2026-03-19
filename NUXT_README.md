# Edukron Learning Platform - Nuxt.js Version

## Overview

Edukron is a modern, high-performance learning platform built with **Nuxt.js 4 (Vue 3)** featuring:

- **12 Learning Categories** with 1000+ expertly curated topics
- **Glassmorphism UI Design** - Modern, attractive glass-like effects
- **Animated Sidebar** - Smooth transitions and interactions
- **Advanced Search** - Instantly find topics across all categories
- **Markdown Content** - All learning materials in clean markdown format
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Fast Performance** - Built with Vite for lightning-fast development and production builds

## Technology Stack

- **Framework**: Nuxt.js 4 (Vue.js 3)
- **Styling**: Tailwind CSS 3 with custom glassmorphism effects
- **Content Rendering**: Marked.js for markdown parsing
- **Code Highlighting**: Highlight.js for syntax highlighting
- **State Management**: Vue Reactivity (Composition API)
- **Build Tool**: Vite
- **Languages**: TypeScript

## Project Structure

```
website2.0/
├── app.vue                    # Root Vue component
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
│
├── assets/
│   └── css/
│       ├── globals.css        # Global styles and animations
│       └── tailwind.css       # Tailwind imports
│
├── components/
│   ├── AppNavbar.vue          # Header with search and theme toggle
│   └── AppSidebar.vue         # Sidebar with topic list
│
├── composables/
│   └── useContent.ts          # Content management composable
│
├── layouts/
│   └── default.vue            # Default layout with navbar and footer
│
├── pages/
│   ├── index.vue              # Home page with category cards
│   ├── about.vue              # About page
│   └── category/
│       ├── [categoryId].vue          # Category overview page
│       └── [categoryId]/
│           └── [topicIndex].vue      # Topic content page
│
├── public/
│   ├── markdown.js            # Topic configuration (1000+ topics)
│   └── docs/                  # Markdown content files (1010+ files)
│       ├── data-science/
│       ├── ai/
│       ├── ml/
│       ├── genai/
│       ├── agentic/
│       ├── programming/
│       ├── big-data/
│       ├── azure-data/
│       ├── azure-ai/
│       ├── devops/
│       ├── projects/
│       └── learning-paths/
│
└── package.json               # Dependencies
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Install Dependencies

```bash
cd /workspaces/website2.0
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Generate Static Site

```bash
npm run generate
```

## Key Features

### 🎨 Glassmorphism Design

The navbar and sidebar use a modern glassmorphism effect with:
- Backdrop blur effect
- Semi-transparent backgrounds
- Subtle borders
- Smooth hover animations

### 🔍 Advanced Search

Click the search icon in the navbar to:
- Search across all 1000+ topics
- See results with category information
- Quickly navigate to matching topics
- Keyboard navigation support (Arrow keys, Enter, Escape)

### 📱 Responsive Design

The application automatically adapts to:
- **Desktop**: Full sidebar visible, optimized navigation
- **Tablet**: Compact sidebar, touch-friendly controls
- **Mobile**: Hidden sidebar with toggle button, optimized for small screens

### ⚡ Performance

- **Fast Load Times**: Nuxt.js with Vite for optimal performance
- **Lazy Loading**: Content loads on demand
- **Smooth Animations**: GPU-accelerated CSS transitions
- **Optimized Images**: Emoji and SVG-based icons (no heavy images)

### 🌙 Dark Theme

- Built-in dark theme (default)
- Toggle button in navbar
- Preference saved to localStorage
- Accessible color contrast

## Component Details

### AppNavbar.vue

The top navigation bar features:
- **Logo & Branding**: Clickable logo to return home
- **Category Navigation**: Quick access to categories
- **Search Modal**: Full-text search across all topics
- **Theme Toggle**: Light/Dark mode switcher
- **Mobile Menu**: Responsive hamburger menu
- **Badges**: Topic count and category information

```vue
<AppNavbar />
```

### AppSidebar.vue

The left sidebar displays:
- **Category Header**: Current category name and emoji
- **Topic Search**: Filter topics by name
- **Topic List**: Scrollable list with smooth animations
- **Active Indicator**: Highlighting for current topic
- **Topic Count**: Display total and filtered topics
- **Mobile Toggle**: Close button for mobile view

```vue
<AppSidebar
  :category-id="categoryId"
  :current-topic-id="topicId"
/>
```

### useContent Composable

Manages all content operations:

```typescript
const {
  topicConfig,      // Full topic configuration
  loading,          // Loading state
  error,            // Error messages
  loadContent,      // Load initial content
  categories,       // Array of categories
  getTopics,        // Get topics for a category
  getMarkdownContent, // Load markdown for a topic
  searchTopics      // Search functionality
} = useContent()
```

## Page Routes

### Home Page (`/`)

Displays:
- Hero section with call-to-action
- Statistics cards
- All 12 categories with topic counts
- Features section
- Smooth animations and transitions

### Category Overview (`/category/[categoryId]`)

Shows:
- Category header with emoji
- Top 6 topics preview
- Option to view all topics
- Link to first topic

### Topic Content (`/category/[categoryId]/[topicIndex]`)

Features:
- Full markdown content rendering
- Navigation controls (Previous/Next)
- Progress slider
- Breadcrumb navigation
- Beautiful syntax highlighting
- Responsive typography

### About Page (`/about`)

Contains:
- Platform mission and overview
- List of all 12 categories
- Getting started instructions
- Feature highlights

## Content Integration

### Markdown.js Structure

The `public/markdown.js` file contains the topic configuration:

```javascript
const topicConfig = {
  'data-science': {
    name: 'Data Science',
    emoji: '📊',
    topics: [
      'Data Science Lifecycle',
      'Descriptive Statistics',
      // ... 80+ more topics
    ]
  },
  'ai': { /* ... */ },
  // ... 10 more categories
}
```

### Markdown Files

Each topic is a markdown file in `public/docs/[categoryId]/[index]-[name].md`:

```
public/docs/
├── data-science/
│   ├── 001-data-science-lifecycle.md
│   ├── 002-descriptive-statistics.md
│   └── ...
├── ai/
│   ├── 001-ai-fundamentals.md
│   └── ...
└── ... (10 more categories)
```

## Styling & Customization

### Tailwind CSS Configuration

Located in `tailwind.config.ts`:
- Custom color variables for branding
- Extended animations
- Responsive breakpoints
- Dark mode support

### CSS Classes

Custom utility classes in `assets/css/globals.css`:
- `.glass` - Glassmorphism effect
- `.glass-dark` - Dark variant
- `.float` - Floating animation
- `.pulse-glow` - Pulsing glow effect

### Customization Examples

Change primary color:
```typescript
// tailwind.config.ts
colors: {
  primary: '#YOUR_COLOR',
}
```

Modify glassmorphism effect:
```css
/* assets/css/globals.css */
.glass {
  background: rgba(255, 255, 255, 0.15); /* Adjust opacity */
  backdrop-filter: blur(15px); /* Adjust blur amount */
}
```

## Development Tips

### Hot Module Replacement (HMR)

The development server supports HMR - changes to components and content automatically update in the browser.

### Debugging

- DevTools available with `Shift + Alt + D` in browser
- Vue DevTools extension recommended
- Network tab in browser dev tools for API calls

### Performance Monitoring

- Use Lighthouse in Chrome DevTools
- Check Vite build times in terminal
- Monitor bundle size with `npm run build`

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run generate
# Upload the `.output/public` directory
```

### Deploy to GitHub Pages

```bash
nuxi generate
# Deploy the `.output/public` folder to your gh-pages branch
```

### Environment Variables

Create a `.env` file if needed:
```
NUXT_PUBLIC_API_URL=your_api_url
NUXT_API_TOKEN=your_token
```

## Troubleshooting

### Port 3000 in Use

```bash
npm run dev -- -p 3001
# or kill the process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Content Not Loading

1. Ensure `public/markdown.js` exists
2. Check that `public/docs/` directory has markdown files
3. Verify file paths in `useContent.ts`
4. Check browser console for errors

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .nuxt node_modules
npm install
npm run build
```

### Styling Issues

- Clear Tailwind cache: `rm -rf .nuxt`
- Rebuild: `npm run dev`
- Check that CSS files are imported in `nuxt.config.ts`

## Performance Optimization

### Already Implemented

- ✅ Code splitting per route
- ✅ Lazy loading for content
- ✅ Image optimization (using emojis)
- ✅ CSS minification in production
- ✅ Tree shaking for unused code

### Future Optimizations

- Add static generation for improved performance
- Implement service worker for offline support
- Add progressive image loading
- Implement virtual scrolling for large topic lists

## Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE 11 (not supported)

## Contributing

To add new topics:

1. Add topic name to `public/markdown.js` in the appropriate category
2. Create markdown file in `public/docs/[categoryId]/[index]-[name].md`
3. Follow markdown formatting guidelines
4. Test the content rendering locally

## License

This project is part of the Edukron Learning Platform.

## Support

For questions or issues:
1. Check the documentation in `docs/` directory
2. Review component code in `components/`
3. Check composable logic in `composables/`

---

**Happy Learning! 🎓**

Built with ❤️ using Nuxt.js, Vue.js, and Tailwind CSS
