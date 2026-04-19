import { Phone, MessageCircle } from "lucide-react";
import { Watch, getDiscountedPrice, formatPrice } from "@/data/watchData";

interface WatchCardProps {
  watch: Watch;
}

const WatchCard = ({ watch }: WatchCardProps) => {
  const discountedPrice = getDiscountedPrice(watch.originalPrice);

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden card-hover">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-2 sm:p-5 space-y-1 sm:space-y-3">
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-body">{watch.brand}</p>
        <h3 className="font-display text-xs sm:text-lg font-semibold text-foreground leading-tight">{watch.model}</h3>
        <p className="text-[10px] sm:text-sm text-muted-foreground font-body leading-relaxed hidden sm:block">{watch.description}</p>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3">
          <span className="text-sm sm:text-xl font-bold text-primary font-body">{formatPrice(discountedPrice)}</span>
          <span className="text-[10px] sm:text-sm text-muted-foreground line-through font-body">{formatPrice(watch.originalPrice)}</span>
          <span className="text-[9px] sm:text-xs font-semibold text-primary font-body">80% OFF</span>
        </div>

        <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-3">
          <a
            href="tel:9440376264"
            className="flex items-center justify-center gap-1 sm:gap-2 flex-1 px-2 sm:px-4 py-1.5 sm:py-3 gold-gradient text-primary-foreground font-semibold text-[10px] sm:text-sm tracking-wider rounded transition-all hover:opacity-90"
          >
            <Phone size={12} className="sm:w-4 sm:h-4" />
            Call
          </a>
          <a
            href={`https://wa.me/919440376264?text=${encodeURIComponent(`Hi, I'm interested in the ${watch.brand} ${watch.model} priced at ${formatPrice(discountedPrice)}. Is it available?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 sm:gap-2 flex-1 px-2 sm:px-4 py-1.5 sm:py-3 bg-secondary border border-primary/30 text-primary font-semibold text-[10px] sm:text-sm tracking-wider rounded transition-all hover:bg-primary/10"
          >
            <MessageCircle size={12} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span><span className="sm:hidden">WA</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
