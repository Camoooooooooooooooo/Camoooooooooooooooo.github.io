import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal Information: When you use our services, we may collect personal information such as your name, email address, phone number, and payment information.',
        'Console Information: Details about the gaming consoles you wish to sell, including model, condition, and photos.',
        'Usage Data: Information about how you use our website, including IP address, browser type, pages visited, and time spent on our site.',
        'Communication Data: Records of your communications with us, including customer support interactions.'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'Service Provision: To process your console selling requests and provide quotes.',
        'Communication: To contact you regarding your transactions, offers, and customer support.',
        'Improvement: To analyze and improve our services, website functionality, and user experience.',
        'Legal Compliance: To comply with applicable laws, regulations, and legal processes.',
        'Marketing: To send you promotional materials and updates about our services (with your consent).'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'Service Providers: We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.',
        'Legal Requirements: We may disclose information when required by law or to protect our rights, property, or safety.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information.',
        'All sensitive data is encrypted during transmission using SSL/TLS protocols.',
        'Access to personal information is restricted to authorized personnel only.',
        'We regularly review and update our security practices to ensure data protection.',
        'While we strive to protect your information, no method of transmission over the internet is 100% secure.'
      ]
    }
  ];

  const additionalSections = [
    {
      title: 'Your Rights',
      content: [
        'Access: You have the right to request access to the personal information we hold about you.',
        'Correction: You can request that we correct any inaccurate or incomplete personal information.',
        'Deletion: You may request that we delete your personal information, subject to certain exceptions.',
        'Portability: You have the right to request a copy of your personal information in a structured format.',
        'Opt-out: You can opt out of marketing communications at any time by following the unsubscribe instructions.'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies and similar tracking technologies to enhance your browsing experience.',
        'Essential cookies are necessary for the website to function properly.',
        'Analytics cookies help us understand how visitors interact with our website.',
        'You can control cookie settings through your browser preferences.',
        'Disabling certain cookies may affect the functionality of our website.'
      ]
    },
    {
      title: 'Third-Party Services',
      content: [
        'Our website may contain links to third-party websites or services.',
        'We are not responsible for the privacy practices of these third parties.',
        'We encourage you to review the privacy policies of any third-party services you use.',
        'Payment processing is handled by secure third-party payment processors.',
        'We may use third-party analytics services to improve our website performance.'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'We retain personal information only as long as necessary to fulfill the purposes outlined in this policy.',
        'Transaction records are kept for accounting and legal compliance purposes.',
        'Marketing data is retained until you opt out or request deletion.',
        'We may retain certain information for longer periods if required by law.',
        'Upon request, we will delete your personal information unless retention is required for legal reasons.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-heading text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="mt-6 text-sm font-paragraph text-foreground/60">
              Last updated: January 2025
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h2 className="text-xl font-heading text-foreground mb-3">Overview</h2>
              <p className="font-paragraph text-foreground/80">
                At 13VOLT, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services. By using our services, you consent to the practices described in this policy.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary/20 border border-secondary/20 rounded-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-heading text-foreground">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="font-paragraph text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}

            {additionalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (sections.length + index) * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/20 border border-secondary/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-heading text-foreground mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-paragraph text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-heading text-foreground mb-6">Contact Us</h2>
            <p className="font-paragraph text-foreground/80 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-paragraph text-foreground">privacy@13volt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-paragraph text-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
            <p className="font-paragraph text-foreground/60 text-sm mt-6">
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}