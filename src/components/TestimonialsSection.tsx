import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Scaling our global traffic required a technical architect who understands the Google Ecosystem. Bash Berry Xpert delivered.",
    name: "Operations Lead",
    role: "Culture Kings",
    initial: "C",
  },
  {
    quote:
      "The migration to our new jewelry catalog was seamless. Our mobile conversion rate has jumped 30%.",
    name: "Ecommerce Director",
    role: "Marrow Fine",
    initial: "M",
  },
  {
    quote:
      "Expert-level understanding of SEO and site speed. Highly recommended for complex e-commerce setups.",
    name: "Head of Digital",
    role: "Classic Football Shirts",
    initial: "C",
  },
  {
    quote:
      "Our Merchant Center was suspended for months. Within weeks they had us reinstated and scaling Google Shopping profitably again.",
    name: "Founder",
    role: "Gigi Boutique",
    initial: "G",
  },
  {
    quote:
      "They rebuilt our entire Meta funnel — creative, CAPI, audiences. We're now sustaining 8.5x ROAS at a level of spend we never thought possible.",
    name: "Performance Marketing Lead",
    role: "Zevrik",
    initial: "Z",
  },
  {
    quote:
      "From a slow legacy storefront to a sub-3-second mobile experience. Traffic up 180%, and the catalog finally makes sense to shoppers.",
    name: "Co-Founder",
    role: "Jiifto",
    initial: "J",
  },
  {
    quote:
      "Their Klaviyo lifecycle build now drives 35% of our revenue. Pure compounding return month after month.",
    name: "CRM Manager",
    role: "Domino Style",
    initial: "D",
  },
  {
    quote:
      "A true growth partner — not just an agency. Strategic, technical, and accountable to revenue, not vanity metrics.",
    name: "Brand Director",
    role: "Boutique Chic",
    initial: "B",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-section-alt py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground md:text-4xl">
          Trusted by Ambitious Brands
        </h2>
        <p className="mb-14 text-center text-sm text-muted-foreground">
          Voices from the brands we scale across Shopify, WordPress and Wix.
        </p>

        <div className="relative mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-10 md:p-12 shadow-lg">
            <Quote className="mb-6 h-10 w-10 text-primary/40" aria-hidden="true" />
            <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                {t.initial}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
