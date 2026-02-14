// ===========================
// Agent47 - Enhanced Rule-Based AI System
// ===========================

class Agent47AI {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.currentMode = 'standard'; // standard, quiz, compare, deep-dive
        this.askedQuestions = new Set();
        this.userInterests = [];
        this.questionCount = 0;
        
        // Enhanced Knowledge Graph
        this.knowledgeGraph = this.buildKnowledgeGraph();
        
        // Rule Engine
        this.rules = this.initializeRules();
        
        // Dynamic Question Generator
        this.questionBank = this.generateQuestionBank();
        
        // Initialize
        this.init();
    }

    buildKnowledgeGraph() {
        return {
            personal: {
                name: "Vinay Varshigan S.J",
                location: "Portland, Maine",
                email: "sjvinay357@gmail.com",
                phone: "+1 (774) 457-0864",
                linkedin: "linkedin.com/in/vinaysj2003",
                github: "github.com/macrosensor2022",
                funFact: "Automated data validation so well, saved 60% processing time - now automates even coffee breaks!",
                personality: ["analytical", "creative", "problem-solver", "team-player"]
            },
            
            education: {
                current: {
                    degree: "MS in Computer Science",
                    university: "Northeastern University",
                    gpa: "4.0",
                    status: "In Progress",
                    role: "Teaching Assistant for Algorithms (CS5800)",
                    courses: ["Algorithms", "NLP", "Programming Design Paradigms", "Software Engineering"],
                    startDate: "Sep 2025",
                    highlights: ["Perfect GPA", "TA Role", "Graduate Level"]
                },
                previous: {
                    degree: "BE in Computer Science",
                    university: "Anna University",
                    gpa: "3.2",
                    period: "2021-2025"
                }
            },
            
            skills: {
                programming: {
                    expert: ["Python", "Java", "SQL"],
                    proficient: ["JavaScript", "HTML", "CSS"],
                    frameworks: ["PyTorch", "TensorFlow", "Scikit-learn"]
                },
                aiml: {
                    techniques: ["Deep Learning", "Machine Learning", "NLP", "Computer Vision"],
                    models: ["BERT", "ResNet50", "InceptionV3", "Transformers", "CNNs"],
                    accuracy: ["99% log classification", "93% food detection", "89% sentiment analysis", "83% heart disease prediction"],
                    specialization: "NLP and Computer Vision"
                },
                dataEngineering: {
                    pipelines: ["ETL", "Data Validation", "Feature Engineering"],
                    databases: ["MySQL", "SQL Optimization"],
                    tools: ["Docker", "Linux", "Git"],
                    achievements: ["60% faster processing", "20% latency reduction"]
                },
                cloud: {
                    platform: "AWS",
                    services: ["EC2", "VPC", "Auto Scaling"],
                    certifications: ["AWS Cloud Essentials"]
                },
                analytics: {
                    tools: ["Power BI", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
                    skills: ["DAX", "Data Visualization", "KPI Dashboards"]
                }
            },
            
            experience: [
                {
                    role: "Teaching Assistant",
                    company: "Northeastern University",
                    course: "Algorithms (CS5800)",
                    period: "Jan 2026 - Present",
                    type: "current",
                    responsibilities: ["Supporting graduate students", "Office hours", "Grading", "Course material development"],
                    impact: "Helping students master advanced algorithms"
                },
                {
                    role: "Data Scientist Intern",
                    company: "Besant Technologies",
                    location: "Chennai, India",
                    period: "Feb 2025 - Aug 2025",
                    type: "internship",
                    achievements: [
                        "60% reduction in processing time",
                        "20% improvement in query latency",
                        "Automated data validation pipelines",
                        "Created interactive Power BI dashboards"
                    ],
                    skills: ["Python", "Pandas", "NumPy", "SQL", "Power BI"]
                },
                {
                    role: "Secretary & Creative Group Head",
                    company: "SVCE CyberHub",
                    period: "Apr 2023 - Dec 2024",
                    type: "leadership",
                    achievements: [
                        "3x increase in social media engagement",
                        "Led cross-functional teams",
                        "Organized hackathons and technical events"
                    ]
                },
                {
                    role: "Software Developer Intern",
                    company: "Bluebase Software Solutions",
                    period: "Jun 2023 - Jul 2023",
                    type: "internship",
                    achievements: [
                        "Designed scalable AWS infrastructure",
                        "Automated deployment workflows",
                        "Improved system reliability"
                    ],
                    skills: ["AWS", "VPC", "EC2", "Auto Scaling", "Linux"]
                }
            ],
            
            projects: [
                {
                    name: "Pocket Forecaster",
                    category: "AI/ML",
                    description: "AI-powered smartphone recommendation engine",
                    tech: ["Java", "BERT", "VADER", "NLP", "MVC Pattern", "Strategy Pattern"],
                    accuracy: "89%",
                    features: ["Sentiment analysis", "Budget filtering", "Add-on recommendations"],
                    impact: "Helps users make informed smartphone purchases",
                    github: "pocket_forecaster"
                },
                {
                    name: "Log Classification System",
                    category: "NLP",
                    description: "Hybrid multi-stage log classification pipeline",
                    tech: ["Python", "BERT", "SentenceTransformers", "DBSCAN", "Regex"],
                    accuracy: "99%",
                    categories: 9,
                    features: ["Semantic clustering", "Real-time classification", "Multi-class support"],
                    impact: "Automated system log analysis",
                    github: "Log_classification_system_NLP_Personal_project"
                },
                {
                    name: "Wildlife Detection & Emergency System",
                    category: "Computer Vision / IoT",
                    description: "Real-time wildlife detection for tribal safety",
                    tech: ["Python", "ResNet50", "Transformers", "PyTorch", "ESP32-CAM", "IoT", "RF Networks"],
                    features: ["Animal classification", "Danger level prediction", "Offline alerts", "SOS integration"],
                    impact: "Protecting tribal communities in remote regions",
                    github: "wild-animal-detection-and-emergency-system"
                },
                {
                    name: "Smart Food Solutions",
                    category: "Computer Vision",
                    description: "AI-based food and allergen detection",
                    tech: ["Python", "ResNet50", "InceptionV3", "Nutritionix API"],
                    accuracy: "93%",
                    features: ["Real-time detection", "Allergen identification", "Nutritional insights"],
                    impact: "Helping people with food allergies stay safe"
                },
                {
                    name: "Retail Sales Dashboard",
                    category: "Data Analytics",
                    description: "Interactive Power BI dashboard",
                    tech: ["Power BI", "DAX", "Data Visualization"],
                    features: ["Sales tracking", "KPI monitoring", "Professional layouts"],
                    impact: "Improved business decision-making"
                },
                {
                    name: "E-commerce Text Classification",
                    category: "NLP",
                    description: "Scalable product classification system",
                    tech: ["Python", "FastText", "Subword Embeddings"],
                    features: ["Fast training", "Typo handling", "Multi-class classification"],
                    impact: "Production-ready e-commerce solution"
                }
            ],
            
            publications: [
                {
                    type: "book_chapter",
                    title: "Blockchain, Smart Contracts, and AI-Based Fraud Detection",
                    publisher: "Routledge",
                    status: "Published",
                    category: "AI/Blockchain"
                },
                {
                    type: "paper",
                    title: "Heart Disease Prediction Using Machine Learning",
                    award: "Best Paper Award",
                    accuracy: "83%",
                    models: ["Decision Tree", "Naive Bayes", "Random Forest"],
                    status: "Published"
                },
                {
                    type: "patent",
                    title: "AWS-Deployed IoT Water Monitoring System",
                    status: "Under Review",
                    category: "IoT/Cloud"
                }
            ],
            
            certifications: [
                {name: "AWS Cloud Essentials", provider: "Amazon Web Services", verified: true},
                {name: "Introduction to IoT", provider: "NPTEL IIT", verified: true},
                {name: "Foundations of Software Engineering", provider: "Northeastern University", verified: true}
            ],
            
            interests: {
                technical: ["NLP", "Computer Vision", "Data Engineering", "Cloud Architecture"],
                domains: ["Healthcare AI", "IoT Systems", "E-commerce", "Wildlife Conservation"],
                learning: ["Advanced Transformers", "Cloud-Native Architecture", "MLOps"]
            },
            
            availability: {
                status: true,
                lookingFor: ["NLP Internships", "Software Engineering Internships", "AI/ML Internships"],
                type: "Internship",
                startDate: "Flexible"
            }
        };
    }

    initializeRules() {
        return {
            // Intent Recognition Rules
            intents: {
                greeting: {
                    patterns: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'sup', 'yo', 'howdy'],
                    confidence: 0.9,
                    action: 'respondGreeting'
                },
                farewell: {
                    patterns: ['bye', 'goodbye', 'see you', 'later', 'gotta go', 'exit', 'quit'],
                    confidence: 0.9,
                    action: 'respondFarewell'
                },
                thanks: {
                    patterns: ['thanks', 'thank you', 'thx', 'appreciate', 'helpful', 'great'],
                    confidence: 0.8,
                    action: 'respondThanks'
                },
                compliment: {
                    patterns: ['impressive', 'amazing', 'awesome', 'wow', 'cool', 'nice', 'excellent', 'outstanding', 'good work'],
                    confidence: 0.7,
                    action: 'respondCompliment'
                },
                
                // Question Intents
                skills_query: {
                    patterns: ['skill', 'technology', 'tech stack', 'programming', 'language', 'know', 'proficient', 'expertise', 'good at', 'capabilities'],
                    confidence: 0.85,
                    action: 'respondSkills'
                },
                experience_query: {
                    patterns: ['experience', 'work', 'job', 'internship', 'worked', 'career', 'employment', 'companies', 'role'],
                    confidence: 0.85,
                    action: 'respondExperience'
                },
                project_query: {
                    patterns: ['project', 'built', 'created', 'developed', 'portfolio', 'work sample'],
                    confidence: 0.85,
                    action: 'respondProjects'
                },
                education_query: {
                    patterns: ['education', 'degree', 'university', 'college', 'gpa', 'study', 'student', 'school', 'academic'],
                    confidence: 0.85,
                    action: 'respondEducation'
                },
                contact_query: {
                    patterns: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'get in touch'],
                    confidence: 0.9,
                    action: 'respondContact'
                },
                availability_query: {
                    patterns: ['hire', 'hiring', 'job', 'opportunity', 'available', 'open to work', 'looking for', 'position', 'role'],
                    confidence: 0.85,
                    action: 'respondAvailability'
                },
                publication_query: {
                    patterns: ['publication', 'paper', 'research', 'published', 'patent', 'book', 'award', 'wrote'],
                    confidence: 0.8,
                    action: 'respondPublications'
                },
                certification_query: {
                    patterns: ['certification', 'certified', 'certificate', 'credential', 'badge', 'qualified'],
                    confidence: 0.8,
                    action: 'respondCertifications'
                },
                
                // Comparison Intents
                comparison: {
                    patterns: ['compare', 'difference', 'versus', 'vs', 'better', 'which', 'prefer', 'choose'],
                    confidence: 0.7,
                    action: 'handleComparison'
                },
                
                // Special Modes
                quiz_request: {
                    patterns: ['quiz', 'test', 'question me', 'ask me', 'challenge'],
                    confidence: 0.9,
                    action: 'startQuizMode'
                },
                help_request: {
                    patterns: ['help', 'what can you', 'how to use', 'commands', 'what do you do'],
                    confidence: 0.9,
                    action: 'respondHelp'
                },
                random: {
                    patterns: ['random', 'surprise', 'anything', 'something', 'tell me more'],
                    confidence: 0.6,
                    action: 'respondRandom'
                },
                joke_request: {
                    patterns: ['joke', 'funny', 'laugh', 'humor', 'make me laugh'],
                    confidence: 0.9,
                    action: 'respondJoke'
                }
            },
            
            // Context-Aware Rules
            contextRules: {
                followUp: {
                    condition: (history) => history.length > 1,
                    action: 'handleFollowUp'
                },
                clarification: {
                    condition: (msg) => msg.includes('?') && msg.split(' ').length < 4,
                    action: 'requestClarification'
                },
                multipleTopics: {
                    condition: (msg) => msg.includes(' and ') || msg.includes(' & '),
                    action: 'handleMultipleTopics'
                }
            },
            
            // Response Enhancement Rules
            enhancementRules: {
                addSuggestions: true,
                includeRelated: true,
                personalizeResponse: true,
                trackInterests: true
            }
        };
    }

    generateQuestionBank() {
        return {
            skills: [
                "What programming languages does Vinay know?",
                "Tell me about his machine learning skills",
                "What AI models has he worked with?",
                "Does he have cloud computing experience?",
                "What data engineering tools does he use?",
                "How proficient is he in Python?",
                "What's his expertise in NLP?",
                "Tell me about his AWS experience"
            ],
            projects: [
                "What's the most impressive project he's built?",
                "Tell me about the Pocket Forecaster project",
                "How did he achieve 99% accuracy in log classification?",
                "What's unique about the wildlife detection system?",
                "Which project uses computer vision?",
                "What real-world problems has he solved?",
                "Tell me about his IoT projects"
            ],
            experience: [
                "Where has Vinay worked?",
                "What did he accomplish at Besant Technologies?",
                "Tell me about his teaching assistant role",
                "What leadership experience does he have?",
                "How did he improve data processing by 60%?",
                "What companies has he interned at?"
            ],
            education: [
                "What's Vinay's GPA?",
                "Where is he studying now?",
                "What courses is he taking?",
                "Tell me about his academic achievements",
                "What degree is he pursuing?"
            ],
            publications: [
                "Has Vinay published any research?",
                "What awards has he won?",
                "Tell me about his Routledge publication",
                "Does he have any patents?"
            ],
            personal: [
                "What's Vinay's fun fact?",
                "What are his interests?",
                "Is he a team player?",
                "What makes him unique?",
                "What's his personality like?"
            ],
            availability: [
                "Is Vinay looking for a job?",
                "What kind of positions is he seeking?",
                "How can I hire him?",
                "When can he start?"
            ],
            comparison: [
                "Compare his Python and Java skills",
                "What's the difference between his projects?",
                "ML vs Data Engineering - which is his strength?",
                "Which project had the highest accuracy?"
            ]
        };
    }

    init() {
        console.log('🕵️ Agent47 Enhanced AI System Initializing...');
        this.createChatbotHTML();
        this.attachEventListeners();
        console.log('✅ Agent47 online. Advanced rule-based system ready.');
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div id="chatbot-button" class="chatbot-button">
                <i class="fas fa-robot"></i>
                <span class="chatbot-badge">Try Agent47</span>
            </div>

            <div id="chatbot-container" class="chatbot-container">
                <div class="chatbot-header">
                    <div class="chatbot-header-left">
                        <div class="chatbot-avatar">
                            <i class="fas fa-user-secret"></i>
                        </div>
                        <div class="chatbot-header-info">
                            <h4>Agent47</h4>
                            <span class="chatbot-status">
                                <span class="status-dot"></span>
                                <span id="chatbot-mode">Intel Mode</span>
                            </span>
                        </div>
                    </div>
                    <div class="chatbot-header-actions">
                        <button id="chatbot-minimize" title="Minimize">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button id="chatbot-close" title="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div class="chatbot-messages" id="chatbot-messages">
                    <div class="chatbot-welcome">
                        <div class="terminal-prompt-chat">agent47@intel:~$</div>
                        <p>🕵️ Agent47 Enhanced AI Activated</p>
                        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 10px;">
                            Advanced rule-based system ready. Try quiz mode, comparisons, or ask anything!
                        </p>
                        <div class="quick-actions">
                            <button class="quick-action" data-msg="What are your coolest features?">✨ Features</button>
                            <button class="quick-action" data-msg="Start quiz mode">🎯 Quiz Me</button>
                            <button class="quick-action" data-msg="Tell me something random">🎲 Random</button>
                            <button class="quick-action" data-msg="Show me project comparisons">📊 Compare</button>
                        </div>
                    </div>
                </div>

                <div class="chatbot-input-area">
                    <div class="chatbot-suggestions" id="chatbot-suggestions"></div>
                    <div class="chatbot-input-wrapper">
                        <input 
                            type="text" 
                            id="chatbot-input" 
                            placeholder="Ask me anything or try 'quiz mode'..."
                            autocomplete="off"
                        />
                        <button id="chatbot-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="chatbot-footer">
                        <span>🕵️ Agent47 Enhanced AI | <span id="question-counter">0</span> Intel Gathered</span>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const button = document.getElementById('chatbot-button');
        const closeBtn = document.getElementById('chatbot-close');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        button.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.closeChatbot());
        minimizeBtn.addEventListener('click', () => this.closeChatbot());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Quick action buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-action')) {
                const message = e.target.getAttribute('data-msg');
                this.sendMessage(message);
            }
        });

        // Input suggestions
        input.addEventListener('input', (e) => this.showSuggestions(e.target.value));
    }

    toggleChatbot() {
        const container = document.getElementById('chatbot-container');
        const button = document.getElementById('chatbot-button');
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            container.classList.add('active');
            button.classList.add('hidden');
            document.getElementById('chatbot-input').focus();
            
            // Send welcome message if first time
            if (!localStorage.getItem('agent47-visited')) {
                setTimeout(() => {
                    const greetings = [
                        "🕵️ Agent47 Enhanced AI activated. I'm equipped with advanced rule-based intelligence. Try asking complex questions, start quiz mode, or request comparisons!",
                        "Target acquired. 🎯 Agent47 here with enhanced capabilities. I can handle follow-up questions, comparisons, and even quiz you! What intel do you need?"
                    ];
                    this.addBotMessage(greetings[Math.floor(Math.random() * greetings.length)]);
                    localStorage.setItem('agent47-visited', 'true');
                }, 500);
            }
        }
    }

    closeChatbot() {
        const container = document.getElementById('chatbot-container');
        const button = document.getElementById('chatbot-button');
        
        this.isOpen = false;
        container.classList.remove('active');
        button.classList.remove('hidden');
    }

    sendMessage(messageText = null) {
        const input = document.getElementById('chatbot-input');
        const message = messageText || input.value.trim();
        
        if (!message) return;
        
        this.addUserMessage(message);
        input.value = '';
        
        // Update counter
        this.questionCount++;
        document.getElementById('question-counter').textContent = this.questionCount;
        
        // Clear suggestions
        document.getElementById('chatbot-suggestions').innerHTML = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Process message through rule engine
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.processMessage(message);
            this.addBotMessage(response.text, response.suggestions);
            
            // Update mode if changed
            if (response.mode) {
                document.getElementById('chatbot-mode').textContent = response.mode;
            }
        }, 800 + Math.random() * 800);
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        this.conversationHistory.push({
            message: lowerMessage,
            timestamp: Date.now()
        });

        // Keep only last 10 messages for context
        if (this.conversationHistory.length > 10) {
            this.conversationHistory.shift();
        }

        // Process through rule engine
        const intent = this.detectIntent(lowerMessage);
        
        if (intent) {
            return this[intent.action](lowerMessage, intent);
        }

        // Fallback to intelligent response
        return this.intelligentFallback(lowerMessage);
    }

    detectIntent(message) {
        let bestMatch = null;
        let highestConfidence = 0;

        for (const [intentName, intentData] of Object.entries(this.rules.intents)) {
            const confidence = this.calculateConfidence(message, intentData.patterns);
            
            if (confidence > highestConfidence && confidence > 0.5) {
                highestConfidence = confidence;
                bestMatch = {
                    intent: intentName,
                    confidence: confidence,
                    action: intentData.action
                };
            }
        }

        return bestMatch;
    }

    calculateConfidence(message, patterns) {
        let matches = 0;
        const words = message.split(' ');
        
        for (const pattern of patterns) {
            if (message.includes(pattern)) {
                matches++;
            }
        }
        
        return Math.min(matches / Math.max(patterns.length * 0.3, 1), 1);
    }

    // Response Methods
    respondGreeting(message, intent) {
        const greetings = [
            "🕵️ Agent47 here. Mission: Provide intel on Vinay Varshigan. What would you like to know?",
            "Target acquired. 🎯 Agent47 reporting. I have comprehensive data on Vinay's skills, projects, and experience.",
            "Agent47 online. Ready to assist with any questions about Vinay's capabilities. Try asking about specific projects or start quiz mode!"
        ];

        const suggestions = [
            "What are Vinay's top skills?",
            "Tell me about his best project",
            "Start quiz mode",
            "Compare his projects"
        ];

        return {
            text: greetings[Math.floor(Math.random() * greetings.length)],
            suggestions: suggestions
        };
    }

    respondFarewell(message, intent) {
        const farewells = [
            "🕵️ Mission complete. Agent47 signing off. Contact Vinay at sjvinay357@gmail.com for opportunities! 🚀",
            "Intel transfer complete. Agent47 out. Don't forget to connect with Vinay! Over and out! 👋",
            "Target documented. Agent47 going dark. Reach out to Vinay for collaboration! ✨"
        ];

        return {
            text: farewells[Math.floor(Math.random() * farewells.length)]
        };
    }

    respondThanks(message, intent) {
        const thanks = [
            "🕵️ Roger that. Agent47 standing by for further intel requests.",
            "Mission acknowledged. Any additional intelligence needed?",
            "Copy that. Agent47 ready for next query. Try quiz mode or comparisons!"
        ];

        const suggestions = [
            "Tell me something random",
            "Start quiz mode",
            "What's unique about Vinay?"
        ];

        return {
            text: thanks[Math.floor(Math.random() * thanks.length)],
            suggestions: suggestions
        };
    }

    respondCompliment(message, intent) {
        const compliments = [
            "Thank you! Vinay has worked really hard on his skills and projects! 🌟 Want to know more about a specific area?",
            "I'll pass that along! Vinay would love to hear from you directly at sjvinay357@gmail.com! 💼",
            "Thanks for the kind words! Vinay's dedication shows in his 4.0 GPA and multiple successful projects. What interests you most?"
        ];

        const suggestions = [
            "Tell me about his achievements",
            "What makes him stand out?",
            "Show me his best work"
        ];

        return {
            text: compliments[Math.floor(Math.random() * compliments.length)],
            suggestions: suggestions
        };
    }

    respondSkills(message, intent) {
        const kg = this.knowledgeGraph.skills;
        
        let response = "🕵️ Vinay's Technical Arsenal:\n\n";
        response += `💻 **Programming**: ${kg.programming.expert.join(', ')}\n\n`;
        response += `🤖 **AI/ML**: Specialized in ${kg.aiml.specialization}\n`;
        response += `   Models: ${kg.aiml.models.slice(0, 4).join(', ')}\n\n`;
        response += `☁️ **Cloud**: AWS (${kg.cloud.services.join(', ')})\n\n`;
        response += `📊 **Analytics**: ${kg.analytics.tools.slice(0, 3).join(', ')}\n\n`;
        response += `🎯 **Track Record**: ${kg.aiml.accuracy.slice(0, 2).join(', ')}`;

        const suggestions = [
            "Tell me more about his ML skills",
            "What AWS experience does he have?",
            "Compare Python vs Java skills",
            "Which projects use these skills?"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondProjects(message, intent) {
        const projects = this.knowledgeGraph.projects;
        
        let response = "🕵️ Vinay's Project Portfolio:\n\n";
        
        projects.slice(0, 3).forEach((proj, idx) => {
            response += `${idx + 1}. **${proj.name}** (${proj.category})\n`;
            response += `   ${proj.description}\n`;
            if (proj.accuracy) response += `   Accuracy: ${proj.accuracy}\n`;
            response += `   Impact: ${proj.impact}\n\n`;
        });

        response += `Total: ${projects.length} projects showcasing AI/ML, NLP, and IoT expertise!`;

        const suggestions = [
            "Tell me about Pocket Forecaster",
            "Which project has highest accuracy?",
            "Compare the ML projects",
            "Show me IoT projects"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondExperience(message, intent) {
        const exp = this.knowledgeGraph.experience;
        
        let response = "🕵️ Vinay's Career Intel:\n\n";
        
        exp.forEach((job, idx) => {
            response += `**${job.role}** @ ${job.company}\n`;
            response += `${job.period} | ${job.type}\n`;
            if (job.achievements) {
                response += `Achievements:\n`;
                job.achievements.slice(0, 2).forEach(ach => {
                    response += `• ${ach}\n`;
                });
            }
            response += `\n`;
        });

        const suggestions = [
            "What did he achieve at Besant?",
            "Tell me about his TA role",
            "What leadership experience?",
            "Compare his internships"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondEducation(message, intent) {
        const edu = this.knowledgeGraph.education;
        
        let response = "🕵️ Academic Intel:\n\n";
        response += `🎓 **Current**: ${edu.current.degree}\n`;
        response += `   ${edu.current.university}\n`;
        response += `   GPA: **${edu.current.gpa}** (Perfect!)\n`;
        response += `   Role: ${edu.current.role}\n\n`;
        response += `📚 Courses: ${edu.current.courses.join(', ')}\n\n`;
        response += `✨ Highlights:\n`;
        edu.current.highlights.forEach(h => {
            response += `   • ${h}\n`;
        });

        const suggestions = [
            "What courses is he taking?",
            "Tell me about his TA role",
            "What's his GPA?",
            "Previous education?"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondContact(message, intent) {
        const contact = this.knowledgeGraph.personal;
        
        let response = "🕵️ Contact Protocols:\n\n";
        response += `📧 **Email**: ${contact.email}\n`;
        response += `📞 **Phone**: ${contact.phone}\n`;
        response += `📍 **Location**: ${contact.location}\n`;
        response += `💼 **LinkedIn**: ${contact.linkedin}\n`;
        response += `💻 **GitHub**: ${contact.github}\n\n`;
        response += `Best way to reach: Email for opportunities!`;

        const suggestions = [
            "Is he available for hire?",
            "What positions is he seeking?",
            "Tell me about his availability"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondAvailability(message, intent) {
        const avail = this.knowledgeGraph.availability;
        
        let response = "🕵️ Availability Status: **OPEN**\n\n";
        response += `Seeking: ${avail.lookingFor.join(', ')}\n\n`;
        response += `Why Hire Vinay?\n`;
        response += `• Perfect 4.0 GPA at top university\n`;
        response += `• Real impact: 60% time savings, 99% accuracy\n`;
        response += `• Full-stack: ML + Data Engineering + Cloud\n`;
        response += `• Published researcher with Best Paper Award\n`;
        response += `• Teaching experience (Algorithms TA)\n\n`;
        response += `📧 Contact: ${this.knowledgeGraph.personal.email}`;

        const suggestions = [
            "What are his strengths?",
            "Show me his achievements",
            "Tell me about his projects",
            "What makes him unique?"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondPublications(message, intent) {
        const pubs = this.knowledgeGraph.publications;
        
        let response = "🕵️ Published Intelligence:\n\n";
        
        pubs.forEach((pub, idx) => {
            response += `${idx + 1}. **${pub.title}**\n`;
            response += `   Type: ${pub.type} | Status: ${pub.status}\n`;
            if (pub.award) response += `   🏆 ${pub.award}\n`;
            response += `\n`;
        });

        const suggestions = [
            "Tell me about the Routledge publication",
            "What awards has he won?",
            "Tell me about the patent"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondCertifications(message, intent) {
        const certs = this.knowledgeGraph.certifications;
        
        let response = "🕵️ Verified Credentials:\n\n";
        
        certs.forEach((cert, idx) => {
            response += `${idx + 1}. **${cert.name}**\n`;
            response += `   Provider: ${cert.provider}\n`;
            response += `   ${cert.verified ? '✅ Verified' : 'In Progress'}\n\n`;
        });

        const suggestions = [
            "Tell me about AWS certification",
            "What skills does he have?",
            "Show me his projects"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    startQuizMode(message, intent) {
        this.currentMode = 'quiz';
        
        const response = "🎯 **Quiz Mode Activated!**\n\n";
        const quizQuestion = this.generateQuizQuestion();
        
        return {
            text: response + quizQuestion,
            mode: "Quiz Mode",
            suggestions: [
                "Skip this question",
                "Exit quiz mode",
                "Give me a hint"
            ]
        };
    }

    generateQuizQuestion() {
        const categories = Object.keys(this.questionBank);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const questions = this.questionBank[randomCategory];
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        
        return `**Question**: ${randomQuestion}\n\nTry answering or ask for a hint!`;
    }

    handleComparison(message, intent) {
        let response = "🔍 **Comparison Mode Activated**\n\n";
        
        // Detect what's being compared
        if (message.includes('project')) {
            response += this.compareProjects();
        } else if (message.includes('skill') || message.includes('python') || message.includes('java')) {
            response += this.compareSkills(message);
        } else {
            response += "I can compare:\n";
            response += "• Projects (accuracy, tech, impact)\n";
            response += "• Skills (Python vs Java, ML vs Data Engineering)\n";
            response += "• Experiences (internships, achievements)\n\n";
            response += "What would you like to compare?";
        }

        const suggestions = [
            "Compare all projects",
            "Python vs Java",
            "ML vs Data Engineering",
            "Compare internships"
        ];

        return {
            text: response,
            mode: "Compare Mode",
            suggestions: suggestions
        };
    }

    compareProjects() {
        const projects = this.knowledgeGraph.projects.slice(0, 3);
        let response = "**Project Comparison**:\n\n";
        
        response += "| Project | Accuracy | Category | Key Tech |\n";
        response += "|---------|----------|----------|----------|\n";
        projects.forEach(p => {
            response += `| ${p.name} | ${p.accuracy || 'N/A'} | ${p.category} | ${p.tech[0]} |\n`;
        });
        
        response += `\n🏆 Highest Accuracy: Log Classification (99%)\n`;
        response += `💡 Most Complex: Wildlife Detection (IoT + AI)`;
        
        return response;
    }

    compareSkills(message) {
        let response = "**Skill Comparison**:\n\n";
        
        if (message.includes('python') && message.includes('java')) {
            response += "**Python vs Java**:\n\n";
            response += "🐍 **Python**:\n";
            response += "• Primary language for ML/AI\n";
            response += "• Used in 4/6 major projects\n";
            response += "• Libraries: PyTorch, TensorFlow, Pandas\n\n";
            response += "☕ **Java**:\n";
            response += "• Enterprise applications\n";
            response += "• Used in Pocket Forecaster (89% accuracy)\n";
            response += "• Patterns: MVC, Strategy\n\n";
            response += "**Verdict**: Both strong, Python for AI, Java for scalable systems";
        } else {
            response += "Vinay has strong skills in:\n";
            response += "• Programming: Python, Java, SQL\n";
            response += "• ML/AI: Deep Learning, NLP, Computer Vision\n";
            response += "• Cloud: AWS (EC2, VPC)\n";
            response += "• Analytics: Power BI, Pandas";
        }
        
        return response;
    }

    respondHelp(message, intent) {
        let response = "🕵️ **Agent47 Enhanced AI - Capabilities**:\n\n";
        response += "**Standard Mode**:\n";
        response += "• Ask about skills, projects, experience\n";
        response += "• Get detailed intel on any topic\n\n";
        response += "**Special Modes**:\n";
        response += "🎯 Quiz Mode: 'start quiz' - Test your knowledge\n";
        response += "🔍 Compare Mode: 'compare X vs Y' - Side-by-side analysis\n";
        response += "🎲 Random Mode: 'tell me something random'\n\n";
        response += "**Smart Features**:\n";
        response += "• Follow-up questions\n";
        response += "• Context awareness\n";
        response += "• Suggested questions\n";
        response += "• Multi-topic handling";

        const suggestions = [
            "Start quiz mode",
            "Compare projects",
            "Tell me something random",
            "What are Vinay's skills?"
        ];

        return {
            text: response,
            suggestions: suggestions
        };
    }

    respondRandom(message, intent) {
        const randomFacts = [
            `🎯 Vinay achieved 99% accuracy in log classification - that's better than most humans!`,
            `🤖 He automated data validation so well, he saved 60% processing time. Now he jokes about automating coffee breaks!`,
            `🏆 Perfect 4.0 GPA at Northeastern while being a TA for Algorithms - that's dedication!`,
            `🐾 His wildlife detection system helps protect tribal communities using AI + IoT - tech for good!`,
            `📚 Published in Routledge and won Best Paper Award - research excellence!`,
            `☁️ AWS certified and deployed production infrastructure - cloud expertise!`,
            `📱 Built an AI that recommends smartphones with 89% accuracy using sentiment analysis!`
        ];

        const fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

        const suggestions = [
            "Tell me another random fact",
            "Tell me about this project",
            "What else is impressive?",
            "Start quiz mode"
        ];

        return {
            text: fact,
            suggestions: suggestions
        };
    }

    respondJoke(message, intent) {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😄",
            "How many programmers does it take to change a light bulb? None. It's a hardware problem! 💡",
            "Why did Vinay automate everything? Because manual work is so 2020! 🤖",
            "Why do Java developers wear glasses? Because they don't C#! 😎",
            "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺",
            "Why did the ML model break up with the dataset? Too many issues to process! 💔",
            "Vinay's code is so clean, even his bugs are well-documented! 📝"
        ];

        const joke = jokes[Math.floor(Math.random() * jokes.length)];

        const suggestions = [
            "Tell me another joke",
            "Tell me something serious",
            "What are his skills?",
            "Start quiz mode"
        ];

        return {
            text: joke,
            suggestions: suggestions
        };
    }

    intelligentFallback(message) {
        // Extract keywords
        const kg = this.knowledgeGraph;
        
        // Check for specific skills mentioned
        const allSkills = [
            ...kg.skills.programming.expert,
            ...kg.skills.aiml.techniques,
            ...kg.skills.aiml.models
        ];
        
        const mentionedSkills = allSkills.filter(skill => 
            message.includes(skill.toLowerCase())
        );
        
        if (mentionedSkills.length > 0) {
            return {
                text: `Yes! Vinay has experience with ${mentionedSkills.join(', ')}. He's used these in multiple projects. Want to know which projects or see his achievements with these technologies?`,
                suggestions: [
                    `Projects using ${mentionedSkills[0]}`,
                    "Tell me about his skills",
                    "Compare his projects",
                    "Start quiz mode"
                ]
            };
        }
        
        // Check for project names
        const projects = kg.projects;
        const mentionedProjects = projects.filter(p => 
            message.includes(p.name.toLowerCase())
        );
        
        if (mentionedProjects.length > 0) {
            const proj = mentionedProjects[0];
            return {
                text: `**${proj.name}** (${proj.category})\n\n${proj.description}\n\n**Tech**: ${proj.tech.join(', ')}\n${proj.accuracy ? `**Accuracy**: ${proj.accuracy}\n` : ''}**Impact**: ${proj.impact}`,
                suggestions: [
                    "Tell me about another project",
                    "Compare all projects",
                    "What tech did he use?",
                    "Show achievements"
                ]
            };
        }
        
        // Check if question
        if (message.includes('?')) {
            return {
                text: "🕵️ Interesting query! I can provide intel on:\n\n• Technical skills & tools\n• Projects & achievements\n• Work experience\n• Education & certifications\n• Publications & research\n• Availability & hiring\n\nOr try special modes:\n🎯 'quiz mode' | 🔍 'compare projects' | 🎲 'random fact'",
                suggestions: [
                    "What are his top skills?",
                    "Show me best projects",
                    "Start quiz mode",
                    "Compare his work"
                ]
            };
        }
        
        // Default helpful response
        return {
            text: "🕵️ Query unclear. Agent47 specializes in:\n\n**Intel Categories**:\n• Skills & Technologies\n• Projects & Portfolio\n• Work Experience\n• Education & Research\n• Contact & Availability\n\n**Special Commands**:\n• 'quiz mode' - Test your knowledge\n• 'compare X vs Y' - Comparisons\n• 'random' - Surprise me\n\nWhat interests you?",
            suggestions: [
                "Tell me about his skills",
                "Show me projects",
                "Start quiz mode",
                "Something random"
            ]
        };
    }

    // UI Methods
    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chat-message user-message">
                <div class="message-content">
                    <p>${this.escapeHtml(message)}</p>
                </div>
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    addBotMessage(message, suggestions = null) {
        const messagesContainer = document.getElementById('chatbot-messages');
        
        let suggestionsHTML = '';
        if (suggestions && suggestions.length > 0) {
            suggestionsHTML = '<div class="bot-suggestions">';
            suggestions.forEach(s => {
                suggestionsHTML += `<button class="quick-action" data-msg="${s}">${s}</button>`;
            });
            suggestionsHTML += '</div>';
        }
        
        const messageHTML = `
            <div class="chat-message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-user-secret"></i>
                </div>
                <div class="message-content">
                    <p>${this.formatMessage(message)}</p>
                    ${suggestionsHTML}
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    formatMessage(message) {
        // Convert markdown-style formatting
        message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        message = message.replace(/\n/g, '<br>');
        return message;
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingHTML = `
            <div class="chat-message bot-message typing-indicator" id="typing-indicator">
                <div class="message-avatar">
                    <i class="fas fa-user-secret"></i>
                </div>
                <div class="message-content">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    showSuggestions(input) {
        const suggestionsContainer = document.getElementById('chatbot-suggestions');
        
        if (input.length < 2) {
            suggestionsContainer.innerHTML = '';
            return;
        }
        
        // Generate smart suggestions based on input
        const allQuestions = Object.values(this.questionBank).flat();
        const filtered = allQuestions.filter(q => 
            q.toLowerCase().includes(input.toLowerCase())
        ).slice(0, 3);
        
        if (filtered.length > 0) {
            suggestionsContainer.innerHTML = filtered
                .map(s => `<button class="suggestion-item" onclick="agent47.sendMessage('${s}')">${s}</button>`)
                .join('');
        } else {
            suggestionsContainer.innerHTML = '';
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize Agent47 Enhanced AI
let agent47;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        agent47 = new Agent47AI();
    });
} else {
    agent47 = new Agent47AI();
}
