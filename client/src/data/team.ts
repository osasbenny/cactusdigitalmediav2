export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Osas Benny",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Visionary leader with 10+ years of experience in digital transformation and business strategy.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "2",
    name: "Chioma Okafor",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Award-winning designer passionate about creating beautiful, user-centric digital experiences.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "3",
    name: "Tunde Adeyemi",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Full-stack developer specializing in scalable web applications and modern JavaScript frameworks.",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "4",
    name: "Amara Nwosu",
    position: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "User experience expert focused on creating intuitive interfaces that delight users.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "5",
    name: "Emeka Okonkwo",
    position: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "iOS and Android specialist with a passion for building high-performance mobile applications.",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "6",
    name: "Ngozi Eze",
    position: "Digital Marketing Lead",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    bio: "Data-driven marketer helping businesses grow through strategic SEO and digital campaigns.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];
