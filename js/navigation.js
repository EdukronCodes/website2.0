// Navigation.js - Handles sidebar navigation and category switching
// Uses actual topic names from topicConfig in markdown.js

function initializeCategories() {
  // Build categories from topicConfig in markdown.js
  const categories = {};
  
  if (typeof topicConfig !== 'undefined') {
    for (const [categoryId, categoryData] of Object.entries(topicConfig)) {
      categories[categoryId] = {
        name: categoryData.emoji + ' ' + categoryData.name,
        topics: categoryData.topics.map((topicName, index) => ({
          id: `${categoryId}-${index + 1}`,
          name: topicName,
          file: `${categoryId}/${String(index + 1).padStart(3, '0')}-${topicName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}.md`
        }))
      };
    }
  }
  
  return categories;
}

const categories = initializeCategories();

let currentCategory = null;
let currentTopic = null;
let allTopics = [];

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  setupEventListeners();
  loadTopicsFromMarkdown();
});

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.navbar-menu li, [data-category]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category || this.getAttribute('data-category');
      if (category) {
        loadCategory(category);
      }
    });
  });
}

function setupEventListeners() {
  // Sidebar toggle for mobile
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  // Search input
  const searchInput = document.getElementById('sidebar-search');
  if (searchInput) {
    searchInput.addEventListener('input', filterTopics);
  }

  // Navbar search toggle
  const searchToggle = document.querySelector('.search-toggle');
  if (searchToggle) {
    searchToggle.addEventListener('click', toggleSearch);
  }

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function loadCategory(categoryId) {
  if (!categories[categoryId]) return;

  currentCategory = categoryId;
  currentTopic = null;

  // Update navbar active state
  document.querySelectorAll('.navbar-menu li').forEach(li => {
    li.classList.remove('active');
    if (li.dataset.category === categoryId || li.getAttribute('data-category') === categoryId) {
      li.classList.add('active');
    }
  });

  // Update sidebar title
  const categoryTitle = document.getElementById('category-title');
  if (categoryTitle) {
    categoryTitle.textContent = categories[categoryId].name;
  }

  // Populate sidebar menu
  populateSidebarMenu(categories[categoryId].topics);

  // Show welcome message or first topic
  showCategoryWelcome(categoryId);
}

function populateSidebarMenu(topics) {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (!sidebarMenu) return;

  sidebarMenu.innerHTML = '';

  topics.forEach((topic, index) => {
    const li = document.createElement('li');
    li.className = 'sidebar-menu-item';
    li.innerHTML = `<a href="#" data-topic-id="${topic.id}">${topic.name}</a>`;
    
    li.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault();
      loadTopic(topic.id, topics);
    });

    sidebarMenu.appendChild(li);
  });
}

function loadTopic(topicId, topics) {
  currentTopic = topicId;
  const topic = topics.find(t => t.id === topicId);
  
  if (!topic) return;

  // Update active state in sidebar
  document.querySelectorAll('.sidebar-menu-item').forEach(item => {
    item.classList.remove('active');
    if (item.querySelector(`a[data-topic-id="${topicId}"]`)) {
      item.classList.add('active');
    }
  });

  // Load markdown content
  loadMarkdownContent(currentCategory, topic.file);
}

function showCategoryWelcome(categoryId) {
  const contentDiv = document.getElementById('content');
  const category = categories[categoryId];

  contentDiv.innerHTML = `
    <h2>${category.name}</h2>
    <p>Welcome to the ${category.name} section!</p>
    <p>Select a topic from the left sidebar to begin learning. This category contains ${category.topics.length} comprehensive topics covering all aspects of the subject.</p>
    <div class="category-stats">
      <p><strong>Total Topics:</strong> ${category.topics.length}</p>
      <p>Start with the first topic or use the search box to find a specific topic.</p>
    </div>
  `;

  // Update page title
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.textContent = category.name;
  }

  updateBreadcrumb(['Home', category.name]);
}

function loadMarkdownContent(categoryId, filename) {
  const contentDiv = document.getElementById('content');
  const filePath = `docs/${categoryId}/${filename}`;

  // For now, show a placeholder since files don't exist yet
  contentDiv.innerHTML = `
    <div class="loading">Loading content...</div>
  `;

  // Try to load markdown file
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('File not found');
      }
      return response.text();
    })
    .then(markdown => {
      contentDiv.innerHTML = marked.parse(markdown);
      Prism.highlightAllUnder(contentDiv);
      updateReadingTime(markdown);
    })
    .catch(error => {
      contentDiv.innerHTML = `
        <h2>${filename.replace('.md', '')}</h2>
        <p><em>Content will be added soon. This is a placeholder for the markdown file.</em></p>
        <p>File path: <code>${filePath}</code></p>
      `;
    });
}

function filterTopics(event) {
  const searchTerm = event.target.value.toLowerCase();
  const sidebarItems = document.querySelectorAll('.sidebar-menu-item');

  sidebarItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

function toggleSearch() {
  const searchContainer = document.querySelector('.search-container');
  if (searchContainer) {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
      document.querySelector('.search-input').focus();
    }
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function updateBreadcrumb(items) {
  const breadcrumb = document.querySelector('.breadcrumb');
  if (!breadcrumb) return;

  breadcrumb.innerHTML = items
    .map((item, index) => {
      if (index === 0) {
        return `<a href="#" onclick="loadHome(); return false;">${item}</a>`;
      } else if (index === items.length - 1) {
        return `<span class="breadcrumb-separator">/</span><span>${item}</span>`;
      } else {
        return `<span class="breadcrumb-separator">/</span><a href="#">${item}</a>`;
      }
    })
    .join('');
}

function updateReadingTime(markdown) {
  const readingTimeDiv = document.querySelector('.reading-time');
  if (!readingTimeDiv) return;

  // Rough estimate: 200 words per minute
  const words = markdown.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  readingTimeDiv.textContent = `⏱️ ${minutes} min read`;
}

function loadTopicsFromMarkdown() {
  // This function would load actual markdown files from the docs folder
  // For now, it's a placeholder for future enhancement
}

function loadHome() {
  currentCategory = null;
  currentTopic = null;
  
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h2>Welcome to the Learning Platform</h2>
    <p>Select a category from the top navigation bar to get started.</p>
    <p>This comprehensive platform covers:</p>
    <ul>
      <li>📊 Data Science</li>
      <li>🤖 Artificial Intelligence</li>
      <li>🧠 Machine Learning</li>
      <li>✨ Generative AI</li>
      <li>🎯 Agentic AI</li>
      <li>💻 Programming</li>
      <li>📈 Big Data & Processing</li>
      <li>☁️ Azure Data Engineering</li>
      <li>🔧 Azure AI & ML</li>
      <li>⚙️ DevOps & MLOps</li>
      <li>🚀 Projects & Use Cases</li>
      <li>🎓 Learning Paths</li>
    </ul>
  `;

  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.textContent = 'Welcome to Learning Platform';
  }

  updateBreadcrumb(['Home']);
}

// Load saved theme preference
window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
