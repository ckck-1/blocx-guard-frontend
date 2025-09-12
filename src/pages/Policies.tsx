import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Shield, 
  TrendingUp, 
  Clock, 
  Star,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { policies } from '@/data/mockData';

const Policies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlockchain, setSelectedBlockchain] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('riskScore');

  const blockchains = ['all', 'Ethereum', 'Polygon', 'Binance Smart Chain', 'Avalanche', 'Multi-chain'];
  const categories = ['all', 'DeFi Protocol', 'Liquidity Mining', 'Cross-chain', 'Yield Farming', 'NFT'];

  const filteredPolicies = policies
    .filter(policy => {
      const matchesSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          policy.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBlockchain = selectedBlockchain === 'all' || policy.blockchain === selectedBlockchain;
      const matchesCategory = selectedCategory === 'all' || policy.category === selectedCategory;
      
      return matchesSearch && matchesBlockchain && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'riskScore':
          return b.riskScore - a.riskScore;
        case 'coverage':
          return b.coverage - a.coverage;
        case 'premium':
          return a.premium - b.premium;
        default:
          return 0;
      }
    });

  const getRiskScoreColor = (score: number) => {
    if (score >= 85) return 'success';
    if (score >= 70) return 'warning';
    return 'destructive';
  };

  const getRiskScoreLabel = (score: number) => {
    if (score >= 85) return 'Low Risk';
    if (score >= 70) return 'Medium Risk';
    return 'High Risk';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <section className="text-center mb-16">
          <Badge className="mb-6">Insurance Products</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="gradient-text">Protection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Explore our comprehensive range of DeFi insurance products designed to protect 
            your digital assets across multiple blockchains and protocols.
          </p>
        </section>

        {/* Filters and Search */}
        <section className="mb-12">
          <Card className="futuristic-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search insurance policies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Blockchain Filter */}
              <div>
                <Select value={selectedBlockchain} onValueChange={setSelectedBlockchain}>
                  <SelectTrigger>
                    <SelectValue placeholder="Blockchain" />
                  </SelectTrigger>
                  <SelectContent>
                    {blockchains.map((blockchain) => (
                      <SelectItem key={blockchain} value={blockchain}>
                        {blockchain === 'all' ? 'All Blockchains' : blockchain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="riskScore">Risk Score</SelectItem>
                    <SelectItem value="coverage">Coverage Amount</SelectItem>
                    <SelectItem value="premium">Premium (Low to High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Showing {filteredPolicies.length} of {policies.length} policies
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </Card>
        </section>

        {/* Insurance Policies Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPolicies.map((policy) => (
              <Card key={policy.id} className="futuristic-border hover-lift group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {policy.category}
                    </Badge>
                    <Badge variant={getRiskScoreColor(policy.riskScore) as any}>
                      <Star className="h-3 w-3 mr-1" />
                      {policy.riskScore}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {policy.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {policy.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Coverage</p>
                      <p className="text-lg font-bold text-accent">
                        ${policy.coverage.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Premium</p>
                      <p className="text-lg font-bold">
                        ${policy.premium}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{policy.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Blockchain:</span>
                      <span className="font-medium">{policy.blockchain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Risk Level:</span>
                      <Badge variant={getRiskScoreColor(policy.riskScore) as any} className="text-xs">
                        {getRiskScoreLabel(policy.riskScore)}
                      </Badge>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-4">
                    <Button variant="hero" className="w-full group">
                      Get This Policy
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-center pt-2">
                    <Badge 
                      variant={policy.status === 'Active' ? 'success' : 'secondary' as any}
                      className="text-xs"
                    >
                      {policy.status === 'Active' ? (
                        <>
                          <Shield className="h-3 w-3 mr-1" />
                          Available Now
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </>
                      )}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Policy Comparison Feature */}
        <section className="mb-16">
          <Card className="futuristic-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Need Help Choosing?
              </CardTitle>
              <CardDescription>
                Our experts can help you find the perfect insurance coverage for your DeFi portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">Personalized Recommendations</h4>
                  <p className="text-sm text-muted-foreground">Get policy suggestions based on your portfolio</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">Risk Assessment</h4>
                  <p className="text-sm text-muted-foreground">Free analysis of your DeFi exposure</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold">Quick Setup</h4>
                  <p className="text-sm text-muted-foreground">Get protected in under 5 minutes</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Speak with an Expert
                  </Button>
                </Link>
                <Button variant="glass" size="lg">
                  Compare Policies
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our FAQ section covers the most common questions about DeFi insurance, 
            or reach out to our support team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <Button variant="glass" size="lg">
                Read FAQ
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policies;