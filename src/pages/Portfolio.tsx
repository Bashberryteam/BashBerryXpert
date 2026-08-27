import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Play,
  Mail,
  MessageCircle,
  BarChart3,
  LineChart,
  TrendingUp,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TestimonialsSection from "@/components/TestimonialsSection";
import { toast } from "@/hooks/use-toast";

const WHATSAPP = "https://wa.me/447451250630";
const EMAIL = "info@bashberryxpert.com";

type Platform = "Shopify" | "WordPress" | "Wix" | "WooCommerce" | "Squarespace" | "Square Online";
type Category = "Fashion & Apparel" | "Jewelry & Luxury" | "Niche & Art";

type Brand = { name: string; url: string; platform: Platform; category: Category };

const brands: Brand[] = [
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
  { name: "Glamira Africa", url: "https://glamira.africa", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Johareez", url: "https://johareez.com", platform: "WordPress", category: "Jewelry & Luxury" },
  { name: "Zevrik", url: "https://zevrik.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Miaymax Jewelry", url: "https://miaymaxjewelry.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Marrow Fine", url: "https://marrowfine.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Dayyani Jewelers", url: "https://dayyanijewelers.com", platform: "Shopify", category: "Jewelry & Luxury" },
  { name: "Shane Co.", url: "https://shaneco.com", platform: "WordPress", category: "Jewelry & Luxury" },
  { name: "Jiifto", url: "https://jiifto.com", platform: "Shopify", category: "Niche & Art" },
  { name: "Fine Art Collective", url: "https://fineartcollective.uk", platform: "Wix", category: "Niche & Art" },
  { name: "Lesley Blackburn Art", url: "https://lesleyblackburnart.myshopify.com/", platform: "Shopify", category: "Niche & Art" },
  { name: "Brought To Reality", url: "https://broughttoreality.com", platform: "WordPress", category: "Niche & Art" },
];

const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=2400`;

const StoreCard = ({ brand, i }: { brand: Brand; i: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
    className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-neon"
  >
    {/* Browser frame */}
    <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
      <span className="ml-2 truncate rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
        {brand.url.replace(/^https?:\/\//, "")}
      </span>
    </div>

    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-72 overflow-hidden bg-secondary"
      aria-label={`Open ${brand.name} live site`}
    >
      <img
        src={shot(brand.url)}
        alt={`${brand.name} storefront homepage screenshot`}
        loading="lazy"
        className="w-full transition-transform duration-[4000ms] ease-in-out group-hover:-translate-y-[calc(100%-18rem)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      />
    </a>

    <div className="space-y-3 border-t border-border p-5">
      <h3 className="font-heading text-base font-bold text-foreground">{brand.name}</h3>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {brand.category}
        </span>
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          {brand.platform}
        </span>
      </div>
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        Live Preview <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  </motion.article>
);

const performance = [
  {
    icon: BarChart3,
    title: "Google Merchant Center Rebuild",
    client: "Glamira Africa",
    pill: "100% GMC Approved",
    points: ["Feed re-architecture & GTIN fixes", "Suspension lifted in 9 days", "Shopping live across 6 markets"],
  },
  {
    icon: LineChart,
    title: "GA4 & Server-Side Tracking",
    client: "Johareez",
    pill: "+312% Organic",
    points: ["GA4 + Consent Mode v2", "Purchase events deduplicated", "Full-funnel attribution restored"],
  },
  {
    icon: TrendingUp,
    title: "Google Shopping Scale",
    client: "Culture Kings",
    pill: "9.2x ROAS",
    points: ["$2K → $25K/mo spend", "Market segmentation", "Profitable at scale"],
  },
  {
    icon: ShoppingBag,
    title: "Meta CAPI & Creative System",
    client: "Zevrik",
    pill: "+340% ROAS",
    points: ["CAPI + pixel deduplication", "Creative testing framework", "−42% acquisition cost"],
  },
  {
    icon: BarChart3,
    title: "Klaviyo Lifecycle Build",
    client: "Marrow Fine",
    pill: "35% Email Revenue",
    points: ["Abandoned cart & welcome flows", "Segmented win-backs", "Post-purchase upsells"],
  },
  {
    icon: LineChart,
    title: "CRO Audit & Speed Program",
    client: "Jiifto",
    pill: "Sub-3s Load",
    points: ["Core Web Vitals tuning", "Mobile checkout overhaul", "+30% mobile conversion"],
  },
];

const commercials = [
  { title: "Luxury Serum Reveal", client: "Miaymax Jewelry", tone: "from-primary/30 via-secondary to-background" },
  { title: "Streetwear Drop Teaser", client: "Culture Kings", tone: "from-accent/30 via-secondary to-background" },
  { title: "Diamond Macro Commercial", client: "Marrow Fine", tone: "from-primary/20 via-secondary to-background" },
  { title: "Beverage Splash Render", client: "Zevrik", tone: "from-accent/20 via-secondary to-background" },
  { title: "Founder UGC Style Ad", client: "Domino Style", tone: "from-primary/25 via-secondary to-background" },
  { title: "Seasonal Sale Motion", client: "Pink Lily", tone: "from-accent/25 via-secondary to-background" },
  { title: "Product Unboxing Loop", client: "Jiifto", tone: "from-primary/20 via-secondary to-background" },
  { title: "Art Print Cinematic", client: "Fine Art Collective", tone: "from-accent/20 via-secondary to-background" },
];

const tabs = [
  { label: "All Work", href: "#all-work" },
  { label: "Store Designs", href: "#store-designs" },
  { label: "Performance & CRO", href: "#performance" },
  { label: "AI Commercials", href: "#ai-commercials" },
];

const BriefForm = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
      toast({
        title: "Check your details",
        description: "Please add your name, a valid email, and a message of at least 10 characters.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Website: ${data.get("website") || "—"}`,
      `Budget: ${data.get("budget") || "—"}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Project brief from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    toast({ title: "Brief ready", description: "Your email client is opening with the brief." });
    setSending(false);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="brief-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
          <input id="brief-name" name="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="brief-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
          <input id="brief-email" name="email" type="email" className={field} placeholder="you@brand.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="brief-site" className="mb-1.5 block text-xs font-medium text-muted-foreground">Website URL</label>
          <input id="brief-site" name="website" className={field} placeholder="https://yourstore.com" />
        </div>
        <div>
          <label htmlFor="brief-budget" className="mb-1.5 block text-xs font-medium text-muted-foreground">Budget range</label>
          <select id="brief-budget" name="budget" defaultValue="" className={field}>
            <option value="" disabled>Select budget</option>
            <option>Under $500</option>
            <option>$500 – $1,000</option>
            <option>$1,000 – $1,200</option>
            <option>$1,200+ / Retainer</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="brief-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
        <textarea id="brief-message" name="message" rows={4} className={field} placeholder="Tell us about your store and goals." />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon disabled:opacity-60"
      >
        Send Brief
      </button>
    </form>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio | Storefronts, Growth Systems & AI Ads — Bash Berry Xpert"
        description="Explore 20+ enterprise storefronts, performance dashboards and AI commercial creatives built by Bash Berry Xpert across Shopify, WordPress, Wix and WooCommerce."
        path="/portfolio"
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient pt-32 pb-14">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h1 className="mb-5 text-4xl font-extrabold text-foreground md:text-6xl">
              Work that <span className="text-gradient">moves the numbers</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore our full showcase of enterprise storefronts, growth systems, and AI ad creatives.
            </p>
          </div>
        </section>

        {/* Sticky category tabs */}
        <nav aria-label="Portfolio categories" className="sticky top-16 z-40 border-y border-border bg-background/85 backdrop-blur">
          <div className="container mx-auto flex gap-2 overflow-x-auto px-6 py-3">
            {tabs.map((t) => (
              <a
                key={t.label}
                href={t.href}
                className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {t.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Store designs */}
        <section id="all-work" className="bg-background py-20">
          <div id="store-designs" className="container mx-auto px-6">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              eCommerce Website Design & Redesign
            </h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              Hover any card to scroll the full live homepage. Every store below is a real, shipped build.
            </p>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((b, i) => (
                <StoreCard key={b.name} brand={b} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Performance systems */}
        <section id="performance" className="bg-section-alt py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Performance Systems & Strategy</h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              Merchant Center approvals, GA4 tracking architecture and ad account turnarounds — the backend that makes the revenue possible.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {performance.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-neon"
                >
                  <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-secondary via-secondary/60 to-background">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <p.icon className="relative h-10 w-10 text-primary/60" aria-hidden="true" />
                    <span className="absolute right-3 top-3 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold text-primary">
                      {p.pill}
                    </span>
                  </div>
                  <div className="space-y-3 p-6">
                    <div>
                      <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                      <p className="text-xs text-muted-foreground">{p.client}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* AI commercials */}
        <section id="ai-commercials" className="bg-background py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">AI Commercial Videos</h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              Cinematic AI-generated product commercials built for paid social — scroll-stopping creative without a film crew.
            </p>
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
              {commercials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-neon"
                >
                  <div className={`relative flex aspect-[9/16] items-center justify-center bg-gradient-to-br ${c.tone}`}>
                    <button
                      type="button"
                      aria-label={`Watch ${c.title} AI commercial`}
                      onClick={() =>
                        toast({ title: "Reel coming soon", description: `${c.title} will be published shortly.` })
                      }
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110"
                    >
                      <Play className="ml-0.5 h-6 w-6" />
                    </button>
                  </div>
                  <div className="space-y-1 border-t border-border p-4">
                    <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{c.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Consulting CTA */}
        <section className="bg-section-alt py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Let's Create Something <span className="text-gradient">Unmatched</span>
              </h2>
              <p className="mb-8 max-w-lg text-muted-foreground">
                Ready to scale your e-commerce ecosystem? Reach out directly to discuss your project scope.
              </p>
              <div className="space-y-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-5 w-5 text-primary" /> +44 7451 250630 (WhatsApp)
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                  <Mail className="h-5 w-5 text-primary" /> {EMAIL}
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
              >
                Start Your Growth <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <BriefForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
