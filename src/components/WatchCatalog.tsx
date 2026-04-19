import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { brands, watches, getDiscountedPrice, formatPrice } from "@/data/watchData";
import WatchCard from "./WatchCard";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

const WatchCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [showFilters, setShowFilters] = useState(false);

  const maxPrice = useMemo(() => {
    return Math.max(...watches.map(w => getDiscountedPrice(w.originalPrice)));
  }, []);

  const filteredWatches = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return watches.filter(w => {
      const discounted = getDiscountedPrice(w.originalPrice);
      const matchesSearch =
        !query ||
        w.brand.toLowerCase().includes(query) ||
        w.model.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query);
      const matchesPrice = discounted >= priceRange[0] && discounted <= priceRange[1];
      return matchesSearch && matchesPrice;
    });
  }, [searchQuery, priceRange]);

  const filteredBrands = useMemo(() => {
    return brands.filter(brand => filteredWatches.some(w => w.brand === brand));
  }, [filteredWatches]);

  const hasActiveFilters = searchQuery || priceRange[0] > 0 || priceRange[1] < maxPrice;

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, maxPrice]);
  };

  return (
    <section id="collection" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">Our Collection</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Luxury Timepieces</h2>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          <div className="relative flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search by brand, model, or keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border font-body"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 border rounded flex items-center gap-2 text-sm font-body transition-colors ${
                showFilters ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="p-4 bg-card border border-border rounded-lg space-y-3 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <p className="text-sm font-body text-foreground font-medium">Price Range</p>
                <p className="text-sm font-body text-primary">
                  {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
                </p>
              </div>
              <Slider
                min={0}
                max={maxPrice}
                step={500}
                value={priceRange}
                onValueChange={(v) => setPriceRange(v as [number, number])}
              />
            </div>
          )}

          {hasActiveFilters && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground font-body">
                {filteredWatches.length} watch{filteredWatches.length !== 1 ? "es" : ""} found
              </p>
              <button onClick={clearFilters} className="text-sm text-primary hover:underline font-body flex items-center gap-1">
                <X size={14} /> Clear filters
              </button>
            </div>
          )}
        </div>

        {filteredBrands.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body text-lg">No watches match your search.</p>
            <button onClick={clearFilters} className="mt-4 text-primary hover:underline font-body">Clear filters</button>
          </div>
        ) : (
          filteredBrands.map(brand => {
            const brandWatches = filteredWatches.filter(w => w.brand === brand);
            return (
              <div key={brand} id={`brand-${brand.toLowerCase().replace(/\s/g, '-')}`} className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display text-3xl font-bold gold-text">{brand}</h3>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground font-body">{brandWatches.length} models</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  {brandWatches.map(watch => (
                    <WatchCard key={watch.id} watch={watch} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default WatchCatalog;
