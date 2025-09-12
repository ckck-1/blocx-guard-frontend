import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet as WalletIcon, 
  Copy, 
  ExternalLink, 
  Plus, 
  Minus, 
  RefreshCw,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Zap
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { transactions } from '@/data/mockData';
import { toast } from '@/components/ui/use-toast';

const Wallet = () => {
  const { user } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Mock wallet data
  const walletData = {
    balance: 15750.25,
    usdValue: 15750.25,
    change24h: 2.34,
    connectedWallet: user?.wallet || "0x742d35Cc6634C0532925a3b8D238188F3E6c7A8e",
    tokens: [
      { symbol: 'ETH', name: 'Ethereum', balance: 8.5, value: 13600, change: 1.2 },
      { symbol: 'USDC', name: 'USD Coin', balance: 2150.25, value: 2150.25, change: 0.01 },
      { symbol: 'BLOCX', name: 'Blocx Token', balance: 500, value: 0, change: 0 }
    ]
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletData.connectedWallet);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
    toast({
      title: "Wallet Refreshed",
      description: "Your wallet balance has been updated",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <Badge variant="default" className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold gradient-text">My Wallet</h1>
            <p className="text-muted-foreground mt-2">
              Manage your crypto assets and transaction history
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="glass" 
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button variant="hero">
              <Plus className="h-4 w-4 mr-2" />
              Add Funds
            </Button>
          </div>
        </div>

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Balance Card */}
          <Card className="futuristic-border hover-lift lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <WalletIcon className="h-6 w-6 text-accent" />
                    Total Balance
                  </CardTitle>
                  <CardDescription>Connected Wallet Balance</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">${walletData.balance.toLocaleString()}</div>
                  <div className={`flex items-center gap-1 ${walletData.change24h >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {walletData.change24h >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">
                      {walletData.change24h >= 0 ? '+' : ''}{walletData.change24h}% (24h)
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Wallet Address */}
                <div className="bg-muted/20 p-4 rounded-lg border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Wallet Address</p>
                      <p className="font-mono text-sm">{walletData.connectedWallet}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={handleCopyAddress}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="accent" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Deposit
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Minus className="h-4 w-4 mr-2" />
                    Withdraw
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Insurance Stats */}
          <Card className="futuristic-border hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Insurance Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Coverage</p>
                <p className="text-2xl font-bold text-accent">$125,000</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Policies</p>
                <p className="text-xl font-semibold">3</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Premium</p>
                <p className="text-xl font-semibold">$380</p>
              </div>
              <Button variant="neon" size="sm" className="w-full">
                View Policies
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Token Holdings and Transactions */}
        <Tabs defaultValue="holdings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="holdings">Token Holdings</TabsTrigger>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          </TabsList>

          {/* Token Holdings */}
          <TabsContent value="holdings" className="space-y-4">
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Your Assets</CardTitle>
                <CardDescription>Overview of your token holdings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {walletData.tokens.map((token, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-border/30">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">{token.symbol}</p>
                          <p className="text-sm text-muted-foreground">{token.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{token.balance.toLocaleString()}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-muted-foreground">
                            ${token.value.toLocaleString()}
                          </span>
                          {token.change !== 0 && (
                            <span className={`text-xs ${token.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                              ({token.change >= 0 ? '+' : ''}{token.change}%)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transaction History */}
          <TabsContent value="transactions" className="space-y-4">
            <Card className="futuristic-border">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest wallet activity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Hash</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((tx) => (
                      <TableRow key={tx.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {tx.amount > 0 ? (
                              <TrendingUp className="h-4 w-4 text-success" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-destructive" />
                            )}
                            {tx.type}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={tx.amount > 0 ? 'text-success' : 'text-destructive'}>
                            {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toLocaleString()}
                          </span>
                        </TableCell>
                        <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
                        <TableCell>{getStatusBadge(tx.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs">{tx.hash.substring(0, 10)}...</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Wallet;