import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WHATSAPP = "https://wa.me/447451250630";

const outcomes = [
  { value: "Strategy", label: "Clarity first", detail: "Every build starts with a mapped system, not a task list." },
  { value: "Execution", label: "Senior delivery", detail: "Direct founder-led work — no handoffs, no account managers." },
  { value: "Results", label: "Tracked revenue", detail: "Measured against revenue, ROAS and retention — not vanity metrics." },
  { value: "Scalability", label: "Built to grow", detail: "Systems that keep compounding long after launch day." },
];

const faqs = [
  { q: "Can you migrate my store to another platform?", a: "Yes. We handle full migrations across Shopify, Wix, WordPress/WooCommerce, Squarespace and Square Online — preserving URLs, SEO equity, product data and customer records, with zero planned downtime." },
  { q: "How long does a typical project take?", a: "A focused store build or redesign runs 3–5 weeks. Full growth systems (store + search + social + retention) typically ramp over the first 60–90 days." },
  { q: "My Google Merchant Center is suspended — can you fix it?", a: "That's one of our core specialities. We audit the feed, policy violations, site requirements and structured data, then handle the reinstatement and rebuild the Shopping campaigns properly." },
  { q: "Do you set up ad tracking and attribution?", a: "Yes — GA4, Google Ads conversion tracking, Meta Pixel with Conversions API, server-side tagging via GTM, and clean UTM structures so every channel is measured accurately." },
  { q: "What does it cost to work with you?", a: "Monthly partnerships run from $450 (Essential Growth) up to $1,200 (Xpert Authority, which covers all five growth strategies). See the pricing page for the full breakdown." },
  { q: "Do you offer support after launch?", a: "Every retainer includes ongoing optimization, monthly performance reporting and direct WhatsApp access for day-to-day store management." },
];


const timeline = [
  { icon: Briefcase, year: "2022 – Present", title: "Founder & Lead Strategist", company: "Bash Berry Xpert", description: "Leading multi-platform e-commerce growth across Shopify, Wix, WordPress, WooCommerce and Squarespace. Specializing in Google/Meta ecosystems, technical SEO, and conversion optimization." },
  { icon: Briefcase, year: "2020 – 2022", title: "Senior E-commerce Consultant", company: "Independent Practice", description: "Managed multi-channel marketing campaigns for 50+ stores across platforms. Achieved 8.5x average ROAS across the client portfolio." },
  { icon: GraduationCap, year: "2018 – 2020", title: "Digital Marketing Specialist", company: "Agency Experience", description: "Built deep expertise in Google Ads, Meta Ads, and SEO. Led campaigns generating $2M+ in tracked revenue." },
  { icon: Award, year: "2017 – 2018", title: "Web Developer & Designer", company: "Independent Practice", description: "Built custom websites and storefronts across Shopify, WordPress and Wix. Developed deep UX and conversion principles." },
];

const techStack = [
  { category: "Platforms", tools: ["Shopify", "Shopify Plus", "Wix", "WordPress", "WooCommerce", "Squarespace", "Square Online"] },
  { category: "Marketing", tools: ["Google Ads", "Google Merchant Center", "Meta Ads Manager", "TikTok Ads", "Pinterest Ads", "GTM"] },
  { category: "SEO", tools: ["Ahrefs", "SEMrush", "Screaming Frog", "Schema Markup", "Search Console"] },
  { category: "Design", tools: ["Figma", "Adobe XD", "Canva Pro", "Photoshop", "Illustrator"] },
  { category: "Development", tools: ["HTML/CSS", "JavaScript", "React", "Liquid", "Tailwind CSS", "Node.js"] },
  { category: "Analytics & Retention", tools: ["GA4", "Hotjar", "Microsoft Clarity", "Klaviyo", "Triple Whale"] },
];

const certifications = [
  "Google Ads Certified",
  "Google Analytics Certified",
  "Shopify Partner",
  "Meta Blueprint Certified",
  "HubSpot Inbound Certified",
  "SEMrush SEO Toolkit Certified",
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Experience & Certifications | Bash Berry Xpert"
        description="Verified Shopify, Wix, and Google Partner expertise. Years of multi-platform e-commerce engineering, ad-buying, and growth-systems delivery."
        path="/experience"
      />
      <Navbar />
      <main>

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Bash Berry Xpert
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Bridging Technical Complexity & <span className="text-gradient">Business Profitability</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A human-to-human partner for ambitious brands — built on years of hands-on work scaling stores across Shopify, Wix, WordPress and beyond.
          </p>
        </div>
      </section>

      {/* Human Bio */}
      <section className="bg-background pt-20 pb-8">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Hi — I'm the operator behind Bash Berry Xpert. I built this practice on one belief: <span className="text-foreground font-medium">we bridge the gap between technical complexity and business profitability.</span> Most brands don't fail because of bad products. They fail because the engineering, the search ecosystem, and the retention layer never get treated as one system.
            </p>
            <p>
              That's the gap we close. We're a multi-platform partner — Shopify, Wix, WordPress, WooCommerce, Squarespace, Square Online — engineering revenue systems that compound month over month. Every project runs through the same Core Revenue Growth Strategies: Store UX &amp; CRO, the Google Search &amp; Shopping Ecosystem, the Meta Social Ecosystem, Retention &amp; Email Funnels, and Multi-Channel Sync &amp; Analytics.
            </p>
            <p>
              When you work with us, you're not buying tasks. You're plugging into a senior operator and a proven framework that treats your store like a P&amp;L — not a portfolio piece. That's how we've helped 20+ brands move from stalled to scaling, profitably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground">My Professional Journey</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  {i < timeline.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
                </div>
                <div className="pb-8">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{item.year}</p>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{item.company}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground">My Tech Stack & Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((cat, i) => (
              <motion.div key={cat.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground">My Certifications</h2>
          <div className="mx-auto max-w-2xl grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <motion.div key={cert} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 rounded-2xl border border-border bg-card p-10 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Philosophy</h2>
              <p className="mt-3 text-sm text-muted-foreground">What every engagement is built on.</p>
            </div>
            <div className="space-y-3 text-2xl font-bold leading-snug text-foreground md:text-3xl">
              <p>Design is not decoration.</p>
              <p>Marketing is not guesswork.</p>
              <p className="text-gradient">Automation is not optional.</p>
            </div>
          </div>

          {/* Outcome metrics */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <p className="text-2xl font-extrabold text-primary md:text-3xl">{o.value}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{o.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{o.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Answers before you <span className="text-gradient">commit</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Everything founders ask us before starting a project — answered with the same honesty we bring to client work.
          </p>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="rounded-xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-section-alt py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            Build a system. <span className="text-gradient">Not just a brand.</span>
          </h2>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon"
          >
            Start on WhatsApp
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Experience;