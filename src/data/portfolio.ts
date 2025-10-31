/**
 * ============================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================
 * 
 * 🎯 QUICK START:
 * - New project? Add it to the `projects` array below
 * - New skill? Add it to the `skills` array
 * - Need templates? Check /data/QUICK_REFERENCE.md
 * - Need help? Check /data/START_HERE.md
 * 
 * This file contains all the content for your portfolio website.
 * Update this file whenever you learn new skills, complete projects,
 * or want to change any information displayed on your site.
 * 
 * Simply edit the values below and save - no need to touch component files!
 * 
 * ============================================
 */

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "S R Muhilan", // Full name (Hero section will uppercase it)
  tagline: "SYSTEM_ENGINEER",
  email: "muhilan.sr2024@vitstudent.ac.in",
  phone: "+91 9487493466",
  location: "Chennai, Tamil Nadu, India",
  
  // Brief bio sections
  bio: {
    intro: "Tech enthusiast with a deep passion for the intersection of software engineering and hardware design. From writing high-performance algorithms to designing digital circuits in Verilog, I thrive at every layer of the computing stack.",
    extended: "My fascination with semiconductors and VLSI drives me to understand how chips are born from sand and code. In my free time, I channel my creativity into building custom PCs as a hobby - it's a passion that combines aesthetics with engineering."
  },
  
  // Statistics displayed in the About section
  stats: [
    { label: 'LANGUAGES', value: '6+' },
    { label: 'PROJECTS', value: '20+' },
    { label: 'PC_BUILDS', value: '5+' },
  ],
  
  // Response time message in Contact section
  responseMessage: "I typically respond within 24-48 hours. Feel free to reach out for collaborations, opportunities, or just to chat about tech, chips, and my PC building hobby!",
  
  // Resume download link - Update this with your actual resume URL
  // You can upload to Google Drive, Dropbox, or host it in your repository
  resumeUrl: "/resume.pdf" // Replace with your actual resume URL
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  // Add more social links as needed
};

// ============================================
// ABOUT SECTION - FEATURE CARDS
// ============================================
export const aboutFeatures = [
  {
    title: 'SOFTWARE_ARCHITECT',
    description: 'Crafting robust systems with Python, Java, C, C++, Rust - bridging high-level abstractions with low-level optimization.',
  },
  {
    title: 'CHIP_DESIGNER',
    description: 'Diving deep into VLSI design and semiconductor physics - from Verilog RTL to silicon implementation.',
  },
  {
    title: 'HARDWARE_ENTHUSIAST',
    description: 'Building custom PCs and understanding every component - where software meets silicon at the system level.',
  },
];

// ============================================
// SKILLS SECTION
// ============================================
export const skills = [
  {
    category: 'PROGRAMMING_CORE',
    experience: '4+ Years',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'C / C++', level: 88 },
      { name: 'Java', level: 85 },
      { name: 'Rust', level: 80 },
    ],
  },
  {
    category: 'HARDWARE_DESIGN',
    experience: '3+ Years',
    skills: [
      { name: 'Verilog', level: 87 },
      { name: 'VLSI Design', level: 82 },
      { name: 'Digital Logic', level: 90 },
      { name: 'RTL Design', level: 85 },
    ],
  },
  {
    category: 'SYSTEMS_HARDWARE',
    experience: '5+ Years',
    skills: [
      { name: 'PC Building', level: 95 },
      { name: 'System Architecture', level: 88 },
      { name: 'Semiconductors', level: 83 },
      { name: 'Performance Tuning', level: 86 },
    ],
  },
];

/**
 * HOW TO ADD A NEW SKILL CATEGORY:
 * 
 * 1. Copy the template below:
 * 
 * {
 *   category: 'YOUR_CATEGORY_NAME',
 *   experience: 'X+ Years',
 *   skills: [
 *     { name: 'Skill Name', level: 85 },
 *     { name: 'Another Skill', level: 90 },
 *   ],
 * },
 * 
 * 2. Paste it into the skills array above
 * 3. Update the category name, experience, and skills
 * 4. Set skill levels from 0-100 based on your proficiency
 */

// ============================================
// PROJECTS SECTION
// ============================================
export const projects = [
  {
    title: 'RISC_V_CORE',
    description: 'Custom 32-bit RISC-V processor core designed in Verilog with full pipeline implementation, hazard detection, and branch prediction unit.',
    image: 'https://images.unsplash.com/photo-1686195165991-74af7c2918d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBwcm9jZXNzb3IlMjBjbG9zZXVwfGVufDF8fHx8MTc2MTkxOTk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Verilog', 'VLSI', 'RTL Design', 'ModelSim'],
    github: '#',
    demo: '#',
    status: 'IN_DEVELOPMENT', // Options: 'PRODUCTION', 'IN_DEVELOPMENT', 'BETA_TESTING'
    year: '2024',
    complexity: '15K+ Lines',
  },
  {
    title: 'SILICON_OPTIMIZER',
    description: 'Advanced EDA tool suite for automatic place-and-route optimization, written in C++ with Python bindings for semiconductor layout analysis.',
    image: 'https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTg5ODgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['C++', 'Python', 'Algorithms', 'VLSI CAD'],
    github: '#',
    demo: '#',
    status: 'PRODUCTION',
    year: '2024',
    complexity: '22K+ Lines',
  },
  {
    title: 'QUANTUM_BUILD_SUITE',
    description: 'Intelligent PC building assistant with real-time performance benchmarking, compatibility checker, and thermal simulation engine built in Rust.',
    image: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwYXNzZW1ibHl8ZW58MXx8fHwxNzYxOTE5OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Rust', 'Systems Programming', 'Hardware'],
    github: '#',
    demo: '#',
    status: 'BETA_TESTING',
    year: '2025',
    complexity: '8K+ Lines',
  },
  {
    title: 'MEMORY_CONTROLLER',
    description: 'High-performance DDR4 memory controller IP core with configurable burst length, auto-refresh management, and low-latency arbitration.',
    image: 'https://images.unsplash.com/photo-1686195165991-74af7c2918d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBwcm9jZXNzb3IlMjBjbG9zZXVwfGVufDF8fHx8MTc2MTkxOTk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Verilog', 'Digital Design', 'VLSI', 'Timing Analysis'],
    github: '#',
    demo: '#',
    status: 'IN_DEVELOPMENT',
    year: '2024',
    complexity: '12K+ Lines',
  },
  {
    title: 'CHIP_SIMULATOR',
    description: 'Monte Carlo-based semiconductor device simulator for analyzing transistor behavior at nanometer scale with Java-based visualization engine.',
    image: 'https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTg5ODgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Java', 'Physics Simulation', 'Semiconductors'],
    github: '#',
    demo: '#',
    status: 'PRODUCTION',
    year: '2023',
    complexity: '18K+ Lines',
  },
  {
    title: 'CACHE_COHERENCE_SYS',
    description: 'Multi-level cache coherence protocol implementation in C with MESI state machine, write-back policies, and performance profiling tools.',
    image: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwYXNzZW1ibHl8ZW58MXx8fHwxNzYxOTE5OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['C', 'Systems Programming', 'Computer Architecture'],
    github: '#',
    demo: '#',
    status: 'IN_DEVELOPMENT',
    year: '2024',
    complexity: '10K+ Lines',
  },
];

/**
 * HOW TO ADD A NEW PROJECT:
 * 
 * 1. Copy the template below:
 * 
 * {
 *   title: 'PROJECT_NAME',
 *   description: 'Brief description of what your project does and the technologies used.',
 *   image: 'URL_TO_PROJECT_IMAGE',
 *   tags: ['Tag1', 'Tag2', 'Tag3'],
 *   github: 'https://github.com/yourusername/repo',
 *   demo: 'https://your-demo-url.com',
 *   status: 'PRODUCTION',
 *   year: '2025',
 *   complexity: '5K+ Lines',
 * },
 * 
 * 2. Paste it into the projects array above
 * 3. Update all fields with your project information
 * 4. For images, you can use Unsplash URLs or your own hosted images
 * 5. Status options: 'PRODUCTION', 'IN_DEVELOPMENT', 'BETA_TESTING'
 */

// ============================================
// HELPER NOTES
// ============================================

/**
 * IMAGE TIPS:
 * - Use high-quality images (minimum 1080px wide)
 * - Unsplash provides great free stock photos
 * - For custom images, host them online and use the direct URL
 * 
 * SKILL LEVEL GUIDELINES:
 * - 90-100: Expert level, can teach others
 * - 80-89: Advanced, comfortable with complex tasks
 * - 70-79: Intermediate, can work independently
 * - 60-69: Beginner-Intermediate, still learning
 * - Below 60: Basic familiarity
 * 
 * PROJECT STATUS:
 * - PRODUCTION: Completed and deployed
 * - IN_DEVELOPMENT: Currently working on it
 * - BETA_TESTING: Feature complete, testing phase
 * 
 * TAGS:
 * - Keep tags concise (1-2 words)
 * - Use consistent naming (e.g., "C++" not "C plus plus")
 * - Limit to 4-6 tags per project for best display
 */
