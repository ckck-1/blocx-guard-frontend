import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Calendar, Lock } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "January 15, 2024";
  const effectiveDate = "January 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4">Privacy</Badge>
            <h1 className="text-4xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priorities
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last Updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Effective: {effectiveDate}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="futuristic-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                Privacy Policy
              </CardTitle>
              <CardDescription>
                How we collect, use, and protect your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Blocx ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our decentralized finance (DeFi) insurance platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    By using Blocx, you consent to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </section>

                <Separator />

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">2. Information We Collect</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Personal Information</h3>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        We may collect the following personal information:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Wallet addresses and transaction data</li>
                        <li>Identity verification documents (when required)</li>
                        <li>Payment and billing information</li>
                        <li>Communication preferences</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Automatically Collected Information</h3>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        When you use our platform, we automatically collect:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Device information (IP address, browser type, operating system)</li>
                        <li>Usage data (pages visited, time spent, clicks)</li>
                        <li>Blockchain transaction data</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Error logs and performance data</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Blockchain Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As a blockchain-based platform, certain information is inherently public and immutable, including wallet addresses, transaction hashes, and smart contract interactions.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent">Service Provision</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Process insurance applications</li>
                        <li>Manage policies and claims</li>
                        <li>Calculate premiums and risk assessments</li>
                        <li>Provide customer support</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent">Platform Improvement</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Analyze usage patterns</li>
                        <li>Improve user experience</li>
                        <li>Develop new features</li>
                        <li>Enhance security measures</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent">Legal Compliance</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Comply with regulatory requirements</li>
                        <li>Prevent fraud and abuse</li>
                        <li>Maintain audit trails</li>
                        <li>Respond to legal requests</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-accent">Communication</h3>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Send service notifications</li>
                        <li>Provide policy updates</li>
                        <li>Share educational content</li>
                        <li>Marketing (with consent)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Information Sharing */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Service Providers</h3>
                      <p className="text-muted-foreground">
                        Third-party vendors who assist with operations (payment processing, data analytics, customer support) under strict confidentiality agreements.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Legal Requirements</h3>
                      <p className="text-muted-foreground">
                        When required by law, regulation, legal process, or government request.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Business Transfers</h3>
                      <p className="text-muted-foreground">
                        In connection with mergers, acquisitions, or sale of business assets (with notice to users).
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Consent</h3>
                      <p className="text-muted-foreground">
                        When you explicitly consent to the sharing of specific information.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">5. Data Security</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      We implement comprehensive security measures to protect your information:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/10 p-4 rounded-lg border border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Lock className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold">Technical Safeguards</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                          <li>End-to-end encryption</li>
                          <li>Secure socket layer (SSL) technology</li>
                          <li>Multi-factor authentication</li>
                          <li>Regular security audits</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/10 p-4 rounded-lg border border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-accent" />
                          <h3 className="font-semibold">Operational Safeguards</h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                          <li>Access controls and monitoring</li>
                          <li>Employee training and background checks</li>
                          <li>Incident response procedures</li>
                          <li>Regular backup and recovery testing</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      While we strive to protect your information, no method of transmission over the internet is 100% secure. We continuously monitor and improve our security practices.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">6. Your Privacy Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-accent">Access</h4>
                        <p className="text-muted-foreground text-sm">Request a copy of the personal information we hold about you</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-accent">Correction</h4>
                        <p className="text-muted-foreground text-sm">Request correction of inaccurate or incomplete information</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-accent">Deletion</h4>
                        <p className="text-muted-foreground text-sm">Request deletion of your personal information (subject to legal requirements)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-accent">Portability</h4>
                        <p className="text-muted-foreground text-sm">Request transfer of your data to another service provider</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-accent">Opt-out</h4>
                        <p className="text-muted-foreground text-sm">Unsubscribe from marketing communications</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us at privacy@blocx.insurance. We will respond to your request within 30 days.
                  </p>
                </section>

                <Separator />

                {/* Cookies */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground">Required for basic platform functionality and security.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground">Help us understand how you use our platform to improve performance.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Preference Cookies</h3>
                      <p className="text-muted-foreground">Remember your settings and preferences for a personalized experience.</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can manage cookie preferences through your browser settings or our cookie preference center.
                  </p>
                </section>

                <Separator />

                {/* International Transfers */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">8. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-4">
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Standard contractual clauses</li>
                    <li>Binding corporate rules</li>
                    <li>Certification schemes</li>
                  </ul>
                </section>

                <Separator />

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Material changes will be communicated via email or platform notification at least 30 days before taking effect.
                  </p>
                </section>

                <Separator />

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about this Privacy Policy or our data practices, contact us at:
                  </p>
                  <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                    <p className="text-muted-foreground">
                      <strong>Privacy Officer</strong><br />
                      <strong>Email:</strong> privacy@blocx.insurance<br />
                      <strong>Address:</strong> 123 DeFi Street, San Francisco, CA 94105<br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;