// markdown.js - Markdown content loading and rendering

// Configuration for all topics across 12 categories
const topicConfig = {
  'data-science': {
    name: 'Data Science',
    emoji: '📊',
    topics: [
      'Data Science Lifecycle', 'Descriptive Statistics', 'Inferential Statistics', 'Probability Distributions',
      'Bayes Theorem', 'Central Limit Theorem', 'Hypothesis Testing', 'Confidence Intervals',
      'Linear Algebra Basics', 'Vectors and Matrices', 'Eigenvalues and Eigenvectors', 'Matrix Decomposition',
      'Data Collection', 'Data Cleaning', 'Data Preprocessing', 'Feature Scaling',
      'Handling Missing Values', 'Outlier Detection', 'Outlier Treatment', 'Data Validation',
      'Exploratory Data Analysis', 'Data Visualization Basics', 'Distribution Analysis', 'Correlation Analysis',
      'Feature Engineering', 'Feature Selection', 'Feature Extraction', 'Dimensionality Reduction',
      'Matplotlib Basics', 'Seaborn Plotting', 'Plotly Interactive Plots', 'Power BI Dashboards',
      'Heatmaps and Distributions', 'Time Series Visualization', '3D Visualization', 'Geographic Visualization',
      'Business Problem Framing', 'Defining Success Metrics', 'Data Requirements', 'Stakeholder Analysis',
      'EDA Workflows', 'Statistical Summary', 'Pattern Recognition', 'Data Quality Assessment',
      'Skewness and Kurtosis', 'Covariance Matrix', 'Box Plots', 'Scatter Plots',
      'Categorical Data Analysis', 'Numerical Data Analysis', 'Bivariate Analysis', 'Multivariate Analysis',
      'Time Series EDA', 'Seasonality Detection', 'Trend Analysis', 'Anomaly Detection in EDA',
      'Feature Importance', 'Polynomial Features', 'Interaction Terms', 'Domain-Based Features',
      'Date and Time Features', 'Text Features', 'Image Features', 'Encoding Categorical Variables',
      'Binning and Discretization', 'Feature Normalization', 'Feature Standardization', 'One-Hot Encoding',
      'Label Encoding', 'Ordinal Encoding', 'Target Encoding', 'Frequency Encoding',
      'Advanced Data Cleaning', 'Data Imputation Strategies', 'Data Transformation', 'Data Integration',
      'Data Profiling', 'Data Governance', 'Metadata Management', 'Data Lineage',
      'Statistical Tests', 'ANOVA', 'Chi-Square Test', 'T-Tests and Z-Tests'
    ]
  },
  'ai': {
    name: 'Artificial Intelligence',
    emoji: '🤖',
    topics: [
      'AI Fundamentals', 'AI History and Evolution', 'Narrow AI vs General AI', 'Super AI Concepts',
      'AI Applications', 'Machine Perception', 'Natural Language Processing', 'Robotics',
      'Breadth-First Search', 'Depth-First Search', 'A* Algorithm', 'Bidirectional Search',
      'Heuristic Search', 'Greedy Best-First Search', 'Uniform Cost Search', 'Iterative Deepening',
      'Knowledge Representation', 'Semantic Networks', 'Ontologies', 'Frame-Based Systems',
      'Logic Systems', 'Propositional Logic', 'First-Order Logic', 'Fuzzy Logic',
      'Reasoning Systems', 'Forward Chaining', 'Backward Chaining', 'Constraint Satisfaction',
      'Expert Systems', 'Knowledge Bases', 'Inference Engines', 'Decision Trees (Classical)',
      'Rule-Based Systems', 'Case-Based Reasoning', 'Bayesian Networks', 'Markov Models',
      'Classical Planning', 'STRIPS Planning', 'GraphPlan', 'Hierarchical Planning',
      'Reactive Planning', 'Temporal Planning', 'Multi-Agent Planning', 'Plan Optimization',
      'Computer Vision Basics', 'Image Processing', 'Object Detection', 'Image Classification',
      'Face Recognition', 'Pose Estimation', 'Scene Understanding', 'Video Analysis',
      'NLP Basics', 'Tokenization', 'POS Tagging', 'Named Entity Recognition',
      'Sentiment Analysis', 'Machine Translation', 'Question Answering', 'Text Summarization',
      'AI Ethics', 'Bias in AI', 'Fairness and Accountability', 'Transparency (Explainability)',
      'Privacy in AI', 'Security in AI', 'Responsible Innovation', 'AI Governance',
      'Knowledge Graphs', 'Semantic Web', 'Ontology Engineering', 'Knowledge Extraction',
      'Probabilistic Reasoning', 'Uncertainty Handling', 'Belief Propagation', 'Causal Reasoning',
      'Search Optimization', 'Meta-search', 'Ensemble Search', 'Hybrid Search Methods'
    ]
  },
  'ml': {
    name: 'Machine Learning',
    emoji: '🧠',
    topics: [
      'ML Fundamentals', 'Supervised Learning Basics', 'Unsupervised Learning Basics', 'Reinforcement Learning Basics',
      'Linear Regression', 'Logistic Regression', 'Polynomial Regression', 'Ridge and Lasso Regression',
      'Elastic Net Regression', 'Regularization Techniques', 'Loss Functions', 'Optimization Methods',
      'Classification Basics', 'Binary Classification', 'Multi-Class Classification', 'Multi-Label Classification',
      'Decision Trees', 'Tree Pruning', 'Tree Ensemble Methods', 'Bagging',
      'Random Forest', 'Gradient Boosting', 'XGBoost', 'LightGBM',
      'Support Vector Machines', 'SVM Kernels', 'One-Class SVM', 'Kernel Methods',
      'Naive Bayes', 'Multi-Variate Naive Bayes', 'Gaussian Naive Bayes', 'Categorical Naive Bayes',
      'K-Nearest Neighbors', 'Distance Metrics', 'KNN Optimization', 'Approximate KNN',
      'Clustering Basics', 'K-Means Clustering', 'K-Means++', 'Mini-Batch K-Means',
      'Hierarchical Clustering', 'Dendrogram Analysis', 'Agglomerative Clustering', 'Divisive Clustering',
      'DBSCAN', 'OPTICS', 'Density-Based Clustering', 'Spectral Clustering',
      'Gaussian Mixture Models', 'EM Algorithm', 'Model Selection in GMM', 'Soft Clustering',
      'PCA Basics', 'PCA Interpretation', 'Kernel PCA', 'Incremental PCA',
      'Dimensionality Reduction', 'Feature Selection', 'Feature Extraction', 'Manifold Learning',
      'Model Evaluation Metrics', 'Confusion Matrix', 'Precision and Recall', 'F1 Score',
      'ROC Curves', 'AUC Score', 'Precision-Recall Curves', 'Calibration Curves',
      'Cross-Validation', 'K-Fold Cross-Validation', 'Stratified K-Fold', 'Time Series CV',
      'Hyperparameter Tuning', 'Grid Search', 'Random Search', 'Bayesian Optimization',
      'Overfitting and Underfitting', 'Bias-Variance Tradeoff', 'Learning Curves', 'Regularization Strategies',
      'Early Stopping', 'Dropout Regularization', 'Batch Normalization', 'Layer Normalization',
      'Ensemble Methods', 'Voting Classifiers', 'Stacking', 'Blending',
      'Feature Importance', 'Permutation Importance', 'SHAP Values', 'LIME Explanations',
      'Scikit-learn Basics', 'Sklearn Pipelines', 'Custom Estimators', 'Model Persistence',
      'AutoML Systems', 'AutoML Frameworks', 'Meta-Learning', 'Neural Architecture Search',
      'Imbalanced Data Handling', 'SMOTE', 'Class Weights', 'Threshold Tuning'
    ]
  },
  'genai': {
    name: 'Generative AI',
    emoji: '✨',
    topics: [
      'LLM Fundamentals', 'Language Models Basics', 'Autoregressive Models', 'Autoencoder Models',
      'Pre-trained Models', 'Model Scaling Laws', 'In-context Learning', 'Few-Shot Learning',
      'Zero-Shot Learning', 'Chain-of-Thought', 'Self-Consistency', 'Instruction Tuning',
      'Transformer Architecture', 'Attention Mechanism', 'Multi-Head Attention', 'Self-Attention',
      'Position Encoding', 'Layer Normalization', 'Feed-Forward Networks', 'Transformer Variants',
      'Vision Transformers', 'BERT Architecture', 'GPT Architecture', 'T5 Model',
      'Encoder-Decoder Architectures', 'Decoder-Only Models', 'Emergent Abilities', 'Scaling Effects',
      'Prompt Engineering Basics', 'Prompt Design Patterns', 'Few-Shot Prompting', 'Chain-of-Thought Prompting',
      'Role-Based Prompting', 'Temperature and Sampling', 'Top-K and Top-P Sampling', 'Constrained Decoding',
      'Prompt Optimization', 'Adversarial Prompting', 'Jailbreaking Techniques', 'Prompt Injection Attacks',
      'Basic Fine-Tuning', 'Full Fine-Tuning', 'LoRA (Low-Rank Adaptation)', 'QLoRA',
      'Adapter Modules', 'Prefix Tuning', 'Prompt Tuning', 'Fine-Tuning Best Practices',
      'Instruction Following', 'Reinforcement Learning from Human Feedback', 'Direct Preference Optimization', 'Constitutional AI',
      'Data Preparation for Fine-Tuning', 'Training Optimization', 'Evaluation Metrics', 'Model Deployment',
      'Embeddings Basics', 'Word Embeddings', 'Sentence Embeddings', 'Document Embeddings',
      'Vector Databases', 'Similarity Search', 'Approximate Nearest Neighbor Search', 'Index Structures',
      'FAISS', 'Pinecone', 'Milvus', 'Weaviate',
      'RAG Fundamentals', 'Retrieval Systems', 'Document Chunking', 'Chunk Embeddings',
      'Similarity Ranking', 'Reranking Models', 'Query Expansion', 'Context Compression',
      'RAG Pipelines', 'Hybrid Retrieval', 'Multi-Stage Retrieval', 'Dynamic RAG',
      'Conversational AI Basics', 'Dialogue Systems', 'Context Management', 'Conversation History',
      'Intent Recognition', 'Slot Filling', 'Response Generation', 'Chitchat Models',
      'Chatbot Architecture', 'Evaluation of Chatbots', 'User Experience in Conversational AI', 'Multi-Turn Conversations',
      'Multimodal AI Basics', 'Vision and Language', 'Audio and Language', 'Video Understanding',
      'CLIP Models', 'GPT-4V', 'Multimodal Embeddings', 'Cross-Modal Retrieval',
      'Image Generation', 'Text-to-Image Models', 'Diffusion Models', 'Latent Diffusion',
      'Image Editing', 'Inpainting', 'Style Transfer', 'Super-Resolution',
      'Video Generation', 'Audio Generation', 'Music Generation', 'Speech Synthesis',
      'AI Agents Basics', 'Agent Loops', 'Tool Integration', 'Planning in Agents',
      'Memory Systems', 'Agent Evaluation', 'Safety in Agents', 'Multi-Agent Collaboration'
    ]
  },
  'agentic': {
    name: 'Agentic AI',
    emoji: '🎯',
    topics: [
      'AI Agents Introduction', 'Agent Definition and Types', 'Autonomous Agents', 'Semi-Autonomous Agents',
      'Intelligent Agents', 'Rational Agents', 'Agent Architecture', 'Reactive Agents', 'Deliberative Agents',
      'Hybrid Agents', 'Autonomous Decision-Making', 'Decision Making Processes', 'Sequential Decisions',
      'Markov Decision Processes', 'Partially Observable MDPs', 'Temporal Difference Learning', 'Value Iteration',
      'Policy Iteration', 'Policy Gradient Methods', 'Actor-Critic Methods', 'Model-Based Reinforcement Learning',
      'Planning Fundamentals', 'Goal Planning', 'Task Planning', 'Action Planning',
      'Hierarchical Planning', 'Plan Refinement', 'Plan Execution', 'Plan Monitoring',
      'Task Decomposition', 'Subtask Generation', 'Dependency Analysis', 'Scheduling',
      'Resource Allocation', 'Constraint Management', 'Deadline Handling', 'Priority Scheduling',
      'Multi-Agent Systems Basics', 'Agent Communication', 'Coordination Mechanisms', 'Negotiation',
      'Cooperation vs Competition', 'Game Theory in MAS', 'Cooperative Games', 'Non-Cooperative Games',
      'Coalition Formation', 'Task Allocation in Teams', 'Decentralized Control', 'Centralized Control',
      'Swarm Intelligence', 'Particle Swarm Optimization', 'Ant Colony Optimization', 'Stigmergy',
      'Short-Term Memory', 'Long-Term Memory', 'Episodic Memory', 'Semantic Memory',
      'Memory Networks', 'Knowledge Graphs for Memory', 'Retrieval-Augmented Memory', 'Memory Consolidation',
      'Attention Mechanisms in Memory', 'Memory Management', 'Forgetting Strategies', 'Memory Limits',
      'API Integration', 'Tool Calling', 'Function Calling', 'Plugin Architecture',
      'External APIs', 'Database Integration', 'Web APIs', 'Custom Tool Development',
      'Tool Selection', 'Tool Chaining', 'Error Handling in Tools', 'Rate Limiting',
      'LangChain Overview', 'Chains in LangChain', 'Agents in LangChain', 'Tools in LangChain',
      'Memory in LangChain', 'Callbacks in LangChain', 'Document Loaders', 'Text Splitters',
      'AutoGen Overview', 'Conversable Agents', 'Agent Interactions', 'Code Execution',
      'Human-in-the-Loop', 'Human Approval in Agents', 'Feedback Loops', 'Hybrid Workflows',
      'Interactive Planning', 'collaborative Decision-Making', 'Human-Agent Teams', 'Transparency in Decisions',
      'Agent Safety', 'Agent Alignment', 'Reward Hacking Prevention', 'Specification Gaming',
      'Robustness Testing', 'Adversarial Testing', 'Long-Horizon Evaluation', 'Task Generalization',
      'Real-World Agent Use Cases', 'Autonomous Vehicles', 'Robotics Applications', 'Game-Playing Agents',
      'Virtual Assistants', 'Customer Service Agents', 'Recommendation Agents', 'Trading Agents'
    ]
  },
  'programming': {
    name: 'Programming',
    emoji: '💻',
    topics: [
      'Python Basics', 'Variables and Data Types', 'Control Flow', 'Functions',
      'Modules and Packages', 'File Handling', 'Error Handling', 'Object-Oriented Programming',
      'Classes and Objects', 'Inheritance', 'Polymorphism', 'Encapsulation',
      'Magic Methods', 'Properties and Decorators', 'Metaclasses', 'Abstract Base Classes',
      'Context Managers', 'Generators and Iterators', 'Decorators', 'Functional Programming',
      'Lambda Functions', 'Map, Filter, Reduce', 'List Comprehensions', 'Dictionary Comprehensions',
      'Advanced Data Structures', 'Lists', 'Tuples', 'Sets',
      'Dictionaries', 'Collections Module', 'Deques', 'DefaultDict',
      'OrderedDict', 'Counter', 'Named Tuples', 'Custom Data Structures',
      'File Operations', 'Text File Reading', 'Binary File Reading', 'CSV Handling',
      'JSON Serialization', 'Pickle Serialization', 'XML Processing', 'YAML Processing',
      'Database Fundamentals', 'SQL Basics', 'Queries', 'Data Manipulation',
      'Joins', 'Aggregations', 'Subqueries', 'Indexes',
      'Constraints', 'Transactions', 'ACID Properties', 'Normalization',
      'SQL Optimization', 'Query Planning', 'Performance Tuning', 'Partitioning',
      'REST API Basics', 'HTTP Methods', 'Status Codes', 'Headers',
      'Flask Framework', 'Flask Routing', 'Request/Response', 'Flask Templates',
      'FastAPI Framework', 'APIdecorators', 'Request Validation', 'OpenAPI Documentation',
      'Authentication', 'Authorization', 'JWT Tokens', 'OAuth2',
      'Web Scraping Basics', 'BeautifulSoup', 'Parsing HTML', 'CSS Selectors',
      'XPath', 'Selenium', 'Browser Automation', 'Handling Dynamic Content',
      'Rate Limiting', 'Proxies', 'User Agents', 'Scraping Best Practices',
      'Pip Package Manager', 'Virtual Environments', 'Conda', 'Requirements Files',
      'Packaging', 'Setuptools', 'Poetry', 'Dependency Management',
      'Code Optimization', 'Profiling', 'Benchmarking', 'Memory Optimization',
      'Time Complexity', 'Space Complexity', 'Caching', 'Memoization',
      'Debugging Techniques', 'Print Debugging', 'Logging', 'Pdb Debugger',
      'Exception Handling', 'Traceback Analysis', 'Unit Testing', 'Integration Testing'
    ]
  },
  'big-data': {
    name: 'Big Data & Processing',
    emoji: '📈',
    topics: [
      'Big Data Fundamentals', '3 Vs of Big Data', '5 Vs of Big Data', 'Big Data Challenges',
      'Big Data Applications', 'Data Lakes', 'Data Warehouses', 'Data Marts',
      'Data Mesh', 'Data Fabric', 'Cloud Computing', 'Edge Computing',
      'Apache Spark Basics', 'Spark Architecture', 'Driver and Executors', 'Cluster Managers',
      'Standalone Cluster', 'YARN', 'Kubernetes', 'Mesos',
      'Spark Core', 'RDDs', 'Transformations', 'Actions',
      'Lazy Evaluation', 'Spark Context', 'Spark Session', 'Configuration',
      'RDD Operations', 'Map', 'Filter', 'Reduce',
      'Join Operations', 'Grouping', 'Sorting', 'Aggregations',
      'Partition Management', 'Repartitioning', 'Coalescing', 'Custom Partitioning',
      'PySpark Introduction', 'PySpark DataFrames', 'DataFrame Operations', 'Schema Definition',
      'SQL Operations', 'DataFrame Transformations', 'DataFrame Actions', 'Caching and Persistence',
      'PySpark UDFs', 'Custom Functions', 'Vectorized UDFs', 'Pandas UDFs',
      'RDD vs DataFrame', 'Performance Comparison', 'When to Use RDDs', 'When to Use DataFrames',
      'Interoperability', 'Converting Between RDD and DataFrame', 'Creating RDDs from DataFrames', 'Creating DataFrames from RDDs',
      'Spark SQL Basics', 'SQL Queries on DataFrames', 'Temporary Views', 'Catalogs',
      'Partitioned Tables', 'External Tables', 'Bucketing', 'SQL Functions',
      'Window Functions', 'Aggregation Functions', 'Scalar Functions', 'Complex Functions',
      'Join Operations', 'Inner Joins', 'Outer Joins', 'Cross Joins',
      'Query Optimization', 'Execution Plans', 'Cost-Based Optimizer', 'Query Hints',
      'Distributed Computing Concepts', 'MapReduce', 'Hadoop', 'Data Locality',
      'Fault Tolerance', 'Lineage', 'Checkpointing', 'Replication',
      'Network Topology', 'Rack Awareness', 'Data Skew', 'Shuffle Operations',
      'Batch Processing', 'Batch Architectures', 'ETL Pipelines', 'Scheduled Jobs',
      'Data Warehousing with Spark', 'Fact Tables', 'Dimension Tables', 'Star Schema',
      'Stream Processing', 'Kafka Integration', 'Spark Streaming', 'Structured Streaming',
      'Stateful Operations', 'Windowed Operations', 'Triggers', 'Watermarking',
      'Microbatch Processing', 'Continuous Processing', 'Event Time vs Processing Time', 'Late Data Handling',
      'Data Partitioning', 'Hash Partitioning', 'Range Partitioning', 'List Partitioning',
      'Partition Pruning', 'Bucketing Strategy', 'Partitioning Best Practices', 'Skew Handling',
      'Performance Tuning', 'Memory Tuning', 'CPU Tuning', 'I/O Optimization',
      'Shuffle Optimization', 'Broadcast Variables', 'Accumulators', 'Serialization',
      'Monitoring', 'Logging', 'Metrics Collection', 'Application Tracking'
    ]
  },
  'azure-data': {
    name: 'Azure Data Engineering',
    emoji: '☁️',
    topics: [
      'Azure Fundamentals', 'Azure Services', 'Resource Groups', 'Subscriptions',
      'Azure Portal', 'Azure CLI', 'PowerShell', 'Infrastructure as Code',
      'Azure Data Factory Basics', 'Pipelines', 'Activities', 'Linked Services',
      'Data Transformation', 'Copy Activity', 'Mapping Data Flows', 'Dataflow Debug Mode',
      'Dynamic Content', 'Parameters and Variables', 'Expressions', 'Functions in ADF',
      'Control Flow', 'If Condition Activity', 'For Each Activity', 'Until Activity',
      'Switch Activity', 'Wait Activity', 'Execute Pipeline Activity', 'Stored Procedure Activity',
      'Triggers', 'Scheduled Triggers', 'Event-Based Triggers', 'Tumbling Window Triggers',
      'Error Handling', 'Retry Logic', 'Failure Management', 'Alerting',
      'Monitoring', 'Pipeline Metrics', 'Activity Metrics', 'Debug Features',
      'Azure Databricks Basics', 'Workspace Setup', 'Clusters', 'Notebooks',
      'Compute', 'Interactive vs Job Clusters', 'Auto Scaling', 'Spot Instances',
      'Notebooks', 'Cell Types', 'Environments', 'Collaboration',
      'Databricks SQL', 'SQL Endpoints', 'Query History', 'Query Optimization',
      'Jobs and Workflows', 'Job Configuration', 'JAR Jobs', 'Python Jobs',
      'Notebook Jobs', 'Job Scheduling', 'Job Alerts', 'Job Monitoring',
      'Azure Data Lake Storage', 'Storage Accounts', 'Container Management', 'Blob Storage',
      'File Shares', 'Data Lake Architecture', 'Directory Structure', 'Access Patterns',
      'Access Control', 'IAM', 'RBAC', 'ABAC',
      'Storage Tiers', 'Hot, Cool, Archive', 'Data Lifecycle Management', 'Retention Policies',
      'Security', 'Encryption', 'Network Security', 'Firewalls',
      'Private Endpoints', 'Service Endpoints', 'Managed Identities', 'Key Vault',
      'Azure Synapse Analytics', 'Dedicated SQL Pools', 'Serverless SQL Pools', 'Spark Pools',
      'Query Performance', 'Statistics', 'Indexes', 'Query Plans',
      'Data Loading', 'PolyBase', 'COPY Statement', 'External Tables',
      'MPP Architecture', 'Parallel Processing', 'Distribution', 'Partitioning',
      'Data Warehousing', 'Schema Design', 'Dimension Tables', 'Fact Tables',
      'Slowly Changing Dimensions', 'Data Quality', 'Validation', 'Cleansing',
      'ETL vs ELT', 'ETL Workflows', 'ELT Workflows', 'Transformation Patterns',
      'Change Data Capture', 'CDC Implementation', 'Source Tracking', 'Incremental Load',
      'Full Load', 'Upsert Operations', 'SCD Type 1', 'SCD Type 2',
      'Data Integration', 'Multi-source Integration', 'Real-time Integration', 'Batch Integration',
      'API Integration', 'Custom Connectors', 'Webhook Integration', 'REST API Integration',
      'Monitoring and Logging', 'Azure Monitor', 'Log Analytics', 'Application Insights',
      'Diagnostics Settings', 'Alert Rules', 'Action Groups', 'Dashboard Creation'
    ]
  },
  'azure-ai': {
    name: 'Azure AI & ML',
    emoji: '🔧',
    topics: [
      'Azure Machine Learning Basics', 'ML Workspace', 'Compute Resources', 'Notebooks',
      'Experiments', 'Runs', 'Metrics Logging', 'Run History',
      'Training Scripts', 'ScriptRunConfig', 'Environments', 'Dependencies',
      'Parameter Tuning', 'Hyperparameter Tuning', 'Sweep Jobs', 'Grid Search',
      'Random Sampling', 'Bayesian Optimization', 'Early Termination', 'Bandit Policy',
      'Median Stopping Policy', 'Truncation Selection Policy', 'Training Best Practices', 'Experiment Tracking',
      'Model Training', 'Model Evaluation', 'Model Validation', 'Cross-Validation',
      'AutoML Overview', 'Classification Tasks', 'Regression Tasks', 'Time Series Forecasting',
      'Feature Engineering in AutoML', 'Model Selection', 'Ensemble Methods', 'AutoML Settings',
      'Training Time', 'Primary Metric', 'Blocking Algorithms', 'Allowed Algorithms',
      'Azure OpenAI Integration', 'OpenAI Models', 'GPT Models', 'Embedding Models',
      'Deployment', 'Rate Limiting', 'Quota Management', 'Monitoring Usage',
      'Text Completion', 'Chat Completion', 'Code Generation', 'Embedding API',
      'Prompt Management', 'Fine-tuning OpenAI Models', 'FLAN Models', 'Codex',
      'Model Deployment', 'Endpoints', 'Real-time Endpoints', 'Batch Endpoints',
      'Model Packaging', 'Docker Images', 'Inference Servers', 'Scoring Scripts',
      'Environment Management', 'Dependencies', 'Runtime Version', 'Custom Docker',
      'Scaling', 'Auto-scaling', 'Load Balancing', 'Traffic Rules',
      'Monitoring Deployed Models', 'Prediction Logs', 'Metric Alerts', 'Performance Tracking',
      'Feature Store', 'Feature Engineering', 'Feature Serving', 'Lookups',
      'Data Drift Detection', 'Model Drift Detection', 'Performance Degradation', 'Retraining Triggers',
      'Cognitive Services APIs', 'Vision API', 'Language API', 'Speech API',
      'Search APIs', 'Anomaly Detector', 'Metrics Advisor', 'Form Recognizer',
      'Document Intelligence', 'State Machine', 'Compliance with Standards', 'Content Moderation',
      'Custom Vision', 'Image Classification', 'Object Detection', 'Training Custom Models',
      'Video Analysis', 'Video Indexer', 'Content Moderation', 'Analytics',
      'MLOps Basics', 'ML Lifecycle', 'Model Registry', 'Model Versioning',
      'Model Promotion', 'CI/CD for ML', 'Automated Testing', 'Deployment Automation',
      'Responsible AI', 'Fairness Assessment', 'Interpretability', 'Transparency',
      'Privacy', 'Differential Privacy', 'Data Protection', 'Compliance',
      'Model Monitoring', 'Data Drift', 'Prediction Drift', 'Feature Attribution',
      'Explainability', 'Interpretability Tools', 'Debugging Models', 'Performance Analysis',
      'Model Governance', 'Audit Trails', 'Model Cards', 'Responsible AI Scorecard'
    ]
  },
  'devops': {
    name: 'DevOps & MLOps',
    emoji: '⚙️',
    topics: [
      'Azure DevOps Basics', 'Projects', 'Teams', 'Organization',
      'Boards', 'Work Items', 'Iteration Planning', 'Backlog Management',
      'Sprints', 'User Stories', 'Tasks', 'Bugs',
      'Epics', 'Features', 'Priority Management', 'Capacity Planning',
      'Git Fundamentals', 'Repositories', 'Branches', 'Commits',
      'Pull Requests', 'Merge Strategies', 'Tag Management', 'Branching Strategy',
      'Git Workflow', 'Feature Branching', 'Release Branching', 'Hotfix Branching',
      'Version Control Best Practices', 'Commit Messages', 'Code Review', 'History Rewriting',
      'CI/CD Pipelines', 'Pipeline Stages', 'Build Stage', 'Test Stage',
      'Deploy Stage', 'Release Management', 'Artifact Management', 'Pipeline as Code',
      'YAML Pipelines', 'Pipeline Triggers', 'Scheduled Runs', 'Manual Triggers',
      'Conditions and Variables', 'Environment Variables', 'Secrets Management', 'Parameter Passing',
      'Build Agents', 'Self-Hosted Agents', 'Agent Pools', 'Agent Configuration',
      'Docker Containerization', 'Docker Images', 'Dockerfile Writing', 'Image Layers',
      'Container Registry', 'Image Tagging', 'Image Scanning', 'Vulnerability Analysis',
      'Multi-Stage Builds', 'Build Optimization', 'Image Size Reduction', 'Container Security',
      'Kubernetes Basics', 'Pods', 'Deployments', 'Services',
      'ConfigMaps', 'Secrets', 'Namespaces', 'Labels and Selectors',
      'Ingress', 'Networking', 'Storage', 'Persistent Volumes',
      'Persistent Volume Claims', 'Storage Classes', 'StatefulSets', 'DaemonSets',
      'AKS Setup', 'Cluster Creation', 'Node Pools', 'Scaling',
      'Helm Charts', 'Package Management', 'Chart Repositories', 'Values Files',
      'Templating', 'Release Management', 'Chart Dependencies', 'Chart Testing',
      'Infrastructure as Code', 'ARM Templates', 'Resource Manager', 'Template Parameters',
      'Terraform Basics', 'Terraform Syntax', 'Providers', 'State Management',
      'Workspaces', 'Modules', 'Variable Management', 'Output Values',
      'Terraform Backend', 'Remote State', 'State Locking', 'Migration',
      'ML Pipeline Automation', 'Data Pipeline', 'Training Pipeline', 'Deployment Pipeline',
      'Orchestration', 'Scheduling', 'Error Handling', 'Monitoring',
      'Model Versioning', 'Model Registry', 'Version Control', 'Artifact Tracking',
      'Model Promotion', 'Staging Environments', 'Production Deployment', 'Rollback Strategy',
      'Monitoring and Logging', 'Azure Monitor', 'Log Analytics', 'Application Insights',
      'Metrics', 'Alerts', 'Dashboards', 'Workbooks',
      'Performance Monitoring', 'Resource Monitoring', 'Cost Monitoring', 'Security Monitoring',
      'Security and Compliance', 'Azure Security Center', 'Vulnerability Assessment', 'Compliance Standards',
      'Data Protection', 'Encryption in Transit', 'Encryption at Rest', 'Key Management'
    ]
  },
  'projects': {
    name: 'Projects & Use Cases',
    emoji: '🚀',
    topics: [
      'Project Planning', 'Requirements Analysis', 'Scope Definition', 'Timeline Planning',
      'Resource Allocation', 'Risk Assessment', 'Budget Planning', 'Stakeholder Management',
      'End-to-End Data Science Workflow', 'Problem Definition', 'Data Acquisition', 'Data Exploration',
      'Feature Engineering Pipeline', 'Model Building', 'Model Evaluation', 'Deployment Strategy',
      'Model Monitoring', 'Continuous Improvement', 'Documentation', 'Knowledge Transfer',
      'Classification Project', 'Binary Classification Problem', 'Dataset Selection', 'Baseline Model',
      'Feature Importance Analysis', 'Hyperparameter Optimization', 'Model Comparison', 'Ensemble Methods',
      'Production Deployment', 'API Creation', 'Web Interface', 'Mobile Integration',
      'Regression Project', 'Continuous Target Variable', 'Data Preprocessing', 'Feature Scaling',
      'Model Selection Strategy', 'Performance Metrics', 'Residual Analysis', 'Error Analysis',
      'Prediction Intervals', 'Confidence Intervals', 'Uncertainty Quantification', 'Real-World Predictions',
      'Recommendation Systems', 'Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches',
      'Matrix Factorization', 'Neural Networks for Recommendations', 'Evaluation Metrics', 'A/B Testing',
      'Cold Start Problem', 'Scalability', 'Real-Time Recommendations', 'Personalization',
      'NLP Chatbot Project', 'Intent Classification', 'Entity Recognition', 'Response Generation',
      'Context Management', 'Multi-Turn Conversations', 'User Feedback', 'Performance Evaluation',
      'Deployment as Service', 'API Endpoints', 'Conversation Logging', 'Analytics',
      'Computer Vision Application', 'Image Classification', 'Object Detection', 'Image Segmentation',
      'Transfer Learning', 'Pre-trained Models', 'Fine-tuning Strategy', 'Data Augmentation',
      'Real-Time Processing', 'Video Processing', 'Stream Processing', 'Edge Deployment',
      'Generative AI Application', 'LLM Selection', 'Prompt Design', 'RAG Implementation',
      'Fine-Tuning Strategy', 'Evaluation Framework', 'Cost Optimization', 'Safety Measures',
      'Deployment Architecture', 'Scaling Considerations', 'Monitoring Strategy', 'Feedback Loop',
      'RAG-Based Search System', 'Document Preparation', 'Embedding Strategy', 'Retrieval Pipeline',
      'Ranking and Reranking', 'Answer Generation', 'Source Attribution', 'Citation Management',
      'Evaluation and Metrics', 'Performance Optimization', 'User Testing', 'Iterative Improvement',
      'Real-Time Data Pipeline', 'Data Source Integration', 'Stream Processing', 'Event Handling',
      'Fault Tolerance', 'Data Quality Checks', 'Alerting System', 'Dashboarding',
      'Storage Solution', 'Processing Framework', 'State Management', 'Recovery Mechanisms',
      'Azure Data Engineering Project', 'Architecture Design', 'Data Ingestion', 'Transformation',
      'Loading Strategy', 'Data Warehouse', 'Data Lake', 'Analytics Solution',
      'Pipeline Orchestration', 'Monitoring and Alerting', 'Cost Optimization', 'Security Implementation',
      'MLOps Pipeline Implementation', 'CI/CD Setup', 'Model Registry', 'Automated Testing',
      'Deployment Automation', 'Model Monitoring', 'Performance Tracking', 'Drift Detection',
      'Retraining Automation', 'Version Management', 'Rollback Strategy', 'Documentation'
    ]
  },
  'learning-paths': {
    name: 'Learning Paths',
    emoji: '🎓',
    topics: [
      'Beginner Roadmap Start', 'Mathematics Foundation', 'Programming Basics', 'Statistics Fundamentals',
      'First Tools', 'Jupyter Notebooks', 'Python Basics', 'SQL Basics',
      'Pandas Introduction', 'Data Visualization', 'First Project', 'Simple Analysis Project',
      'Week 1-4 Plan', 'Week 5-8 Plan', 'Week 9-12 Plan', 'Week 13-16 Plan',
      'Intermediate Roadmap Start', 'Advanced Python', 'Advanced Statistics', 'Advanced SQL',
      'Data Cleaning Techniques', 'Feature Engineering Basics', 'ML Fundamentals', 'Scikit-learn',
      'Model Evaluation', 'Hyperparameter Tuning', 'Second Project', 'Prediction Project',
      'Real Dataset Analysis', 'Competition Preparation', 'Advanced Techniques', 'Ensemble Methods',
      'Production Readiness', 'Code Quality', 'Testing', 'Documentation',
      'Advanced Roadmap Start', 'Specialized Topics', 'Deep Learning', 'NLP',
      'Computer Vision', 'Reinforcement Learning', 'Advanced ML', 'Meta-Learning',
      'AutoML and NAS', 'Cutting-Edge Techniques', 'Research Papers', 'Implementation from Papers',
      'Publishing Research', 'Kaggle Competitions', 'Advanced Projects', 'Complex Datasets',
      'Data Scientist Path', 'Statistics Focus', 'EDA Skills', 'Visualization Skills',
      'Model Building', 'A/B Testing', 'Business Acumen', 'Communication Skills',
      'Domain Expertise', 'Tools Mastery', 'Pandas', 'Scikit-learn', 'Matplotlib and Seaborn',
      'Database Skills', 'Business Metrics', 'ML Understanding', 'Tools and Platforms',
      'ML Engineer Path', 'Programming Excellence', 'Algorithm Implementation', 'System Design',
      'Model Optimization', 'Scalability', 'Production Systems', 'DevOps Basics',
      'MLOps Mastery', 'Monitoring', 'Version Control', 'CI/CD Implementation',
      'Cloud Platforms', 'Containerization', 'Orchestration', 'Infrastructure as Code',
      'Data Engineer Path', 'SQL Mastery', 'Big Data Tools', 'Apache Spark',
      'Data Warehousing', 'ETL/ELT Pipelines', 'Data Modeling', 'Performance Optimization',
      'Cloud Data Platforms', 'Distributed Systems', 'Real-time Processing', 'Streaming',
      'Data Governance', 'Data Quality', 'Metadata Management', 'Cost Optimization',
      'AI Engineer Path', 'LLM Knowledge', 'Prompt Engineering', 'RAG Systems',
      'Fine-tuning', 'Vector Databases', 'Agent Frameworks', 'Multi-Agent Systems',
      'Production AI', 'Model Deployment', 'API Development', 'Integration',
      'Safe AI', 'Monitoring', 'Evaluation Metrics', 'Error Handling',
      'Azure Certification Path', 'Azure Fundamentals', 'Administrator Path', 'AI Engineer Path',
      'Data Engineer Path', 'Solution Architect Path', 'Azure Security', 'Compliance',
      'Best Practices', 'Hands-on Labs', 'Exam Preparation', 'Practice Tests',
      'Project-Based Learning', 'Portfolio Projects', 'GitHub Management', 'Presentation Skills',
      'Blog Writing', 'Public Speaking', 'Open Source Contribution', 'Networking',
      'Interview Preparation', 'Resume Building', 'Technical Interview Practice', 'Behavioral Questions',
      'System Design Interviews', 'SQL Interviews', 'ML System Design', 'Case Studies',
      'Negotiation Skills', 'Salary Research', 'Growth Opportunities', 'Career Planning'
    ]
  }
};

// Function to get all topics for a category
function getTopicsForCategory(categoryId) {
  return topicConfig[categoryId] ? topicConfig[categoryId].topics : [];
}

// Function to create markdown content for a topic
function createTopicMarkdown(categoryId, topicIndex, topicName) {
  return `# ${topicName}

## Overview
This tutorial covers the fundamentals and advanced concepts of **${topicName}** in the context of **${topicConfig[categoryId].name}**.

## Key Concepts
- Concept 1: Introduction to the topic
- Concept 2: Core principles
- Concept 3: Advanced techniques
- Concept 4: Real-world applications

## Learning Objectives
By the end of this module, you should understand:
- The fundamental principles of ${topicName}
- How to apply these concepts in practice
- Best practices and common pitfalls
- Integration with other tools and techniques

## Prerequisite Knowledge
- Basic understanding of the subject area
- Familiarity with relevant tools
- Mathematical background (if applicable)

## Common Applications
${topicName} is used in various scenarios:
- Business use cases
- Technical implementations
- Research applications
- Industry-specific uses

## Further Resources
- Official Documentation
- Research Papers
- Video Tutorials
- Community Forums

## Summary
${topicName} is an important concept in ${topicConfig[categoryId].name}. Understanding this topic will help you build better, more efficient solutions in your projects.

---
**Tags:** #${categoryId} #learning #tutorial`;
}

// Export functions
window.getTopicsForCategory = getTopicsForCategory;
window.createTopicMarkdown = createTopicMarkdown;
