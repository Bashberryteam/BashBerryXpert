import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, FileText, Flame, ArrowRight } from "lucide-react";

const EMAIL = "info@bashberryxpert.com";

const doors = [
  {
    icon: Mail,
    title: "Start a Project",
    text: "Tell me what you're building. I'll respond personally within 48 hours.",
    cta: "Email me",
    href: `mailto:${EMAIL}?subject=${encodeURIComponent("New project enquiry")}`,
    external: true,
  },
  {
    icon: FileText,
    title: "Send a Brief",
    text: "Already scoped? Drop the brief and I'll come back with a clear yes/no and next steps.",
    cta: "Send brief",
    href: "/contact?type=brief",
    external: false,
  },
  {
    icon: Flame,
    title: "Roast / Audit My Site",
    text: "Want me to look at your site personally? Send the URL, the goal, and where you're stuck.",
    cta: "Request audit",
    href: "/contact?type=audit",
    external: false,
  },
];

const NextMoveSection = () => {
  return (
    <section className="bg-background py-24" aria-labelledby="next-move-heading">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <h2 id="next-move-heading" className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Choose your <span className="text-gradient">next move.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Three doors. Pick whichever fits. All of them reach me directly.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {doors.map((door, i) => (
            <motion.div
              key={door.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-neon"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <door.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{door.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">{door.text}</p>
              {door.external ? (
                <a href={door.href} className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
                  {door.cta} <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link to={door.href} className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-all group-hover:border-primary/40 group-hover:text-primary">
                  {door.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextMoveSection;
