import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-3d-illustration.jpg';

const Hero = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Chain Protection",
      description: "Coverage across Ethereum, Polygon, BSC, and more"
    },
    {
      icon: Zap,
      title: "Instant Claims",
      description: "Automated claim processing in under 48 hours"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "24/7 protection for your DeFi investments worldwide"
    }
  ];

  return (
    <section className="relative hero-section min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium">
              <Zap className="h-4 w-4 mr-2 text-accent" />
              <span>Protecting $2.5B+ in DeFi assets</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Secure Your{' '}
                <span className="gradient-text">DeFi Future</span>{' '}
                with Blocx
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Comprehensive cross-chain insurance protecting your digital assets from smart contract risks, 
                protocol exploits, and DeFi vulnerabilities. Trade with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/policies">
                <Button variant="hero" size="xl" className="group">
                  Get Insured Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="glass" size="xl">
                  View Dashboard
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Blocx DeFi Insurance Platform - Blockchain Security"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 animate-pulse-slow">
                <div className="text-xs font-semibold text-success">Active Coverage</div>
                <div className="text-lg font-bold text-success">$2.5B+</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-effect rounded-xl p-4 animate-pulse-slow">
                <div className="text-xs font-semibold text-accent">Claims Processed</div>
                <div className="text-lg font-bold text-accent">15,420</div>
              </div>
            </div>

            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent rounded-full animate-pulse opacity-60" />
      <div className="absolute top-3/4 right-20 w-3 h-3 bg-primary rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent-glow rounded-full animate-bounce opacity-50" />
    </section>
  );
};

export default Hero;