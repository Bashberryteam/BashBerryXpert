import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
                B
              </div>
              <span className="text-lg font-semibold text-foreground">
                Bash Berry <span className="text-primary">Xpert</span>
              </span>
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-stack e-commerce growth agency specializing in Shopify, Google & Meta Ecosystems, and data-driven revenue scaling.
            </p>
            <a
              href="mailto:bashberryexpert@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              bashberryexpert@gmail.com
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Pages</h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Pricing", path: "/pricing" },
                { label: "Experience", path: "/experience" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <div className="space-y-3">
              {["Web Development", "SEO", "SEM", "Social Media Marketing", "Web Designing", "Reputation Management"].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s} <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bash Berry Xpert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
