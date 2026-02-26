import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Star, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "Web Development",
  "SEO",
  "Meta Ecosystem Strategy",
  "Google Ecosystem Strategy",
  "Email Marketing",
  "Reputation Management",
  "The 5-Pillar Growth Framework",
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

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", storeUrl: "",
    service: "", budget: "", challenge: "",
  });
  const [reviewForm, setReviewForm] = useState({ name: "", business: "", rating: 5, review: "" });
  const [showReview, setShowReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Bash Berry Xpert!%0A%0A*New Partnership Inquiry*%0A%0AName: ${encodeURIComponent(form.firstName + " " + form.lastName)}%0AEmail: ${encodeURIComponent(form.email)}%0AStore: ${encodeURIComponent(form.storeUrl || "N/A")}%0AService: ${encodeURIComponent(form.service)}%0ABudget: ${encodeURIComponent(form.budget)}%0AChallenge: ${encodeURIComponent(form.challenge || "N/A")}`;
    window.open(`https://wa.me/2347042336338?text=${message}`, "_blank");
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", storeUrl: "", service: "", budget: "", challenge: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setReviewForm({ name: "", business: "", rating: 5, review: "" });
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Let's Talk</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Ready to <span className="text-gradient">Accelerate Growth?</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Partner with an expert team that understands the full e-commerce ecosystem. Let's map out your revenue growth plan.
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
                Whether you're launching a new store or scaling an existing one, we'll help you identify opportunities and build a comprehensive growth strategy.
              </p>

              <a href="mailto:bashberryexpert@gmail.com" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email us</p>
                  <p className="text-sm font-semibold text-foreground">bashberryexpert@gmail.com</p>
                </div>
              </a>

              <div className="mb-6 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Initial Consultation", desc: "Discuss your brand's goals and current challenges." },
                    { num: "2", title: "Growth Roadmap", desc: "We design a custom strategy tailored to your needs." },
                    { num: "3", title: "Execute & Scale", desc: "Implementation with continuous optimization and reporting." },
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

              <button onClick={() => setShowReview(!showReview)} className="flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40">
                <MessageSquare className="h-4 w-4 text-primary" /> Leave a Review
              </button>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 text-lg font-semibold text-foreground">Apply for Partnership</h3>
                {submitted && (
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 text-sm text-primary font-medium">
                    Redirecting to WhatsApp — we'll respond within 24 hours!
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
                </div>
              </form>
            </motion.div>
          </div>

          {/* Review Form */}
          {showReview && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-16 max-w-lg">
              <form onSubmit={handleReviewSubmit} className="rounded-xl border border-primary/30 bg-card p-8 shadow-glow">
                <h3 className="mb-6 text-lg font-semibold text-foreground flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Leave a Review
                </h3>
                {reviewSubmitted && (
                  <div className="mb-4 rounded-lg bg-primary/10 p-3 text-sm text-primary font-medium">Thank you for your review!</div>
                )}
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" required value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })} className={inputCn} />
                  <input type="text" placeholder="Business Name" value={reviewForm.business} onChange={(e) => setReviewForm({ ...reviewForm, business: e.target.value })} className={inputCn} />
                  <div>
                    <label className="mb-2 block text-sm text-muted-foreground">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button key={n} type="button" onClick={() => setReviewForm({ ...reviewForm, rating: n })} className="transition-transform hover:scale-110">
                          <Star className={`h-6 w-6 ${n <= reviewForm.rating ? "fill-primary text-primary" : "text-muted"}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea placeholder="Share your experience..." rows={4} required value={reviewForm.review} onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })} className={inputCn} />
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
