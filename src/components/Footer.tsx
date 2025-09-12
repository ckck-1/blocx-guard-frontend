import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Twitter, Github, Linkedin, Mail, Send } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'About', href: '/about' },
      { name: 'Policies', href: '/policies' },
      { name: 'How it Works', href: '/#how-it-works' },
      { name: 'Pricing', href: '/policies' }
    ],
    support: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Status', href: '/status' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/blocx', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/blocx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/blocx', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold gradient-text">Blocx</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Secure your DeFi investments with comprehensive cross-chain insurance coverage. 
                Protecting billions in digital assets across multiple blockchains.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1"
                    type="email"
                  />
                  <Button variant="accent" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Blocx. All rights reserved. Protecting the future of decentralized finance.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
              <a
                href="mailto:support@blocx.io"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;