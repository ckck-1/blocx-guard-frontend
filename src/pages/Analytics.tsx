import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  DollarSign,
  Users,
  FileText,
  Calendar
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { riskScoreData, claimsOverTime, platformStats } from '@/data/mockData';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('6m');
  
  // Mock analytics data
  const policyDistribution = [
    { name: 'Smart Contract', value: 35, color: 'hsl(var(--accent))' },
    { name: 'Liquidity Pool', value: 25, color: 'hsl(var(--primary))' },
    { name: 'Cross-chain', value: 20, color: 'hsl(var(--success))' },
    { name: 'Yield Farming', value: 15, color: 'hsl(var(--warning))' },
    { name: 'NFT', value: 5, color: 'hsl(var(--destructive))' }
  ];

  const riskTrends = [
    { month: 'Jan', high: 45, medium: 120, low: 235 },
    { month: 'Feb', high: 52, medium: 135, low: 210 },
    { month: 'Mar', high: 38, medium: 145, low: 280 },
    { month: 'Apr', high: 61, medium: 155, low: 290 },
    { month: 'May', high: 49, medium: 165, low: 305 },
    { month: 'Jun', high: 55, medium: 175, low: 320 }
  ];

  const coverageAnalytics = [
    { month: 'Jan', covered: 2.1, claims: 0.68 },
    { month: 'Feb', covered: 2.3, claims: 0.75 },
    { month: 'Mar', covered: 2.5, claims: 0.52 },
    { month: 'Apr', covered: 2.8, claims: 0.89 },
    { month: 'May', covered: 3.1, claims: 0.72 },
    { month: 'Jun', covered: 3.4, claims: 0.81 }
  ];

  const protocolRisks = [
    { protocol: 'Uniswap V3', riskScore: 85, tvl: 1200000000, trend: 'up' },
    { protocol: 'Compound', riskScore: 92, tvl: 850000000, trend: 'stable' },
    { protocol: 'Aave V3', riskScore: 89, tvl: 1100000000, trend: 'up' },
    { protocol: 'Curve', riskScore: 78, tvl: 650000000, trend: 'down' },
    { protocol: 'Balancer', riskScore: 81, tvl: 400000000, trend: 'up' }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 85) return 'text-success';
    if (score >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down':
        return <TrendingUp className="h-4 w-4 text-destructive rotate-180" />;
      default:
        return <div className="h-4 w-4 bg-muted-foreground rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold gradient-text">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive insights into your DeFi insurance portfolio
            </p>
          </div>
          <div className="flex gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">1 Month</SelectItem>
                <SelectItem value="3m">3 Months</SelectItem>
                <SelectItem value="6m">6 Months</SelectItem>
                <SelectItem value="1y">1 Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="hero">
              <FileText className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="futuristic-border hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Coverage</CardTitle>
              <Shield className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$125,000</div>
              <p className="text-xs text-success">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="futuristic-border hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <FileText className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Across 2 chains</p>
            </CardContent>
          </Card>

          <Card className="futuristic-border hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Risk Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">87</div>
              <p className="text-xs text-success">Low Risk Portfolio</p>
            </CardContent>
          </Card>

          <Card className="futuristic-border hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Premiums</CardTitle>
              <DollarSign className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,255</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
            <TabsTrigger value="claims">Claims Data</TabsTrigger>
            <TabsTrigger value="protocols">Protocol Insights</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Risk Score Trend */}
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Risk Score Trend</CardTitle>
                <CardDescription>Your portfolio risk over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={riskScoreData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))' 
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Policy Distribution */}
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Coverage Distribution</CardTitle>
                <CardDescription>Breakdown by policy type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={policyDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {policyDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {policyDistribution.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Risk Analysis Tab */}
          <TabsContent value="risk" className="space-y-6">
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Risk Distribution Over Time</CardTitle>
                <CardDescription>High, Medium, and Low risk policies</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={riskTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="low" 
                      stackId="1" 
                      stroke="hsl(var(--success))" 
                      fill="hsl(var(--success) / 0.3)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="medium" 
                      stackId="1" 
                      stroke="hsl(var(--warning))" 
                      fill="hsl(var(--warning) / 0.3)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="high" 
                      stackId="1" 
                      stroke="hsl(var(--destructive))" 
                      fill="hsl(var(--destructive) / 0.3)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Claims Data Tab */}
          <TabsContent value="claims" className="space-y-6">
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Claims vs Coverage Trend</CardTitle>
                <CardDescription>Monthly coverage and claims comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={coverageAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))' 
                      }} 
                    />
                    <Bar dataKey="covered" fill="hsl(var(--accent))" name="Coverage ($M)" />
                    <Bar dataKey="claims" fill="hsl(var(--destructive))" name="Claims ($M)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Protocol Insights Tab */}
          <TabsContent value="protocols" className="space-y-6">
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Protocol Risk Assessment</CardTitle>
                <CardDescription>Risk scores for major DeFi protocols</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {protocolRisks.map((protocol, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-border/30">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">{protocol.protocol}</p>
                          <p className="text-sm text-muted-foreground">
                            TVL: ${(protocol.tvl / 1000000000).toFixed(1)}B
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className={`text-lg font-bold ${getRiskColor(protocol.riskScore)}`}>
                            {protocol.riskScore}
                          </p>
                          <p className="text-xs text-muted-foreground">Risk Score</p>
                        </div>
                        {getTrendIcon(protocol.trend)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;