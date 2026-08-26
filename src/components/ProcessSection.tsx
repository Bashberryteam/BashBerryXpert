import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Search, PenTool, Code2, BarChart3, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Strategy", description: "Deep dive into your brand, goals, and target audience to create a winning roadmap." },
  { icon: Search, title: "UX Research", description: "Analyze user behavior, competitors, and market trends to inform design decisions." },
  { icon: PenTool, title: "Design", description: "Create stunning, conversion-optimized designs that embody your brand identity." },
  { icon: Code2, title: "Development", description: "Build your store with clean code, fast performance, and seamless functionality." },
  { icon: BarChart3, title: "Optimization", description: "Fine-tune every element for maximum conversions and customer experience." },
  { icon: Rocket, title: "Launch", description: "Go live with confidence, plus ongoing support and growth strategies." },
];

const ProcessSection = () => {
  const [active, setActive] = useState(3);

  return (
    <section className="bg-section-alt py-24" aria-labelledby="process-heading">
      <div className="container mx-auto px-6">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
        <h2 id="process-heading" className="mb-4 text-center text-3xl font-bold text-foreground md:text-5xl">
          How We <span className="text-gradient">Work Together</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          A proven 6-step process refined over 150+ successful projects to deliver exceptional results every time.
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" aria-hidden="true" />
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  type="button"
                  key={step.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group relative flex flex-col items-center text-center outline-none"
                >
                  <div className="relative">
                    <div
                      className={`flex items-center justify-center rounded-2xl bg-gradient-primary transition-all ${
                        isActive ? "h-[4.5rem] w-[4.5rem] shadow-neon" : "h-16 w-16"
                      }`}
                    >
                      <step.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className={`mt-5 text-base font-bold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
