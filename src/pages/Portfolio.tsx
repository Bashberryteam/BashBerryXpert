import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TestimonialsSection from "@/components/TestimonialsSection";
import { toast } from "@/hooks/use-toast";

const WHATSAPP = "https://wa.me/447451250630";
const EMAIL = "info@bashberryxpert.com";

type Brand = {
  name: string;
  url: string;
  platform: string;
  category: string;
  description: string;
};

const brands: Brand[] = [
  {
    name: "Thrive Causemetics",
    url: "https://thrivecausemetics.com",
    platform: "Shopify Plus",
    category: "Clean Beauty & Cosmetics",
    description: "High-performance, 100% vegan makeup and skincare brand dedicated to empowering communities.",
  },
  {
    name: "Sif Jakobs Jewellery",
    url: "https://sifjakobs.com",
    platform: "Shopify Plus",
    category: "Nordic Luxury Jewelry",
    description: "Award-winning Danish designer crafted 925 sterling silver and 18k gold-plated statement jewelry.",
  },
  {
    name: "The Maine Souvenir Shop",
    url: "https://themainesouvenirshop.com",
    platform: "Shopify",
    category: "Retail & Goods",
    description: "Curated Maine-inspired apparel, handcrafted gifts, printed goods, and local souvenirs.",
  },
  {
    name: "ONNI.de",
    url: "https://onni.de",
    platform: "Shopify",
    category: "Haircare & Wellness",
    description: "Premium German organic hair growth serums, scalp treatments, and natural care systems.",
  },
  {
    name: "Maison de Femmes",
    url: "https://maisondefemmes.com",
    platform: "Shopify",
    category: "Fine Jewelry",
    description: "Australian boutique brand crafting delicate pearl, initial, and birthstone heirloom jewelry.",
  },
  {
    name: "Melano Pharma",
    url: "https://melanopharma.store",
    platform: "Shopify",
    category: "Skincare & Pharmaceuticals",
    description: "Specialized dermatological creams, hair restoration lotions, and body skincare products.",
  },
  {
    name: "Alight Health Formulas",
    url: "https://alighthealthformulas.com",
    platform: "Shopify",
    category: "Health & Supplements",
    description: "Advanced liposomal health formulas, nasal sprays, and targeted nutritional supplements.",
  },
  {
    name: "Fix This Build That",
    url: "https://shop.fixthisbuildthat.com",
    platform: "Shopify",
    category: "DIY & Woodworking",
    description: "Custom woodworking plans, storage build guides, and workshop project blueprints.",
  },
  {
    name: "Samsung Parts",
    url: "https://samsungparts.com",
    platform: "Shopify Plus",
    category: "Consumer Electronics",
    description: "Authorized replacement parts, components, and accessories for Samsung devices and appliances.",
  },
  {
    name: "Dart Armoury",
    url: "https://dartarmoury.com",
    platform: "Shopify",
    category: "Toys & Hobbies",
    description: "High-precision custom blasters, prop rifles, and cosplay equipment engineered in the UK.",
  },
  {
    name: "NUHANCIAM",
    url: "https://nuhanciam.com",
    platform: "Shopify",
    category: "Specialist Skincare",
    description: "French dermatologist-tested skincare engineered specifically for hyperpigmentation and dark skin tones.",
  },
  {
    name: "Beautiful Feet Books",
    url: "https://bfbooks.com",
    platform: "Shopify",
    category: "Education & Books",
    description: "Literature-based homeschool curriculum guides, history packages, and educational books.",
  },
  {
    name: "motogadget GmbH",
    url: "https://motogadget.com",
    platform: "Shopify",
    category: "Automotive & Motorcycle",
    description: "High-end digital instruments, glassless mirrors, and electronic control systems for custom motorcycles.",
  },
  {
    name: "Maisonette",
    url: "https://maisonette.com",
    platform: "Shopify Plus",
    category: "Kids & Baby Fashion",
    description: "High-end curated marketplace for children's clothing, nursery decor, toys, and luxury baby gear.",
  },
  {
    name: "RestaurantSupply.com",
    url: "https://restaurantsupply.com",
    platform: "Shopify Plus",
    category: "Commercial Equipment",
    description: "Enterprise restaurant supplies, commercial kitchen equipment, and dining room essentials.",
  },
  {
    name: "Danish Blue Adult Centres",
    url: "https://danishblue.com.au",
    platform: "Shopify",
    category: "Lifestyle & Retail",
    description: "Australia's premier intimate novelty retailer offering luxury wellness and bedroom products.",
  },
  {
    name: "Domino Style",
    url: "https://dominostyle.co.uk",
    platform: "Shopify",
    category: "Apparel & Fashion",
    description: "Trend-forward streetwear and urban fashion collections.",
  },
  {
    name: "Culture Kings",
    url: "https://culturekings.com",
    platform: "Shopify Plus",
    category: "Streetwear & Apparel",
    description: "Global streetwear powerhouse blending music, sports, and exclusive apparel.",
  },
  {
    name: "Pink Lily",
    url: "https://pinklily.com",
    platform: "Shopify Plus",
    category: "Women's Fashion",
    description: "Vibrant boutique fashion and seasonal lifestyle apparel.",
  },
  {
    name: "Jiifto",
    url: "https://jiifto.com",
    platform: "Shopify",
    category: "Lifestyle & General Store",
    description: "Curated modern home goods, accessories, and daily lifestyle products.",
  },
  {
    name: "Marrow Fine",
    url: "https://marrowfine.com",
    platform: "Shopify",
    category: "Fine Jewelry",
    description: "Custom bridal, luxury engagement rings, and reworked fine heirloom jewelry.",
  },
  {
    name: "Fine Art Collective",
    url: "https://fineartcollective.uk",
    platform: "Shopify",
    category: "Art & Prints",
    description: "Fine art print store showcasing gallery-grade originals and custom framed prints.",
  },
];

const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=2400`;

const slug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const StoreCard = ({ brand, i }: { brand: Brand; i: number }) => {
  const [loaded, setLoaded] = useState(false);
  const id = slug(brand.name);
  const domain = brand.url.replace(/^https?:\/\//, "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
      id={`case-${id}`}
      aria-labelledby={`case-${id}-title`}
      aria-describedby={`case-${id}-desc`}
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-neon"
    >
      <meta itemProp="genre" content={brand.category} />
      <meta itemProp="creator" content="Bash Berry Xpert" />

      {/* Browser frame */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" aria-hidden="true" />
        <span className="ml-2 truncate rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
          {domain}
        </span>
      </div>

      <figure className="m-0">
        <a
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-72 overflow-hidden bg-secondary"
          aria-label={`Open the live ${brand.name} store at ${domain} in a new tab`}
        >
          {!loaded && <div className="absolute inset-0 animate-pulse bg-secondary" aria-hidden="true" />}
          <img
            src={shot(brand.url)}
            alt={`Full-page homepage screenshot of the ${brand.name} ${brand.category.toLowerCase()} store built on ${brand.platform}`}
            loading="lazy"
            itemProp="image"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className={`w-full transition-transform duration-[8000ms] ease-in-out group-hover:-translate-y-[calc(100%-18rem)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>
        <figcaption className="sr-only">
          {brand.name} — {brand.category} storefront designed and optimised by Bash Berry Xpert on {brand.platform}.
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-3 border-t border-border p-5">
        <h3 id={`case-${id}-title`} itemProp="name" className="font-heading text-base font-bold text-foreground">
          {brand.name}
        </h3>
        <ul className="flex flex-wrap items-center gap-2" aria-label={`${brand.name} project tags`}>
          <li className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            {brand.category}
          </li>
          <li className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
            {brand.platform}
          </li>
        </ul>
        <p id={`case-${id}-desc`} itemProp="description" className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {brand.description}
        </p>
        <a
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          itemProp="url"
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
        >
          Visit Store<span className="sr-only"> {brand.name} (opens in a new tab)</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
};


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

const portfolioJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bash Berry Xpert Portfolio",
    description: `Live eCommerce storefronts designed, engineered and scaled by Bash Berry Xpert across ${[
      ...new Set(brands.map((b) => b.category)),
    ].length} categories.`,
    url: "https://bashberry.lovable.app/portfolio",
    mainEntity: {
      "@type": "ItemList",
      name: "eCommerce Store Design & Redesign Projects",
      numberOfItems: brands.length,
      itemListElement: brands.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: b.name,
          url: b.url,
          genre: b.category,
          description: b.description,
          image: shot(b.url),
          creator: { "@type": "Organization", name: "Bash Berry Xpert" },
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bashberry.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://bashberry.lovable.app/portfolio" },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="eCommerce Portfolio: 22 Live Shopify Stores | Bash Berry Xpert"
        description="See 22 live Shopify storefronts designed, rebuilt and scaled by Bash Berry Xpert — beauty, luxury jewelry, health supplements, fashion, electronics and B2B retail."
        path="/portfolio"
        jsonLd={portfolioJsonLd}
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
              An elite showcase of live eCommerce storefronts we design, engineer and scale.
            </p>
          </div>
        </section>

        {/* Store designs */}
        <section id="store-designs" className="bg-background py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              eCommerce Website Design & Redesign
            </h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              Hover any card to scroll the full live homepage from header to footer. Every store below is a real, shipped build.
            </p>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((b, i) => (
                <StoreCard key={b.name} brand={b} i={i} />
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
