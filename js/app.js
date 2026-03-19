// Navigation configuration
const navConfig = {
  python: {
    title: 'Python',
    items: [
      { title: 'Introduction', id: 'intro' },
      { title: 'Syntax', id: 'syntax' },
      { title: 'Variables', id: 'variables' },
      { title: 'Data Types', id: 'data-types' },
      { title: 'Functions', id: 'functions' },
      { title: 'Loops', id: 'loops' },
      { title: 'OOP', id: 'oop' }
    ]
  },
  html: {
    title: 'HTML',
    items: [
      { title: 'Basics', id: 'basics' },
      { title: 'Elements', id: 'elements' },
      { title: 'Attributes', id: 'attributes' },
      { title: 'Headings', id: 'headings' },
      { title: 'Paragraphs', id: 'paragraphs' },
      { title: 'Forms', id: 'forms' },
      { title: 'Semantic HTML', id: 'semantic' }
    ]
  },
  css: {
    title: 'CSS',
    items: [
      { title: 'Introduction', id: 'intro' },
      { title: 'Syntax', id: 'syntax' },
      { title: 'Selectors', id: 'selectors' },
      { title: 'Box Model', id: 'box-model' },
      { title: 'Flexbox', id: 'flexbox' },
      { title: 'Grid', id: 'grid' },
      { title: 'Animations', id: 'animations' }
    ]
  },
  javascript: {
    title: 'JavaScript',
    items: [
      { title: 'Introduction', id: 'intro' },
      { title: 'Syntax', id: 'syntax' },
      { title: 'Variables', id: 'variables' },
      { title: 'Functions', id: 'functions' },
      { title: 'DOM', id: 'dom' },
      { title: 'Events', id: 'events' },
      { title: 'Promises & Async', id: 'async' }
    ]
  },
  sql: {
    title: 'SQL',
    items: [
      { title: 'Introduction', id: 'intro' },
      { title: 'SELECT', id: 'select' },
      { title: 'WHERE', id: 'where' },
      { title: 'JOIN', id: 'join' },
      { title: 'GROUP BY', id: 'group-by' },
      { title: 'INSERT & UPDATE', id: 'insert-update' },
      { title: 'Advanced', id: 'advanced' }
    ]
  }
};

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initTheme();
  initSearch();
});

// Initialize navigation system
function initNavigation() {
  const navItems = document.querySelectorAll('.navbar-menu li');
  const sidebarTitle = document.querySelector('.sidebar-title');
  const sidebarMenu = document.querySelector('.sidebar-menu');

  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      
      // Remove active from all items
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      // Update sidebar
      updateSidebar(category);

      // Save to localStorage
      localStorage.setItem('selectedCategory', category);
    });
  });

  // Load saved category or default to python
  const savedCategory = localStorage.getItem('selectedCategory') || 'python';
  updateSidebar(savedCategory);
  
  const activeNav = document.querySelector(`[data-category="${savedCategory}"]`);
  if (activeNav) activeNav.classList.add('active');
}

// Update sidebar based on selected category
function updateSidebar(category) {
  const config = navConfig[category];
  if (!config) return;

  const sidebarTitle = document.querySelector('.sidebar-title');
  const sidebarMenu = document.querySelector('.sidebar-menu');

  sidebarTitle.textContent = config.title;
  sidebarMenu.innerHTML = '';

  config.items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${category}/${item.id}`;
    a.textContent = item.title;
    a.onclick = function(e) {
      e.preventDefault();
      loadPage(category, item.id);
    };
    li.appendChild(a);
    sidebarMenu.appendChild(li);
  });

  // Close sidebar on mobile
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.add('hidden');
  }
}

// Load page content from Markdown file
function loadPage(category, pageId) {
  const path = `/docs/${category}/${pageId}.md`;
  
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error('Page not found');
      }
      return response.text();
    })
    .then(markdown => {
      renderPage(markdown, category, pageId);
      updateBreadcrumb(category, pageId);
      updateActiveLink(pageId);
      window.scrollTo(0, 0);
    })
    .catch(error => {
      document.querySelector('.content').innerHTML = `<p>Error loading page: ${error.message}</p>`;
    });
}

// Render Markdown to HTML
function renderPage(markdown, category, pageId) {
  // Parse markdown with marked (inline)
  const html = marked(markdown);
  
  const contentDiv = document.querySelector('.content');
  contentDiv.innerHTML = html;

  // Highlight code blocks
  document.querySelectorAll('pre code').forEach(block => {
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
      const text = block.textContent;
      navigator.clipboard.writeText(text);
      this.textContent = 'Copied!';
      setTimeout(() => { this.textContent = 'Copy'; }, 2000);
    });
    
    pre.insertBefore(header, block);
  });

  // Generate table of contents
  generateTableOfContents();

  // Calculate reading time
  updateReadingTime(markdown);

  // Update edit link
  updateEditLink(category, pageId);
}

// Update breadcrumb navigation
function updateBreadcrumb(category, pageId) {
  const breadcrumb = document.querySelector('.breadcrumb');
  const config = navConfig[category];
  const item = config.items.find(i => i.id === pageId);
  
  breadcrumb.innerHTML = `
    <a href="#home">Home</a>
    <span class="breadcrumb-separator">/</span>
    <a href="#${category}">${config.title}</a>
    <span class="breadcrumb-separator">/</span>
    <span>${item ? item.title : pageId}</span>
  `;
}

// Update active link in sidebar
function updateActiveLink(pageId) {
  document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.classList.remove('active');
    if (link.href.includes(pageId)) {
      link.classList.add('active');
    }
  });
}

// Generate Table of Contents
function generateTableOfContents() {
  const headings = document.querySelectorAll('.content h2, .content h3');
  
  if (headings.length === 0) return;

  const toc = document.createElement('div');
  toc.className = 'toc';
  toc.innerHTML = '<div class="toc-title">Table of Contents</div>';
  
  const list = document.createElement('ul');
  list.className = 'toc-list';

  let currentH2 = null;
  let sublist = null;

  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;

    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = heading.textContent;

    if (heading.tagName === 'H2') {
      item.appendChild(link);
      list.appendChild(item);
      currentH2 = item;
      sublist = null;
    } else if (heading.tagName === 'H3' && currentH2) {
      if (!sublist) {
        sublist = document.createElement('ul');
        sublist.className = 'toc-list';
        currentH2.appendChild(sublist);
      }
      const subitem = document.createElement('li');
      subitem.appendChild(link);
      sublist.appendChild(subitem);
    }
  });

  toc.appendChild(list);
  
  const content = document.querySelector('.content');
  if (content.firstChild) {
    content.insertBefore(toc, content.firstChild);
  }
}

// Calculate and display reading time
function updateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  const readingTimeEl = document.querySelector('.reading-time');
  readingTimeEl.textContent = `⏱️ Reading time: ~${readingTime} minute${readingTime > 1 ? 's' : ''}`;
}

// Update GitHub edit link
function updateEditLink(category, pageId) {
  const editLink = document.querySelector('.edit-link-url');
  const githubURL = `https://github.com/EdukronCodes/website2.0/edit/main/docs/${category}/${pageId}.md`;
  editLink.href = githubURL;
}

// Theme toggle
function initTheme() {
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('hidden');
    });
  }
}

// Initialize search
function initSearch() {
  const searchToggle = document.querySelector('.search-toggle');
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (searchToggle) {
    searchToggle.addEventListener('click', function() {
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) {
        searchInput.focus();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      performSearch(query);
    });
  }
}

// Perform search across all pages
function performSearch(query) {
  const searchResults = document.querySelector('.search-results');
  const results = [];

  // Search in all categories and pages
  for (const [category, config] of Object.entries(navConfig)) {
    config.items.forEach(item => {
      if (item.title.toLowerCase().includes(query) || item.id.toLowerCase().includes(query)) {
        results.push({
          title: `${item.title} (${config.title})`,
          category: category,
          id: item.id
        });
      }
    });
  }

  // Display search results
  searchResults.innerHTML = '';
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    return;
  }

  results.forEach(result => {
    const item = document.createElement('a');
    item.className = 'search-result-item';
    item.textContent = result.title;
    item.onclick = function(e) {
      e.preventDefault();
      loadPage(result.category, result.id);
      document.querySelector('.search-container').classList.remove('active');
    };
    searchResults.appendChild(item);
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
});
