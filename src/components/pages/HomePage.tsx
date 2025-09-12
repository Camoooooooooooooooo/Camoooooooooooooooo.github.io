import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, DollarSign, Truck, Star, Users, TrendingUp, Shield, Gamepad2, Smartphone, Monitor, Headphones, Clock } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const [displayText, setDisplayText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const fullText = 'Sell your old console.\nGet paid fast.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Tell us what you\'ve got',
      description: 'Fill out our simple form with your console details',
      icon: MessageSquare
    },
    {
      number: 2,
      title: 'We make you an offer',
      description: 'Get a fair, instant quote based on current market value',
      icon: DollarSign
    },
    {
      number: 3,
      title: 'Ship or drop off & get paid',
      description: 'Choose your preferred method and receive payment quickly',
      icon: Truck
    }
  ];

  const stats = [
    { icon: Shield, value: '99.9%', label: 'Satisfaction Rate' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Clock, value: '24hrs', label: 'Response Time' }
  ];

  const consoleTypes = [
    { icon: Gamepad2, name: 'PlayStation', description: 'PS5, PS4, PS3 & more' },
    { icon: Monitor, name: 'Xbox', description: 'Series X/S, One, 360 & more' },
    { icon: Smartphone, name: 'Nintendo', description: 'Switch, 3DS, Wii & more' },
    { icon: Headphones, name: 'Retro', description: 'Classic & vintage consoles' }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Sold my PS4 in minutes! The process was so smooth and I got a great price.',
      location: 'San Francisco, CA'
    },
    {
      name: 'Mike R.',
      rating: 5,
      text: 'Fast payment, fair pricing. Will definitely use 13VOLT again!',
      location: 'Austin, TX'
    },
    {
      name: 'Jessica L.',
      rating: 5,
      text: 'Professional service and excellent communication throughout.',
      location: 'New York, NY'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section with Enhanced Visuals */}
      <section className="h-screen grid place-items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-48 h-48 bg-primary/3 rounded-full blur-2xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-primary text-sm">{"Trusted by gamers"}</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-foreground mb-8 min-h-[200px] flex items-center justify-center">
            <span className="whitespace-pre-line text-center">
              {displayText}
              <span className="animate-pulse opacity-[1]">|</span>
            </span>
          </h1>
          
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl font-paragraph text-foreground/80 max-w-2xl mx-auto mb-8">{"Transform your old gaming consoles into instant cash with our secure, fast, and fair process. Whether working or broken, we provide competitive offers and hassle-free transactions."}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg px-8 py-4 text-lg font-paragraph shadow-lg shadow-primary/25"
                  >
                    <Link to="/sell" className="flex items-center space-x-2">
                      <span>Start Selling</span>
                      <Gamepad2 className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild 
                    variant="outline"
                    size="lg"
                    className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary rounded-lg px-8 py-4 text-lg font-paragraph"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Floating Console Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Gamepad2 className="w-16 h-16 text-primary" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Monitor className="w-20 h-20 text-primary" />
        </motion.div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-heading text-foreground mb-2">{stat.value}</div>
                  <div className="font-paragraph text-foreground/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Console Types Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading text-foreground mb-4">We Buy All Console <span className="text-primary">Types</span></h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              From the latest PlayStation 5 to retro classics, we accept all gaming consoles in any condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consoleTypes.map((console, index) => {
              const Icon = console.icon;
              return (
                <motion.div
                  key={console.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-secondary/20 border-secondary/20 p-6 text-center hover:bg-secondary/30 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading text-foreground mb-2">{console.name}</h3>
                    <p className="font-paragraph text-foreground/80 text-sm">{console.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Process Section with Enhanced Design */}
      <section className="py-24 px-8 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading text-foreground mb-4">How It <span className="text-primary">Works</span></h2>
              <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
                Selling your console has never been easier. Follow these simple steps to turn your old tech into cash.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-primary/30 transform -translate-y-1/2" />
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/30 to-primary/50 transform -translate-y-1/2" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="bg-background/80 backdrop-blur-sm border-secondary/20 p-8 text-center hover:bg-background/90 transition-all duration-300 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 -mt-2">
                      <span className="text-primary-foreground font-heading text-sm">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-heading text-foreground mb-3">
                      {step.number === 3 ? 'Ship & get paid' : step.title}
                    </h3>
                    <p className="font-paragraph text-foreground/80">{step.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg px-8 py-3 shadow-lg shadow-primary/25"
              >
                <Link to="/sell">Get Started Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading text-foreground mb-4">What Our Customers <span className="text-primary">Say</span></h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real customers have to say about their experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/20 border-secondary/20 p-6 hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="font-paragraph text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-heading text-foreground">{testimonial.name}</div>
                    <div className="font-paragraph text-foreground/60 text-sm">{testimonial.location}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced CTA Section */}
      <section className="py-24 px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="max-w-[120rem] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading text-foreground mb-4">Ready to Turn Your Console Into Cash?</h2>
            <p className="text-lg font-paragraph text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have turned their old consoles into cash with 13VOLT. 
              Get started today and see why we're the #1 choice for console selling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg px-8 py-4 shadow-lg shadow-primary/25"
                >
                  <Link to="/sell">Start Your Sale</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary rounded-lg px-8 py-4"
                >
                  <Link to="/contact">Have Questions?</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}