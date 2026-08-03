import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Search,
  Megaphone,
  Repeat,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Lock,
  Users,
  ShoppingCart,
  TrendingUp,
  ChevronDown,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WHATSAPP = "https://wa.me/447451250630";

type Strategy = {
  num: string;
  icon: typeof Layers;
  title: string;
  scope: "All Platforms" | "Universal Search Systems" | "Platform-Specific";
  compatibility: string;
  does: string;
  result: string;
  accent: string;
};

const strategies: Strategy[] = [
  {
    num: "01",
    icon: Layers,
    title: "Store UX & Conversion Rate Engineering (CRO)",
    scope: "All Platforms",
    compatibility: "Shopify, Wix, WordPress / WooCommerce, Squarespace, Square Online",
    does:
      "Mobile-first redesigns, UI performance, image lazy-loading, speed optimization, cart friction elimination, and high-trust badge layout.",
    result:
      "Reduces bounce rates, increases average session duration, and turns existing visitors into instant buyers without extra ad spend.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "02",
    icon: Search,
    title: "Google Search & Shopping Ecosystem Engine",
    scope: "Universal Search Systems",
    compatibility:
      "Shopify & WooCommerce specialize in deep Merchant Center syncing; Wix & Squarespace utilize full Schema & On-Page SEO engines",
    does:
      "Captures active buyers using Google Search SEO, Google Merchant Center feed fixes (resolving product approval issues), and targeted Google Shopping Ads.",
    result:
      "Captures high-intent customers who are already searching to buy, creating reliable organic & paid sales traffic.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    num: "03",
    icon: Megaphone,
    title: "Meta Social Ecosystem Interception",
    scope: "All Platforms",
    compatibility: "Integrates with Facebook, Instagram, TikTok, Pinterest and Google",
    does:
      "Intercepts casual scrollers through visually immersive Reel/Story ad funnels, lookalike targeting, dynamic catalog ads, and seamless social shopping setups.",
    result:
      "Drives high-volume impulse purchases and builds long-term social brand equity.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "04",
    icon: Repeat,
    title: "Retention, Lifecycle & Email Marketing Funnels",
    scope: "All Platforms",
    compatibility: "Klaviyo, Omnisend and Mailchimp integrations",
    does:
      "Automated multi-touch sequences: abandoned cart recovery, VIP welcome series, win-back flows, post-purchase cross-sells, and exit-intent popups.",
    result:
      "Maximizes Customer Lifetime Value (LTV) and generates consistent 20%–35% automated repeat revenue without relying strictly on paid ads.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Multi-Channel Catalog Sync & Data Analytics",
    scope: "Platform-Specific",
    compatibility:
      "Shopify & WooCommerce for full multi-channel sync to Amazon / Etsy / eBay; GA4 & heatmaps available on all platforms",
    does:
      "Google Analytics 4 (GA4) custom event tracking, heatmap behavioral analysis, multi-channel product catalog syncing, and live dashboard metrics.",
    result:
      "Clear data visibility into where every dollar comes from so you can scale marketing channels predictably.",
    accent: "from-primary/20 to-primary/5",
  },
];

const StrategyCard = ({ strategy, index }: { strategy: Strategy; index: number }) => {
  const [open, setOpen] = useState(false);
  const Icon = strategy.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-neon"
    >
      <button onClick={() => setOpen((o) => !o)} className="w-full text-left" aria-expanded={open}>
        <div className="flex flex-col md:flex-row items-stretch">
          <div className={`flex items-center justify-center bg-gradient-to-br ${strategy.accent} px-8 py-8 md:w-48 md:shrink-0`}>
            <div className="text-center">
              <span className="block text-4xl font-extrabold text-gradient mb-2">{strategy.num}</span>
              <Icon className="mx-auto h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="flex-1 p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{strategy.title}</h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Globe className="h-3.5 w-3.5" /> {strategy.scope}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{strategy.compatibility}</p>
              </div>
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border"
          >
            <div className="p-8 bg-section-alt/40">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">What It Does</h4>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{strategy.does}</p>
              <div className="rounded-lg bg-primary/10 p-4 mb-6">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-primary">The Result: </span>
                  {strategy.result}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Services | Core Revenue Growth Strategies — Bash Berry Xpert"
        description="CRO, Google Search & Shopping, Meta social interception, retention funnels and multi-channel analytics for Shopify, Wix, WordPress, Squarespace & Square Online."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "E-commerce Growth Services",
          provider: { "@type": "Organization", name: "Bash Berry Xpert" },
          areaServed: "Worldwide",
          description:
            "Core Revenue Growth Strategies: Store UX & CRO, Google Search & Shopping Ecosystem, Meta Social Interception, Retention & Lifecycle Funnels, Multi-Channel Catalog Sync & Analytics.",
        }}
      />
      <Navbar />
      <main>

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Core Revenue Growth Strategies
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Five Growth Engines. One <span className="text-gradient">Revenue System.</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every strategy below is labelled with its platform compatibility — what runs on all platforms, and what is a platform-exclusive system. Tap any strategy to see exactly what it does and what it delivers.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {strategies.map((s, i) => (
              <StrategyCard key={s.num} strategy={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Locked Door Section */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                The 'Locked Door' Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Why 90% of Stores <span className="text-gradient">Stall</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Imagine building a world-class store, stocking it with incredible products, and running ads — but the front door is locked. That's exactly what happens when Google Merchant Center rejects your store. Without approval, your products are invisible to millions of high-intent shoppers actively searching to buy.
              </p>
              <p className="mb-6 font-medium text-foreground">
                We are the specialists who unlock this door — letting high-intent traffic flow directly to your products.
              </p>
              <ul className="space-y-3">
                {[
                  "Feed optimization & structured data",
                  "Policy compliance audits",
                  "Suspension appeal & recovery",
                  "Shopping campaign setup & scaling",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">The Ecosystem Formula</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, label: "Traffic", desc: "Targeted visitors" },
                  { icon: ShoppingCart, label: "Motivated Buyer", desc: "High purchase intent" },
                  { icon: TrendingUp, label: "Discount", desc: "Conversion trigger" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-secondary p-4 text-center">
                    <item.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Result</p>
                <p className="text-lg font-bold text-gradient">
                  Traffic + Motivated Buyer + Discount = Explosive Sales
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Scale?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Pick a package aligned to the strategies you need — or let's build a custom plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon">
              View Pricing <ArrowRight className="h-5 w-5" />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40">
              Get Instant Consultation
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Services;
