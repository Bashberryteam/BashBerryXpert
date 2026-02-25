import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const brands = [
  { name: "Glamira", url: "https://glamira.africa", niche: "Jewelry & Accessories", result: "+240% Revenue" },
  { name: "Jiifto", url: "https://jiifto.com", niche: "Online Retail", result: "+180% Traffic" },
  { name: "Zevrik", url: "https://zevrik.com", niche: "Fashion", result: "8.5x ROAS" },
  { name: "Johareez", url: "https://johareez.com", niche: "Fine Jewelry", result: "+312% Organic" },
  { name: "Domino Style", url: "#", niche: "Apparel", result: "+145% CVR" },
  { name: "Gigi Boutique", url: "#", niche: "Fashion Boutique", result: "+200% Sales" },
  { name: "Spirit Fashion", url: "#", niche: "Streetwear", result: "-42% CAC" },
  { name: "Boutique Chic", url: "#", niche: "Luxury Retail", result: "+95% AOV" },
  { name: "Lesley Blackburn Art", url: "#", niche: "Art Gallery", result: "+300% Traffic" },
];

const salesProofs = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `ROI Dashboard ${i + 1}`,
  metric: [`+${(i + 1) * 47}% Revenue`, `${(i + 2) * 1.5}x ROAS`, `+${(i + 1) * 85}% Traffic`, `-${(i + 1) * 12}% CAC`, `+${(i + 1) * 55}% CVR`, `$${(i + 1) * 15}K MRR`][i],
}));

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl"
          >
            Brand <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real brands. Real results. Explore the stores we've scaled and the numbers behind the growth.
          </p>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-14 text-center text-3xl font-bold text-foreground">Brands We've Scaled</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-hover group rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-16 items-center justify-center rounded-lg bg-secondary">
                  <span className="text-xl font-bold text-gradient">{brand.name[0]}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{brand.name}</h3>
                  {brand.url !== "#" && (
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-3">{brand.niche}</p>
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{brand.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Proof */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Proof of Performance
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Sales Proof & ROI Screenshots
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
            Real dashboards, real numbers. These metrics showcase actual client performance data.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salesProofs.map((proof, i) => (
              <motion.div
                key={proof.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card overflow-hidden"
              >
                <div className="flex h-48 items-center justify-center bg-secondary">
                  <div className="text-center">
                    {i % 3 === 0 && <DollarSign className="mx-auto mb-2 h-10 w-10 text-primary/40" />}
                    {i % 3 === 1 && <TrendingUp className="mx-auto mb-2 h-10 w-10 text-primary/40" />}
                    {i % 3 === 2 && <ShoppingCart className="mx-auto mb-2 h-10 w-10 text-primary/40" />}
                    <p className="text-xs text-muted-foreground">ROI Screenshot Placeholder</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-foreground">{proof.title}</h3>
                  <p className="text-lg font-bold text-gradient">{proof.metric}</p>
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
            Let's discuss how we can replicate this success for your brand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
