import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Users, 
  Share2, 
  Bookmark,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
import { blogArticles } from '@/data/mockData';

const Article = () => {
  const { id } = useParams();
  const article = blogArticles.find(a => a.id.toString() === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button variant="hero">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter(a => a.id !== article.id && a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);

  const fullContent = `
    ${article.content}

    ## Understanding DeFi Insurance Fundamentals

    Decentralized Finance (DeFi) has revolutionized the financial landscape by providing open, permissionless access to financial services. However, this innovation comes with unique risks that traditional insurance models fail to address.

    ### Key Risk Categories in DeFi

    **Smart Contract Risk**: The foundation of DeFi protocols lies in smart contracts - self-executing contracts with terms directly written into code. While these contracts enable trustless operations, they're also susceptible to bugs, exploits, and vulnerabilities that can lead to significant financial losses.

    **Protocol Risk**: Beyond individual smart contracts, entire protocols can face systemic risks. These include governance attacks, economic exploits, and protocol-specific vulnerabilities that affect the entire ecosystem.

    **Cross-Chain Risks**: As DeFi expands across multiple blockchains, bridge protocols become critical infrastructure. However, these bridges introduce additional attack vectors and technical complexities that can result in substantial losses.

    ### The Blocx Approach to Risk Mitigation

    Blocx addresses these challenges through a comprehensive insurance framework that combines traditional actuarial science with blockchain-native risk assessment methodologies.

    Our AI-powered risk assessment engine continuously monitors protocol health, analyzing factors such as:
    - Total Value Locked (TVL) stability
    - Historical exploit patterns
    - Smart contract audit results
    - Governance token distribution
    - Development team track record

    ### Real-World Case Studies

    **Case Study 1: The Flash Loan Exploit**
    In early 2024, a major DeFi protocol suffered a $50M exploit through a sophisticated flash loan attack. Blocx policyholders were protected and received full compensation within 48 hours, demonstrating the effectiveness of our rapid claims processing system.

    **Case Study 2: Cross-Chain Bridge Vulnerability**
    When a popular bridge protocol was compromised, resulting in $120M in losses across the ecosystem, Blocx's cross-chain coverage ensured that our users' assets remained protected, maintaining confidence in multi-chain DeFi strategies.

    ### Future Outlook: The Evolution of DeFi Insurance

    As the DeFi ecosystem matures, we anticipate several key developments:

    1. **Increased Regulatory Clarity**: Clearer regulatory frameworks will provide more certainty for both protocol developers and insurance providers.

    2. **Advanced Risk Modeling**: Machine learning and AI will enable more sophisticated risk assessment, leading to better pricing and coverage options.

    3. **Protocol-Native Insurance**: We expect to see more protocols integrating insurance coverage directly into their offerings, making protection seamless for users.

    ### Practical Steps for DeFi Users

    To maximize your protection in the DeFi space:

    1. **Diversify Your Coverage**: Don't rely on a single insurance provider or coverage type
    2. **Stay Informed**: Keep up with protocol updates and security audits
    3. **Use Established Protocols**: Newer protocols often carry higher risks
    4. **Understand Your Coverage**: Read policy terms carefully and understand what's covered

    ### Conclusion

    DeFi insurance represents a critical evolution in financial protection for the digital age. As protocols become more sophisticated and the ecosystem grows, comprehensive insurance coverage will become as essential as the wallets we use to interact with these protocols.

    Blocx is committed to leading this evolution, providing cutting-edge protection that evolves with the rapidly changing DeFi landscape. Our goal is to make DeFi safer and more accessible for everyone, from individual retail users to large institutional participants.

    The future of finance is decentralized, and with proper insurance coverage, it can also be secure and reliable.
  `;

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {article.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </div>
          </div>

          {/* Article Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="glass" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="glass" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmark
            </Button>
            <Button variant="glass" size="sm">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Like
            </Button>
          </div>

          <Separator className="mb-8" />
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={article.imageURL} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-foreground space-y-6">
            {fullContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-12 mb-6 gradient-text">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h4 key={index} className="font-semibold mt-6 mb-3 text-accent">
                    {paragraph.replace(/\*\*/g, '')}
                  </h4>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <div key={index} className="bg-muted/20 p-4 rounded-lg border border-border/30">
                    <p>{paragraph}</p>
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2">
                    <li>{paragraph.replace('- ', '')}</li>
                  </ul>
                );
              }
              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="glass">
                <ThumbsUp className="h-4 w-4 mr-2" />
                42 Likes
              </Button>
              <Button variant="glass">
                <MessageCircle className="h-4 w-4 mr-2" />
                12 Comments
              </Button>
            </div>
            <Button variant="glass">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="futuristic-border hover-lift">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedArticle.imageURL} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {relatedArticle.tags[0]}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedArticle.summary}
                    </p>
                    <Link to={`/blog/${relatedArticle.id}`}>
                      <Button variant="ghost" size="sm" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;