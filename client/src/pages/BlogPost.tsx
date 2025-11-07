import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaArrowLeft, FaClock, FaUser, FaTag } from "react-icons/fa";
import { blogPosts } from "@/data/blog";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = blogPosts.find((p) => p.id === params?.id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <FaArrowLeft className="mr-2" /> Back to Blog
              </Button>
            </Link>

            <div className="text-accent font-semibold mb-4">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <FaUser className="text-accent" />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <FaClock className="text-accent" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-card">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <Streamdown>{post.content}</Streamdown>
            </article>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <FaTag className="text-accent" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                    alt={post.author}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                    <p className="text-muted-foreground">
                      A passionate writer and digital expert sharing insights on the latest trends in technology, design, and digital marketing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-sm text-accent font-semibold mb-2">
                          {relatedPost.category}
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
