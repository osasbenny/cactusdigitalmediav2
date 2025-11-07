import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export default function About() {
  const companyStats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Years of Experience", value: "8+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "25+" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "Excellence is not an option—it's our standard. We take pride in delivering work that exceeds expectations.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership, working closely with clients to achieve shared success.",
    },
    {
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide every decision we make and every relationship we build.",
    },
  ];

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
              About <span className="text-primary">Cactus Digital Media</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a passionate team of designers, developers, and strategists dedicated to helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2016, Cactus Digital Media began with a simple mission: to help businesses harness the power of digital technology to achieve their goals. What started as a small team of passionate technologists has grown into a full-service digital agency serving clients across Nigeria and beyond.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, SMEs, and established enterprises across various industries. Each project has taught us valuable lessons and reinforced our commitment to excellence, innovation, and client success.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Lagos's leading digital agencies, known for our creative solutions, technical expertise, and unwavering dedication to our clients' success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These numbers reflect our commitment to delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission is to empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We're guided by core values that shape everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our success, dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedinIn />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="Twitter"
                          >
                            <FaTwitter />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            aria-label="GitHub"
                          >
                            <FaGithub />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-accent font-semibold mb-3">
                      {member.position}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
