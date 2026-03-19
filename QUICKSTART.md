# 🚀 Quick Start Guide

## Installation & Setup (< 5 minutes)

### Step 1: Clone Repository
```bash
git clone https://github.com/EdukronCodes/website2.0.git
cd website2.0
```

### Step 2: Start Local Server
Choose one option:

**Option A: Python (Recommended)**
```bash
python -m http.server 8000
# or Python 2: python -m SimpleHTTPServer 8000
```

**Option B: Node.js**
```bash
npm install -g http-server
http-server
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

### Step 3: Open Browser
Navigate to: `http://localhost:8000`

---

## 📚 Platform Overview

### 12 Learning Categories
```
📊 Data Science (80 topics)
🤖 Artificial Intelligence (84 topics)
🧠 Machine Learning (80 topics)
✨ Generative AI (76 topics)
🎯 Agentic AI (85 topics)
💻 Programming (84 topics)
📈 Big Data & Processing (80 topics)
☁️ Azure Data Engineering (92 topics)
🔧 Azure AI & ML (84 topics)
⚙️ DevOps & MLOps (88 topics)
🚀 Projects & Use Cases (92 topics)
🎓 Learning Paths (85 topics)
```

**Total: 1010+ Topics**

---

## 🎯 How to Use

### 1. Navigate by Category
- Click category in **top navigation bar**
- Sidebar automatically populates with topics
- Click any topic to view content

### 2. Search Content
- Click 🔍 icon
- Type search query
- Results appear instantly
- Click result to view

### 3. Switch Theme
- Click 🌙 icon to toggle dark mode
- Setting is saved automatically

### 4. Mobile Usage
- Click ☰ hamburger menu
- Sidebar slides in from left
- Click a topic to view
- Theme setting persists

---

## 📖 Example Topics by Category

### Data Science 📊
- Data Cleaning & Preprocessing
- Exploratory Data Analysis (EDA)
- Feature Engineering
- Statistical Analysis
- Data Visualization

### Machine Learning 🧠
- Linear & Logistic Regression
- Decision Trees & Random Forests
- Clustering & Classification
- Model Evaluation
- Hyperparameter Tuning

### Generative AI ✨
- LLM Fundamentals
- Prompt Engineering
- RAG Systems
- Fine-tuning
- Embeddings

### Programming 💻
- Python Basics & Advanced OOP
- SQL for Data Analysis
- REST APIs
- Web Scraping
- Package Management

### Azure Data Engineering ☁️
- Azure Data Factory (ADF)
- Azure Databricks
- Data Lake Storage
- Synapse Analytics
- ETL/ELT Pipelines

---

## 🛠️ Project Structure

```
website2.0/
├── index.html                 # Home page
├── css/
│   ├── style.css              # Main styles
│   ├── sidebar.css            # Sidebar
│   └── responsive.css         # Mobile
├── js/
│   ├── app.js                 # Main logic
│   ├── navigation.js          # Navigation
│   └── markdown.js            # Content config
├── docs/                      # All content
│   ├── data-science/
│   ├── ai/
│   ├── ml/
│   ├── genai/
│   ├── agentic/
│   ├── programming/
│   ├── big-data/
│   ├── azure-data/
│   ├── azure-ai/
│   ├── devops/
│   ├── projects/
│   └── learning-paths/
└── scripts/
    └── generate_markdown.py   # Generate topics
```

---

## 🎓 Recommended Learning Paths

### Beginner (Start Here)
1. **Week 1-4:** Programming Basics
   - Python Variables & Functions
   - Data Types & Control Flow
   - Lists, Dictionaries, & Sets

2. **Week 5-8:** Data Fundamentals
   - SQL Basics
   - Pandas Introduction
   - Data Visualization

3. **Week 9-12:** Statistics
   - Descriptive Statistics
   - Probability Theory
   - Hypothesis Testing

4. **Week 13-16:** First Project
   - Simple Data Analysis
   - Prediction Task
   - Model Evaluation

### Intermediate (Next Level)
1. **Machine Learning Basics**
2. **Feature Engineering**
3. **Model Tuning & Evaluation**
4. **Real Dataset Projects**

### Advanced (Specialization)
- **Data Science Path:** Focus on Statistics & ML
- **ML Engineer Path:** Focus on Systems & Deployment
- **Data Engineer Path:** Focus on Big Data & Pipelines
- **AI Engineer Path:** Focus on LLMs & Agents

---

## ✨ Features

| Feature | Description |
|---------|------------|
| 📱 Responsive | Works on desktop, tablet, mobile |
| 🌓 Dark Mode | Eye-friendly night mode |
| 🔍 Search | Full-text search across all topics |
| ⚡ Fast | No dependencies, instant loading |
| 📖 Markdown | Easy to read, easy to extend |
| 🎨 Beautiful | Modern, clean UI design |
| ♿ Accessible | WCAG 2.1 AA compliant |

---

## 🔧 Customization

### Add New Category
1. Edit `js/navigation.js`
2. Add to categories object
3. Update HTML navbar
4. Create `docs/category-name/` folder
5. Add markdown files

### Add New Topic
1. Create `docs/category/NNN-topic-name.md`
2. Follow markdown structure
3. Topic appears automatically!

### Change Colors
Edit `css/style.css` CSS variables:
```css
:root {
  --color-primary: #4CAF50;
  --accent-color: #58a6ff;
}
```

---

## 🚀 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Learning platform"
git push origin main
```

Enable GitHub Pages in repo settings.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Any Static Host
- Copy all files
- Upload to hosting
- No backend needed!

---

## 📊 Statistics

- ✅ **1010+ Topics** across 12 categories
- ✅ **1031 Markdown Files** total
- ✅ **0 Dependencies** required
- ✅ **< 1 second** page load
- ✅ **100% Responsive** design
- ✅ **Mobile Ready** out of the box

---

## 🎯 Next Steps

1. **Explore** topics in your area of interest
2. **Follow** a learning path if you're a beginner
3. **Build** projects as you learn
4. **Share** your progress on social media!

---

## 📞 Support

**Issues?**
- Check the documentation files
- Review project examples
- Look at learning paths for guidance

**Want to Contribute?**
- Add new markdown files
- Improve existing content
- Fix typos or errors
- Submit pull requests

---

## 🎊 Happy Learning!

**Start with:** [Learning Paths → Beginner Roadmap](http://localhost:8000/#/learning-paths)

---

*Last Updated: March 2024*
*Platform Version: 2.0*
