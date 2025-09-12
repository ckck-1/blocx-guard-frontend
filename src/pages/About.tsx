import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Users, 
  Globe, 
  Award, 
  Target,
  Heart,
  Linkedin,
  Twitter,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '@/data/mockData';

const About = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Blocx was founded with a mission to make DeFi safer for everyone'
    },
    {
      year: '2022',
      title: 'First Insurance Product',
      description: 'Launched smart contract insurance covering $10M in assets'
    },
    {
      year: '2023',
      title: 'Cross-Chain Expansion',
      description: 'Expanded to support Polygon, BSC, and Avalanche networks'
    },
    {
      year: '2024',
      title: '$2.5B+ Protected',
      description: 'Reached milestone of protecting over $2.5 billion in DeFi assets'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security and protection of our users\' digital assets above all else.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Our platform is designed with the user experience at the forefront of every decision.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Making DeFi insurance accessible to users worldwide, regardless of location.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality insurance products and services.'
    }
  ];

  const achievements = [
    '15,420+ Active policies managed',
    '$2.5B+ Total value protected',
    '892 Claims successfully processed',
    '4.8/5 Average user satisfaction',
    '6+ Blockchain networks supported',
    '99.9% Platform uptime maintained'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <Badge className="mb-6">About Blocx</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pioneering the Future of{' '}
            <span className="gradient-text">DeFi Insurance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            At Blocx, we're building the most comprehensive and user-friendly insurance platform for 
            decentralized finance. Our mission is to make DeFi safer, more accessible, and more 
            trustworthy for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/policies">
              <Button variant="hero" size="lg">
                Explore Our Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="futuristic-border hover-lift">
              <CardHeader>
                <Target className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To democratize access to comprehensive DeFi insurance, protecting digital assets 
                  across all blockchain networks while maintaining transparency, security, and user 
                  control. We believe everyone deserves peace of mind when participating in 
                  decentralized finance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="futuristic-border hover-lift">
              <CardHeader>
                <Globe className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  A world where DeFi is as safe and reliable as traditional finance, where users 
                  can explore innovative financial products without fear of losing their assets to 
                  smart contract vulnerabilities, protocol exploits, or cross-chain bridge failures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold mb-4">
              What Drives <span className="gradient-text">Our Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every product we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="futuristic-border hover-lift group text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Building the <span className="gradient-text">Future</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our founding to today, we've been committed to advancing DeFi security
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent rounded-full" />
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`futuristic-border hover-lift w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-6 w-6 text-accent" />
                      <CardTitle className="text-lg">{milestone.year}</CardTitle>
                    </div>
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {milestone.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background z-10" />
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold mb-4">
              The People Behind <span className="gradient-text">Blocx</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team combines expertise in traditional finance, blockchain technology, and insurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="futuristic-border hover-lift group">
                <CardHeader className="text-center">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-center">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to protecting the DeFi ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="futuristic-border hover-lift group">
                <CardContent className="flex items-center space-x-4 p-6">
                  <CheckCircle2 className="h-8 w-8 text-success group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{achievement}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for insurance coverage or want to be part of our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/policies">
              <Button variant="accent" size="lg">
                Get Protected Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="lg">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;