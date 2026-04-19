import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollToCollection = () => {
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBanner}
        alt="Luxury watches collection"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.4em] text-primary mb-6 animate-fade-in-up font-body">
          Premium Timepieces at Unmatched Prices
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up gold-text">
          AURIX STORES
        </h1>
        <p className="font-display text-xl md:text-2xl italic text-primary/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Luxury Simplified
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up font-body" style={{ animationDelay: "0.2s" }}>
          Discover luxury watches from the world's finest brands — Rolex, Hublot, Tissot, and more — at unmatched prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={scrollToCollection}
            className="px-8 py-4 gold-gradient text-primary-foreground font-semibold text-sm tracking-widest uppercase rounded"
          >
            View Collection
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border border-primary/40 text-primary font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
