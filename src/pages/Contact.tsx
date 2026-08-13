import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Send, Star, MessageSquare } from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { toast } from "@/hooks/use-toast";

const PRIMARY_EMAIL = "info@bashberryxpert.com";

const serviceOptions = [
  "Website Design & Optimization",
  "SEO",
  "Digital Advertising",
  "Email Marketing",
  "Brand Strategy",
  "Marketing Consulting",
  "Site Audit / Roast",
  "Others",
];

const budgetOptions = [
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const inputCn = "w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors";
const selectCn = "w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors appearance-none";

const reviewSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name (min 2 characters)." }).max(80, { message: "Name must be under 80 characters." }),
  business: z.string().trim().max(100, { message: "Business name must be under 100 characters." }).optional(),
  rating: z.number().int().min(1).max(5),
  review: z.string().trim().min(20, { message: "Please write at least 20 characters." }).max(1000, { message: "Review must be under 1000 characters." }),
});

const REVIEW_STORAGE_KEY = "bbx_reviews";

const Contact = () => {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", storeUrl: "",
    service: "", budget: "", challenge: "",
  });
  const [reviewForm, setReviewForm] = useState({ name: "", business: "", rating: 5, review: "" });
  const [reviewErrors, setReviewErrors] = useState<Record<string, string>>({});
  const [showReview, setShowReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Deep links: /contact?review=1, /contact?type=audit, /contact?type=brief
  useEffect(() => {
    const type = params.get("type");
    if (params.get("review") === "1") {
      setShowReview(true);
      setTimeout(() => reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
      return;
    }
    if (type === "audit") {
      setForm((f) => ({ ...f, service: "Site Audit / Roast" }));
    }
    if (type === "audit" || type === "brief") {
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Bash Berry Xpert!%0A%0A*New Partnership Inquiry*%0A%0AName: ${encodeURIComponent(form.firstName + " " + form.lastName)}%0AEmail: ${encodeURIComponent(form.email)}%0AStore: ${encodeURIComponent(form.storeUrl || "N/A")}%0AService: ${encodeURIComponent(form.service)}%0ABudget: ${encodeURIComponent(form.budget)}%0AChallenge: ${encodeURIComponent(form.challenge || "N/A")}`;
    window.open(`https://wa.me/447451250630?text=${message}`, "_blank");
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", storeUrl: "", service: "", budget: "", challenge: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = reviewSchema.safeParse(reviewForm);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!errs[key]) errs[key] = issue.message;
      });
      setReviewErrors(errs);
      toast({ title: "Please check your review", description: Object.values(errs)[0], variant: "destructive" });
      return;
    }
    setReviewErrors({});
    const data = parsed.data;

    // Persist locally so nothing is lost, then deliver via email
    try {
      const existing = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || "[]");
      existing.push({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(existing));
    } catch {
      /* storage unavailable — delivery below still works */
    }

    const subject = encodeURIComponent(`New Review — ${data.name}${data.business ? ` (${data.business})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nBusiness: ${data.business || "N/A"}\nRating: ${data.rating}/5\n\nReview:\n${data.review}`
    );
    window.location.href = `mailto:${PRIMARY_EMAIL}?subject=${subject}&body=${body}`;

    setReviewSubmitted(true);
    setReviewForm({ name: "", business: "", rating: 5, review: "" });
    toast({ title: "Review submitted", description: "Thank you — your review is on its way to our team." });
    setTimeout(() => setReviewSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact | Start Your Growth — Bash Berry Xpert"
        description="Partner with Bash Berry Xpert. WhatsApp +44 7451 250630, email info@bashberryxpert.com, or submit a brief to scale your Shopify/Wix store."
        path="/contact"
      />
      <Navbar />
      <main>

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Let's Talk</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Ready to <span className="text-gradient">Accelerate Growth?</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Partner with a multi-platform growth team that understands the full e-commerce ecosystem. We'll map out your revenue growth plan and build it with you.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Get In Touch</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Whether you're launching a new store or scaling an existing one across Shopify, Wix, WordPress or beyond — we'll help you identify opportunities and build a comprehensive growth strategy.
              </p>

              <div className="mb-8 space-y-3">
                <a href={`mailto:${PRIMARY_EMAIL}`} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email us</p>
                    <p className="text-sm font-semibold text-foreground">{PRIMARY_EMAIL}</p>
                  </div>
                </a>
                <a href="mailto:bashberryexpert@gmail.com" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Alternate inbox</p>
                    <p className="text-sm font-semibold text-foreground">bashberryexpert@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mb-6 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Discovery Call", desc: "We discuss your brand's goals, platform, and current challenges." },
                    { num: "2", title: "Growth Roadmap", desc: "We design a custom strategy tailored to your platform and stage." },
                    { num: "3", title: "Execute & Scale", desc: "We implement, optimize, and report on every strategy continuously." },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">{step.num}</div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setShowReview((s) => !s);
                  if (!showReview) setTimeout(() => reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
                }}
                aria-expanded={showReview}
                className="flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40"
              >
                <MessageSquare className="h-4 w-4 text-primary" /> Leave a Review
              </button>
            </motion.div>

            {/* Contact Form */}
            <motion.div ref={formRef} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 text-lg font-semibold text-foreground">Start Your Growth Journey</h3>
                {submitted && (
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 text-sm text-primary font-medium">
                    Redirecting to WhatsApp — we'll respond within 24 hours.
                  </div>
                )}
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="First Name" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputCn} />
                    <input type="text" placeholder="Last Name" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputCn} />
                  </div>
                  <input type="email" placeholder="Work Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCn} />
                  <input type="url" placeholder="Store URL (optional)" value={form.storeUrl} onChange={(e) => setForm({ ...form, storeUrl: e.target.value })} className={inputCn} />

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Service Needed</label>
                    <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={selectCn}>
                      <option value="" disabled>Select a service...</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Budget Range</label>
                    <select required value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={selectCn}>
                      <option value="" disabled>Select budget range...</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <textarea placeholder="What's your biggest challenge?" rows={4} value={form.challenge} onChange={(e) => setForm({ ...form, challenge: e.target.value })} className={inputCn} />
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
                    <Send className="h-4 w-4" /> Send via WhatsApp
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Prefer email? Write to{" "}
                    <a href={`mailto:${PRIMARY_EMAIL}`} className="text-primary hover:underline">{PRIMARY_EMAIL}</a>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Review Form */}
          {showReview && (
            <motion.div ref={reviewRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-16 max-w-lg">
              <form onSubmit={handleReviewSubmit} noValidate className="rounded-xl border border-primary/30 bg-card p-8 shadow-glow">
                <h3 className="mb-6 text-lg font-semibold text-foreground flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Leave a Review
                </h3>
                {reviewSubmitted && (
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 text-sm text-primary font-medium">
                    Thank you! Your review has been sent to {PRIMARY_EMAIL}.
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })} maxLength={80} className={inputCn} aria-invalid={!!reviewErrors.name} />
                    {reviewErrors.name && <p className="mt-1 text-xs text-destructive">{reviewErrors.name}</p>}
                  </div>
                  <div>
                    <input type="text" placeholder="Business Name (optional)" value={reviewForm.business} onChange={(e) => setReviewForm({ ...reviewForm, business: e.target.value })} maxLength={100} className={inputCn} />
                    {reviewErrors.business && <p className="mt-1 text-xs text-destructive">{reviewErrors.business}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-muted-foreground">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button key={n} type="button" aria-label={`Rate ${n} star${n === 1 ? "" : "s"}`} aria-pressed={n === reviewForm.rating} onClick={() => setReviewForm({ ...reviewForm, rating: n })} className="transition-transform hover:scale-110">
                          <Star className={`h-6 w-6 ${n <= reviewForm.rating ? "fill-primary text-primary" : "text-muted"}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <textarea placeholder="Share your experience..." rows={4} value={reviewForm.review} onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })} maxLength={1000} className={inputCn} aria-invalid={!!reviewErrors.review} />
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-xs text-destructive">{reviewErrors.review || ""}</p>
                      <p className="text-xs text-muted-foreground">{reviewForm.review.length}/1000</p>
                    </div>
                  </div>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
