import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Recycle, Shield, Award, Clock } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/#process' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Sell Console', href: '/sell' },
      { name: 'Trade-In Program', href: '#' },
      { name: 'Bulk Sales', href: '#' }
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Support Center', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/13voltx', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/13voltx', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/13voltx', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@13voltx', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/13voltx', label: 'LinkedIn' }
  ];

  const features = [
    { icon: Recycle, text: 'Youth Lead' },
    { icon: Shield, text: 'Secure Process' },
    { icon: Award, text: 'Best Prices' },
    { icon: Clock, text: 'Fast Payment' }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/10 border-t border-secondary/20">
      {/* Features Bar */}
      <div className="border-b border-secondary/20">
        <div className="max-w-[120rem] mx-auto px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-paragraph text-foreground/80 group-hover:text-foreground transition-colors">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-[120rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="https://static.wixstatic.com/media/bdc6f0_e3fa03efebe74a1f8f0264525f5d5978~mv2.png"
                  alt="13VOLT Logo"
                  width={120}
                  className="h-8 w-auto object-contain"
                />
              </div>
              
              <p className="font-paragraph text-foreground/80 mb-6 leading-relaxed">
                Revolutionizing the gaming industry by giving technology new life. We provide fair prices, 
                fast payments, and eco-friendly solutions for selling your gaming consoles.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-foreground/80">{"support@13volt.org"}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-foreground/80">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-lg mb-6 text-primary">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-lg mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-xl mb-2 text-primary">Stay Updated</h3>
              <p className="font-paragraph text-foreground/80">{"Get the latest news about console trade-ins, market prices, and offers."}</p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-lg text-foreground placeholder-foreground/60 focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-secondary/20 bg-secondary/5">
        <div className="max-w-[120rem] mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="font-paragraph text-foreground/80 text-sm">© 2025 13VOLT. All rights reserved.</p>
              <div className="flex items-center space-x-4 text-sm">
                <Link to="/privacy-policy" className="font-paragraph text-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="font-paragraph text-foreground/80 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:text-primary transition-colors text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}