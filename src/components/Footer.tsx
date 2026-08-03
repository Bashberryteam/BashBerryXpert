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
    url: "mailto:bashberryexpert@gmail.com",
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

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 Bash Berry Xpert. Verified Multi-Platform Systems Partner.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-neon"
          >
            Let's Scale Your Brand
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
