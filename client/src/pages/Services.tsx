import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPalette, FaShoppingCart, FaChartLine, FaTools, FaArrowRight, FaCheck } from "react-icons/fa";
import { services } from "@/data/services";
import { useEffect } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaShoppingCart,
  FaChartLine,
  FaTools,
};

export default function Services() {
  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions designed to help your business succeed in the modern digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 h-full hover:border-primary">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.shortDescription}
                      </p>
                      <a href={`#${service.id}`}>
                        <Button variant="ghost" className="group-hover:text-primary p-0">
                          Learn More <FaArrowRight className="ml-2" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon];
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 scroll-mt-24 ${isEven ? "bg-background" : "bg-card"}`}
          >
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={isEven ? "" : "lg:col-start-2"}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    {IconComponent && <IconComponent className="w-10 h-10 text-primary" />}
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.technologies && service.technologies.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Technologies We Use:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/contact">
                    <Button size="lg">
                      Get Started <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
                >
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        service.id === "website-development"
                          ? "1460925895917-afdab827c52f"
                          : service.id === "mobile-app-development"
                          ? "1512941937669-90a1b58e7e9c"
                          : service.id === "ui-ux-design"
                          ? "1586717791821-3f44a563fa4c"
                          : service.id === "ecommerce-solutions"
                          ? "1556742049-0cfed4f6a45d"
                          : service.id === "seo-digital-marketing"
                          ? "1432888498266-38ffec3eaf0a"
                          : "1581291518633-83b4ebd1d83e"
                      }?w=800&q=80`}
                      alt={service.title}
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help your business grow. Contact us today for a free consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Contact Us <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
