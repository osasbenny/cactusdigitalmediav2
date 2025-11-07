export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies?: string[];
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    icon: "FaCode",
    shortDescription: "Custom websites built with modern technologies for optimal performance and user experience.",
    fullDescription: "We create stunning, high-performance websites tailored to your business needs. From simple landing pages to complex web applications, our team delivers responsive, SEO-optimized solutions that drive results.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading Speed",
      "Custom CMS Integration",
      "E-commerce Solutions",
      "Progressive Web Apps"
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: "FaMobileAlt",
    shortDescription: "Native and cross-platform mobile applications that engage users and grow your business.",
    fullDescription: "Transform your ideas into powerful mobile applications. We develop both iOS and Android apps using cutting-edge technologies, ensuring seamless performance and exceptional user experiences.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: "FaPalette",
    shortDescription: "Beautiful, intuitive designs that enhance user engagement and satisfaction.",
    fullDescription: "Our design team creates visually stunning and user-friendly interfaces. We focus on understanding your users to deliver designs that not only look great but also provide exceptional usability.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    icon: "FaShoppingCart",
    shortDescription: "Complete online store solutions with secure payments and inventory management.",
    fullDescription: "Launch and grow your online business with our comprehensive e-commerce solutions. We build scalable platforms with secure payment processing, inventory management, and powerful analytics.",
    features: [
      "Custom Store Design",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Customer Analytics",
      "Multi-currency Support"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"]
  },
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    icon: "FaChartLine",
    shortDescription: "Data-driven marketing strategies that increase visibility and drive qualified traffic.",
    fullDescription: "Boost your online presence with our comprehensive SEO and digital marketing services. We use proven strategies to improve your search rankings, increase traffic, and convert visitors into customers.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Link Building",
      "Content Marketing",
      "Social Media Marketing",
      "Analytics & Reporting"
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Facebook Ads"]
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    icon: "FaTools",
    shortDescription: "Ongoing support and maintenance to keep your digital assets running smoothly.",
    fullDescription: "Keep your website or application running at peak performance with our maintenance and support services. We provide regular updates, security patches, and technical support to ensure your digital presence stays secure and efficient.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Bug Fixes",
      "Technical Support",
      "Backup & Recovery"
    ],
    technologies: ["Monitoring Tools", "Security Scanners", "Performance Testing", "Version Control"]
  }
];
