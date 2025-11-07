import { Link } from "wouter";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
    ],
    services: [
      { label: "Website Development", href: "/services#website-development" },
      { label: "Mobile Apps", href: "/services#mobile-app-development" },
      { label: "UI/UX Design", href: "/services#ui-ux-design" },
      { label: "E-commerce", href: "/services#ecommerce-solutions" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/20">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/logo.jpg" 
                alt="Cactus Digital Media" 
                className="h-12"
              />
            </Link>
            <p className="text-secondary-foreground/80 mb-6 max-w-sm">
              A Lagos-based full-service digital agency specializing in Web Design, App Development, Branding & Growth Strategy.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-accent flex-shrink-0" />
                <span>123 Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accent flex-shrink-0" />
                <a href="tel:+2341234567890" className="hover:text-primary transition-colors">
                  +234 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <a href="mailto:hello@cactusdigitalmedia.com" className="hover:text-primary transition-colors">
                  hello@cactusdigitalmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={`company-${index}`}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={`services-${index}`}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={`support-${index}`}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} {APP_TITLE}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center text-secondary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
