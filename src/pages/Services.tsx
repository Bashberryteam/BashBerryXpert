import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Share2, Palette, Search, Target, ShieldCheck, ArrowRight, CheckCircle2, Lock, ShoppingCart, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: Code, title: "Web Development", description: "High-performance Shopify stores built from scratch — custom themes, headless commerce, and enterprise-grade architecture." },
  { icon: Share2, title: "Social Media Marketing", description: "Full-funnel social strategies across Instagram, Facebook, TikTok, and Pinterest to build brand awareness and drive sales." },
  { icon: Palette, title: "Web Designing", description: "Conversion-optimized UI/UX design with premium aesthetics. Every pixel crafted to maximize engagement and trust." },
  { icon: Target, title: "Search Engine Marketing (SEM)", description: "Google Ads, Shopping campaigns, and Performance Max strategies engineered for maximum ROAS and profitable acquisition." },
  { icon: Search, title: "Search Engine Optimization (SEO)", description: "Technical SEO audits, content strategy, link building, and schema markup to dominate organic search results." },
  { icon: ShieldCheck, title: "Reputation Management", description: "Proactive brand monitoring, review management, and crisis response to protect and elevate your online reputation." },
];

const pillars = [
  { icon: Palette, title: "Store Design & UX", desc: "Premium Shopify stores designed for speed, usability, and maximum conversions." },
  { icon: Search, title: "Technical SEO", desc: "Deep optimization ensuring your store ranks higher and captures organic traffic." },
  { icon: Target, title: "Google Ecosystem", desc: "Google Ads, Shopping, Merchant Center — full-stack paid acquisition." },
  { icon: Share2, title: "Meta Ecosystem", desc: "Facebook & Instagram ads with advanced audience targeting and creative testing." },
  { icon: TrendingUp, title: "CRO & Retention", desc: "Conversion rate optimization, email flows, and LTV expansion strategies." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="noise-bg bg-hero-gradient pt-32 pb-20">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">What We Do</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Comprehensive <span className="text-gradient">Growth Infrastructure</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">We don't just build stores; we architect end-to-end digital ecosystems designed to dominate your niche.</p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card-hover rounded-xl border border-border bg-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Get Started →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise-bg bg-section-alt py-24">
        <div className="container relative z-10 mx-auto px-6">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Our Methodology</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">The 5-Pillar Growth Framework</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">A holistic system that covers every touchpoint of your e-commerce funnel — from discovery to retention.</p>
          <div className="grid gap-6 md:grid-cols-5">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <p.icon className="h-6 w-6 text-foreground" />
                </div>
                <div className="mb-2 text-2xl font-bold text-gradient">{i + 1}</div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-foreground" /> The 'Locked Door' Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Why 90% of Stores Fail Without <span className="text-gradient">Google Merchant Center</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">Google Merchant Center is the gateway to Google Shopping, free product listings, and Performance Max campaigns. Without approval, your products are invisible to millions of high-intent shoppers.</p>
              <p className="mb-6 text-muted-foreground leading-relaxed">We specialize in diagnosing and resolving Merchant Center suspensions, policy violations, and feed optimization issues that keep your store locked out.</p>
              <ul className="space-y-3">
                {["Feed optimization & structured data", "Policy compliance audits", "Suspension appeal & recovery", "Shopping campaign setup"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">The Ecosystem Formula</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, label: "Traffic", desc: "Targeted visitors" },
                  { icon: ShoppingCart, label: "Motivated Buyer", desc: "High intent" },
                  { icon: Target, label: "Discount", desc: "Conversion trigger" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-secondary p-4 text-center">
                    <item.icon className="mx-auto mb-2 h-6 w-6 text-foreground" />
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-secondary p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Result</p>
                <p className="text-lg font-bold text-gradient">Traffic + Motivated Buyer + Discount = Explosive Sales</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="noise-bg bg-section-alt py-20">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Scale?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">Let's build a growth engine tailored to your brand.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-silver px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-glow">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
