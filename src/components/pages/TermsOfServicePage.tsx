import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield, DollarSign, Truck } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the 13VOLT website and services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, you may not use our services.',
        'We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.',
        'Your continued use of our services after any changes constitutes acceptance of the new terms.',
        'These terms apply to all users of our website and services.'
      ]
    },
    {
      icon: DollarSign,
      title: 'Our Services',
      content: [
        'Console Evaluation: We provide quotes for gaming consoles based on current market conditions and device specifications.',
        'Purchase Services: We purchase gaming consoles from users at agreed-upon prices.',
        'Payment Processing: We facilitate payments through various methods including PayPal, bank transfer, and cash.',
        'Shipping Services: We may provide prepaid shipping labels for console delivery.',
        'Customer Support: We offer assistance throughout the selling process.'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Accurate Information: You must provide truthful and accurate information about your console and personal details.',
        'Console Condition: You are responsible for accurately describing the condition of your gaming console.',
        'Ownership: You must own the console you are selling and have the legal right to sell it.',
        'Prohibited Items: You may not sell stolen, counterfeit, or illegally obtained items.',
        'Compliance: You must comply with all applicable laws and regulations.'
      ]
    },
    {
      icon: Truck,
      title: 'Transaction Process',
      content: [
        'Quote Validity: Quotes are valid for a limited time and subject to final inspection of the console.',
        'Final Pricing: The final purchase price may differ from the initial quote based on actual console condition.',
        'Inspection Rights: We reserve the right to inspect all consoles before finalizing the purchase.',
        'Payment Terms: Payment will be processed within 2-5 business days after console receipt and inspection.',
        'Return Policy: If we cannot purchase your console, we will return it at our expense.'
      ]
    }
  ];

  const additionalSections = [
    {
      title: 'Prohibited Activities',
      content: [
        'Fraudulent Activities: Any attempt to defraud or mislead 13VOLT is strictly prohibited.',
        'False Information: Providing false or misleading information about console condition or ownership.',
        'System Abuse: Attempting to manipulate our pricing or evaluation systems.',
        'Illegal Content: Uploading or transmitting illegal, harmful, or offensive content.',
        'Interference: Attempting to interfere with the proper functioning of our website or services.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on our website, including text, graphics, logos, and software, is owned by 13VOLT or our licensors.',
        'You may not reproduce, distribute, or create derivative works from our content without permission.',
        'The 13VOLT name and logo are trademarks of our company.',
        'You retain ownership of any content you submit to us, but grant us a license to use it for our services.',
        'We respect the intellectual property rights of others and expect users to do the same.'
      ]
    },
    {
      title: 'Privacy and Data Protection',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.',
        'We implement security measures to protect your personal information.',
        'You consent to our collection and use of your information as described in our Privacy Policy.',
        'We may use your information to improve our services and communicate with you.',
        'You have rights regarding your personal data as outlined in our Privacy Policy.'
      ]
    },
    {
      title: 'Disclaimers and Limitations',
      content: [
        'Our services are provided "as is" without warranties of any kind, express or implied.',
        'We do not guarantee the accuracy of quotes or the availability of our services.',
        'We are not liable for any indirect, incidental, or consequential damages.',
        'Our total liability is limited to the amount paid for the specific transaction.',
        'Some jurisdictions do not allow certain limitations, so these may not apply to you.'
      ]
    },
    {
      title: 'Dispute Resolution',
      content: [
        'We encourage users to contact us directly to resolve any disputes or concerns.',
        'Any disputes will be governed by the laws of the state where our company is incorporated.',
        'Disputes may be subject to binding arbitration as an alternative to court proceedings.',
        'You agree to resolve disputes individually and not as part of a class action.',
        'We will make reasonable efforts to resolve disputes in good faith.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'We may terminate or suspend your access to our services at any time for any reason.',
        'You may stop using our services at any time.',
        'Upon termination, your right to use our services ceases immediately.',
        'Provisions regarding liability, indemnification, and dispute resolution survive termination.',
        'We are not liable for any consequences of termination of your access to our services.'
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
              <Scale className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-heading text-foreground mb-4">Terms of Service</h1>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              These terms govern your use of 13VOLT's services. Please read them carefully before using our platform.
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
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-primary mr-2" />
                <h2 className="text-xl font-heading text-foreground">Important Notice</h2>
              </div>
              <p className="font-paragraph text-foreground/80">
                These Terms of Service constitute a legally binding agreement between you and 13VOLT. 
                By using our website or services, you acknowledge that you have read, understood, and agree 
                to be bound by these terms. If you are using our services on behalf of an organization, 
                you represent that you have the authority to bind that organization to these terms.
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
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-heading text-foreground">Contact Information</h2>
            </div>
            <p className="font-paragraph text-foreground/80 mb-6">
              If you have any questions about these Terms of Service or need clarification on any provisions, 
              please contact our legal team:
            </p>
            <div className="space-y-3">
              <div className="font-paragraph text-foreground">
                <strong>Email:</strong> legal@13volt.com
              </div>
              <div className="font-paragraph text-foreground">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div className="font-paragraph text-foreground">
                <strong>Address:</strong> 13VOLT Legal Department, San Francisco, CA
              </div>
            </div>
            <p className="font-paragraph text-foreground/60 text-sm mt-6">
              We will respond to legal inquiries within 5 business days.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="font-paragraph text-foreground/60 text-sm">
              By continuing to use 13VOLT's services, you acknowledge that you have read and agree to these Terms of Service.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}