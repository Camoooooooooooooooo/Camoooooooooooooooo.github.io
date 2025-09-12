import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BaseCrudService } from '@/integrations';
import { Inquiries } from '@/entities/inquiries';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phoneNumber?: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const inquiry: Inquiries = {
        _id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phoneNumber: data.phoneNumber,
        submissionDate: new Date()
      };

      await BaseCrudService.create('inquiries', inquiry);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@13volt.org',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/13voltx', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/13voltx', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/13voltx', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@13voltx', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/13voltx', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-heading text-foreground mb-4">Get In <span className="text-primary">Touch</span></h1>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              Have questions about selling your console or need support? We're here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-secondary/20 border-secondary/20 p-8">
                <h2 className="text-2xl font-heading text-foreground mb-6">Send us a message</h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <p className="font-paragraph text-foreground">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-paragraph text-foreground">Name *</Label>
                      <Input 
                        id="name"
                        className="bg-background border-secondary/40 text-foreground"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-paragraph text-foreground">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        className="bg-background border-secondary/40 text-foreground"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Please enter a valid email'
                          }
                        })}
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="font-paragraph text-foreground">Phone Number</Label>
                    <Input 
                      id="phoneNumber"
                      type="tel"
                      className="bg-background border-secondary/40 text-foreground"
                      {...register('phoneNumber')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-paragraph text-foreground">Subject *</Label>
                    <Input 
                      id="subject"
                      className="bg-background border-secondary/40 text-foreground"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && <p className="text-destructive text-sm">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-paragraph text-foreground">Message *</Label>
                    <Textarea 
                      id="message"
                      rows={5}
                      className="bg-background border-secondary/40 text-foreground resize-none"
                      {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-foreground text-lg">{info.title}</h3>
                          <p className="font-paragraph text-primary text-lg">{info.value}</p>
                          <p className="font-paragraph text-foreground/80 text-sm">{info.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 text-white transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 p-6">
                <h3 className="text-xl font-heading text-foreground mb-3">Business Hours</h3>
                <div className="space-y-2 font-paragraph text-foreground/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>9:00 AM - 5:00 AM</span>
                  </div>

                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}