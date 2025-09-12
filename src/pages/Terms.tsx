import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileText, Calendar, Shield } from 'lucide-react';

const Terms = () => {
  const lastUpdated = "January 15, 2024";
  const effectiveDate = "January 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using Blocx insurance services
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

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="futuristic-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Terms and Conditions
              </CardTitle>
              <CardDescription>
                These terms govern your use of Blocx DeFi insurance services
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Blocx ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our decentralized finance (DeFi) insurance platform and services. By accessing or using Blocx, you agree to be bound by these Terms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Blocx provides insurance coverage for various risks associated with decentralized finance protocols, including but not limited to smart contract vulnerabilities, protocol exploits, and cross-chain bridge failures.
                  </p>
                </section>

                <Separator />

                {/* Definitions */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">2. Definitions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Platform</h3>
                      <p className="text-muted-foreground">
                        The Blocx website, smart contracts, and all associated services and technologies.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">User</h3>
                      <p className="text-muted-foreground">
                        Any individual or entity that accesses or uses the Blocx platform.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Policy</h3>
                      <p className="text-muted-foreground">
                        An insurance contract providing coverage for specified DeFi-related risks.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Premium</h3>
                      <p className="text-muted-foreground">
                        The payment required to maintain active insurance coverage.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Eligibility */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">3. Eligibility and Registration</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      To use Blocx services, you must:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Be at least 18 years of age (or the age of majority in your jurisdiction)</li>
                      <li>Have the legal capacity to enter into binding agreements</li>
                      <li>Not be located in a jurisdiction where our services are prohibited</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Provide accurate and complete registration information</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      You are responsible for maintaining the confidentiality of your account credentials and all activities that occur under your account.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Services */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">4. Insurance Services</h2>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-accent">Coverage Types</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Blocx offers insurance coverage for various DeFi-related risks, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Smart contract vulnerabilities and exploits</li>
                      <li>Protocol governance attacks</li>
                      <li>Cross-chain bridge failures</li>
                      <li>Liquidity pool impermanent loss (where specified)</li>
                      <li>Yield farming and staking risks</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-accent mt-6">Coverage Limitations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Coverage is subject to policy terms, conditions, and exclusions. Not all risks are covered, and coverage limits apply to all policies.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* User Obligations */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">5. User Obligations</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      As a Blocx user, you agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Provide accurate information when purchasing policies</li>
                      <li>Pay premiums in full and on time</li>
                      <li>Notify us promptly of any covered events</li>
                      <li>Cooperate fully with claims investigations</li>
                      <li>Not engage in fraudulent activities</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Use the platform only for its intended purpose</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                {/* Claims Process */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">6. Claims Process</h2>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-accent">Filing Claims</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Claims must be filed within 30 days of becoming aware of a covered event. All claims require:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Detailed description of the incident</li>
                      <li>Proof of loss documentation</li>
                      <li>Relevant transaction hashes and blockchain evidence</li>
                      <li>Any additional information requested by our claims team</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-accent mt-6">Claims Review</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We aim to process claims within 48-72 hours using our automated verification system. Complex claims may require additional review time.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Fees and Payments */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">7. Fees and Payments</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      All premiums and fees are clearly displayed before purchase. You agree to pay:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Insurance premiums as specified in your policy</li>
                      <li>Applicable blockchain transaction fees</li>
                      <li>Any processing fees disclosed at time of purchase</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Payments are processed via smart contracts on the blockchain. All transactions are final and non-refundable except as specified in your policy terms.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Limitations of Liability */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">8. Limitations of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, BLOCX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE OF OUR SERVICES.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Our total liability for any claims arising from or relating to these Terms shall not exceed the amount of premiums paid by you in the twelve months preceding the claim.
                  </p>
                </section>

                <Separator />

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">9. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate these Terms at any time. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                    <li>Your access to new services will be suspended</li>
                    <li>Existing policies will continue according to their terms</li>
                    <li>Outstanding claims will be processed normally</li>
                    <li>Unused premiums may be refunded as per policy terms</li>
                  </ul>
                </section>

                <Separator />

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">10. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms from time to time. Material changes will be communicated via email or platform notification at least 30 days before taking effect. Continued use of our services after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <Separator />

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">11. Governing Law and Disputes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by the laws of Delaware, United States. Any disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </section>

                <Separator />

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold gradient-text mb-4">12. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> legal@blocx.insurance<br />
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

export default Terms;