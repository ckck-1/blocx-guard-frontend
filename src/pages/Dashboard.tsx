import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Wallet,
  BarChart3,
  FileText,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { policies, claims, platformStats, riskScoreData, claimsOverTime } from '@/data/mockData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userStats = {
    totalCoverage: 175000,
    activePolicies: 3,
    pendingClaims: 1,
    walletBalance: 12500,
    riskScore: 88
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'Approved':
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case 'Rejected':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Insurance Dashboard</h1>
          <p className="text-muted-foreground">Monitor your DeFi insurance coverage and claims</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="futuristic-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Coverage</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">${userStats.totalCoverage.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="futuristic-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{userStats.activePolicies}</div>
              <p className="text-xs text-muted-foreground">Across 3 blockchains</p>
            </CardContent>
          </Card>

          <Card className="futuristic-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{userStats.riskScore}</div>
              <Progress value={userStats.riskScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="futuristic-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">${userStats.walletBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Available for premiums</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="claims">Claims</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="futuristic-border">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest insurance activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <div className="flex-1">
                      <p className="font-medium">Smart Contract Insurance Activated</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <Clock className="h-5 w-5 text-warning" />
                    <div className="flex-1">
                      <p className="font-medium">Claim Under Review</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <div className="flex-1">
                      <p className="font-medium">Risk Score Improved</p>
                      <p className="text-sm text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="futuristic-border">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Manage your insurance coverage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/policies">
                    <Button variant="hero" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Policy
                    </Button>
                  </Link>
                  <Link to="/claim">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      File a Claim
                    </Button>
                  </Link>
                  <Link to="/wallet">
                    <Button variant="glass" className="w-full justify-start">
                      <Wallet className="h-4 w-4 mr-2" />
                      Manage Wallet
                    </Button>
                  </Link>
                  <Link to="/analytics">
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Policies Tab */}
          <TabsContent value="policies" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Policies</h2>
              <Link to="/policies">
                <Button variant="hero">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Policy
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {policies.slice(0, 4).map((policy) => (
                <Card key={policy.id} className="futuristic-border hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{policy.name}</CardTitle>
                      <Badge variant={getStatusColor(policy.status) as any}>
                        {getStatusIcon(policy.status)}
                        <span className="ml-1">{policy.status}</span>
                      </Badge>
                    </div>
                    <CardDescription>{policy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Coverage</p>
                        <p className="font-semibold">${policy.coverage.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Premium</p>
                        <p className="font-semibold">${policy.premium}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Risk Score</p>
                        <p className="font-semibold text-accent">{policy.riskScore}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Blockchain</p>
                        <p className="font-semibold">{policy.blockchain}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Claims Tab */}
          <TabsContent value="claims" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Claims</h2>
              <Link to="/claim">
                <Button variant="hero">
                  <Plus className="h-4 w-4 mr-2" />
                  File Claim
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {claims.map((claim) => (
                <Card key={claim.id} className="futuristic-border">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{claim.policyName}</CardTitle>
                        <CardDescription>Claim #{claim.id} • {claim.description}</CardDescription>
                      </div>
                      <Badge variant={getStatusColor(claim.status) as any}>
                        {getStatusIcon(claim.status)}
                        <span className="ml-1">{claim.status}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Claim Amount</p>
                        <p className="font-semibold text-accent">${claim.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Submitted</p>
                        <p className="font-semibold">{claim.submissionDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Incident Date</p>
                        <p className="font-semibold">{claim.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Resolution</p>
                        <p className="font-semibold">{claim.resolution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Portfolio Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="futuristic-border">
                <CardHeader>
                  <CardTitle>Risk Score Trend</CardTitle>
                  <CardDescription>Your risk assessment over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-accent mx-auto mb-2" />
                      <p className="text-muted-foreground">Risk score chart visualization</p>
                      <p className="text-sm text-muted-foreground">Current Score: {userStats.riskScore}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="futuristic-border">
                <CardHeader>
                  <CardTitle>Coverage Distribution</CardTitle>
                  <CardDescription>Coverage across different protocols</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Smart Contracts</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Liquidity Pools</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <Progress value={30} />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cross-chain Bridges</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <Progress value={25} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;