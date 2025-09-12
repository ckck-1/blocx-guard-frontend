import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Headphones,
  FileText,
  Send
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "General inquiries and support",
      contact: "support@blocx.insurance",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Urgent claims and technical support",
      contact: "+1 (555) 123-4567",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support for quick questions",
      contact: "Available on website",
      available: "24/7"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 DeFi Street, San Francisco, CA 94105",
      available: "By appointment"
    }
  ];

  const supportCategories = [
    "General Inquiry",
    "Policy Support", 
    "Claims Assistance",
    "Technical Support",
    "Partnership Inquiry",
    "Press & Media",
    "Bug Report",
    "Feature Request"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about DeFi insurance? Need help with a claim? Our expert team is here to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="futuristic-border hover-lift text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{info.contact}</p>
                  <p className="text-sm text-muted-foreground">{info.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-accent" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportCategories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe your inquiry in detail..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* FAQ Section */}
              <Card className="futuristic-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>
                    Quick answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">How quickly are claims processed?</h4>
                    <p className="text-sm text-muted-foreground">
                      Most claims are processed within 48-72 hours using our AI-powered verification system.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">What blockchains do you support?</h4>
                    <p className="text-sm text-muted-foreground">
                      We currently support Ethereum, Polygon, BSC, Avalanche, Arbitrum, and Optimism.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">How are premiums calculated?</h4>
                    <p className="text-sm text-muted-foreground">
                      Premiums are calculated using AI-powered risk assessment based on protocol history, audits, and real-time factors.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    View All FAQs
                  </Button>
                </CardContent>
              </Card>

              {/* Support Hours */}
              <Card className="futuristic-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Live Chat</span>
                    <span className="text-accent">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Support</span>
                    <span className="text-accent">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone Support</span>
                    <span>Mon-Fri 9AM-6PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Claims</span>
                    <span className="text-accent">24/7</span>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="futuristic-border bg-destructive/5 border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Headphones className="h-5 w-5" />
                    Emergency Support
                  </CardTitle>
                  <CardDescription>
                    For urgent claims or security incidents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-destructive mb-2">
                    Emergency Hotline: +1 (555) 999-HELP
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for protocol exploits, security breaches, and urgent claim processing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Location with Map */}
          <div className="mt-16">
            <Card className="futuristic-border overflow-hidden">
              <CardHeader>
                <CardTitle>Visit Our Office</CardTitle>
                <CardDescription>
                  Located in the heart of San Francisco's financial district
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Address</h4>
                        <p className="text-muted-foreground">
                          Blocx Insurance Inc.<br />
                          123 DeFi Street, Suite 100<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Office Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                          Weekend: By appointment only
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Public Transport</h4>
                        <p className="text-muted-foreground">
                          BART: Montgomery Station (2 min walk)<br />
                          Muni: Multiple bus lines nearby
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-80 bg-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive map would be embedded here</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;