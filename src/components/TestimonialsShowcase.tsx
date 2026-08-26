import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { Star, Users, Briefcase, ThumbsUp, ExternalLink, PenLine } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const GOOGLE_REVIEW_URL = "https://g.page/r/CfF-CKSdk5FeEAE/review";

export type Testimonial = { quote: string; name: string; role: string; rating?: number };

const stats = [
  { icon: Users, value: "120+", label: "Happy Clients" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Briefcase, value: "15+", label: "Industries Served" },
  { icon: ThumbsUp, value: "98%", label: "Would Recommend" },
];

const ReviewModal = ({ onSubmit }: { onSubmit: (t: Testimonial) => void }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return toast.error("Please enter your name.");
    if (message.trim().length < 10) return toast.error("Please write at least 10 characters.");
    onSubmit({ quote: message.trim(), name: name.trim(), role: brand.trim() || "Verified Client", rating });
    toast.success("Thanks! Your review is now live in the slider.");
    setName(""); setBrand(""); setMessage(""); setRating(5);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
          <PenLine className="h-4 w-4" /> Write a Review
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>Share your experience working with Bash Berry Xpert.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rv-name">Name</Label>
            <Input id="rv-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rv-brand">Brand / Company</Label>
            <Input id="rv-brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Your brand" />
          </div>
          <div className="space-y-2">
            <span className="text-sm font-medium text-foreground">Rating</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                  className="transition-transform hover:scale-110"
                >
                  <Star className={`h-6 w-6 ${n <= rating ? "fill-primary text-primary" : "text-muted"}`} />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rv-msg">Review</Label>
            <Textarea id="rv-msg" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What did we help you achieve?" />
          </div>
          <button type="submit" className="w-full rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon">
            Submit Review
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const TestimonialsShowcase = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [items, setItems] = useState<Testimonial[]>(testimonials);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % items.length), 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const t = items[current];
  const rating = t?.rating ?? 5;

  return (
    <section className="bg-background py-24" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
        <h2 id="testimonials-heading" className="mb-4 text-center text-3xl font-bold text-foreground md:text-5xl">
          Trusted by <span className="text-gradient">Industry Leaders</span>
        </h2>
        <p className="mb-6 text-center text-muted-foreground">Tap any client below to read their full story.</p>

        <div className="mb-14 flex justify-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40"
          >
            Trusted on Google
            <span className="flex gap-0.5" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-6 rounded-2xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-extrabold text-primary md:text-3xl">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div key={current} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-xl border border-border bg-card p-10">
            <div className="mb-6 flex justify-center gap-1" aria-label={`${rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="mb-8 text-lg italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">{t.name[0]}</div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === current}
                className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-muted"}`}
              />
            ))}
          </div>

          <div className="mt-10">
            <ReviewModal
              onSubmit={(review) => {
                setItems((prev) => [review, ...prev]);
                setCurrent(0);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShowcase;
