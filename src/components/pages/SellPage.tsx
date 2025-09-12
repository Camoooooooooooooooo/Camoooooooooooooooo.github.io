import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Gamepad2, Smartphone, CheckCircle, DollarSign, Clock, Shield, Star, Camera, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BaseCrudService } from '@/integrations';
import { DeviceTypes } from '@/entities/devicetypes';
import { ConsoleModels } from '@/entities/consolemodels';
import { Conditions } from '@/entities/conditions';
import { SellRequests } from '@/entities/sellrequests';

interface FormData {
  deviceType: string;
  modelVersion: string;
  condition: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  preferredPaymentMethod: string;
  consolePhoto?: FileList;
}

export default function SellPage() {
  const [deviceTypes, setDeviceTypes] = useState<DeviceTypes[]>([]);
  const [consoleModels, setConsoleModels] = useState<ConsoleModels[]>([]);
  const [conditions, setConditions] = useState<Conditions[]>([]);
  const [filteredModels, setFilteredModels] = useState<ConsoleModels[]>([]);
  const [selectedDeviceType, setSelectedDeviceType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [deviceTypesRes, consoleModelsRes, conditionsRes] = await Promise.all([
          BaseCrudService.getAll<DeviceTypes>('devicetypes'),
          BaseCrudService.getAll<ConsoleModels>('consolemodels'),
          BaseCrudService.getAll<Conditions>('conditions')
        ]);

        setDeviceTypes(deviceTypesRes.items.filter(dt => dt.isActive).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
        setConsoleModels(consoleModelsRes.items);
        setConditions(conditionsRes.items.filter(c => c.isActive).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDeviceType) {
      const filtered = consoleModels.filter(model => model.deviceType === selectedDeviceType);
      setFilteredModels(filtered);
    } else {
      setFilteredModels([]);
    }
  }, [selectedDeviceType, consoleModels]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const sellRequest: SellRequests = {
        _id: crypto.randomUUID(),
        deviceName: selectedDeviceType,
        modelVersion: data.modelVersion,
        condition: data.condition,
        contactName: data.contactName,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        preferredPaymentMethod: data.preferredPaymentMethod,
        consolePhoto: 'https://static.wixstatic.com/media/bdc6f0_1ee1d7f14a8b47459c073a485981df64~mv2.png?originWidth=768&originHeight=576'
      };

      await BaseCrudService.create('sellrequests', sellRequest);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: DollarSign, title: 'Best Prices', description: 'Get top market value for your console' },
    { icon: Clock, title: 'Fast Process', description: 'Quick evaluation and instant offers' },
    { icon: Shield, title: 'Secure & Safe', description: 'Protected transactions and data security' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-heading text-foreground mb-4">Request Submitted Successfully!</h1>
            <p className="text-lg font-paragraph text-foreground/80 mb-8">
              Thank you for choosing 13VOLT! We've received your console details and our team will review your submission. 
              You'll receive a competitive offer via email within 24 hours.
            </p>
            
            <div className="bg-secondary/20 border border-secondary/20 rounded-lg p-6 mb-8">
              <h3 className="font-heading text-foreground text-lg mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">1</span>
                  </div>
                  <span className="font-paragraph text-foreground/80">Our experts evaluate your console details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">2</span>
                  </div>
                  <span className="font-paragraph text-foreground/80">You receive a fair market offer via email</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">3</span>
                  </div>
                  <span className="font-paragraph text-foreground/80">Ship your console or visit our location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">4</span>
                  </div>
                  <span className="font-paragraph text-foreground/80">Get paid fast via your preferred method</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                asChild 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg px-6 py-2"
              >
                <a href="/">Return Home</a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary rounded-lg px-6 py-2"
              >
                <a href="/contact">Contact Support</a>
              </Button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-8 bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-primary text-sm">Get instant quotes • Fair prices guaranteed</span>
            </div>
            <h1 className="text-5xl font-heading text-foreground mb-4">Sell Your <span className="text-primary">Console</span></h1>
            <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
              Turn your gaming console into cash with our simple, secure process. Get a competitive offer in minutes!
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-foreground text-sm mb-1">{benefit.title}</h3>
                  <p className="font-paragraph text-foreground/70 text-xs">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-secondary/20 border-secondary/20 p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-12 -translate-x-12" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                {/* Device Information */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-heading text-foreground flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mr-3">
                        <Gamepad2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      Console Information
                    </h2>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="deviceType" className="font-paragraph text-foreground flex items-center">
                        <Gamepad2 className="w-4 h-4 mr-2 text-primary" />
                        Device Type *
                      </Label>
                      <Select onValueChange={(value) => {
                        setSelectedDeviceType(value);
                        setValue('deviceType', value);
                      }}>
                        <SelectTrigger className="bg-background border-secondary/40 text-foreground hover:border-primary/50 transition-colors">
                          <SelectValue placeholder="Select your console type" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-secondary/40">
                          {deviceTypes.map((type) => (
                            <SelectItem key={type._id} value={type.name || ''}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.deviceType && <p className="text-destructive text-sm">Device type is required</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="modelVersion" className="font-paragraph text-foreground flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-primary" />
                        Model/Version *
                      </Label>
                      <Select onValueChange={(value) => setValue('modelVersion', value)} disabled={!selectedDeviceType}>
                        <SelectTrigger className="bg-background border-secondary/40 text-foreground hover:border-primary/50 transition-colors disabled:opacity-50">
                          <SelectValue placeholder={selectedDeviceType ? "Select model" : "Choose device type first"} />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-secondary/40">
                          {filteredModels.map((model) => (
                            <SelectItem key={model._id} value={model.modelName || ''}>
                              {model.modelName} {model.storageCapacity && `(${model.storageCapacity})`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.modelVersion && <p className="text-destructive text-sm">Model is required</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="condition" className="font-paragraph text-foreground flex items-center">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        Condition *
                      </Label>
                      <Select onValueChange={(value) => setValue('condition', value)}>
                        <SelectTrigger className="bg-background border-secondary/40 text-foreground hover:border-primary/50 transition-colors">
                          <SelectValue placeholder="Select console condition" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-secondary/40">
                          {conditions.map((condition) => (
                            <SelectItem key={condition._id} value={condition.conditionName || ''}>
                              {condition.conditionName}
                              {condition.description && (
                                <span className="text-foreground/60 text-xs ml-2">- {condition.description}</span>
                              )}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.condition && <p className="text-destructive text-sm">Condition is required</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="consolePhoto" className="font-paragraph text-foreground flex items-center">
                        <Camera className="w-4 h-4 mr-2 text-primary" />
                        Console Photo
                      </Label>
                      <div className="border-2 border-dashed border-secondary/40 rounded-lg p-6 text-center hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-paragraph text-foreground/80 text-sm mb-2">Upload a clear photo of your console</p>
                        <p className="font-paragraph text-foreground/60 text-xs mb-3">Helps us provide a more accurate quote</p>
                        <Input 
                          type="file" 
                          accept="image/*" 
                          className="bg-transparent border-0 text-foreground file:bg-primary/10 file:text-primary file:border-0 file:rounded file:px-3 file:py-1"
                          {...register('consolePhoto')}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6 pt-8 border-t border-secondary/20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-heading text-foreground flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mr-3">
                        <Smartphone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      Contact Information
                    </h2>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="contactName" className="font-paragraph text-foreground">Full Name *</Label>
                      <Input 
                        id="contactName"
                        placeholder="Enter your full name"
                        className="bg-background border-secondary/40 text-foreground hover:border-primary/50 focus:border-primary transition-colors"
                        {...register('contactName', { required: true })}
                      />
                      {errors.contactName && <p className="text-destructive text-sm">Name is required</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="contactEmail" className="font-paragraph text-foreground">Email Address *</Label>
                      <Input 
                        id="contactEmail"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background border-secondary/40 text-foreground hover:border-primary/50 focus:border-primary transition-colors"
                        {...register('contactEmail', { required: true, pattern: /^\S+@\S+$/i })}
                      />
                      {errors.contactEmail && <p className="text-destructive text-sm">Valid email is required</p>}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="contactPhone" className="font-paragraph text-foreground">Phone Number</Label>
                      <Input 
                        id="contactPhone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background border-secondary/40 text-foreground hover:border-primary/50 focus:border-primary transition-colors"
                        {...register('contactPhone')}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="preferredPaymentMethod" className="font-paragraph text-foreground">Preferred Payment Method *</Label>
                      <Select onValueChange={(value) => setValue('preferredPaymentMethod', value)}>
                        <SelectTrigger className="bg-background border-secondary/40 text-foreground hover:border-primary/50 transition-colors">
                          <SelectValue placeholder="How would you like to be paid?" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-secondary/40">
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                          <SelectItem value="cash">Cash (In-Person)</SelectItem>
                          <SelectItem value="check">Check</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.preferredPaymentMethod && <p className="text-destructive text-sm">Payment method is required</p>}
                    </motion.div>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="pt-6"
                >
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg py-4 text-lg font-paragraph shadow-lg shadow-primary/25 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5" />
                        <span>Get My Quote</span>
                      </div>
                    )}
                  </Button>
                  <p className="text-center font-paragraph text-foreground/60 text-sm mt-3">
                    By submitting, you agree to our terms and privacy policy. No spam, ever.
                  </p>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}