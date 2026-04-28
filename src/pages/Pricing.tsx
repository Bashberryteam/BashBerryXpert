import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "The Foundation",
    price: "$450",
    period: "/month",
    description: "Pillars 1 & 2 — for new Shopify stores that need a conversion-ready foundation.",
    features: [
      "Pillar 1: Store Design & CRO",
      "Pillar 2: Product & Catalog Enhancement",
      "Mobile & speed optimization",
      "SEO-optimized product descriptions",
      "Google Merchant Center setup",
      "Monthly performance report",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "The Growth Engine",
    price: "$850",
    period: "/month",
    description: "Pillars 1–3 — when you're ready to turn a live store into a traffic-generating machine.",
    features: [
      "Everything in The Foundation",
      "Pillar 3: Traffic Generation & Brand Awareness",
      "Google Search & Shopping Ads",
      "Meta (Facebook & Instagram) Ads",
      "TikTok & Pinterest marketing",
      "Technical & on-page SEO",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "The Xpert Authority",
    price: "$1,200",
    period: "/month",
    description: "All 5 Pillars — the complete Shopify Sales Growth Framework, fully managed.",
    features: [
      "Everything in The Growth Engine",
      "Pillar 4: Customer Retention & Revenue Maximization",
      "Pillar 5: Analytics, Maintenance & Virtual Support",
      "Klaviyo email & SMS automation",
      "Post-purchase upsells & loyalty programs",
      "GA4, heatmaps & A/B testing",
      "Virtual assistant for daily store management",
      "Weekly strategy calls",
      "Dedicated support channel",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Transparent <span className="text-gradient">Growth Plans</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the plan that matches your ambition. Every package is designed to deliver measurable ROI.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-2xl border p-8 ${plan.popular ? "border-primary bg-card shadow-neon" : "border-border bg-card"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground flex items-center gap-1">
                    <Star className="h-3 w-3" /> Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${plan.popular ? "bg-gradient-primary text-primary-foreground hover:shadow-neon" : "border border-border bg-secondary text-foreground hover:border-primary/40"}`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Need a custom solution?{" "}
              <Link to="/contact" className="font-medium text-primary hover:text-foreground transition-colors">Contact me</Link>{" "}
              for a tailored growth plan.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;