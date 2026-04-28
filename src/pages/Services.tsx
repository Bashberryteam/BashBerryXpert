import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  ShoppingCart,
  Target,
  Mail,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Lock,
  Users,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Pillar = {
  num: string;
  icon: typeof Palette;
  title: string;
  goal: string;
  services: string[];
  valueAdd: string;
  accent: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    icon: Palette,
    title: "Store Design & Conversion Optimization (CRO)",
    goal: "Turn visitors into buyers by making the store fast, beautiful, and built for conversions.",
    services: [
      "Custom Store Design & Redesign",
      "Theme Branding & Identity",
      "Mobile & Speed Optimization",
      "UX Navigation Architecture",
      "Product Page Conversion (Badges, Timers, Reviews)",
      "One-Click Checkout Optimization",
    ],
    valueAdd: "I ensure your store loads in under 3 seconds and builds instant trust.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "02",
    icon: ShoppingCart,
    title: "Product & Catalog Enhancement",
    goal: "Make products irresistible and easy to find.",
    services: [
      "Bulk Product Importation",
      "SEO-Optimized Descriptions",
      "Image Editing & Background Removal",
      "Collection & SKU Organization",
      "Psychological Pricing Strategies",
    ],
    valueAdd: "High-quality product presentation is the difference between a 'browse' and a 'buy.'",
    accent: "from-accent/20 to-accent/5",
  },
  {
    num: "03",
    icon: Target,
    title: "Traffic Generation & Brand Awareness",
    goal: "Bring in the right audience through the Google & Meta Ecosystems.",
    services: [
      "Full SEO (Technical & On-Page)",
      "Facebook & Instagram Ads",
      "TikTok Ads",
      "Google Search & Shopping Ads",
      "Pinterest Marketing",
      "Influencer Outreach",
    ],
    valueAdd:
      "I solve the 'Locked Door' problem with guaranteed Google Merchant Center setup and high-intent traffic.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "04",
    icon: Mail,
    title: "Customer Retention & Revenue Maximization",
    goal: "Turn one-time buyers into repeat customers.",
    services: [
      "Klaviyo Email Automation (Abandoned Cart, Welcome Series)",
      "Post-Purchase Upsells",
      "Loyalty & Rewards Programs",
      "Subscription Setup",
      "Exit-Intent Popups",
    ],
    valueAdd: "I maximize your ROI by selling more to the customers you already have.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Analytics, Maintenance & Virtual Support",
    goal: "Data-driven scaling and backend management.",
    services: [
      "Google Analytics 4 (GA4) Setup",
      "Heatmaps & A/B Testing",
      "Monthly Performance Reports",
      "App Integration",
      "Virtual Assistant for Daily Store Management",
    ],
    valueAdd:
      "Growth isn't a one-time job — I provide the data and support to keep your store winning.",
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
                  Talk to Me
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

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            The Shopify Sales Growth Framework
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl"
          >
            5 Pillars. One <span className="text-gradient">Growth Engine.</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every service I offer lives inside one of these 5 Pillars — the exact system I use to scale Shopify brands profitably. Hover or tap any pillar to explore the sub-services.
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
                Why 90% of Shopify Stores <span className="text-gradient">Fail</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Imagine building a world-class store, stocking it with incredible products, and running ads — but the front door is locked. That's exactly what happens when Google Merchant Center rejects your store. Without approval, your products are invisible to millions of high-intent shoppers actively searching to buy.
              </p>
              <p className="mb-6 font-medium text-foreground">
                I am the specialist who unlocks this door — letting high-intent traffic flow directly to your products.
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
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
