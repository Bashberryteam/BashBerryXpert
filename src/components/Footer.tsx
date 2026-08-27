import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/447451250630";

const socialLinks = [
  {
    label: "WhatsApp",
    url: WHATSAPP,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@bashberryx",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.2v-3.46a4.85 4.85 0 01-3.77-1.48V6.69h3.77z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/bashberryx/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    url: "https://www.threads.net/@bashberryx",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M17.06 11.14c-.11-.05-.22-.1-.34-.15-.2-3.7-2.22-5.81-5.61-5.83h-.05c-2.03 0-3.71.86-4.75 2.44l1.86 1.28c.78-1.18 2-1.43 2.89-1.43h.03c1.11.01 1.94.33 2.48.96.39.46.65 1.09.78 1.89-.98-.17-2.03-.22-3.16-.15-3.18.18-5.22 2.04-5.08 4.61.07 1.31.72 2.43 1.84 3.16 1.03.67 2.35.99 3.72.92 1.81-.1 3.23-.79 4.22-2.05.75-.96 1.23-2.2 1.44-3.77.87.52 1.51 1.21 1.87 2.04.61 1.41.64 3.73-1.25 5.62-1.66 1.66-3.65 2.37-6.66 2.4-3.34-.03-5.87-1.1-7.51-3.19C4.24 17.93 3.45 15.24 3.42 12c.03-3.24.82-5.93 2.36-7.89C7.42 2.02 9.95.95 13.29.92c3.36.03 5.94 1.1 7.66 3.2.85 1.03 1.49 2.32 1.91 3.83l2.18-.58c-.51-1.85-1.31-3.45-2.4-4.77C20.44 1.03 17.27-.32 13.3-.34h-.02C9.32-.32 6.19 1.04 4.02 3.71 2.08 6.09 1.08 9.4 1.05 12v.01c.03 2.6 1.03 5.91 2.97 8.29 2.17 2.67 5.3 4.03 9.26 4.05h.02c3.53-.02 6.02-.95 8.07-3 2.68-2.68 2.6-6.04 1.72-8.1-.64-1.48-1.85-2.68-3.5-3.47zm-5.71 5.53c-1.51.09-3.09-.6-3.17-2.02-.06-1.06.75-2.24 3.26-2.38.29-.02.57-.03.85-.03.91 0 1.76.09 2.53.26-.29 3.58-1.97 4.11-3.47 4.17z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61592868893481",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Email",
    url: "mailto:info@bashberryxpert.com",
    icon: <Mail className="h-5 w-5" />,
  },
];


const growthStrategies = [
  "Store Design & CRO",
  "Google Ecosystem Engine",
  "Meta Social Ecosystem",
  "Retention & Email Funnels",
  "Multi-Channel Sync",
];

const supportedPlatforms = [
  "Shopify Expert",
  "Wix Partner",
  "WordPress / WooCommerce",
  "Squarespace Circle",
  "Square Online",
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">B</div>
              <span className="text-lg font-semibold text-foreground">Bash Berry <span className="text-primary">Xpert</span></span>
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Multi-platform e-commerce growth partner — Shopify, Wix, WordPress, WooCommerce, Squarespace and Square Online — engineering revenue systems for global brands.
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>Global — Remote worldwide. Serving brands across every timezone.</span>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  {...(social.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Growth Strategies</h3>
            <div className="space-y-3">
              {growthStrategies.map((s) => (
                <Link key={s} to="/services" className="block text-sm text-muted-foreground transition-colors hover:text-foreground">{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Supported Platforms</h3>
            <div className="space-y-3">
              {supportedPlatforms.map((s) => (
                <Link key={s} to="/services" className="block text-sm text-muted-foreground transition-colors hover:text-foreground">{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Direct Contact</h3>
            <div className="space-y-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4 shrink-0 text-primary" /> UK Line: +44 7451 250630
              </a>
              <a href="mailto:info@bashberryxpert.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4 shrink-0 text-primary" /> info@bashberryxpert.com
              </a>
              <a href="mailto:bashberryexpert@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4 shrink-0 text-primary" /> bashberryexpert@gmail.com
              </a>
            </div>

            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <div className="space-y-3">
              {[
                { label: "Results & Case Studies", path: "/portfolio" },
                { label: "Pricing", path: "/pricing" },
                { label: "Experience", path: "/experience" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 grid gap-6 border-t border-border pt-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">Newsletter</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Growth playbooks, Shopify teardowns, and AI commercial drops — straight to your inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 Bash Berry Xpert. Verified Multi-Platform Systems Partner.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon"
          >
            Let's Scale Your Brand
          </Link>
        </div>

        {/* Large branding */}
        <div className="mt-12 text-center">
          <p className="bg-gradient-primary bg-clip-text text-4xl font-extrabold uppercase tracking-tight text-transparent sm:text-6xl lg:text-8xl">
            Bash Berry Xpert
          </p>
          <p className="mt-4 text-sm text-muted-foreground">© 2026 Bash Berry Xpert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
