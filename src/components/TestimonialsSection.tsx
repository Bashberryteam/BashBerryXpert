import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = { quote: string; name: string; role: string };

const testimonials: Testimonial[] = [
  { quote: "The redesign gave us a checkout that finally keeps up with our launches. Mobile conversion is up 34% and page speed is under two seconds.", name: "Brand Director", role: "Thrive Causemetics" },
  { quote: "They rebuilt our product pages with the detail our jewellery deserves. Average order value climbed and returns dropped noticeably.", name: "Head of Ecommerce", role: "Sif Jakobs Jewellery" },
  { quote: "Our storefront went from a slow hobby shop to a clean, fast retail experience. Seasonal sales doubled versus last year.", name: "Owner", role: "The Maine Souvenir Shop" },
  { quote: "Klare Struktur, schneller Shop. The new UX and bundle flow lifted repeat purchases across our haircare range.", name: "Founder", role: "ONNI.de" },
  { quote: "Delicate products need a delicate interface. The mobile checkout rework alone recovered a big chunk of abandoned carts.", name: "Co-Founder", role: "Maison de Femmes" },
  { quote: "Compliance-heavy skincare is tricky to merchandise. They handled the catalog structure and our conversion rate nearly doubled.", name: "Managing Director", role: "Melano Pharma" },
  { quote: "Subscriptions, upsells and a much faster storefront. Revenue per session is the highest it has ever been.", name: "Founder", role: "Alight Health Formulas" },
  { quote: "Our digital plan store finally feels premium. Checkout friction is gone and customers buy multiple plans in one go.", name: "Creator", role: "Fix This Build That" },
  { quote: "A huge parts catalog made searchable and fast. Customers find the right SKU first time, which cut support tickets hard.", name: "Ecommerce Manager", role: "Samsung Parts" },
  { quote: "The new build matches the precision of our products. Mobile speed and product configuration are night and day better.", name: "Director", role: "Dart Armoury" },
  { quote: "They understood our clinical positioning and translated it into a storefront that converts internationally.", name: "Brand Lead", role: "NUHANCIAM" },
  { quote: "Our curriculum bundles are finally easy to navigate. Homeschool families check out in half the steps they used to.", name: "Owner", role: "Beautiful Feet Books" },
  { quote: "Engineering-grade attention to detail. The rebuilt catalog and checkout handle our global dealers without a hitch.", name: "Managing Partner", role: "motogadget GmbH" },
  { quote: "Marketplace complexity handled beautifully. Faster load times immediately showed up in our conversion dashboards.", name: "Growth Lead", role: "Maisonette" },
  { quote: "Thousands of commercial SKUs, now genuinely browsable. B2B repeat orders are up and cart size grew.", name: "Ecommerce Director", role: "RestaurantSupply.com" },
  { quote: "Discreet, fast and beautifully merchandised. The mobile experience transformed our online revenue share.", name: "Retail Manager", role: "Danish Blue Adult Centres" },
  { quote: "Their Klaviyo lifecycle build now drives 35% of our revenue. Pure compounding return month after month.", name: "CRM Manager", role: "Domino Style" },
  { quote: "Scaling our global traffic required a technical architect who understands the Google ecosystem. They delivered.", name: "Operations Lead", role: "Culture Kings" },
  { quote: "Seasonal drops used to break our site. Now the storefront holds up and mobile checkout is effortless.", name: "Head of Digital", role: "Pink Lily" },
  { quote: "From a slow legacy storefront to a sub-3-second mobile experience. Traffic up 180% and the catalog finally makes sense.", name: "Co-Founder", role: "Jiifto" },
  { quote: "The migration to our new jewelry catalog was seamless. Our mobile conversion rate jumped 30%.", name: "Ecommerce Director", role: "Marrow Fine" },
  { quote: "Gallery-grade presentation with a checkout that actually sells. Framed print orders have never been stronger.", name: "Curator", role: "Fine Art Collective" },
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
          <div className="rounded-2xl border border-border bg-card p-10 shadow-lg md:p-12">
            <Quote className="mb-6 h-10 w-10 text-primary/40" aria-hidden="true" />
            <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                {t.role.charAt(0)}
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

            <div className="flex max-w-[70%] flex-wrap items-center justify-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.role}
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
