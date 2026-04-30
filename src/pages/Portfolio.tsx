import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, BarChart3, LineChart, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

type Platform = "Shopify" | "WordPress" | "Wix" | "WooCommerce" | "Squarespace" | "Square Online";

type Brand = {
  name: string;
  url: string;
  platform: Platform;
  category: "Fashion & Apparel" | "Jewelry & Luxury" | "Niche & Art";
};

type FeaturedProject = Brand & {
  niche: string;
  challenge: string;
  solution: string;
  results: string[];
};

const featured: FeaturedProject[] = [
  {
    name: "Glamira Africa",
    url: "https://glamira.africa",
    platform: "Shopify",
    category: "Jewelry & Luxury",
    niche: "Jewelry & Accessories",
    challenge: "Stagnant organic revenue and unstable Google Merchant Center feed limiting paid scale.",
    solution: "Full technical SEO overhaul, feed re-architecture, and full-funnel Google + Meta launch.",
    results: ["+240% revenue", "8.5x avg ROAS", "Merchant Center fully unlocked"],
  },
  {
    name: "Culture Kings",
    url: "https://culturekings.com",
    platform: "Shopify",
    category: "Fashion & Apparel",
    niche: "Global Streetwear",
    challenge: "Scaling international Google Shopping spend without sacrificing efficiency.",
    solution: "Shopping feed architecture, market segmentation, and full Google Ecosystem rebuild.",
    results: ["9.2x Shopping ROAS", "Scaled $2K → $25K/mo", "Global market expansion"],
  },
  {
    name: "Marrow Fine",
    url: "https://marrowfine.com",
    platform: "Shopify",
    category: "Jewelry & Luxury",
    niche: "Fine Jewelry",
    challenge: "Catalog migration risk plus weak mobile conversion and retention.",
    solution: "Seamless catalog migration, mobile UX overhaul, and full Klaviyo lifecycle build.",
    results: ["+30% mobile CVR", "35% revenue from email", "Zero-downtime migration"],
  },
  {
    name: "Classic Football Shirts",
    url: "https://classicfootballshirts.com",
    platform: "Shopify",
    category: "Fashion & Apparel",
    niche: "Sports Apparel",
    challenge: "Massive SKU catalog hurting site speed and crawl efficiency.",
    solution: "Core Web Vitals tuning, technical SEO, and indexation strategy at scale.",
    results: ["Faster TTFB across catalog", "Stronger organic visibility", "Improved crawl budget"],
  },
  {
    name: "Jiifto",
    url: "https://jiifto.com",
    platform: "Shopify",
    category: "Niche & Art",
    niche: "Online Retail",
    challenge: "Slow legacy storefront with poor mobile conversion and fragmented catalog.",
    solution: "Mobile-first redesign, Core Web Vitals tuning, and SKU/collection restructure.",
    results: ["+180% traffic", "+30% mobile CVR", "Sub-3s load time"],
  },
  {
    name: "Zevrik",
    url: "https://zevrik.com",
    platform: "Shopify",
    category: "Jewelry & Luxury",
    niche: "Fashion Jewelry",
    challenge: "Strong product, weak acquisition economics — paid spend was unprofitable.",
    solution: "Meta + Google ecosystem rebuild with proper attribution, CAPI, and creative testing.",
    results: ["8.5x ROAS", "−42% CAC", "Profitable at scale"],
  },
];

const allBrands: Brand[] = [
  // Fashion & Apparel
  { name: "Domino Style", url: "https://dominostyle.co.uk", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Gigi Boutique", url: "https://gigi-boutique.co.uk", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Spirit Fashion", url: "https://spiritfashion.co.uk", platform: "WooCommerce", category: "Fashion & Apparel" },
  { name: "Boutique Chic", url: "https://boutiquechic.co.uk", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Classic Football Shirts", url: "https://classicfootballshirts.com", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Culture Kings", url: "https://culturekings.com", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Staple Pigeon", url: "https://staplepigeon.com", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Pink Lily", url: "https://pinklily.com", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "GOEX Apparel", url: "https://goexapparel.com", platform: "Shopify", category: "Fashion & Apparel" },
  { name: "Kenneth Rebels", url: "https://kennethrebels.com", platform: "Shopify", category: "Fashion & Apparel" },

  // Jewelry & Luxury
  { name: "Glamira", url: "https://glamira.africa", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Johareez", url: "https://johareez.com", platform: "WordPress", category: "Jewelry & Luxury" },
  { name: "Zevrik", url: "https://zevrik.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Miaymax Jewelry", url: "https://miaymaxjewelry.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Marrow Fine", url: "https://marrowfine.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Dayyani Jewelers", url: "https://dayyanijewelers.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Shane Co.", url: "https://shaneco.com", platform: "WordPress", category: "Jewelry & Luxury" },

  // Niche & Art
  { name: "Jiifto", url: "https://jiifto.com", platform: "Shopify", category: "Niche & Art" },
  { name: "Fine Art Collective", url: "https://fineartcollective.uk", platform: "Wix", category: "Niche & Art" },
  { name: "Lesley Blackburn Art", url: "https://lesleyblackburnart.myshopify.com/", platform: "Shopify", category: "Niche & Art" },
  { name: "Brought To Reality", url: "https://broughttoreality.com", platform: "WordPress", category: "Niche & Art" },
];

const categories: Brand["category"][] = ["Fashion & Apparel", "Jewelry & Luxury", "Niche & Art"];

const platformBadge = (platform: Platform) => `Platform: ${platform}`;

const FeaturedCard = ({ project, i }: { project: FeaturedProject; i: number }) => (
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

const BrandCard = ({ brand, i }: { brand: Brand; i: number }) => (
  <motion.a
    href={brand.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
    className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-neon"
    aria-label={`Visit ${brand.name} live site`}
  >
    <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/60 to-background">
      <span className="px-4 text-center font-heading text-xl font-extrabold uppercase tracking-wider text-foreground/80 transition-colors group-hover:text-primary md:text-2xl">
        {brand.name}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
    </div>
    <div className="flex items-center justify-between border-t border-border px-4 py-3">
      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
        {brand.platform}
      </span>
      <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
        Visit <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </div>
  </motion.a>
);

const performanceMetrics = [
  { icon: BarChart3, title: "Shopify Analytics — Revenue Growth", metric: "+240%", caption: "Glamira Africa: 12-month Shopify revenue dashboard after full ecosystem rebuild." },
  { icon: LineChart, title: "Google Analytics — Organic Sessions", metric: "+312%", caption: "Johareez: GA4 organic traffic growth from technical SEO + content architecture." },
  { icon: TrendingUp, title: "Google Ads — Shopping ROAS", metric: "9.2x", caption: "Culture Kings: Google Shopping scaled from $2K to $25K/month at 9.2x ROAS." },
  { icon: ShoppingBag, title: "Meta Ads Manager — Profitable Scale", metric: "8.5x", caption: "Zevrik: Meta ROAS held at 8.5x through creative + CAPI + audience rebuild." },
  { icon: BarChart3, title: "Klaviyo — Email Revenue Share", metric: "35%", caption: "Marrow Fine: lifecycle flows now drive 35% of total store revenue." },
  { icon: LineChart, title: "Portfolio-Wide ROAS", metric: "8.5x avg", caption: "Consistent profitable returns across 20+ managed brand accounts." },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Power Grid — 20+ Brands
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
              Challenge. Solution. <span className="text-gradient">Results.</span>
            </motion.h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real brands across Shopify, WordPress, Wix and WooCommerce — and the exact growth systems we deployed to scale them.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">Featured Case Studies</h2>
            <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
              A deeper look at how we turn audits into measurable revenue.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((p, i) => (
                <FeaturedCard key={p.name} project={p} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Power Grid — All Brands */}
        <section className="bg-section-alt py-24">
          <div className="container mx-auto px-6">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Power Grid
            </p>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Brands We've Engineered Growth For
            </h2>
            <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
              Click any brand to view the live site. Grouped by category for easy navigation.
            </p>

            <div className="space-y-14">
              {categories.map((cat) => {
                const items = allBrands.filter((b) => b.category === cat);
                return (
                  <div key={cat}>
                    <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
                      <h3 className="text-xl font-bold text-foreground md:text-2xl">{cat}</h3>
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {items.length} brands
                      </span>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {items.map((b, i) => (
                        <BrandCard key={b.name} brand={b} i={i} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Performance Metrics
            </p>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Real Dashboards. Real Revenue.
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground">
              Live screenshots from Shopify Analytics, Google Analytics, Google Ads, Meta Ads Manager and Klaviyo across the brand portfolio.
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

        {/* Testimonials */}
        <TestimonialsSection />

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
