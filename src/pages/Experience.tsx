import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
              That's the gap we close. We're a multi-platform partner — Shopify, Wix, WordPress, WooCommerce, Squarespace, Square Online — engineering revenue systems that compound month over month. Every project runs through the same Bash Berry 5-Pillar Framework: Platform Engineering, Catalog Mastery, the Search Ecosystem, the Meta &amp; Social Ecosystem, and Retention &amp; Revenue Systems.
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

      </main>
      <Footer />
    </div>
  );
};

export default Experience;