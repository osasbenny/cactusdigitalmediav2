export interface Project {
  id: string;
  title: string;
  category: "Web App" | "E-commerce" | "UI/UX" | "Mobile";
  image: string;
  excerpt: string;
  client: string;
  year: string;
  problem: string;
  process: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    excerpt: "A comprehensive financial analytics platform for real-time market insights.",
    client: "FinanceHub Inc.",
    year: "2024",
    problem: "The client needed a sophisticated dashboard to visualize complex financial data in real-time, helping traders make informed decisions quickly.",
    process: "We conducted extensive user research with professional traders, created interactive prototypes, and iteratively refined the interface based on user feedback. The development focused on performance optimization for handling large datasets.",
    solution: "Delivered a high-performance React-based dashboard with real-time data streaming, customizable widgets, and advanced charting capabilities. The platform reduced decision-making time by 40%.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "luxury-ecommerce",
    title: "Luxury Fashion E-commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    excerpt: "Premium online shopping experience for a high-end fashion brand.",
    client: "Elegance Couture",
    year: "2024",
    problem: "The brand needed an online presence that matched their luxury positioning while providing a seamless shopping experience across all devices.",
    process: "We designed a minimalist, elegant interface emphasizing product photography. Implemented advanced filtering, size recommendations, and a streamlined checkout process.",
    solution: "Created a stunning e-commerce platform with 3D product views, AR try-on features, and personalized recommendations. Achieved 250% increase in online sales within 6 months.",
    technologies: ["Next.js", "Shopify", "Three.js", "Stripe", "TailwindCSS"],
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "health-mobile-app",
    title: "HealthTrack Mobile App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    excerpt: "Comprehensive health and fitness tracking application for iOS and Android.",
    client: "WellBeing Labs",
    year: "2023",
    problem: "Users needed a unified platform to track various health metrics, set goals, and receive personalized health insights.",
    process: "Developed a cross-platform mobile app with seamless wearable integration, intuitive data visualization, and AI-powered health recommendations.",
    solution: "Launched a feature-rich health app with 100K+ downloads, 4.8-star rating, and partnerships with major fitness wearable brands.",
    technologies: ["React Native", "Firebase", "TensorFlow", "HealthKit", "Google Fit"],
    featured: true
  },
  {
    id: "restaurant-booking",
    title: "Restaurant Booking Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    excerpt: "Modern reservation system connecting diners with premium restaurants.",
    client: "DineConnect",
    year: "2023",
    problem: "Restaurants struggled with managing reservations efficiently, leading to overbooking and poor customer experience.",
    process: "Built a dual-sided platform for restaurants and diners with real-time availability, automated confirmations, and smart table management.",
    solution: "Deployed a scalable booking system serving 500+ restaurants, processing 50K+ monthly reservations with 99.9% uptime.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Twilio"],
    liveUrl: "https://example.com",
    featured: false
  },
  {
    id: "education-portal",
    title: "Online Learning Portal",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    excerpt: "Interactive e-learning platform with live classes and progress tracking.",
    client: "EduTech Academy",
    year: "2023",
    problem: "Educational institution needed a comprehensive platform for remote learning with interactive features and student engagement tools.",
    process: "Designed and developed a full-featured LMS with video conferencing, assignment management, progress tracking, and gamification elements.",
    solution: "Created an engaging learning platform serving 10K+ students with 95% satisfaction rate and improved learning outcomes.",
    technologies: ["Next.js", "WebRTC", "PostgreSQL", "AWS", "Socket.io"],
    featured: false
  },
  {
    id: "real-estate-app",
    title: "Property Finder App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    excerpt: "Smart property search app with AR visualization and virtual tours.",
    client: "HomeFinder Pro",
    year: "2024",
    problem: "Home buyers needed an easier way to discover and visualize properties before scheduling physical visits.",
    process: "Developed a mobile app with advanced search filters, AR property visualization, virtual tours, and mortgage calculators.",
    solution: "Launched an innovative property app with 75K+ downloads, featured in App Store, and 60% increase in qualified leads for partner agents.",
    technologies: ["Flutter", "ARKit", "ARCore", "Google Maps", "Firebase"],
    featured: true
  },
  {
    id: "brand-identity",
    title: "Tech Startup Branding",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    excerpt: "Complete brand identity and design system for an AI startup.",
    client: "NeuralTech AI",
    year: "2024",
    problem: "A promising AI startup needed a strong brand identity to stand out in a competitive market and attract investors.",
    process: "Conducted brand workshops, created comprehensive brand guidelines, designed logo and visual identity, and developed a complete design system.",
    solution: "Delivered a modern, tech-forward brand identity that helped the client secure Series A funding and establish market presence.",
    technologies: ["Figma", "Adobe Illustrator", "After Effects", "Principle"],
    featured: false
  },
  {
    id: "saas-platform",
    title: "Project Management SaaS",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    excerpt: "Collaborative project management platform for remote teams.",
    client: "TeamFlow",
    year: "2023",
    problem: "Remote teams needed better tools for project collaboration, task management, and team communication.",
    process: "Built a comprehensive SaaS platform with real-time collaboration, Gantt charts, time tracking, and integrations with popular tools.",
    solution: "Launched a successful SaaS product with 5K+ paying customers, $2M ARR, and recognition as a top project management tool.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket", "Stripe"],
    liveUrl: "https://example.com",
    featured: false
  }
];
