import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, TrendingUp, Zap, Clapperboard, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Shopify & Store Design",
    description:
      "Custom, conversion-focused store designs that elevate your brand and drive sales — from stunning product pages to seamless checkout experiences.",
    points: ["Custom Theme Development", "Brand Identity Integration", "Mobile-First Design", "UX Optimization"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Data-driven strategies to turn more visitors into customers. A/B testing, analytics, and user experience improvements that boost your bottom line.",
    points: ["A/B Testing", "Heat Map Analysis", "Checkout Optimization", "Analytics Setup"],
  },
  {
    icon: Zap,
    title: "Automation & Growth",
    description:
      "Scale your store with smart automation, email flows, and growth strategies. From app integrations to marketing automation.",
    points: ["Email Flow Setup", "App Integration", "Inventory Automation", "Marketing Strategy"],
  },
  {
    icon: Clapperboard,
    title: "AI Commercial Production",
    description:
      "High-impact AI-generated visuals and cinematic ad content crafted to position your brand, engage your audience, and increase conversions.",
    points: ["AI Product Photography", "AI Video Ads", "AI Commercial Videos", "Product & Service Visuals"],
  },
];

const CoreServicesSection = () => {
  return (
    <section className="bg-background py-24" aria-labelledby="core-services-heading">
      <div className="container mx-auto px-6">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
        <h2 id="core-services-heading" className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          What We <span className="text-gradient">Build For You</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
          Four core capabilities that turn a storefront into a revenue system.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-neon"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mb-8 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-auto inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
