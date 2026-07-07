export const portfolioData = {
  personalInfo: {
    name: "G Vallabh Neelkant",
    title: "Software QA Engineer | Frontend Developer | Computer Science Engineer",
    description: "Passionate Computer Science Engineer with experience in Software Testing, Quality Assurance, Frontend Development, and building reliable web applications. Skilled in Manual Testing, Automation fundamentals, React.js, API Testing, and modern software development practices.",
    resumeUrl: "#", // Will hook up to a generated resume file
    socials: {
      github: "https://github.com", // Placeholder, will set link or let user customize
      linkedin: "https://linkedin.com",
      email: "vallabhneelkant97@gmail.com",
      phone: "+91-9703052003"
    }
  },
  
  about: {
    bio: "I am a Computer Science Engineering graduate passionate about creating reliable and user-friendly software solutions. I have hands-on experience in Software Testing, Quality Assurance, Frontend Development, and Web Technologies. I specialize in identifying software defects, writing test cases, performing functional testing, API testing, and collaborating with development teams to deliver high-quality applications.",
    stats: [
      { id: "stat-projects", value: "2+", label: "Major Projects" },
      { id: "stat-exp", value: "Internship", label: "Frontend & QA Experience" },
      { id: "stat-cert", value: "4+", label: "Professional Certifications" },
      { id: "stat-sdlc", value: "Full", label: "SDLC & STLC Knowledge" }
    ]
  },

  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "React.js", level: 80 }
      ]
    },
    {
      category: "Testing",
      items: [
        { name: "Manual Testing", level: 95 },
        { name: "Functional Testing", level: 90 },
        { name: "Regression Testing", level: 90 },
        { name: "UI Testing", level: 85 },
        { name: "Smoke Testing", level: 85 },
        { name: "Cross Browser Testing", level: 80 },
        { name: "Test Case Design", level: 90 },
        { name: "Bug Reporting", level: 95 }
      ]
    },
    {
      category: "Automation & QA Tools",
      items: [
        { name: "Selenium Basics", level: 60 },
        { name: "Playwright", level: 55 },
        { name: "Postman API Testing", level: 75 },
        { name: "Jira", level: 80 },
        { name: "Browser Developer Tools", level: 85 }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "SQL", level: 80 },
        { name: "Oracle SQL", level: 75 },
        { name: "CRUD Operations", level: 85 },
        { name: "Joins & Subqueries", level: 80 }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Google Colab", level: 75 }
      ]
    }
  ],

  experience: [
    {
      company: "AI Axiss",
      role: "Frontend Developer & QA Tester Intern",
      period: "Internship",
      project: "StudentAlumni.AI Platform",
      responsibilities: [
        "Developed responsive UI components using React.js, JavaScript, HTML, and CSS.",
        "Converted Figma designs into functional web interfaces.",
        "Integrated chatbot modules improving user experience.",
        "Tested Student, Mentor, Alumni, College, and Admin modules.",
        "Created test scenarios and executed test cases.",
        "Performed Functional Testing, UI Testing, Regression Testing, and Cross Browser Testing.",
        "Reported and tracked defects using testing principles.",
        "Worked with developers in a collaborative Agile methodology environment."
      ]
    }
  ],

  projects: [
    {
      title: "Improving Digital Forensic Security: Secure Storage Model using Authentication and Encryption",
      description: "A secure cloud-based digital forensic storage system designed to protect investigation data using blockchain and encryption. Ensures integrity and chain of custody for digital evidence.",
      technologies: ["Python", "Blockchain", "Encryption", "Security Algorithms"],
      features: [
        "Secure evidence storage",
        "Multi-factor authentication system",
        "AES/RSA data encryption",
        "Secure block verification",
        "Tamper-resistant audit trailing"
      ],
      type: "Security & Blockchain"
    },
    {
      title: "DL-IDS: Deep Learning Based Intrusion Detection System for IoT Security",
      description: "Deep Learning based cybersecurity application designed for detecting and classifying network attacks in resource-constrained IoT environments.",
      technologies: ["Python", "Deep Learning", "Machine Learning", "Web Interface"],
      features: [
        "Real-time network traffic analysis",
        "Intrusion attack detection and alerting",
        "Optimized feature selection algorithms",
        "Interactive security monitoring dashboard",
        "Detects DoS, Probe, U2R, R2L attacks"
      ],
      type: "Cybersecurity & DL"
    }
  ],

  education: [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "SR International Institute of Technology",
      location: "Hyderabad, Telangana",
      period: "2022 - 2026",
      grade: "CGPA: 6.5/10"
    },
    {
      degree: "Intermediate MPC",
      institution: "Sri Chaitanya Junior College",
      location: "Hyderabad, Telangana",
      period: "2020 - 2022",
      grade: "Percentage: 81%"
    },
    {
      degree: "CBSE Class X",
      institution: "Sapphire International School",
      location: "Hyderabad, India",
      period: "Completed 2020",
      grade: "Percentage: 78%"
    }
  ],

  certifications: [
    {
      name: "Manual Testing Certification",
      issuer: "Great Learning Academy",
      date: "2025",
      credentialUrl: "#"
    },
    {
      name: "Generative AI Concepts",
      issuer: "Google / Coursera",
      date: "2025",
      credentialUrl: "#"
    },
    {
      name: "Cloud Computing Certification",
      issuer: "Acmegrade",
      date: "2024",
      credentialUrl: "#"
    },
    {
      name: "Artificial Intelligence Hackathon",
      issuer: "Participant/Winner Certification",
      date: "2024",
      credentialUrl: "#"
    }
  ]
};
