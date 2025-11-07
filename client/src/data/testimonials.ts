export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Anderson",
    position: "CEO",
    company: "TechVenture Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    content: "Cactus Digital Media transformed our online presence completely. Their team delivered a stunning website that not only looks amazing but also converts visitors into customers. The attention to detail and professionalism throughout the project was exceptional.",
    rating: 5
  },
  {
    id: "2",
    name: "Sarah Williams",
    position: "Marketing Director",
    company: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    content: "Working with Cactus Digital Media was a game-changer for our e-commerce business. They built us a beautiful, high-performing online store that increased our sales by 250%. Their expertise in both design and development is unmatched.",
    rating: 5
  },
  {
    id: "3",
    name: "Michael Chen",
    position: "Founder",
    company: "HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    content: "The mobile app Cactus Digital Media developed for us exceeded all expectations. It's intuitive, fast, and our users love it. The team was responsive, professional, and delivered on time and within budget.",
    rating: 5
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    position: "Operations Manager",
    company: "Global Logistics Co.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    content: "Cactus Digital Media didn't just build us a website—they became our digital partners. Their strategic approach to our online presence has helped us reach new markets and grow our business significantly. Highly recommended!",
    rating: 5
  },
  {
    id: "5",
    name: "David Thompson",
    position: "CTO",
    company: "FinanceHub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    content: "The technical expertise and creative vision of Cactus Digital Media is impressive. They built us a complex web application that handles thousands of users seamlessly. Their code quality and attention to performance optimization is top-notch.",
    rating: 5
  },
  {
    id: "6",
    name: "Lisa Martinez",
    position: "Brand Manager",
    company: "Elegance Couture",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    content: "Our brand needed a digital presence that matched our luxury positioning. Cactus Digital Media delivered beyond our expectations with a stunning website and brand identity that perfectly captures our essence. Their design team is incredibly talented.",
    rating: 5
  }
];
