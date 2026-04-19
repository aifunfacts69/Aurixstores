import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold gold-text mb-3">AURIX STORES</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Premium luxury watches at unbeatable prices. Authenticity guaranteed.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:9440376264" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Phone size={14} /> +91 9440376264
              </a>
              <a href="mailto:aurixstores@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Mail size={14} /> aurixstores@gmail.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/aurix.stores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <Instagram size={18} /> @aurix.stores
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Aurix Stores. All rights reserved.
          </p>
        </div>
      </div>

      {/* Highlighted bottom banner */}
      <div className="highlight-banner py-4 text-center">
        <p className="text-sm md:text-base uppercase tracking-widest">
          A Grade – C Grade (Factory Resetted Pieces)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
