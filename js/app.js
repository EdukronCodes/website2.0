// Main app.js - Enhanced version for comprehensive learning platform

// Markdown rendering setup
marked.setOptions({
  breaks: true,
  gfm: true
});

// Load theme preference on page load
document.addEventListener('DOMContentLoaded', function() {
  loadThemePreference();
  setupMenuListeners();
  setupSearchBox();
  setupMobileMenu();
});

// Theme Management
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) themeToggle.textContent = '☀️';
  }
}

function setupMenuListeners() {
  // Top navigation menu items
  const menuItems = document.querySelectorAll('.navbar-menu li');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      
      // Remove active class from all items
      menuItems.forEach(li => li.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');

      // Close sidebar on mobile
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    });
  });

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      this.textContent = isDark ? '☀️' : '🌙';
    });
  }
}

function setupSearchBox() {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = document.querySelector('.search-results');
    
    if (!query) {
      results.innerHTML = '';
      return;
    }

    // Placeholder: In production, this would search actual topics
    const mockResults = [
      { title: 'Data Science Basics', category: 'Data Science' },
      { title: 'Machine Learning Models', category: 'Machine Learning' },
      { title: 'Python for AI', category: 'Programming' }
    ];

    const filtered = mockResults.filter(r => 
      r.title.toLowerCase().includes(query) || 
      r.category.toLowerCase().includes(query)
    );

    results.innerHTML = filtered.map(result => `
      <a href="#" class="search-result-item">
        <strong>${result.title}</strong><br>
        <small>${result.category}</small>
      </a>
    `).join('');
  });

  // Close search when clicking outside
  document.addEventListener('click', function(e) {
    const searchContainer = document.querySelector('.search-container');
    const searchToggle = document.querySelector('.search-toggle');
    
    if (searchContainer && !searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
      searchContainer.classList.remove('active');
    }
  });
}

function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const searchToggle = document.querySelector('.search-toggle');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('hidden');
      }
    });
  }

  if (searchToggle) {
    searchToggle.addEventListener('click', function() {
      const searchContainer = document.querySelector('.search-container');
      if (searchContainer) {
        searchContainer.classList.toggle('active');
        const input = searchContainer.querySelector('.search-input');
        if (input && searchContainer.classList.contains('active')) {
          input.focus();
        }
      }
    });
  }
}

// Markdown loading and rendering
function loadMarkdownFile(path) {
  return fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${path}`);
      }
      return response.text();
    })
    .catch(error => {
      console.error('Error loading markdown:', error);
      return `# Error\n\nCould not load content from ${path}`;
    });
}

function renderMarkdown(markdown) {
  const contentDiv = document.getElementById('content');
  if (!contentDiv) return;

  // Parse and render markdown
  const html = marked.parse(markdown);
  contentDiv.innerHTML = html;

  // Apply syntax highlighting
  contentDiv.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block);
    
    // Add copy button
    const pre = block.parentElement;
    const header = document.createElement('div');
    header.className = 'code-header';
    header.innerHTML = `
      <span>${block.className.replace('language-', '')}</span>
      <button class="copy-button">Copy</button>
    `;
    
    header.querySelector('.copy-button').addEventListener('click', function() {
      const code = block.textContent;
      navigator.clipboard.writeText(code).then(() => {
        this.textContent = 'Copied!';
        setTimeout(() => this.textContent = 'Copy', 2000);
      });
    });
    
    pre.insertBefore(header, block);
  });

  // Generate table of contents
  generateTableOfContents();

  // Update reading time
  updateReadingTime(markdown);
}

function generateTableOfContents() {
  const contentDiv = document.getElementById('content');
  if (!contentDiv) return;

  const headings = contentDiv.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  // Add IDs to headings if they don't have them
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
  });

  const toc = document.createElement('div');
  toc.className = 'toc';
  toc.innerHTML = '<div class="toc-title">Table of Contents</div><ul class="toc-list">';

  headings.forEach(heading => {
    const level = heading.tagName === 'H2' ? 0 : 1;
    const indent = level * 20;
    toc.innerHTML += `
      <li style="margin-left: ${indent}px">
        <a href="#${heading.id}">${heading.textContent}</a>
      </li>
    `;
  });

  toc.innerHTML += '</ul>';
  contentDiv.insertBefore(toc, contentDiv.firstChild);
}

function updateReadingTime(markdown) {
  const readingTimeDiv = document.querySelector('.reading-time');
  if (!readingTimeDiv) return;

  // Estimate reading time: 200 words per minute
  const words = markdown.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  readingTimeDiv.textContent = `⏱️ Reading time: ${minutes} minute${minutes > 1 ? 's' : ''}`;
}

// Sidebar management
function updateSidebarMenu(items) {
  const sidebarMenu = document.querySelector('.sidebar-menu');
  if (!sidebarMenu) return;

  sidebarMenu.innerHTML = items.map(item => `
    <li>
      <a href="#" class="sidebar-link" data-id="${item.id}">
        ${item.title}
      </a>
    </li>
  `).join('');

  // Add event listeners to sidebar items
  sidebarMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active state
      sidebarMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
      
      // Load content (would be implemented based on actual file structure)
      const id = this.dataset.id;
      console.log('Loading:', id);
    });
  });
}

// Breadcrumb management
function updateBreadcrumb(items) {
  const breadcrumb = document.querySelector('.breadcrumb');
  if (!breadcrumb) return;

  breadcrumb.innerHTML = items.map((item, index) => {
    if (index === items.length - 1) {
      return `<span>${item}</span>`;
    }
    return `<a href="#">${item}</a><span class="breadcrumb-separator"> / </span>`;
  }).join('');
}

// Navigation functions
function previousPage() {
  console.log('Navigate to previous page');
}

function nextPage() {
  console.log('Navigate to next page');
}

// Export functions for use in navigation
window.loadMarkdownFile = loadMarkdownFile;
window.renderMarkdown = renderMarkdown;
window.updateSidebarMenu = updateSidebarMenu;
window.updateBreadcrumb = updateBreadcrumb;
window.previousPage = previousPage;
window.nextPage = nextPage;
