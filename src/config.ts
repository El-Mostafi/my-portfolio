export const config = {
    developer: {
        name: "Mohamed",
        fullName: "Mohamed El Mostafi",
        title: "Software Engineer | Full-Stack Developer",
        description: "Full-Stack Developer building reliable web applications and practical software solutions with Laravel, React, ASP.NET Core, Java/Spring Boot, and modern development practices."
    },
    social: {
        email: "mohamed.elmostafi0@gmail.com",
        location: "Meknes, Morocco",
        github: "https://github.com/El-Mostafi",
        linkedin: "https://www.linkedin.com/in/mohamed-el-mostafi-072683241",
        resume: "/mohamed_el_mostafi.pdf"
    },
    about: {
        title: "About Me",
        description: "I’m a software engineer and full-stack developer passionate about building reliable, scalable, and user-friendly digital solutions. I have hands-on experience developing ERP, SaaS, POS, and e-learning platforms using technologies such as Spring Boot, Laravel, React, .NET, REST APIs, Docker, and SQL/NoSQL databases. I enjoy solving complex problems, learning new technologies, and transforming ideas into applications that deliver real value."
    },
    experiences: [
        {
            position: "Full-stack Development Intern (Final-Year Engineering Internship)",
            company: "E-Solution, Morocco",
            period: "February–July 2026",
            highlights: [
                "Contributed to the design and implementation of new features within SEMS, a purchasing ERP, with a primary focus on the E-Sourcing module.",
                "Developed an RFQ duplication feature, enabling buyers to reuse existing consultations, reduce data re-entry, and accelerate the creation of similar requests for quotation.",
                "Improved and stabilised the reverse-auction workflow across the buyer back office and supplier portal, correcting functional issues and ensuring consistency between statuses, permissions, offers, and attribution processes.",
                "Designed and implemented a Scorecard providing clear performance indicators and a consolidated view of E-Sourcing activities to support monitoring and decision-making.",
                "Contributed to the evolution of sems.ma by dynamically adapting homepage content to target markets and preparing multilingual support for international expansion.",
                "Worked in an Agile environment using Jira, Git and GitLab, handling bug fixes, functional adaptations, usability improvements, testing, and functional validation."
            ]
        },
        {
            position: "Full-stack and DevOps Intern (Application Internship)",
            company: "ITWay Solutions, Morocco",
            period: "July–September 2025",
            highlights: [
                "Developed an innovative automated system for generating online raffle websites, allowing clients to instantly create and customize raffle platforms from templates.",
                "Designed and implemented a multi-user architecture (Admin/Client) using Laravel, Inertia.js, and React.",
                "Set up a robust CI/CD pipeline with Docker and GitHub Actions for continuous deployment automation.",
                "Implemented dynamic deployment of client sites through automated generation of Nginx Server Blocks and integration of Certbot for SSL certificates (Let's Encrypt).",
                "Integrated Soketi (Pusher) for WebSockets, enabling real-time notifications for raffle creation, publication, or deletion."
            ]
        },
        {
            position: "Full-stack Development Intern (Initiation Internship)",
            company: "MedYouIn, Morocco",
            period: "July–August 2024",
            highlights: [
                "Enhanced a point-of-sale application by developing back-end features, improving application interactivity, and implementing secure user authentication.",
                "Implemented role-based access control, developed reporting features, and enhanced the user interface while improving overall application performance.",
                "Collaborated through GitHub, gaining practical experience in full-stack development, security, and teamwork."
            ]
        }
    ],
    education: [
        {
            degree: "Software Engineering",
            institution: "National School of Applied Sciences (ENSA)",
            period: "2023\u20132026",
            location: "Fes, Morocco"
        },
        {
            degree: "Integrated Preparatory Classes",
            institution: "National School of Applied Sciences (ENSA)",
            period: "2021\u20132023",
            location: "Fes, Morocco"
        },
        {
            degree: "High School Diploma (Physics)",
            institution: "Anassi High School",
            period: "2020\u20132021",
            location: "Meknes, Morocco"
        }
    ],
    projects: [
        {
            id: 1,
            title: "E-Learning & Recommendation System",
            category: "E-Learning / Recommendation",
            technologies: "MongoDB, Express, React, Node.js",
            image: "/images/projects/e-learning-recommendation.png",
            link: "https://learn-m3a-luminara.vercel.app/",
            description: "An engagement-focused e-learning platform with a hybrid recommendation system that combines collaborative filtering and content-based recommendations, a REST API, Stripe payments, and Cloudinary media management."
        },
        {
            id: 2,
            title: "ZeroRattrapage - E-Learning Platform",
            category: "E-Learning Platform",
            technologies: "ASP.NET Core, Blazor, SQL Server",
            image: "/images/projects/zerorattrapage.png",
            link: "http://zerorattrapage.runasp.net/courses/etudiant/decouvrir",
            description: "An e-learning platform designed to improve student performance, with real-time chat and course discovery features."
        },
        {
            id: 3,
            title: "Equipment Donation Platform for Supporting Religious Education",
            category: "Charity / Community Platform",
            technologies: "React.js, TypeScript, Tailwind CSS, ASP.NET Core MVC, SQL Server",
            image: "/images/projects/equipment-donation-platform.png",
            link: "https://tajhizdouaat.vercel.app",
            description: "A charity platform that supports preachers and scholars by funding recording and broadcasting equipment, with transparent fundraising goals, supported cities, initiative progress, and donor communication."
        },
        {
            id: 4,
            title: "Association Website - Al-Rahma Association",
            category: "Association / Community Website",
            technologies: "React.js, TypeScript, Tailwind CSS, Spring Boot, PostgreSQL",
            image: "/images/projects/al-rahma-association.png",
            link: "https://al-rahma-association.vercel.app/",
            description: "A modern, responsive website that presents Al-Rahma Association's mission, programs, news, and educational, social, and charitable initiatives in a clear, accessible experience for visitors."
        }
    ],
    contact: {
        email: "mohamed.elmostafi0@gmail.com",
        phone: "+212 695 722 547"
    },
    skills: {
        profile: {
            title: "END-TO-END SOFTWARE DEVELOPMENT",
            description: "From business requirements to reliable production systems",
            details: "I transform functional requirements into maintainable software by modelling data, designing APIs, building responsive interfaces, integrating real-time features, writing tests and automating deployment. I focus on clean architecture, practical solutions and applications that are easy to evolve.",
            capabilities: ["API Design", "Backend Development", "Frontend Development", "Database Design", "Real-Time Systems", "Testing", "CI/CD", "Deployment Automation"]
        }
    }
};