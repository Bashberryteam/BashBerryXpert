import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Database,
  Search,
  Megaphone,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Lock,
  Users,
  ShoppingCart,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Pillar = {
  num: string;
  icon: typeof Layers;
  title: string;
  goal: string;
  services: string[];
  valueAdd: string;
  accent: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    icon: Layers,
    title: "Platform Engineering",
    goal: "Architect lightning-fast, conversion-ready storefronts on the platform that fits your business.",
    services: [
      "Shopify, Wix & WordPress store design / redesign",
      "WooCommerce & Squarespace builds",
      "Square Online setup & migration",
      "Mobile-first UI/UX systems",
      "Core Web Vitals & speed optimization",
      "Custom theme development & component libraries",
    ],
    valueAdd:
      "We engineer storefronts that load in under 3 seconds and convert across every device.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "02",
    icon: Database,
    title: "Catalog & Inventory Mastery",
    goal: "Turn your product catalog into a high-performance sales asset across every channel.",
    services: [
      "Bulk migrations & SKU restructuring",
      "Technical SEO-optimized product data",
      "Multi-channel sync: Etsy, Amazon, eBay",
      "Image editing, retouching & background removal",
      "Collection architecture & merchandising",
      "Inventory & variant logic automation",
    ],
    valueAdd:
      "A clean, syndicated catalog is the difference between a single store and a true omnichannel business.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    num: "03",
    icon: Search,
    title: "The Search Ecosystem",
    goal: "Capture high-intent buyers through Google's full search and shopping stack.",
    services: [
      "Full-funnel technical & on-page SEO",
      "Google Merchant Center 'Locked Door' solutions",
      "Suspension diagnosis, appeal & recovery",
      "Google Search & Shopping Ads management",
      "Performance Max & feed optimization",
      "Schema, sitemaps & site architecture",
    ],
    valueAdd:
      "We unlock Google's highest-intent traffic — even when other agencies hit the wall.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "04",
    icon: Megaphone,
    title: "The Meta & Social Ecosystem",
    goal: "Intercept and immerse buyers across Meta, TikTok and Pinterest before they ever search.",
    services: [
      "Facebook & Instagram Ads (full-funnel)",
      "Reels strategy, scripting & creative direction",
      "TikTok Ads & creator partnerships",
      "Pinterest Marketing for high-AOV niches",
      "Influencer outreach & UGC pipelines",
      "Pixel, CAPI & attribution setup",
    ],
    valueAdd:
      "Our Interception & Immersion playbook finds buyers in-feed and pulls them into your brand world.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    num: "05",
    icon: Repeat,
    title: "Retention & Revenue Systems",
    goal: "Compound revenue from every customer you've already paid to acquire.",
    services: [
      "Klaviyo / CRM email & SMS automation",
      "Abandoned cart & browse-recovery flows",
      "Post-purchase upsells & cross-sells",
      "Loyalty, rewards & subscription programs",
      "Win-back & VIP segmentation",
      "LTV modelling & cohort reporting",
    ],
    valueAdd:
      "Retention is where margin lives — we turn one-time buyers into a predictable revenue base.",
    accent: "from-primary/20 to-primary/5",
  },
];

const PillarCard = ({ pillar, index }: { pillar: Pillar; index: number }) => {
  const [open, setOpen] = useState(false);
  const Icon = pillar.icon;

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
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div className="flex flex-col md:flex-row items-stretch">
          <div
            className={`flex items-center justify-center bg-gradient-to-br ${pillar.accent} px-8 py-8 md:w-48 md:shrink-0`}
          >
            <div className="text-center">
              <span className="block text-4xl font-extrabold text-gradient mb-2">
                {pillar.num}
              </span>
              <Icon className="mx-auto h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="flex-1 p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Goal:</span> {pillar.goal}
                </p>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
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
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Key Services
              </h4>
              <ul className="mb-6 grid gap-3 sm:grid-cols-2">
                {pillar.services.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {s}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg bg-primary/10 p-4 mb-6">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-primary">Value Add: </span>
                  {pillar.valueAdd}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40"
                >
                  Talk to Us
                </Link>
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
      <Navbar />
      <main>

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            The Bash Berry 5-Pillar Framework
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl"
          >
            5 Growth Engines. One <span className="text-gradient">Revenue System.</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every service we deliver lives inside one of these 5 Pillars — the exact system we use to scale brands across Shopify, Wix, WordPress, WooCommerce, Squarespace and Square Online. Tap any pillar to explore the sub-services.
          </p>
        </div>
      </section>

      {/* Interactive 5 Pillars */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <PillarCard key={p.num} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Locked Door Section */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-border bg-card p-8"
            >
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
            Pick a package aligned to the pillars you need — or let's build a custom plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon"
            >
              View Pricing <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40"
            >
              Start Your Growth
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Services;
