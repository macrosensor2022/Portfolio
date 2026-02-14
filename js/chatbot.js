// ===========================
// Terminal-Style AI Chatbot
// ===========================

class PortfolioBot {
    constructor() {
        this.isOpen = false;
        this.conversationContext = [];
        this.lastTopic = null;
        
        // Comprehensive knowledge base
        this.knowledge = {
            // Personal Info
            name: "Vinay Varshigan S.J",
            location: "Portland, Maine",
            email: "sjvinay357@gmail.com",
            phone: "+1 (774) 457-0864",
            linkedin: "linkedin.com/in/vinaysj2003",
            github: "github.com/macrosensor2022",
            
            // Education
            currentDegree: "MS in Computer Science",
            university: "Northeastern University",
            gpa: "4.0",
            role: "Teaching Assistant for Algorithms (CS5800)",
            previousDegree: "Bachelor of Engineering in Computer Science",
            previousUniversity: "Anna University",
            
            // Skills
            languages: ["Python", "Java", "SQL"],
            mlSkills: ["Machine Learning", "Deep Learning", "CNNs", "Transformers", "NLP", "PyTorch", "TensorFlow", "BERT", "ResNet50"],
            dataEngineering: ["ETL Pipelines", "MySQL", "SQL Optimization", "Docker", "Linux"],
            cloud: ["AWS", "EC2", "VPC", "Auto Scaling"],
            analytics: ["Power BI", "DAX", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            tools: ["Git", "REST APIs", "Postman", "Scikit-learn"],
            
            // Experience highlights
            experiences: {
                current: "Teaching Assistant at Northeastern University (Jan 2026 - Present)",
                besant: "Data Scientist Intern at Besant Technologies (Feb 2025 - Aug 2025) - 60% processing time reduction, 20% query latency improvement",
                cyberhub: "Secretary & Creative Group Head at SVCE CyberHub (Apr 2023 - Dec 2024) - 3x social media engagement",
                bluebase: "Software Developer Intern at Bluebase (Jun 2023 - Jul 2023) - AWS infrastructure deployment"
            },
            
            // Projects
            projects: {
                pocketForecaster: "AI Smartphone Recommendation with 89% accuracy using Java, BERT, VADER, NLP",
                logClassification: "Log Classification System with 99% accuracy using Python, BERT, DBSCAN",
                wildlifeDetection: "Wildlife Detection & Emergency System using ResNet50, Transformers, IoT sensors, ESP32",
                smartFood: "Smart Food & Allergen Detection with 93% accuracy using ResNet50, InceptionV3",
                retailDashboard: "Retail Sales Dashboard using Power BI, DAX",
                ecommerce: "E-commerce Text Classification using FastText"
            },
            
            // Publications
            publications: [
                "Routledge book chapter on blockchain, smart contracts, and AI-based fraud detection",
                "Best Paper Award for heart disease prediction (83% accuracy)",
                "Patent under review for AWS-deployed IoT water monitoring system"
            ],
            
            // Certifications
            certifications: ["AWS Cloud Essentials", "Introduction to IoT - NPTEL IIT", "Foundations of Software Engineering - NEU"],
            
            // Availability
            availability: true,
            lookingFor: ["NLP", "Software Engineering", "AI/ML Internships"],
            
            // Achievements
            achievements: [
                "Perfect 4.0 GPA at Northeastern University",
                "60% reduction in data processing time",
                "20% SQL query latency improvement",
                "3x increase in social media engagement",
                "99% accuracy in log classification",
                "Best Paper Award winner"
            ]
        };
        
        this.responses = {
            greetings: [
                "🕵️ Agent47 here. Mission: Brief you on Vinay Varshigan. What intel do you need - skills, projects, or experience?",
                "Agent47 reporting. I have comprehensive data on Vinay's capabilities. What information are you seeking?",
                "Target acquired. 🎯 I'm Agent47, your intelligence source on Vinay Varshigan. How can I assist?"
            ],
            goodbye: [
                "🕵️ Mission complete. Agent47 signing off. Contact Vinay directly for mission briefing! 🚀",
                "Agent47 out. Don't forget to review the project files and establish contact with Vinay. Over and out! 👋"
            ],
            jokes: [
                "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😄",
                "How many programmers does it take to change a light bulb? None. It's a hardware problem! 💡",
                "Why did Vinay automate everything? Because manual work is so 2020! 🤖",
                "Why do Java developers wear glasses? Because they don't C#! 😎",
                "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺"
            ],
            thanks: [
                "🕵️ Roger that. Agent47 standing by for further inquiries.",
                "Mission acknowledged. Any additional intelligence needed?",
                "Copy that. Agent47 ready for next query."
            ],
            appreciation: [
                "Thank you! Vinay has worked really hard on his skills and projects! 🌟",
                "I'll pass that along! Vinay would love to hear from you directly at sjvinay357@gmail.com!",
                "Thanks for the kind words! Feel free to connect with Vinay on LinkedIn or via email!"
            ]
        };
        
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.loadChatHistory();
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
                                Active Mission
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
                        <div class="terminal-prompt-chat">agent47@mission:~$</div>
                        <p>🕵️ Agent47 Activated - Intel on Vinay Varshigan</p>
                        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 10px;">Mission Briefing: Extract information about skills, projects, experience, and more.</p>
                        <div class="quick-actions">
                            <button class="quick-action" data-msg="Tell me about Vinay's skills">💻 Skills Intel</button>
                            <button class="quick-action" data-msg="What projects has Vinay worked on?">🚀 Project Files</button>
                            <button class="quick-action" data-msg="Tell me about his experience">💼 Career Log</button>
                            <button class="quick-action" data-msg="How can I contact Vinay?">📧 Contact Protocol</button>
                        </div>
                    </div>
                </div>

                <div class="chatbot-input-area">
                    <div class="chatbot-suggestions" id="chatbot-suggestions"></div>
                    <div class="chatbot-input-wrapper">
                        <input 
                            type="text" 
                            id="chatbot-input" 
                            placeholder="Ask me anything about Vinay..."
                            autocomplete="off"
                        />
                        <button id="chatbot-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div class="chatbot-footer">
                        <span>🕵️ Agent47 Intelligence System</span>
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
                    this.addBotMessage(this.getRandomResponse('greetings'));
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
        
        // Clear suggestions
        document.getElementById('chatbot-suggestions').innerHTML = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addBotMessage(response);
        }, 800 + Math.random() * 1000);
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        this.conversationContext.push(lowerMessage);
        
        // Keep only last 5 messages for context
        if (this.conversationContext.length > 5) {
            this.conversationContext.shift();
        }
        
        // Greetings
        if (this.matchPattern(lowerMessage, ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo', 'howdy'])) {
            return this.getRandomResponse('greetings');
        }
        
        // Thanks/Appreciation
        if (this.matchPattern(lowerMessage, ['thanks', 'thank you', 'thx', 'appreciate', 'helpful'])) {
            return this.getRandomResponse('thanks');
        }
        
        // Compliments
        if (this.matchPattern(lowerMessage, ['impressive', 'amazing', 'awesome', 'great', 'cool', 'nice', 'good work', 'excellent', 'outstanding', 'wow'])) {
            return this.getRandomResponse('appreciation');
        }
        
        // Name/Who questions
        if (this.matchPattern(lowerMessage, ['who are you', 'your name', 'who is', 'tell me about vinay', 'about him', 'introduce'])) {
            return `I'm Vinay Varshigan S.J, a Master's student in Computer Science at Northeastern University with a perfect 4.0 GPA. Currently serving as a Teaching Assistant for Algorithms. I'm passionate about AI/ML, Data Engineering, and building intelligent systems that solve real-world problems! 🚀`;
        }
        
        // Location
        if (this.matchPattern(lowerMessage, ['where', 'location', 'live', 'based', 'city', 'place'])) {
            return `Vinay is currently based in ${this.knowledge.location}. 📍`;
        }
        
        // Contact - Specific
        if (this.matchPattern(lowerMessage, ['email', 'mail address', 'send email'])) {
            return `You can email Vinay at ${this.knowledge.email} 📧`;
        }
        if (this.matchPattern(lowerMessage, ['phone', 'call', 'number', 'telephone'])) {
            return `You can call Vinay at ${this.knowledge.phone} 📞`;
        }
        if (this.matchPattern(lowerMessage, ['linkedin', 'social media', 'professional network'])) {
            return `Connect with Vinay on LinkedIn: ${this.knowledge.linkedin} 💼`;
        }
        if (this.matchPattern(lowerMessage, ['github', 'code', 'repository', 'repo'])) {
            return `Check out Vinay's code on GitHub: ${this.knowledge.github} 💻`;
        }
        if (this.matchPattern(lowerMessage, ['contact', 'reach', 'get in touch', 'communicate'])) {
            return `You can reach Vinay at:\n📧 Email: ${this.knowledge.email}\n📞 Phone: ${this.knowledge.phone}\n💼 LinkedIn: ${this.knowledge.linkedin}\n💻 GitHub: ${this.knowledge.github}`;
        }
        
        // Education
        if (this.matchPattern(lowerMessage, ['education', 'degree', 'university', 'college', 'study', 'student', 'gpa', 'grade', 'academic'])) {
            return `Vinay is pursuing his ${this.knowledge.currentDegree} at ${this.knowledge.university} with a perfect ${this.knowledge.gpa} GPA! 🎓 He also serves as a ${this.knowledge.role}. He previously completed his ${this.knowledge.previousDegree} from ${this.knowledge.previousUniversity}.`;
        }
        
        // Skills - General
        if (this.matchPattern(lowerMessage, ['skill', 'technology', 'tech stack', 'know', 'proficient', 'expertise', 'good at', 'capabilities', 'competencies'])) {
            return `Vinay's tech stack includes:\n\n💻 Languages: ${this.knowledge.languages.join(', ')}\n🤖 ML/AI: ${this.knowledge.mlSkills.slice(0, 5).join(', ')}\n☁️ Cloud: ${this.knowledge.cloud.join(', ')}\n📊 Analytics: Power BI, DAX, Pandas, NumPy\n🔧 Tools: Docker, Linux, Git, REST APIs\n\nHe's experienced in building scalable ML models, data pipelines, and cloud infrastructure!`;
        }
        
        // Programming Languages
        if (this.matchPattern(lowerMessage, ['python', 'java', 'sql', 'programming language', 'code'])) {
            const langs = [];
            if (lowerMessage.includes('python')) langs.push('Python');
            if (lowerMessage.includes('java')) langs.push('Java');
            if (lowerMessage.includes('sql')) langs.push('SQL');
            
            if (langs.length > 0) {
                return `Yes! Vinay is proficient in ${langs.join(', ')}. He uses them extensively for ML development, backend systems, and data engineering. Check out his projects to see them in action! 💻`;
            }
            return `Vinay programs in ${this.knowledge.languages.join(', ')}. He's used these to build everything from AI models to cloud infrastructure! 🚀`;
        }
        
        // Machine Learning / AI
        if (this.matchPattern(lowerMessage, ['machine learning', 'ml', 'ai', 'artificial intelligence', 'deep learning', 'neural network', 'model', 'bert', 'transformer', 'cnn', 'resnet', 'pytorch', 'tensorflow'])) {
            return `Vinay has extensive ML/AI experience! 🤖\n\nHe's built:\n• Sentiment analysis with BERT & VADER (89% accuracy)\n• Log classification system (99% accuracy)\n• Wildlife detection with ResNet50 & Transformers\n• Food allergen detection (93% accuracy)\n\nHe works with PyTorch, TensorFlow, CNNs, Transformers, and various NLP techniques. His projects combine computer vision, NLP, and traditional ML!`;
        }
        
        // NLP
        if (this.matchPattern(lowerMessage, ['nlp', 'natural language', 'text', 'sentiment', 'language processing'])) {
            return `Vinay has strong NLP expertise! He's implemented sentiment analysis using VADER and BERT, log classification with SentenceTransformers, and text classification systems. He's currently taking an NLP course at Northeastern and has applied these skills in multiple production projects! 📝`;
        }
        
        // Cloud / AWS
        if (this.matchPattern(lowerMessage, ['aws', 'amazon', 'cloud', 'ec2', 'vpc', 'azure', 'gcp', 'deployment'])) {
            return `Vinay has hands-on AWS experience! ☁️\n\nHe's:\n• Designed and deployed scalable infrastructure (VPC, EC2, Auto Scaling)\n• Automated deployment workflows with Linux scripts\n• AWS Cloud Essentials certified\n• Built an AWS-deployed IoT system (patent pending)\n\nHe understands cloud architecture, scalability, and production deployment best practices!`;
        }
        
        // Data Engineering
        if (this.matchPattern(lowerMessage, ['data engineering', 'etl', 'pipeline', 'data pipeline', 'mysql', 'database', 'sql optimization'])) {
            return `Vinay is experienced in Data Engineering! 🔧\n\nHe's built ETL pipelines, optimized SQL queries (20% latency reduction), automated data validation workflows (60% time saved), and worked with MySQL databases at scale. He combines Python, SQL, Docker, and cloud tech to create robust data infrastructure!`;
        }
        
        // Data Analytics / Power BI
        if (this.matchPattern(lowerMessage, ['analytics', 'power bi', 'dashboard', 'visualization', 'dax', 'data analysis', 'bi'])) {
            return `Vinay creates powerful data visualizations! 📊\n\nHe's skilled in Power BI with DAX measures, built interactive retail sales dashboards, and uses Pandas, Matplotlib, and Seaborn for analysis. He can transform raw data into actionable insights for stakeholders!`;
        }
        
        // Experience
        if (this.matchPattern(lowerMessage, ['experience', 'work', 'job', 'worked', 'internship', 'career', 'employment', 'companies'])) {
            return `Vinay has impressive work experience! 💼\n\nCurrently:\n• ${this.knowledge.experiences.current}\n\nPrevious roles:\n• Data Scientist Intern at Besant Technologies (60% time savings!)\n• Secretary at SVCE CyberHub (3x engagement growth)\n• Software Developer Intern at Bluebase (AWS deployment)\n\nHe's worked across ML, data engineering, cloud infrastructure, and technical leadership!`;
        }
        
        // Teaching Assistant
        if (this.matchPattern(lowerMessage, ['teaching', 'ta', 'assistant', 'algorithms', 'cs5800'])) {
            return `Vinay is currently a Teaching Assistant for Algorithms (CS5800) at Northeastern University! 👨‍🏫 He helps graduate students master advanced computational problem-solving, conducts office hours, grades assignments, and collaborates with faculty on course materials.`;
        }
        
        // Projects - General
        if (this.matchPattern(lowerMessage, ['project', 'built', 'created', 'developed', 'portfolio'])) {
            return `Vinay has built amazing projects! 🚀\n\n Featured:\n1. Pocket Forecaster - AI smartphone recommendation (89% accuracy)\n2. Log Classification System - 99% accuracy using BERT\n3. Wildlife Detection - Real-time IoT system with ResNet50\n4. Smart Food Solutions - Allergen detection (93% accuracy)\n5. Retail Dashboard - Power BI analytics\n6. E-commerce Classifier - FastText text classification\n\nEach solves real-world problems with cutting-edge tech!`;
        }
        
        // Specific Projects
        if (this.matchPattern(lowerMessage, ['pocket forecaster', 'smartphone', 'phone recommendation'])) {
            return `Pocket Forecaster is Vinay's AI-powered smartphone recommendation engine! 📱\n\nBuilt with Java (MVC, Strategy Pattern), it uses hybrid sentiment analysis (VADER + BERT) to analyze customer reviews and recommend phones based on budget, usage, and OS preference. Achieved 89%+ accuracy! The system also suggests personalized add-ons.`;
        }
        if (this.matchPattern(lowerMessage, ['log classification', 'log system', 'logs'])) {
            return `Vinay's Log Classification System achieved 99% accuracy! 📋\n\nIt's a hybrid multi-stage pipeline combining regex, BERT embeddings, and semantic clustering (DBSCAN) to automatically categorize system logs across 9 classes including security alerts, errors, and resource usage. Built with Python and SentenceTransformers!`;
        }
        if (this.matchPattern(lowerMessage, ['wildlife', 'animal detection', 'iot sensor'])) {
            return `The Wildlife Detection & Emergency System is impressive! 🐾\n\nIt uses ResNet50 and Transformer models with IoT sensors (ESP32-CAM) to detect animals in real-time and send alerts via RF/mesh networks even without internet! Built for tribal safety in remote regions, it classifies animals and assigns danger levels.`;
        }
        if (this.matchPattern(lowerMessage, ['food', 'allergen', 'nutrition'])) {
            return `Smart Food Solutions detects food and allergens with 93% accuracy! 🍽️\n\nUsing ResNet50 and InceptionV3 with Nutritionix API integration, it provides real-time allergen identification and nutritional insights. Perfect for people with food allergies or dietary restrictions!`;
        }
        
        // Publications
        if (this.matchPattern(lowerMessage, ['publication', 'paper', 'research', 'published', 'patent', 'routledge', 'book'])) {
            return `Vinay has impressive publications! 📚\n\n• Routledge book chapter on blockchain, smart contracts, and AI-based fraud detection\n• Best Paper Award for heart disease prediction (83% accuracy)\n• Patent under review for AWS-deployed IoT water monitoring system\n\nHis research combines cutting-edge tech with practical applications!`;
        }
        
        // Certifications
        if (this.matchPattern(lowerMessage, ['certification', 'certified', 'certificate', 'credential', 'badge'])) {
            return `Vinay holds these certifications: 🏆\n\n• AWS Cloud Essentials (Amazon Web Services)\n• Introduction to IoT (NPTEL IIT)\n• Foundations of Software Engineering (Northeastern University)\n\nYou can view them in the Certifications section!`;
        }
        
        // Hiring / Availability
        if (this.matchPattern(lowerMessage, ['hire', 'hiring', 'job', 'opportunity', 'available', 'open to work', 'looking for', 'full time', 'position', 'role'])) {
            return `Yes! Vinay is actively seeking NLP, Software Engineering, or AI/ML internships! 💼\n\nWith his:\n• Perfect 4.0 GPA\n• TA experience at Northeastern\n• Multiple internships\n• Published research\n• Impressive project portfolio\n\nHe's ready to make an impact! Contact him at ${this.knowledge.email}`;
        }
        
        // Salary / Compensation
        if (this.matchPattern(lowerMessage, ['salary', 'compensation', 'pay', 'wage', 'benefits'])) {
            return `For salary discussions, please reach out directly to Vinay at ${this.knowledge.email}. He's open to discussing compensation based on the role and responsibilities! 💰`;
        }
        
        // Strengths / Why hire
        if (this.matchPattern(lowerMessage, ['why', 'strength', 'advantage', 'best', 'stand out', 'unique', 'what makes'])) {
            return `Vinay stands out because:\n\n✅ Perfect 4.0 GPA at top university\n✅ Real impact: 60% time savings, 99% accuracy\n✅ Full-stack: ML + Data Engineering + Cloud\n✅ Published researcher with Best Paper Award\n✅ Teaching experience (Algorithms TA)\n✅ Multiple production projects\n✅ Strong communication skills\n\nHe combines academic excellence with practical experience!`;
        }
        
        // Weaknesses
        if (this.matchPattern(lowerMessage, ['weakness', 'improve', 'learning', 'challenge'])) {
            return `Vinay believes in continuous learning! 📚 He's always exploring new technologies, currently focusing on advanced transformer architectures and cloud-native data engineering. He sees challenges as opportunities to grow and improve!`;
        }
        
        // Hobbies / Personal
        if (this.matchPattern(lowerMessage, ['hobby', 'hobbies', 'free time', 'fun', 'interest', 'personal'])) {
            return `Beyond coding, Vinay enjoys automating workflows (he automated his coffee breaks!), exploring new ML research papers, and leading technical events. He's passionate about using technology to solve real-world problems! ☕🤖`;
        }
        
        // Teamwork
        if (this.matchPattern(lowerMessage, ['team', 'collaborate', 'collaboration', 'work with others'])) {
            return `Vinay is a great team player! 🤝 He's led cross-functional teams at SVCE CyberHub, collaborated on wildlife detection systems, worked with senior engineers at Bluebase, and currently helps students as a TA. He values communication and collaboration!`;
        }
        
        // Achievements
        if (this.matchPattern(lowerMessage, ['achievement', 'accomplish', 'award', 'recognition', 'success'])) {
            return `Vinay's achievements include:\n\n🏆 Perfect 4.0 GPA at Northeastern\n🏆 Best Paper Award winner\n🏆 60% processing time reduction\n🏆 99% ML accuracy\n🏆 3x social media engagement growth\n🏆 Published researcher\n🏆 Patent applicant\n\nHe consistently delivers exceptional results!`;
        }
        
        // Jokes
        if (this.matchPattern(lowerMessage, ['joke', 'funny', 'laugh', 'humor', 'make me laugh'])) {
            return this.getRandomResponse('jokes');
        }
        
        // Goodbye
        if (this.matchPattern(lowerMessage, ['bye', 'goodbye', 'see you', 'later', 'gotta go'])) {
            return this.getRandomResponse('goodbye');
        }
        
        // Questions about the bot
        if (this.matchPattern(lowerMessage, ['who are you', 'what are you', 'are you ai', 'are you bot', 'chatbot', 'agent47', 'agent 47'])) {
            return `🕵️ I'm Agent47 - Vinay's intelligent portfolio assistant. Codename: Information Retrieval Specialist. Mission parameters: Provide comprehensive intel on Vinay's skills, experience, projects, and facilitate contact. I utilize advanced pattern recognition and natural language processing. What intelligence do you require?`;
        }
        
        // Help
        if (this.matchPattern(lowerMessage, ['help', 'what can you', 'how to use', 'commands'])) {
            return `🕵️ Agent47 Intelligence Categories:\n\n💻 Technical Skills & Arsenal\n💼 Mission History (Experience)\n🚀 Completed Operations (Projects)\n🎓 Training & Credentials\n📚 Published Intelligence\n📧 Secure Contact Channels\n💼 Availability Status\n\nIssue your query. Example: "What skills does Vinay have?" or "Intel on his projects"`;
        }
        
        // Fallback - Try to extract keywords and provide relevant info
        return this.intelligentFallback(lowerMessage);
    }
    
    matchPattern(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }
    
    intelligentFallback(message) {
        // Extract keywords and try to match to knowledge
        const words = message.split(' ');
        
        // Check for skill keywords
        const allSkills = [...this.knowledge.languages, ...this.knowledge.mlSkills, ...this.knowledge.dataEngineering, ...this.knowledge.cloud, ...this.knowledge.analytics];
        const mentionedSkills = allSkills.filter(skill => message.includes(skill.toLowerCase()));
        
        if (mentionedSkills.length > 0) {
            return `Yes! Vinay has experience with ${mentionedSkills.join(', ')}. He's used these in multiple projects. Want to know more about his skills or see specific projects using these technologies?`;
        }
        
        // Check if asking a question
        if (message.includes('?')) {
            return `🕵️ Interesting query detected. Agent47 intelligence database includes:\n\n• Technical Arsenal (Skills)\n• Mission History (Experience)\n• Completed Operations (Projects)\n• Training Records (Education)\n• Published Intelligence\n• Contact Protocols\n• Availability Status\n\nSpecify your intel requirement.`;
        }
        
        // Default helpful response
        return `🕵️ Query unclear. Agent47 standing by for clarification.\n\nAvailable intelligence categories:\n• Technical capabilities\n• Career operations\n• Project files\n• Academic records\n• Contact channels\n• Hiring availability\n\nPlease refine your request.`;
    }

    getRandomResponse(category) {
        const responses = this.responses[category];
        if (!responses || responses.length === 0) {
            return "🕵️ Agent47 ready. Request intel on: skills, experience, projects, or contact protocols.";
        }
        return responses[Math.floor(Math.random() * responses.length)];
    }

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
        this.saveChatHistory();
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chat-message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${this.escapeHtml(message)}</p>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
        this.saveChatHistory();
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
        
        const suggestions = [
            "Tell me about Vinay's skills",
            "What projects has he worked on?",
            "Tell me about his experience",
            "What is his education background?",
            "How can I contact him?",
            "Is he available for hire?",
            "Tell me about his AWS experience",
            "What ML projects has he done?"
        ];
        
        const filtered = suggestions.filter(s => 
            s.toLowerCase().includes(input.toLowerCase())
        ).slice(0, 3);
        
        if (filtered.length > 0) {
            suggestionsContainer.innerHTML = filtered
                .map(s => `<button class="suggestion-item" onclick="portfolioBot.sendMessage('${s}')">${s}</button>`)
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

    saveChatHistory() {
        const messages = document.getElementById('chatbot-messages').innerHTML;
        localStorage.setItem('agent47-history', messages);
    }

    loadChatHistory() {
        const history = localStorage.getItem('agent47-history');
        if (history) {
            document.getElementById('chatbot-messages').innerHTML = history;
        }
    }
}

// Initialize chatbot when DOM is ready
let portfolioBot;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        portfolioBot = new PortfolioBot();
        console.log('%c🕵️ Agent47 System Activated', 'color: #64ffda; font-size: 16px; font-weight: bold;');
        console.log('%cCodename: Portfolio Intelligence Assistant', 'color: #8892b0; font-size: 12px;');
        console.log('%cMission: Provide comprehensive intel on Vinay Varshigan', 'color: #8892b0; font-size: 12px;');
    });
} else {
    portfolioBot = new PortfolioBot();
    console.log('%c🕵️ Agent47 System Activated', 'color: #64ffda; font-size: 16px; font-weight: bold;');
    console.log('%cCodename: Portfolio Intelligence Assistant', 'color: #8892b0; font-size: 12px;');
    console.log('%cMission: Provide comprehensive intel on Vinay Varshigan', 'color: #8892b0; font-size: 12px;');
}
