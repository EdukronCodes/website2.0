# EduDocs - Learn Web & Programming

A comprehensive, interactive learning platform for web developers and programmers. Learn HTML, CSS, JavaScript, Python, SQL and more with interactive tutorials, code examples, and a clean, minimal design.

## Features

✨ **Rich Content**
- Structured tutorials for 5+ programming languages
- Real-world code examples with syntax highlighting
- Progressive learning paths

🎨 **Beautiful Design**
- Clean, minimal W3Schools-style layout
- Dark/Light mode toggle
- Mobile responsive design
- Fixed sidebar navigation

⚡ **Interactive Learning**
- Copy-to-clipboard functionality for code
- Client-side search across all tutorials
- Table of contents for quick navigation
- Reading time estimates
- Previous/Next page navigation

📱 **Fully Mobile-Responsive**
- Collapsible sidebar on mobile
- Touch-friendly interface
- Optimized for all screen sizes

🔍 **Search Functionality**
- Real-time search across all courses
- Instant results as you type
- Search both titles and content

## Project Structure

```
website2.0/
├── index.html                 # Main page
├── package.json               # Project metadata
├── README.md                  # This file
├── .gitignore                 # Git ignore rules
├── .nojekyll                 # GitHub Pages config
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── app.js                # Navigation and features
└── docs/                      # Tutorial content
    ├── python/
    │   ├── intro.md
    │   ├── syntax.md
    │   ├── variables.md
    │   ├── data-types.md
    │   ├── functions.md
    │   └── loops.md
    ├── html/
    │   ├── basics.md
    │   ├── elements.md
    │   ├── attributes.md
    │   └── forms.md
    ├── css/
    │   ├── intro.md
    │   └── selectors.md
    ├── javascript/
    │   ├── intro.md
    │   └── functions.md
    └── sql/
        └── intro.md
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **Vanilla JavaScript** - No frameworks, lightweight
- **Marked.js** - Markdown rendering
- **Highlight.js** - Code syntax highlighting
- **GitHub Pages** - Free static hosting

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/EdukronCodes/website2.0.git
cd website2.0
```

2. Start a local server:
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

3. Open in browser:
```
http://localhost:8000
```

### GitHub Pages Deployment

1. Enable GitHub Pages in repository settings
2. Select `main` branch as source
3. Site will be available at `https://username.github.io/website2.0`

## How It Works

### Navigation System
- **Top Navigation**: Click category to load all tutorials for that subject
- **Left Sidebar**: Dynamically updates based on selected category
- **Breadcrumb**: Shows current location in site structure
- **Search**: Real-time search across all tutorials

### Content System
1. User clicks category in top navigation
2. JavaScript fetches Markdown file from `/docs` folder
3. Markdown is converted to HTML using Marked.js
4. Code highlighted using Highlight.js
5. Links, buttons, and features are automatically added

### Features
- **Dark Mode**: Toggle button saves preference to localStorage
- **Search**: Searches through navigation menu items and titles
- **Copy Code**: Click button above code blocks to copy
- **Reading Time**: Calculated from word count
- **Table of Contents**: Auto-generated from headings

## Adding New Content

### Adding a Tutorial

1. Create markdown file in appropriate category folder:
```bash
docs/python/my-topic.md
```

2. Add to navigation config in `js/app.js`:
```javascript
const navConfig = {
    python: {
        items: [
            { title: 'My Topic', id: 'my-topic' },  // Add this line
            // ... other items
        ]
    }
}
```

3. Write markdown content with code examples:
```markdown
# Topic Title

## Section

```python
# Code example
print("Hello, World!")
```
```

4. Commit and push:
```bash
git add .
git commit -m "Add new tutorial: My Topic"
git push
```

### Adding a New Category

1. Create new folder for category:
```bash
mkdir -p docs/newcategory
```

2. Create first tutorial:
```bash
echo "# New Category" > docs/newcategory/intro.md
```

3. Add to navigation config in `js/app.js`
4. Add to top navigation in `index.html`
5. Update navigation menu in `html`

## Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --color-primary: #4CAF50;
  --color-primary-dark: #388E3C;
  /* ... more colors */
}
```

### Change Site Title
Update in `index.html`:
```html
<div class="navbar-brand">📚 EduDocs</div>
```

### Add New Categories
1. Update `navConfig` in `js/app.js`
2. Add navigation items in top navbar
3. Create markdown files in new folder

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- **Lightweight**: No frameworks, minimal dependencies
- **Fast**: Static HTML served directly
- **Cached**: Content loaded client-side
- **Search**: Client-side search with Fuse.js

## Known Features

✅ Markdown rendering
✅ Code syntax highlighting
✅ Dark mode toggle
✅ Mobile responsive
✅ Search functionality
✅ Copy code buttons
✅ Reading time
✅ Breadcrumbs
✅ Table of contents
✅ Edit on GitHub links
✅ Previous/Next navigation

## Future Enhancements

- [ ] Interactive code playground
- [ ] Quiz/assessment system
- [ ] User progress tracking
- [ ] Comment system
- [ ] Social sharing
- [ ] Video tutorials
- [ ] Downloadable PDFs
- [ ] Offline support

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**EdukronCodes**
- GitHub: [@EdukronCodes](https://github.com/EdukronCodes)

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the author.

## Additional Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Highlight.js Documentation](https://highlightjs.org/)
- [Marked.js Documentation](https://marked.js.org/)

---

**Built with ❤️ for learners everywhere**
