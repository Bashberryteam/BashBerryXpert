import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Share2, Palette, Search, Target, ShieldCheck, ArrowRight, CheckCircle2, Lock, ShoppingCart, Users, TrendingUp, Mail, BarChart3 } from "lucide-react";
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
  { icon: Palette, num: "01", title: "Store Design & CRO", desc: "I build premium Shopify stores engineered for speed, mobile-first UX, and maximum conversion rates. Every element is tested and optimized.", color: "from-primary/20 to-primary/5" },
  { icon: ShoppingCart, num: "02", title: "Product & Catalog Enhancement", desc: "I optimize your product feeds, structured data, high-converting descriptions, and catalog architecture to increase discoverability and AOV.", color: "from-accent/20 to-accent/5" },
  { icon: Target, num: "03", title: "Traffic Generation", desc: "I drive high-intent traffic through Google Shopping, Performance Max, Meta Ads, and Pinterest campaigns — all managed for profitable ROAS.", color: "from-primary/20 to-primary/5" },
  { icon: Mail, num: "04", title: "Retention & Revenue", desc: "I build Klaviyo email flows, SMS sequences, loyalty programs, and post-purchase funnels that turn one-time buyers into lifetime customers.", color: "from-accent/20 to-accent/5" },
  { icon: BarChart3, num: "05", title: "Analytics & Support", desc: "I provide GA4 setup, conversion tracking, custom dashboards, and ongoing strategic support to ensure continuous, data-driven growth.", color: "from-primary/20 to-primary/5" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What I Do
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Comprehensive <span className="text-gradient">Growth Infrastructure</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I don't just build stores — I architect end-to-end digital ecosystems designed to dominate your niche.
          </p>
        </div>
      </section>

      {/* 6 Services Grid */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card-hover rounded-xl border border-border bg-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <Link to="/contact" className="text-sm font-medium text-primary transition-colors hover:text-foreground">
                  Work With Me →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Pillar Framework - Visual Bold Blocks */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">My Methodology</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">The 5-Pillar Shopify Sales Growth Framework</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
            A holistic system I developed that covers every touchpoint of your e-commerce funnel — from discovery to retention.
          </p>

          <div className="space-y-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className={`flex items-center justify-center bg-gradient-to-br ${p.color} px-8 py-8 md:w-48 md:shrink-0`}>
                    <div className="text-center">
                      <span className="block text-4xl font-extrabold text-gradient mb-2">{p.num}</span>
                      <p.icon className="mx-auto h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 p-8">
                    <h3 className="mb-3 text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locked Door Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                The 'Locked Door' Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                The Locked Door: Why 90% of Shopify Stores <span className="text-gradient">Fail</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Imagine building a world-class store, stocking it with incredible products, and running ads — but the front door is locked. That's exactly what happens when Google Merchant Center rejects your store. Without approval, your products are invisible to millions of high-intent shoppers actively searching to buy.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Most store owners don't even realize this is the bottleneck. They blame their products, their prices, or their ads — but the real problem is they can't get through the door. I specialize in diagnosing and resolving Merchant Center suspensions, policy violations, and feed issues that keep stores locked out.
              </p>
              <p className="mb-6 font-medium text-foreground">
                I am the specialist who unlocks this door — letting high-intent traffic flow directly to your products.
              </p>
              <ul className="space-y-3">
                {["Feed optimization & structured data", "Policy compliance audits", "Suspension appeal & recovery", "Shopping campaign setup & scaling"].map((f) => (
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
                <p className="text-lg font-bold text-gradient">Traffic + Motivated Buyer + Discount = Explosive Sales</p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                This is my proven ecosystem logic. When all three elements converge — targeted traffic from Google/Meta, a motivated buyer searching with intent, and an irresistible offer — sales explode. Without the Merchant Center door open, you lose the first element entirely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Scale?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Let me build a growth engine tailored to your brand.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;