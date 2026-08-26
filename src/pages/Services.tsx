import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Monitor,
  Search,
  Megaphone,
  Mail,
  Compass,
  LineChart,
  Clapperboard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EMAIL = "info@bashberryxpert.com";
const WHATSAPP = "https://wa.me/447451250630";

type ServiceCategory = {
  num: string;
  icon: typeof Monitor;
  title: string;
  description: string;
  deliverables: string[];
};

const categories: ServiceCategory[] = [
  {
    num: "01",
    icon: Monitor,
    title: "Website Design & Optimization",
    description: "Premium websites engineered to convert, not just impress.",
    deliverables: [
      "Custom Website Design",
      "Shopify Store Design",
      "Landing Page Design",
      "Conversion-Focused UX/UI",
      "Website Optimization",
    ],
  },
  {
    num: "02",
    icon: Search,
    title: "SEO",
    description: "Earn rankings that compound into a long-term revenue channel.",
    deliverables: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Content Optimization",
      "Local SEO",
    ],
  },
  {
    num: "03",
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Performance ads designed around revenue, not vanity metrics.",
    deliverables: [
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "Pinterest Management & Ads",
      "Retargeting Campaigns",
      "Conversion Tracking",
    ],
  },
  {
    num: "04",
    icon: Mail,
    title: "Email Marketing",
    description: "Lifecycle systems that turn first-time buyers into repeat revenue.",
    deliverables: [
      "Email Automation",
      "Welcome Sequences",
      "Sales Campaigns",
      "Newsletter Systems",
      "Customer Retention Flows",
    ],
  },
  {
    num: "05",
    icon: Compass,
    title: "Brand Strategy",
    description: "Positioning that makes your brand the obvious choice in its category.",
    deliverables: [
      "Brand Positioning",
      "Messaging Strategy",
      "Customer Journey Mapping",
      "Conversion Strategy",
    ],
  },
  {
    num: "06",
    icon: LineChart,
    title: "Marketing Consulting",
    description: "Strategic guidance for founders who need clarity, not opinions.",
    deliverables: [
      "Funnel Audits",
      "Growth Strategy",
      "Customer Acquisition",
      "Revenue Optimization",
    ],
  },
  {
    num: "07",
    icon: Clapperboard,
    title: "AI Commercial Production",
    description:
      "High-impact AI-generated visuals and cinematic ad content crafted to position your brand, engage your audience, and increase conversions.",
    deliverables: [
      "AI Product Photography",
      "AI Video Ads",
      "AI Commercial Videos",
      "Product & Service Visuals",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="What I Do | Services for Serious Brands — Bash Berry Xpert"
        description="Website design & optimization, SEO, digital advertising, email marketing, brand strategy and marketing consulting — built around one outcome: measurable growth."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "E-commerce Growth Services",
          provider: { "@type": "Organization", name: "Bash Berry Xpert", email: EMAIL },
          areaServed: "Worldwide",
          description:
            "Website Design & Optimization, SEO, Digital Advertising, Email Marketing, Brand Strategy and Marketing Consulting for growth-focused brands.",
        }}
      />
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-hero-gradient pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What I Do
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
              Strategic services for <span className="text-gradient">serious brands.</span>
            </motion.h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every engagement is built around one outcome: measurable growth. Below is the full scope of what I offer — pick the part that fits, or combine them into a full system.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((c, i) => (
                <motion.article
                  key={c.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-neon"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <c.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-muted-foreground">{c.num}</span>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-foreground">{c.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

                  <ul className="mb-8 space-y-2.5">
                    {c.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/pricing"
                    className="mt-auto inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-all group-hover:border-primary/40 group-hover:text-primary"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-section-alt py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center md:p-14">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Not sure where to <span className="text-gradient">start?</span>
              </h2>
              <p className="mx-auto mb-8 max-w-xl leading-relaxed text-muted-foreground">
                Send a short note about your business and what you want to grow. I'll come back with a clear recommendation — no pitch deck, no fluff.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Starting a conversation")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon"
                >
                  Start a conversation <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Or email directly:{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
