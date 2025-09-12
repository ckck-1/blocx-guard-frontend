// Mock data for Blocx DeFi Insurance Platform

export const users = [
  {
    id: 1,
    name: "Alex Chen",
    email: "alex.chen@example.com",
    wallet: "0x1234...5678",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    totalPolicies: 3,
    totalCoverage: 125000,
    riskScore: 82
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    wallet: "0x9876...4321",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=100&h=100&fit=crop&crop=face",
    totalPolicies: 5,
    totalCoverage: 250000,
    riskScore: 91
  }
];

export const policies = [
  {
    id: 1,
    name: "Smart Contract Insurance",
    description: "Protects against smart contract vulnerabilities and exploits",
    coverage: 50000,
    premium: 250,
    riskScore: 85,
    duration: "12 months",
    blockchain: "Ethereum",
    category: "DeFi Protocol",
    status: "Active"
  },
  {
    id: 2,
    name: "Liquidity Pool Protection",
    description: "Covers impermanent loss and liquidity pool risks",
    coverage: 75000,
    premium: 380,
    riskScore: 72,
    duration: "6 months",
    blockchain: "Polygon",
    category: "Liquidity Mining",
    status: "Active"
  },
  {
    id: 3,
    name: "Bridge Security Cover",
    description: "Protects cross-chain bridge transactions from hacks",
    coverage: 100000,
    premium: 500,
    riskScore: 78,
    duration: "12 months",
    blockchain: "Multi-chain",
    category: "Cross-chain",
    status: "Available"
  },
  {
    id: 4,
    name: "Yield Farming Shield",
    description: "Insurance for yield farming and staking rewards",
    coverage: 25000,
    premium: 125,
    riskScore: 88,
    duration: "3 months",
    blockchain: "Binance Smart Chain",
    category: "Yield Farming",
    status: "Available"
  },
  {
    id: 5,
    name: "NFT Marketplace Cover",
    description: "Protection against NFT marketplace exploits and fraud",
    coverage: 150000,
    premium: 750,
    riskScore: 65,
    duration: "12 months",
    blockchain: "Ethereum",
    category: "NFT",
    status: "Available"
  }
];

export const claims = [
  {
    id: 1,
    policyId: 1,
    policyName: "Smart Contract Insurance",
    status: "Approved",
    date: "2024-01-15",
    amount: 15000,
    description: "Flash loan attack on protocol",
    proofURL: "https://example.com/proof1",
    submissionDate: "2024-01-10",
    resolution: "Claim validated through blockchain analysis"
  },
  {
    id: 2,
    policyId: 2,
    policyName: "Liquidity Pool Protection",
    status: "Pending",
    date: "2024-01-20",
    amount: 8500,
    description: "Impermanent loss exceeding threshold",
    proofURL: "https://example.com/proof2",
    submissionDate: "2024-01-18",
    resolution: "Under review by claims team"
  },
  {
    id: 3,
    policyId: 1,
    policyName: "Smart Contract Insurance",
    status: "Rejected",
    date: "2024-01-05",
    amount: 25000,
    description: "User error in transaction",
    proofURL: "https://example.com/proof3",
    submissionDate: "2024-01-03",
    resolution: "Claim rejected - excluded user error"
  }
];

export const faqData = [
  {
    id: 1,
    question: "What is DeFi insurance?",
    answer: "DeFi insurance protects your digital assets against smart contract vulnerabilities, protocol hacks, and other risks in decentralized finance. Blocx provides comprehensive coverage across multiple blockchains."
  },
  {
    id: 2,
    question: "How are claims processed?",
    answer: "Claims are processed through our automated verification system using blockchain analytics and smart contracts. Most claims are resolved within 48-72 hours of submission."
  },
  {
    id: 3,
    question: "What blockchains do you support?",
    answer: "Blocx supports Ethereum, Polygon, Binance Smart Chain, Avalanche, Arbitrum, and Optimism. We're continuously adding new blockchain networks."
  },
  {
    id: 4,
    question: "How are premiums calculated?",
    answer: "Premiums are calculated using AI-powered risk assessment models that analyze protocol history, security audits, total value locked, and real-time risk factors."
  },
  {
    id: 5,
    question: "Can I cancel my policy?",
    answer: "Yes, you can cancel your policy at any time. Unused premiums are refunded proportionally based on the remaining coverage period."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Marcus Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Blocx saved me $50K when the protocol I was using got exploited. The claim process was seamless and transparent.",
    role: "DeFi Investor",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Emily Zhang",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The risk analytics dashboard helped me understand the safety of different protocols. Peace of mind for my DeFi investments.",
    role: "Portfolio Manager",
    location: "Singapore"
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Cross-chain coverage is exactly what I needed. Blocx protects my assets across all the networks I use.",
    role: "Crypto Trader",
    location: "Seoul, South Korea"
  }
];

export const blogArticles = [
  {
    id: 1,
    title: "Understanding DeFi Insurance: A Complete Guide",
    summary: "Learn everything about decentralized finance insurance, coverage types, and how to protect your crypto assets.",
    content: "Decentralized Finance (DeFi) has revolutionized the financial landscape...",
    imageURL: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    date: "2024-01-20",
    author: "Blocx Research Team",
    readTime: "8 min read",
    tags: ["DeFi", "Insurance", "Education"]
  },
  {
    id: 2,
    title: "Cross-Chain Security: Protecting Multi-Chain Portfolios",
    summary: "Explore the unique risks of cross-chain protocols and how to mitigate them with comprehensive insurance coverage.",
    content: "As the DeFi ecosystem expands across multiple blockchains...",
    imageURL: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&h=400&fit=crop",
    date: "2024-01-18",
    author: "Sarah Chen",
    readTime: "6 min read",
    tags: ["Cross-chain", "Security", "Multi-chain"]
  },
  {
    id: 3,
    title: "Smart Contract Audits vs Insurance: Which Do You Need?",
    summary: "Compare the benefits of smart contract audits and insurance coverage for comprehensive protocol security.",
    content: "Smart contract security is paramount in DeFi...",
    imageURL: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    date: "2024-01-15",
    author: "Alex Thompson",
    readTime: "5 min read",
    tags: ["Smart Contracts", "Audits", "Security"]
  }
];

export const transactions = [
  {
    id: 1,
    type: "Premium Payment",
    amount: -250,
    date: "2024-01-20",
    status: "Completed",
    hash: "0xabc123...def456",
    policy: "Smart Contract Insurance"
  },
  {
    id: 2,
    type: "Claim Payout",
    amount: +15000,
    date: "2024-01-15",
    status: "Completed",
    hash: "0x123abc...456def",
    policy: "Smart Contract Insurance"
  },
  {
    id: 3,
    type: "Premium Payment",
    amount: -380,
    date: "2024-01-10",
    status: "Completed",
    hash: "0x789ghi...012jkl",
    policy: "Liquidity Pool Protection"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "CEO & Co-Founder",
    bio: "Former Goldman Sachs risk analyst with 10+ years in traditional insurance and 5 years in DeFi.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sarahmitchell",
    twitter: "https://twitter.com/sarahmitchell"
  },
  {
    id: 2,
    name: "James Liu",
    role: "CTO & Co-Founder",
    bio: "Blockchain architect and former Ethereum core contributor. Expert in smart contract security and cross-chain protocols.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/jamesliu",
    twitter: "https://twitter.com/jamesliu"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Head of Risk Analytics",
    bio: "PhD in Statistics from MIT. Former quantitative analyst at Two Sigma with expertise in algorithmic risk modeling.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=300&h=300&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/mariagarcia",
    twitter: "https://twitter.com/mariagarcia"
  }
];

export const platformStats = {
  totalValueProtected: 2500000000,
  activePolicies: 15420,
  claimsProcessed: 892,
  averageClaimTime: "2.4 hours",
  supportedNetworks: 6,
  userSatisfaction: 4.8
};

export const riskScoreData = [
  { name: 'Jan', score: 85 },
  { name: 'Feb', score: 82 },
  { name: 'Mar', score: 88 },
  { name: 'Apr', score: 91 },
  { name: 'May', score: 86 },
  { name: 'Jun', score: 89 }
];

export const claimsOverTime = [
  { month: 'Jan', claims: 45, payouts: 680000 },
  { month: 'Feb', claims: 52, payouts: 750000 },
  { month: 'Mar', claims: 38, payouts: 520000 },
  { month: 'Apr', claims: 61, payouts: 890000 },
  { month: 'May', claims: 49, payouts: 720000 },
  { month: 'Jun', claims: 55, payouts: 810000 }
];