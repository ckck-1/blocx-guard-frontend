import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Search, 
  HelpCircle, 
  Shield, 
  DollarSign, 
  FileText, 
  Zap,
  MessageCircle
} from 'lucide-react';
import { faqData } from '@/data/mockData';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: faqData.length },
    { id: 'insurance', name: 'Insurance Basics', icon: Shield, count: 2 },
    { id: 'claims', name: 'Claims Process', icon: FileText, count: 1 },
    { id: 'technical', name: 'Technical Support', icon: Zap, count: 1 },
    { id: 'pricing', name: 'Pricing & Payments', icon: DollarSign, count: 1 }
  ];

  // Extended FAQ data with categories
  const extendedFaqData = [
    ...faqData,
    {
      id: 6,
      question: "What happens if I need to cancel my policy?",
      answer: "You can cancel your policy at any time through your dashboard. Unused premiums are refunded proportionally based on the remaining coverage period. Cancellation takes effect immediately, and you'll receive confirmation via email.",
      category: "insurance"
    },
    {
      id: 7,
      question: "How do I submit a claim?",
      answer: "Claims can be submitted through your dashboard by providing incident details, proof of loss, and relevant transaction hashes. Our AI system will begin verification immediately, and most claims are processed within 48-72 hours.",
      category: "claims"
    },
    {
      id: 8,
      question: "What technical requirements do I need?",
      answer: "You need a compatible Web3 wallet (MetaMask, WalletConnect, etc.) and access to the blockchain networks where your protocols operate. No additional software installation is required.",
      category: "technical"
    },
    {
      id: 9,
      question: "Are there any hidden fees?",
      answer: "No, we believe in complete transparency. All costs are clearly displayed before purchase, including premiums, gas fees, and any applicable processing fees. There are no hidden charges or surprise costs.",
      category: "pricing"
    },
    {
      id: 10,
      question: "Can I increase my coverage amount?",
      answer: "Yes, you can upgrade your coverage at any time. Additional premium will be calculated proportionally for the remaining policy period. The increased coverage takes effect immediately upon payment confirmation.",
      category: "insurance"
    }
  ];

  const filteredFAQs = extendedFaqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularQuestions = extendedFaqData.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find quick answers to common questions about Blocx DeFi insurance
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge className="mb-4">Popular Questions</Badge>
            <h2 className="text-3xl font-bold mb-8">Most Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularQuestions.map((faq) => (
                <Card key={faq.id} className="futuristic-border hover-lift cursor-pointer p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold mb-3 text-accent">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                <h3 className="font-semibold mb-4">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-card hover:bg-muted/50 border border-border'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCategory === 'all' ? 'All Questions' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted-foreground">
                  {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                </p>
              </div>

              {filteredFAQs.length > 0 ? (
                <Card className="futuristic-border">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ) : (
                <Card className="futuristic-border">
                  <CardContent className="p-12 text-center">
                    <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any questions matching your search criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="futuristic-border bg-gradient-hero p-8">
            <CardContent className="p-0">
              <MessageCircle className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our support team is available 24/7 to help you with any questions or concerns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="glass" size="lg">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;