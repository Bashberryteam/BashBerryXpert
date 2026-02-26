import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, DollarSign, ShoppingCart, Gem, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fashionBrands = [
  { name: "Domino Style", url: "https://dominostyle.co.uk", niche: "Fashion & Apparel", result: "+145% CVR" },
  { name: "Gigi Boutique", url: "https://gigi-boutique.co.uk", niche: "Fashion Boutique", result: "+200% Sales" },
  { name: "Spirit Fashion", url: "https://spiritfashion.co.uk", niche: "Streetwear", result: "-42% CAC" },
  { name: "Boutique Chic", url: "https://boutiquechic.co.uk", niche: "Luxury Retail", result: "+95% AOV" },
  { name: "Classic Football Shirts", url: "https://classicfootballshirts.com", niche: "Sports Apparel", result: "+320% Revenue" },
  { name: "Culture Kings", url: "https://culturekings.com", niche: "Streetwear Culture", result: "9.2x ROAS" },
  { name: "Staple Pigeon", url: "https://staplepigeon.com", niche: "Urban Fashion", result: "+175% Traffic" },
  { name: "Pink Lily", url: "https://pinklily.com", niche: "Women's Fashion", result: "+260% Organic" },
  { name: "GOEX Apparel", url: "https://goexapparel.com", niche: "Sustainable Fashion", result: "+180% CVR" },
];

const jewelryBrands = [
  { name: "Glamira", url: "https://glamira.africa", niche: "Jewelry & Accessories", result: "+240% Revenue" },
  { name: "Johareez", url: "https://johareez.com", niche: "Fine Jewelry", result: "+312% Organic" },
  { name: "Zevrik", url: "https://zevrik.com", niche: "Fashion Jewelry", result: "8.5x ROAS" },
  { name: "Miaymax Jewelry", url: "https://miaymaxjewelry.com", niche: "Custom Jewelry", result: "+190% Sales" },
  { name: "Marrow Fine", url: "https://marrowfine.com", niche: "Fine Jewelry", result: "+215% AOV" },
  { name: "Dayyani Jewelers", url: "https://dayyanijewelers.com", niche: "Luxury Jewelry", result: "+280% Revenue" },
  { name: "Shane Co.", url: "https://shaneco.com", niche: "Diamond Jewelry", result: "+155% Traffic" },
];

const nicheBrands = [
  { name: "Jiifto", url: "https://jiifto.com", niche: "Online Retail", result: "+180% Traffic" },
  { name: "Lesley Blackburn Art", url: "https://lesleyblackburnart.myshopify.com", niche: "Art Gallery", result: "+300% Traffic" },
  { name: "Brought To Reality", url: "https://broughttoreality.com", niche: "Custom Products", result: "+220% CVR" },
  { name: "Kenneth Rebels", url: "https://kennethrebels.com", niche: "Lifestyle Brand", result: "+195% Revenue" },
];

const allBrands = [...fashionBrands, ...jewelryBrands, ...nicheBrands];

const salesProofs = [
  { id: 1, title: "Fashion Portfolio ROI", metric: "+320% Revenue", category: "Fashion" },
  { id: 2, title: "Jewelry Campaigns ROAS", metric: "9.2x ROAS", category: "Jewelry" },
  { id: 3, title: "Organic Traffic Growth", metric: "+312% Organic", category: "SEO" },
  { id: 4, title: "Customer Acquisition", metric: "-42% CAC", category: "Ads" },
  { id: 5, title: "Conversion Rate Lift", metric: "+260% CVR", category: "CRO" },
  { id: 6, title: "Monthly Recurring Revenue", metric: "$95K MRR", category: "Revenue" },
];

const CategoryIcon = ({ category }: { category: string }) => {
  if (category === "Fashion") return <ShoppingCart className="mx-auto mb-2 h-10 w-10 text-primary/40" />;
  if (category === "Jewelry") return <Gem className="mx-auto mb-2 h-10 w-10 text-primary/40" />;
  if (category === "SEO") return <TrendingUp className="mx-auto mb-2 h-10 w-10 text-primary/40" />;
  return <DollarSign className="mx-auto mb-2 h-10 w-10 text-primary/40" />;
};

const BrandCard = ({ brand, i }: { brand: typeof allBrands[0]; i: number }) => (
  <motion.a
    href={brand.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.04 }}
    className="card-hover group rounded-xl border border-border bg-card p-6 block cursor-pointer"
  >
    <div className="mb-4 flex h-14 items-center justify-center rounded-lg bg-secondary">
      <span className="text-xl font-bold text-gradient">{brand.name[0]}</span>
    </div>
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-base font-semibold text-foreground">{brand.name}</h3>
      <ExternalLink className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
    <p className="text-xs text-muted-foreground mb-3">{brand.niche}</p>
    <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
      <TrendingUp className="h-4 w-4 text-primary" />
      <span className="text-sm font-semibold text-primary">{brand.result}</span>
    </div>
  </motion.a>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Brand <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            20+ brands scaled. Real results. Explore the stores we've grown and the numbers behind the success.
          </p>
        </div>
      </section>

      {/* Fashion & Apparel */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Fashion & Apparel</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{fashionBrands.length} Brands</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fashionBrands.map((brand, i) => <BrandCard key={brand.name} brand={brand} i={i} />)}
          </div>
        </div>
      </section>

      {/* Jewelry & Luxury */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Gem className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Jewelry & Luxury</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{jewelryBrands.length} Brands</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jewelryBrands.map((brand, i) => <BrandCard key={brand.name} brand={brand} i={i} />)}
          </div>
        </div>
      </section>

      {/* Niche & Art */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Palette className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Niche & Art</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{nicheBrands.length} Brands</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nicheBrands.map((brand, i) => <BrandCard key={brand.name} brand={brand} i={i} />)}
          </div>
        </div>
      </section>

      {/* Sales Proof */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Proof of Performance</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">Sales Proof & ROI Screenshots</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">
            Real dashboards, real numbers. These metrics showcase actual client performance data across our 20+ brand portfolio.
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
                    <CategoryIcon category={proof.category} />
                    <p className="text-xs text-muted-foreground">ROI Screenshot Placeholder</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-1">{proof.category}</p>
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
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">Let's discuss how we can replicate this success for your brand.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
