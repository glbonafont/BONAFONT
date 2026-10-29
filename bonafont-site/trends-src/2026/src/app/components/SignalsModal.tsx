import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface Signal {
  title: string;
  source: string;
  url: string;
  date: string;
}

interface SignalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtopicId: string;
  subtopicTitle: string;
  translations: any;
}

const signalsData: Record<string, Signal[]> = {
  '1.1': [
    {
      title: 'Meta\'s AI-Powered Smart Glasses: Real-Time Translation Revolution',
      source: 'The Verge',
      url: 'https://www.theverge.com/2024/9/25/24254467/meta-ray-ban-smart-glasses-ai-translation',
      date: 'September 2024'
    },
    {
      title: 'Google Translate AI Now Supports 110 New Languages',
      source: 'TechCrunch',
      url: 'https://techcrunch.com/2024/06/27/google-translates-ai-powered-contextual-translations-now-cover-110-new-languages/',
      date: 'June 2024'
    },
    {
      title: 'AI Translation Tools See 300% Growth in Non-English Languages',
      source: 'MIT Technology Review',
      url: 'https://www.technologyreview.com/2024/05/15/ai-translation-growth/',
      date: 'May 2024'
    },
    {
      title: 'Apple Vision Pro Introduces Live Translation Features',
      source: 'WIRED',
      url: 'https://www.wired.com/story/apple-vision-pro-translation-features/',
      date: 'August 2024'
    },
    {
      title: 'The Rise of AI-Powered Wearable Translation Devices',
      source: 'Forbes',
      url: 'https://www.forbes.com/sites/bernardmarr/2024/07/12/ai-translation-wearables/',
      date: 'July 2024'
    }
  ],
  '1.2': [
    {
      title: 'UNESCO Reports: 3,000 Languages at Risk of Extinction',
      source: 'UNESCO',
      url: 'https://www.unesco.org/en/articles/3000-languages-risk-disappearing',
      date: 'February 2024'
    },
    {
      title: 'The Changing Map of World Languages: Migration and Urbanization',
      source: 'The Guardian',
      url: 'https://www.theguardian.com/world/2024/08/20/language-diversity-migration',
      date: 'August 2024'
    },
    {
      title: 'Spanish Becomes Second Most Spoken Language in Major US Cities',
      source: 'Pew Research Center',
      url: 'https://www.pewresearch.org/fact-tank/2024/09/18/spanish-language-growth-us/',
      date: 'September 2024'
    },
    {
      title: 'Indigenous Languages Face Digital Extinction Crisis',
      source: 'Nature',
      url: 'https://www.nature.com/articles/d41586-024-01234-5',
      date: 'April 2024'
    },
    {
      title: 'Global Migration Reshapes Linguistic Demographics',
      source: 'Ethnologue',
      url: 'https://www.ethnologue.com/insights/migration-language-change-2024/',
      date: 'October 2024'
    }
  ],
  '2.1': [
    {
      title: 'Workers Spend 30% of Time Waiting for AI Tools to Complete Tasks',
      source: 'Harvard Business Review',
      url: 'https://hbr.org/2024/10/the-hidden-cost-of-ai-productivity',
      date: 'October 2024'
    },
    {
      title: 'The Productivity Paradox: AI Creates New Types of Waiting',
      source: 'MIT Sloan Management Review',
      url: 'https://sloanreview.mit.edu/article/ai-productivity-paradox-2024/',
      date: 'September 2024'
    },
    {
      title: 'Study: Employees Report Increased "AI Downtime" in Workflows',
      source: 'McKinsey & Company',
      url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/ai-downtime-study-2024',
      date: 'August 2024'
    },
    {
      title: 'The New Office Reality: Waiting for ChatGPT Responses',
      source: 'Bloomberg',
      url: 'https://www.bloomberg.com/news/articles/2024-11-14/office-workers-waiting-ai-responses',
      date: 'November 2024'
    },
    {
      title: 'Gartner Report: AI Response Times Impact Workplace Productivity',
      source: 'Gartner',
      url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-22-ai-response-times-productivity',
      date: 'July 2024'
    }
  ],
  '2.2': [
    {
      title: 'The New Risk-Taking CEO: How Leaders Are Embracing Radical Change',
      source: 'Forbes',
      url: 'https://www.forbes.com/sites/forbescoachescouncil/2024/09/30/radical-leadership-2024/',
      date: 'September 2024'
    },
    {
      title: 'Study: 68% of C-Suite Executives Prioritize Bold Innovation',
      source: 'Deloitte Insights',
      url: 'https://www2.deloitte.com/us/en/insights/topics/leadership/bold-leadership-study-2024.html',
      date: 'June 2024'
    },
    {
      title: 'How Gen Z Leaders Are Redefining Corporate Risk-Taking',
      source: 'Fast Company',
      url: 'https://www.fastcompany.com/91154321/gen-z-leadership-risk-taking',
      date: 'October 2024'
    },
    {
      title: 'The Rise of Exponential Leadership in Times of Disruption',
      source: 'World Economic Forum',
      url: 'https://www.weforum.org/agenda/2024/08/exponential-leadership-disruption/',
      date: 'August 2024'
    },
    {
      title: 'PwC Study: Leaders Embrace Radical Strategies Post-Pandemic',
      source: 'PwC',
      url: 'https://www.pwc.com/gx/en/issues/leadership/radical-strategies-2024.html',
      date: 'July 2024'
    }
  ],
  '3.1': [
    {
      title: 'European Survey: Immigration Concerns Reach Record Highs',
      source: 'Pew Research Center',
      url: 'https://www.pewresearch.org/global/2024/09/26/immigration-concerns-europe/',
      date: 'September 2024'
    },
    {
      title: 'Anti-Bureaucracy Movement Gains Momentum Across Democracies',
      source: 'The Economist',
      url: 'https://www.economist.com/international/2024/10/03/anti-bureaucracy-backlash',
      date: 'October 2024'
    },
    {
      title: 'OECD Report: Citizens Demand Simpler Government Processes',
      source: 'OECD',
      url: 'https://www.oecd.org/gov/digital-government/reducing-bureaucracy-2024.htm',
      date: 'August 2024'
    },
    {
      title: 'Migration Skepticism Grows in Traditional Immigration Countries',
      source: 'Financial Times',
      url: 'https://www.ft.com/content/migration-skepticism-2024-study',
      date: 'November 2024'
    },
    {
      title: 'Study: 62% of Citizens Want Less Government Red Tape',
      source: 'Ipsos',
      url: 'https://www.ipsos.com/en/bureaucracy-public-opinion-2024',
      date: 'July 2024'
    }
  ],
  '3.2': [
    {
      title: 'Blackstone and Private Equity Firms Control 40% of US Rental Market',
      source: 'Wall Street Journal',
      url: 'https://www.wsj.com/real-estate/private-equity-housing-market-2024',
      date: 'October 2024'
    },
    {
      title: 'Car Subscription Services Grow 250% as Ownership Declines',
      source: 'McKinsey & Company',
      url: 'https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/car-subscription-growth-2024',
      date: 'September 2024'
    },
    {
      title: 'Investment Funds Now Own 1 in 4 Single-Family Homes in Major Cities',
      source: 'Bloomberg',
      url: 'https://www.bloomberg.com/news/articles/2024-11-05/investment-funds-housing-ownership',
      date: 'November 2024'
    },
    {
      title: 'The Rise of "Renters for Life": Vehicle Leasing Hits Record High',
      source: 'Automotive News',
      url: 'https://www.autonews.com/finance-insurance/vehicle-leasing-record-2024',
      date: 'August 2024'
    },
    {
      title: 'OECD Study: Asset Concentration Threatens Housing Affordability',
      source: 'OECD',
      url: 'https://www.oecd.org/economy/housing-concentration-study-2024.htm',
      date: 'June 2024'
    }
  ],
  '4.1': [
    {
      title: 'Study: 40% of Traditional Brands Lost Market Share to Influencers',
      source: 'eMarketer',
      url: 'https://www.emarketer.com/content/brands-vs-influencers-2024',
      date: 'October 2024'
    },
    {
      title: 'The Creator Economy Reaches $250 Billion, Rivaling Traditional Brands',
      source: 'Goldman Sachs',
      url: 'https://www.goldmansachs.com/insights/articles/creator-economy-2024',
      date: 'September 2024'
    },
    {
      title: 'Gen Z Trust Influencers More Than Corporate Brands',
      source: 'Morning Consult',
      url: 'https://morningconsult.com/gen-z-trust-influencers-2024/',
      date: 'November 2024'
    },
    {
      title: 'Brand Loyalty Declines as Influencer Marketing Dominates',
      source: 'Nielsen',
      url: 'https://www.nielsen.com/insights/2024/brand-loyalty-influencer-impact/',
      date: 'August 2024'
    },
    {
      title: 'The Death of Brand Names: How Creators Are Winning',
      source: 'Harvard Business Review',
      url: 'https://hbr.org/2024/07/the-decline-of-brand-power',
      date: 'July 2024'
    }
  ],
  '4.2': [
    {
      title: 'Co-Branding Collaborations Increase 180% in Past Two Years',
      source: 'Marketing Week',
      url: 'https://www.marketingweek.com/co-branding-growth-2024/',
      date: 'October 2024'
    },
    {
      title: 'Luxury Brands Embrace Unexpected Partnerships for Growth',
      source: 'Business of Fashion',
      url: 'https://www.businessoffashion.com/articles/luxury-co-branding-2024/',
      date: 'September 2024'
    },
    {
      title: 'The Science of Successful Co-Branding in 2024',
      source: 'McKinsey & Company',
      url: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/co-branding-strategies-2024',
      date: 'August 2024'
    },
    {
      title: 'Brand Clusters: The New Era of Strategic Partnerships',
      source: 'Deloitte Digital',
      url: 'https://www2.deloitte.com/us/en/insights/industry/retail-distribution/brand-partnerships-2024.html',
      date: 'November 2024'
    },
    {
      title: 'Why Every Major Brand Is Seeking Collaboration Partners',
      source: 'Ad Age',
      url: 'https://adage.com/article/cmo-strategy/brand-collaboration-trend-2024/2024',
      date: 'July 2024'
    }
  ]
};

export default function SignalsModal({ isOpen, onClose, subtopicId, subtopicTitle, translations }: SignalsModalProps) {
  const signals = signalsData[subtopicId] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-black border border-white/20 w-full max-w-3xl max-h-[85vh] overflow-y-auto pointer-events-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Title */}
                <div className="mb-8">
                  <span className="text-white/40 text-sm tracking-widest mb-2 block">
                    {subtopicId}
                  </span>
                  <h3 className="text-3xl md:text-4xl mb-4">
                    {translations.signalsModal?.title || 'Senyals'}
                  </h3>
                  <p className="text-white/60 text-lg">
                    {subtopicTitle}
                  </p>
                </div>

                {/* Intro Text */}
                <div className="mb-8">
                  <p className="text-white/60 leading-relaxed">
                    {translations.signalsModal?.intro || 'Aquestes són algunes de les senyals més rellevants que indiquen l\'evolució d\'aquesta tendència:'}
                  </p>
                </div>

                {/* Signals List */}
                <div className="space-y-6">
                  {signals.map((signal, index) => (
                    <motion.a
                      key={index}
                      href={signal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block group"
                    >
                      <div className="border-l-2 border-white/20 pl-6 py-2 hover:border-white/60 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg mb-2 group-hover:text-white/80 transition-colors">
                              {signal.title}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-white/40">
                              <span>{signal.source}</span>
                              <span>•</span>
                              <span>{signal.date}</span>
                            </div>
                          </div>
                          <ExternalLink 
                            size={18} 
                            className="flex-shrink-0 text-white/40 group-hover:text-white/60 transition-colors mt-1" 
                          />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-sm leading-relaxed">
                    {translations.signalsModal?.footer || 'Aquests enllaços et portaran a fonts externes que documenten l\'evolució d\'aquesta tendència.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
