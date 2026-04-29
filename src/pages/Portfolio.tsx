import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, BarChart3, LineChart, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Project = {
  name: string;
  url: string;
  platform: "Shopify" | "WordPress" | "Wix" | "WooCommerce" | "Squarespace" | "Square Online";
  niche: string;
  challenge: string;
  solution: string;
  results: string[];
};

const featured: Project[] = [
  {
    name: "Glamira Africa",
    url: "https://glamira.africa",
    platform: "Shopify",
    niche: "Jewelry & Accessories",
    challenge: "Stagnant organic revenue and unstable Google Merchant Center feed limiting paid scale.",
    solution: "Full technical SEO overhaul, feed re-architecture, and full-funnel Google + Meta launch.",
    results: ["+240% revenue", "8.5x avg ROAS", "Merchant Center fully unlocked"],
  },
  {
    name: "Jiifto",
    url: "https://jiifto.com",
    platform: "Shopify",
    niche: "Online Retail",
    challenge: "Slow legacy storefront with poor mobile conversion and fragmented catalog.",
    solution: "Mobile-first redesign, Core Web Vitals tuning, and SKU/collection restructure.",
    results: ["+180% traffic", "+30% mobile CVR", "Sub-3s load time"],
  },
  {
    name: "Zevrik",
    url: "https://zevrik.com",
    platform: "Shopify",
    niche: "Fashion Jewelry",
    challenge: "Strong product, weak acquisition economics — paid spend was unprofitable.",
    solution: "Meta + Google ecosystem rebuild with proper attribution, CAPI, and creative testing.",
    results: ["8.5x ROAS", "−42% CAC", "Profitable at scale"],
  },
  {
    name: "Johareez",
    url: "https://johareez.com",
    platform: "WordPress",
    niche: "Fine Jewelry",
    challenge: "Invisible in organic search despite a deep, high-AOV catalog.",
    solution: "Technical SEO, schema, content architecture, and high-intent keyword targeting.",
    results: ["+312% organic traffic", "Page-1 rankings on core terms", "Compounding monthly growth"],
  },
  {
    name: "Domino Style",
    url: "https://dominostyle.co.uk",
    platform: "Shopify",
    niche: "Fashion & Apparel (UK)",
    challenge: "Brand had visual appeal but a weak conversion path and underperforming PDPs.",
    solution: "CRO-focused redesign, PDP overhaul, and full retention flow build in Klaviyo.",
    results: ["+145% CVR", "+60% repeat purchase rate", "35% revenue from email"],
  },
  {
    name: "Gigi Boutique",
    url: "https://gigi-boutique.co.uk",
    platform: "Shopify",
    niche: "Fashion Boutique (UK)",
    challenge: "Locked out of Google Shopping after repeated Merchant Center suspensions.",
    solution: "Full policy audit, feed compliance fix, suspension appeal, and Shopping launch.",
    results: ["+200% sales", "Merchant Center reinstated", "New Shopping channel scaled profitably"],
  },
  {
    name: "Spirit Fashion",
    url: "https://spiritfashion.co.uk",
    platform: "WooCommerce",
    niche: "Streetwear (UK)",
    challenge: "High ad spend with low return and no retention infrastructure.",
    solution: "Meta creative system, audience restructure, and Klaviyo lifecycle automation.",
    results: ["−42% CAC", "8x+ ROAS sustained", "Repeat revenue base built"],
  },
  {
    name: "Boutique Chic",
    url: "https://boutiquechic.co.uk",
    platform: "Shopify",
    niche: "Luxury Retail (UK)",
    challenge: "Low AOV relative to luxury positioning and weak post-purchase upsell flow.",
    solution: "Premium UX redesign, bundle merchandising, and post-purchase upsell system.",
    results: ["+95% AOV", "Higher LTV cohorts", "Stronger luxury brand perception"],
  },
];

const performanceMetrics = [
  {
    icon: BarChart3,
    title: "Shopify Analytics — Revenue Growth",
    metric: "+240%",
    caption: "Glamira Africa: 12-month Shopify revenue dashboard after full ecosystem rebuild.",
  },
  {
    icon: LineChart,
    title: "Google Analytics — Organic Sessions",
    metric: "+312%",
    caption: "Johareez: GA4 organic traffic growth from technical SEO + content architecture.",
  },
  {
    icon: TrendingUp,
    title: "Google Ads — Shopping ROAS",
    metric: "9.2x",
    caption: "Culture Kings: Google Shopping scaled from $2K to $25K/month at 9.2x ROAS.",
  },
  {
    icon: ShoppingBag,
    title: "Meta Ads Manager — Profitable Scale",
    metric: "8.5x",
    caption: "Zevrik: Meta ROAS held at 8.5x through creative + CAPI + audience rebuild.",
  },
  {
    icon: BarChart3,
    title: "Klaviyo — Email Revenue Share",
    metric: "35%",
    caption: "Marrow Fine: lifecycle flows now drive 35% of total store revenue.",
  },
  {
    icon: LineChart,
    title: "Portfolio-Wide ROAS",
    metric: "8.5x avg",
    caption: "Consistent profitable returns across 20+ managed brand accounts.",
  },
];

const platformBadge = (platform: Project["platform"]) =>
  `Platform: ${platform}`;

const ProjectCard = ({ project, i }: { project: Project; i: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: i * 0.05 }}
    className="card-hover flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
  >
    <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-6 py-4">
      <div>
        <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
        <p className="text-xs text-muted-foreground">{project.niche}</p>
      </div>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary whitespace-nowrap">
        {platformBadge(project.platform)}
      </span>
    </div>

    <div className="flex-1 space-y-5 p-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Challenge</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
      </div>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Solution</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Results</p>
        <ul className="space-y-1.5">
          {project.results.map((r) => (
            <li key={r} className="flex items-center gap-2 text-sm text-foreground">
              <TrendingUp className="h-4 w-4 shrink-0 text-primary" /> {r}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-border p-6">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon"
      >
        Visit Live Site <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  </motion.article>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Featured Work
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
              Challenge. Solution. <span className="text-gradient">Results.</span>
            </motion.h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real brands across Shopify, WordPress, WooCommerce and beyond — and the exact growth systems we deployed to scale them.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((p, i) => (
                <ProjectCard key={p.name} project={p} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="bg-section-alt py-24">
          <div className="container mx-auto px-6">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Performance Metrics
            </p>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Real Dashboards. Real Revenue.
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
              Placeholders below represent live Shopify Analytics, Google Analytics, Google Ads, Meta Ads Manager, and Klaviyo screenshots from the brand portfolio.
            </p>
            <div className="mb-14 text-center">
              <a
                href="https://drive.google.com/drive/folders/15pn32x14HMnDPHl4VkvfWBtRVlCfdQ6V?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
              >
                View Full Performance Library <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {performanceMetrics.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group rounded-xl border border-border bg-card overflow-hidden"
                >
                  <div className="flex h-44 flex-col items-center justify-center bg-secondary text-center px-4">
                    <m.icon className="mb-3 h-10 w-10 text-primary/50" aria-hidden="true" />
                    <p className="text-3xl font-extrabold text-gradient">{m.metric}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Dashboard Preview
                    </p>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-sm font-semibold text-foreground">{m.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{m.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Want Results Like These?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Let's deploy the same growth system inside your brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon"
            >
              Start Your Growth <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
