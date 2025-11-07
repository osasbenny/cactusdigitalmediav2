import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function PortfolioDetail() {
  const [, params] = useRoute("/portfolio/:id");
  const project = projects.find((p) => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-6">
                <FaArrowLeft className="mr-2" /> Back to Portfolio
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <div className="text-accent font-semibold mb-2">
                  {project.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {project.excerpt}
                </p>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    View Live Site <FaExternalLinkAlt className="ml-2" />
                  </Button>
                </a>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Client</div>
                <div className="font-semibold">{project.client}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Year</div>
                <div className="font-semibold">{project.year}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Category</div>
                <div className="font-semibold">{project.category}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Status</div>
                <div className="font-semibold text-green-600">Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem, Process, Solution */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                  <p className="text-muted-foreground">{project.problem}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">The Process</h2>
                  <p className="text-muted-foreground">{project.process}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium flex items-center gap-2"
                >
                  <FaCheck className="w-4 h-4" />
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Images */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={project.image}
                alt={`${project.title} - View 1`}
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src={project.image}
                alt={`${project.title} - View 2`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
