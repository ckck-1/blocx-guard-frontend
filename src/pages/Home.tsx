import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
import { 
  Shield, 
  Zap, 
  Globe, 
  TrendingUp, 
  Lock, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Clock
} from 'lucide-react';
import { testimonials, platformStats } from '@/data/mockData';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Smart Contract Protection",
      description: "Comprehensive coverage against smart contract vulnerabilities and exploits",
      stats: "99.9% Success Rate"
    },
    {
      icon: Globe,
      title: "Cross-Chain Coverage",
      description: "Protect your assets across Ethereum, Polygon, BSC, Avalanche and more",
      stats: "6+ Networks"
    },
    {
      icon: Zap,
      title: "Instant Claims Processing",
      description: "AI-powered claim verification and payout within 48 hours",
      stats: "2.4hr Avg. Time"
    },
    {
      icon: TrendingUp,
      title: "Dynamic Risk Assessment",
      description: "Real-time risk scoring using advanced blockchain analytics",
      stats: "Live Updates"
    },
    {
      icon: Lock,
      title: "Secure & Transparent",
      description: "Decentralized protocols with full transparency and security audits",
      stats: "100% Transparent"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governed by the community with fair and democratic decision making",
      stats: "15K+ Members"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Connect Your Wallet",
      description: "Link your MetaMask, WalletConnect, or other compatible wallets",
      icon: Globe
    },
    {
      step: 2,
      title: "Choose Your Coverage",
      description: "Select from our comprehensive insurance policies tailored to your needs",
      icon: Shield
    },
    {
      step: 3,
      title: "Pay Premium & Get Protected",
      description: "Pay your premium in crypto and receive instant coverage activation",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "File Claims Instantly",
      description: "Submit claims through our automated system for quick processing",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Platform Stats */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">${(platformStats.totalValueProtected / 1000000000).toFixed(1)}B+</div>
              <div className="text-sm text-muted-foreground">Total Value Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{platformStats.activePolicies.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Active Policies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{platformStats.claimsProcessed}</div>
              <div className="text-sm text-muted-foreground">Claims Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{platformStats.averageClaimTime}</div>
              <div className="text-sm text-muted-foreground">Avg. Claim Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{platformStats.supportedNetworks}</div>
              <div className="text-sm text-muted-foreground">Supported Networks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{platformStats.userSatisfaction}/5</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Blocx</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive DeFi <span className="gradient-text">Protection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced insurance solutions designed specifically for the decentralized finance ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="futuristic-border hover-lift group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <feature.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary" className="text-xs">{feature.stats}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold mb-4">
              How <span className="gradient-text">Blocx</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get protected in minutes with our streamlined insurance process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="glass-effect rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-accent">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {/* Connecting Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/signup">
              <Button variant="hero" size="lg">
                Start Your Protection Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Customer Stories</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">DeFi Pioneers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our users say about their experience with Blocx insurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="futuristic-border hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                  <p className="text-sm text-muted-foreground mt-4">{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your DeFi Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of DeFi users who trust Blocx to protect their investments. 
              Get comprehensive coverage in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/policies">
                <Button variant="accent" size="xl">
                  Explore Insurance Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="glass" size="xl">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;