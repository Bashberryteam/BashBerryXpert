import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, BarChart3, Zap, Target, Star } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const badges = ["Full-Stack Growth", "Multi-Channel Marketing", "Revenue-First Approach"];

const whyMe = [
  { icon: BarChart3, title: "Data-Driven Strategies", description: "Every decision backed by real analytics, A/B testing, and performance metrics — never guesswork." },
  { icon: Shield, title: "5-Pillar Framework", description: "My proprietary system covers Store Design, SEO, Google/Meta Ads, CRO, and Retention for complete growth." },
  { icon: Zap, title: "Google Merchant 'Locked Door' Solutions", description: "90% of stores fail without Google Merchant Center approval. I specialize in unlocking this critical channel." },
  { icon: Target, title: "Revenue-First Approach", description: "I focus on profitable growth, not vanity metrics. Every dollar spent must generate measurable ROI." },
];

const brands = [
  { name: "Glamira", url: "https://glamira.africa" },
  { name: "Jiifto", url: "https://jiifto.com" },
  { name: "Zevrik", url: "https://zevrik.com" },
  { name: "Johareez", url: "https://johareez.com" },
  { name: "Domino Style", url: "https://dominostyle.co.uk" },
  { name: "Gigi Boutique", url: "https://gigi-boutique.co.uk" },
  { name: "Spirit Fashion", url: "https://spiritfashion.co.uk" },
  { name: "Boutique Chic", url: "https://boutiquechic.co.uk" },
  { name: "Classic Football Shirts", url: "https://classicfootballshirts.com" },
  { name: "Culture Kings", url: "https://culturekings.com" },
  { name: "Staple Pigeon", url: "https://staplepigeon.com" },
  { name: "Pink Lily", url: "https://pinklily.com" },
  { name: "GOEX Apparel", url: "https://goexapparel.com" },
  { name: "Miaymax Jewelry", url: "https://miaymaxjewelry.com" },
  { name: "Marrow Fine", url: "https://marrowfine.com" },
  { name: "Dayyani Jewelers", url: "https://dayyanijewelers.com" },
  { name: "Shane Co.", url: "https://shaneco.com" },
  { name: "Lesley Blackburn Art", url: "https://lesleyblackburnart.myshopify.com" },
  { name: "Brought To Reality", url: "https://broughttoreality.com" },
  { name: "Kenneth Rebels", url: "https://kennethrebels.com" },
];

const testimonials = [
  { quote: "Bash Berry Xpert completely transformed our technical SEO infrastructure. Within 4 months, our organic revenue doubled. His attention to detail is remarkable.", name: "Glamira", role: "Jewelry & Accessories" },
  { quote: "The migration was flawless — zero downtime, perfectly preserved URLs, and a stunning new design that bumped our conversion rate by 30%.", name: "Jiifto", role: "Online Retail" },
  { quote: "His grasp on the Google and Meta ecosystem is unparalleled. He looks at our entire unit economics to scale profitably.", name: "Zevrik", role: "Fashion Jewelry" },
  { quote: "Outstanding Shopify expertise. Our store went from zero to $10K+ monthly in under 6 months. Truly world-class work.", name: "Johareez", role: "Fine Jewelry" },
  { quote: "Professional, data-driven, and results-focused. He delivered a complete brand overhaul that increased our sales by 145%.", name: "Domino Style", role: "Fashion & Apparel" },
  { quote: "He unlocked Google Merchant Center for us when three other agencies couldn't. Absolute game-changer for our business.", name: "Gigi Boutique", role: "Fashion Boutique" },
  { quote: "Our ROAS consistently exceeds 8x thanks to his Meta ads strategy. He truly understands how to scale fashion brands.", name: "Spirit Fashion", role: "Streetwear" },
  { quote: "From branding to SEO to paid ads, he handles everything seamlessly. Having one expert manage our entire growth stack is incredible.", name: "Boutique Chic", role: "Luxury Retail" },
  { quote: "Incredible attention to detail in web design and a deep understanding of the art market niche. Our traffic tripled.", name: "Lesley Blackburn Art", role: "Art Gallery" },
  { quote: "Working with Bash Berry Xpert gave us access to strategies we didn't even know existed. Our repeat purchase rate jumped 60%.", name: "Classic Football Shirts", role: "Sports Apparel" },
  { quote: "He scaled our Google Shopping campaigns from $2K to $25K/month spend while maintaining a 6x ROAS. Exceptional work.", name: "Culture Kings", role: "Streetwear Culture" },
  { quote: "His understanding of streetwear culture and digital marketing is rare. Our brand awareness skyrocketed.", name: "Staple Pigeon", role: "Urban Fashion" },
  { quote: "Pink Lily's growth story wouldn't be the same without Bash Berry. He helped us crack influencer marketing at scale.", name: "Pink Lily", role: "Women's Fashion" },
  { quote: "As a sustainable brand, we needed someone who understood our values. He delivered growth without compromising our mission.", name: "GOEX Apparel", role: "Sustainable Fashion" },
  { quote: "Our custom jewelry line needed specialized marketing. He delivered a strategy that increased our average order value by 85%.", name: "Miaymax Jewelry", role: "Custom Jewelry" },
  { quote: "The level of care he puts into email marketing sequences is impressive. Our email revenue now accounts for 35% of total sales.", name: "Marrow Fine", role: "Fine Jewelry" },
  { quote: "He rebuilt our entire online presence and the results speak for themselves — 280% revenue growth in one year.", name: "Dayyani Jewelers", role: "Luxury Jewelry" },
  { quote: "His SEO work put us on the first page for our most competitive keywords. The organic traffic boost has been phenomenal.", name: "Shane Co.", role: "Diamond Jewelry" },
  { quote: "From concept to execution, Bash Berry helped us bring our creative vision to life with a store that truly converts.", name: "Brought To Reality", role: "Custom Products" },
  { quote: "Kenneth Rebels grew 195% in revenue within 8 months of partnering with Bash Berry. His framework simply works.", name: "Kenneth Rebels", role: "Lifestyle Brand" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen bg-hero-gradient pt-16">
        <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Your Solo E-commerce Growth Expert
          </motion.div>

          <h1 className="mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            I Build and Scale High-Revenue{" "}<span className="text-gradient">Shopify Engines.</span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I don't just build stores — I scale them. From technical design to Google/Meta Ecosystem mastery, I turn browsers into loyal buyers.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link to="/services" className="bg-gradient-primary flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-neon">
              View My Growth Framework <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/portfolio" className="flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/40">
              View Results
            </Link>
          </motion.div>

          <a href="mailto:bashberryexpert@gmail.com" className="mb-8 text-sm text-muted-foreground transition-colors hover:text-foreground">bashberryexpert@gmail.com</a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Marquee */}
      <section className="border-y border-border bg-background py-12">
        <div className="container mx-auto px-6">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted By 20+ Ambitious Brands</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-muted-foreground/50 transition-colors hover:text-primary cursor-pointer">
                {brand.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="bg-section-alt py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Me</p>
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">Your Unfair Competitive Advantage</h2>
            <p className="mx-auto mb-14 max-w-2xl text-center text-muted-foreground">Most agencies guess. I engineer growth with a proven framework, proprietary strategies, and deep platform expertise.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyMe.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="card-hover rounded-xl border border-border bg-card p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slideshow */}
      <TestimonialSlideshow testimonials={testimonials} />

      <Footer />
    </div>
  );
};

type Testimonial = { quote: string; name: string; role: string };

const TestimonialSlideshow = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const t = testimonials[current];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client Testimonials</p>
        <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl">What My Clients Say</h2>

        <div className="mx-auto max-w-2xl text-center">
          <motion.div key={current} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-xl border border-border bg-card p-10">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
            </div>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">{t.name[0]}</div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center gap-1.5 flex-wrap">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-muted"}`} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40">
            Leave a Review <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;