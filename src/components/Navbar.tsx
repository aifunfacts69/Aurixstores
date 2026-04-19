import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToCollection = () => {
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-display text-2xl font-bold gold-text tracking-wider">
          AURIX STORES
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={scrollToCollection}
            className="text-sm font-body text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
          >
            Collection
          </button>
          <button
            onClick={scrollToContact}
            className="ml-4 px-5 py-2 gold-gradient text-primary-foreground font-semibold text-sm rounded tracking-wider"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <button
            onClick={scrollToCollection}
            className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide py-1"
          >
            Collection
          </button>
          <button
            onClick={scrollToContact}
            className="block w-full text-left text-sm text-primary font-semibold uppercase tracking-wide py-1"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
