import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter", price: "$450", period: "/month",
    description: "Perfect for new Shopify stores looking to establish a strong digital foundation.",
    features: ["Shopify store setup & optimization", "Basic SEO audit & fixes", "Google Merchant Center setup", "1 social media platform management", "Monthly performance report", "Email support"],
    popular: false,
  },
  {
    name: "Growth", price: "$850", period: "/month",
    description: "For brands ready to scale with multi-channel marketing and advanced optimization.",
    features: ["Everything in Starter", "Advanced technical SEO strategy", "Google Ads & Shopping campaigns", "Meta Ads (Facebook & Instagram)", "Conversion rate optimization", "3 social media platforms", "Bi-weekly strategy calls", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise", price: "$1,200", period: "/month",
    description: "Full-stack growth partnership with dedicated strategy, execution, and reporting.",
    features: ["Everything in Growth", "Full 5-Pillar Framework implementation", "Custom landing page design", "Reputation management", "Advanced analytics & attribution", "All social media platforms", "Weekly strategy calls", "Dedicated account manager", "Custom integrations"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="noise-bg bg-hero-gradient pt-32 pb-20">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pricing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Transparent <span className="text-gradient">Growth Plans</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Choose the plan that matches your ambition. Every package is designed to deliver measurable ROI.</p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative rounded-2xl border p-8 ${plan.popular ? "border-foreground/30 bg-card shadow-glow" : "border-border bg-card"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-silver px-4 py-1 text-xs font-semibold text-primary-foreground flex items-center gap-1">
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
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${plan.popular ? "bg-gradient-silver text-primary-foreground hover:shadow-glow" : "border border-border bg-secondary text-foreground hover:border-foreground/30"}`}>
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Need a custom solution? <Link to="/contact" className="font-medium text-foreground hover:text-muted-foreground transition-colors">Contact us</Link> for a tailored growth plan.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
