import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Recycle, Heart, Zap, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BaseCrudService } from '@/integrations';
import { TimelineEvents } from '@/entities/timelineevents';

export default function AboutPage() {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvents[]>([]);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      try {
        const { items } = await BaseCrudService.getAll<TimelineEvents>('timelineevents');
        setTimelineEvents(items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      } catch (error) {
        console.error('Error fetching timeline events:', error);
      }
    };

    fetchTimelineEvents();
  }, []);

  const values = [
    {
      icon: Recycle,
      title: 'Sustainability',
      description: 'We believe in giving technology a second life, reducing electronic waste and environmental impact.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a community of gamers who care about the environment and accessible gaming.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Using cutting-edge processes to refurbish and restore consoles to like-new condition.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Transparent pricing, fair deals, and exceptional customer service in every transaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-heading text-foreground mb-6">About <span className="text-primary">13VOLT</span></h1>
            <p className="text-xl font-paragraph text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize the gaming industry by giving technology new life. 
              Every console we buy, refurbish, and resell helps reduce electronic waste while making 
              gaming more accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-secondary/10 to-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-heading text-foreground mb-6">Our <span className="text-primary">Mission</span></h2>
              <p className="font-paragraph text-foreground/80 text-lg mb-6">
                At 13VOLT, we believe that every gaming console deserves a second chance. Our mission is to 
                create a sustainable ecosystem where technology doesn't end up in landfills, but instead 
                finds new homes with passionate gamers.
              </p>
              <p className="font-paragraph text-foreground/80 text-lg">
                We combine cutting-edge refurbishment techniques with fair pricing to ensure that both 
                sellers and buyers get the best possible experience. It's not just about business – 
                it's about building a better future for gaming and our planet.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Recycle className="w-24 h-24 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading text-foreground mb-4">Our <span className="text-primary">Values</span></h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              These core principles guide everything we do at 13VOLT, from how we treat our customers 
              to how we handle every console that comes through our doors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-secondary/20 border-secondary/20 p-6 text-center h-full hover:bg-secondary/30 transition-colors">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading text-foreground mb-3">{value.title}</h3>
                    <p className="font-paragraph text-foreground/80">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* About the Founder Section */}
      <section className="py-24 px-8 bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading text-foreground mb-4">About the <span className="text-primary">Founder</span></h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              Meet the visionary behind 13VOLT and learn about the passion that drives our mission to revolutionize console refurbishment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/bdc6f0_15056691409f4a01ab01a62044e8b496~mv2.jpg#originWidth=960&originHeight=1280"
                    alt="Alex Chen, Founder & CEO of 13VOLT"
                    width={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-heading text-foreground mb-2">{"Colin Loftus"}</h3>
                <p className="text-lg font-paragraph text-primary mb-4">Founder & CEO</p>
              </div>

              <div className="space-y-4">
                <p className="font-paragraph text-foreground/80 leading-relaxed">{"Colin founded 13VOLT in 2024 with a simple yet powerful vision: to create a sustainable ecosystem where gaming technology gets a second life instead of ending up in landfills. As a lifelong gamer and environmental advocate, Colin saw an opportunity to bridge the gap between passion and purpose."}</p>
                <p className="font-paragraph text-foreground/80 leading-relaxed">{"At just 14 years old, Colin is a remarkable young entrepreneur who brings fresh perspective and innovative thinking to the tech industry. Despite their young age, Alex has demonstrated exceptional business acumen and technical expertise. Under their visionary leadership, the company has grown from a small idea to a structured company."}</p>

              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading text-primary mb-1">{"3+"}</div>
                  <div className="text-sm font-paragraph text-foreground/80">Years Experience</div>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-heading text-primary mb-1">{"200+"}</div>
                  <div className="text-sm font-paragraph text-foreground/80">{"Volunteer Hours"}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading text-foreground mb-4">Join Our Mission</h2>
            <p className="text-lg font-paragraph text-foreground/80 mb-8 max-w-2xl mx-auto">
              Ready to give your old console new life while putting money in your pocket? 
              Let's work together to create a more sustainable gaming future.
            </p>
            <motion.a
              href="/sell"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-4 text-lg font-paragraph transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Selling Today
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}