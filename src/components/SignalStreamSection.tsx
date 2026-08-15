import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const signals = [
  "Your checkout page is probably leaking 20–30% of buyers. Most stores never fix it.",
  "Visitors decide whether to trust your site in under 3 seconds. Design for that window.",
  "Slow mobile = silent revenue loss. Every 1s of latency cuts conversion ~7%.",
  "Most 'About' pages talk about you. Great ones talk about the buyer's transformation.",
  "If your pricing page needs explaining, your positioning isn't done yet.",
  "Founders underestimate friction. Every extra click is a vote for leaving.",
  "Social proof works — when it's specific. 'Loved by 10k' beats 'trusted worldwide' every time.",
  "Your homepage isn't a brochure. It's a decision engine.",
  "The best CTA isn't the loudest — it's the one that promises the clearest next step.",
  "Premium pricing requires premium clarity. Confused buyers don't pay top dollar.",
  "Most websites optimize for visitors. Elite sites optimize for the one buyer who matters.",
  "If you have to convince someone to buy, your offer is wrong — not your copy.",
];

const pad = (n: number) => String(n).padStart(2, "0");

const SignalStreamSection = () => {
  const [index, setIndex] = useState(0);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + signals.length) % signals.length);

  return (
    <section className="bg-section-alt py-24" aria-labelledby="signal-stream-heading">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Insights</p>
          <h2 id="signal-stream-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            Signal <span className="text-gradient">Stream</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="mb-6 h-8 w-8 text-primary" aria-hidden="true" />
            <div className="min-h-[7rem] sm:min-h-[6rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  aria-live="polite"
                  className="text-lg font-medium leading-relaxed text-foreground md:text-2xl"
                >
                  {signals[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-6">
              <span className="font-mono text-sm tracking-widest text-muted-foreground">
                <span className="text-primary">{pad(index + 1)}</span> / {pad(signals.length)}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous insight"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next insight"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-1.5">
            {signals.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show insight ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalStreamSection;
