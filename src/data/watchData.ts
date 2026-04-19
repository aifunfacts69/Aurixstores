export interface Watch {
  id: string;
  brand: string;
  model: string;
  originalPrice: number;
  image: string;
  description: string;
}

// Prices shown are 20% of original retail prices
const createWatch = (brand: string, model: string, originalPrice: number, description: string, image: string): Watch => ({
  id: `${brand.toLowerCase().replace(/\s/g, '-')}-${model.toLowerCase().replace(/\s/g, '-')}`,
  brand,
  model,
  originalPrice,
  image,
  description,
});

export const watches: Watch[] = [
  // Casio
  createWatch("Casio", "Edifice EFR-S108D", 12000, "Slim chronograph with sapphire crystal, stainless steel case", "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80"),
  createWatch("Casio", "Oceanus OCW-T200S", 35000, "Titanium solar radio-controlled, world time", "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80"),
  createWatch("Casio", "Pro Trek PRW-6900Y", 28000, "Triple sensor, solar powered, outdoor adventure", "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80"),
  createWatch("Casio", "Edifice EQB-2000DB", 25000, "Bluetooth connected, solar powered, sapphire crystal, race lap chronograph", "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&q=80"),
  createWatch("Casio", "Vintage A168WA", 3500, "Classic digital retro design, electroluminescent backlight, stainless steel", "https://images.unsplash.com/photo-1509941943102-10c232535736?w=400&q=80"),
  createWatch("Casio", "Edifice EFS-S590D", 18000, "Solar chronograph, carbon fiber dial, 100m water resistant", "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&q=80"),

  // Tommy Hilfiger
  createWatch("Tommy Hilfiger", "Decker Multi-function", 15000, "Sporty multifunction dial with silicone strap", "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&q=80"),
  createWatch("Tommy Hilfiger", "Luke Chronograph", 18000, "Classic chronograph, leather strap, blue dial", "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80"),
  createWatch("Tommy Hilfiger", "Kyle Automatic", 22000, "Open-heart automatic movement, exhibition caseback", "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&q=80"),
  createWatch("Tommy Hilfiger", "Hendrix Multi-eye", 16500, "Three sub-dials, mesh bracelet, sunray blue dial", "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=400&q=80"),
  createWatch("Tommy Hilfiger", "Maverick Sport", 14000, "Bold 46mm case, silicone strap, tachymeter bezel", "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&q=80"),
  createWatch("Tommy Hilfiger", "Harley Dual Time", 19500, "Dual time zone, gunmetal case, brown leather strap", "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=400&q=80"),

  // Hublot
  createWatch("Hublot", "Big Bang Unico", 1500000, "In-house UNICO chronograph, 42mm titanium case", "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?w=400&q=80"),
  createWatch("Hublot", "Classic Fusion", 850000, "Ultra-thin titanium, 45mm, satin-finish bezel", "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80"),
  createWatch("Hublot", "Spirit of Big Bang", 2200000, "Tonneau-shaped case, skeleton dial, ceramic bezel", "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&q=80"),
  createWatch("Hublot", "Big Bang Integral", 1800000, "Integrated bracelet, King Gold, 42mm, flyback chronograph", "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=400&q=80"),
  createWatch("Hublot", "Classic Fusion Aerofusion", 1200000, "Skeleton chronograph, ceramic case, 45mm, HUB1155 movement", "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=400&q=80"),
  createWatch("Hublot", "Big Bang Sang Bleu", 2500000, "Maxime Büchi design, geometric indices, 3D case architecture", "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=400&q=80"),

  // Diesel
  createWatch("Diesel", "Mega Chief DZ4318", 14000, "Oversized 51mm case, bold chronograph, leather strap", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"),
  createWatch("Diesel", "Mr. Daddy 2.0 DZ7333", 22000, "Quad time zone, 57mm statement piece", "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&q=80"),
  createWatch("Diesel", "Griffed DZ4577", 16000, "Chronograph with textured dial and silicone strap", "https://images.unsplash.com/photo-1595520407624-66b24f2a4050?w=400&q=80"),
  createWatch("Diesel", "Timeframe DZ4546", 18500, "Three-hand date, blue sunray dial, stainless steel bracelet", "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80"),
  createWatch("Diesel", "Crusher DZ1985", 11000, "Lightweight nylon strap, 46mm case, bold minimalist dial", "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80"),
  createWatch("Diesel", "Spiked DZ1979", 13500, "Textured crown, gunmetal case, exposed lugs, leather strap", "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80"),

  // Tissot
  createWatch("Tissot", "PRX Powermatic 80", 45000, "Integrated bracelet, 80hr power reserve, Swiss auto", "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&q=80"),
  createWatch("Tissot", "Seastar 1000", 52000, "300m dive watch, ceramic bezel, Swiss automatic", "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80"),
  createWatch("Tissot", "Gentleman Powermatic 80", 48000, "Silicium balance spring, 80hr reserve, dressy sport", "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&q=80"),
  createWatch("Tissot", "Le Locle Automatique", 42000, "Swiss Jura-inspired design, transparent caseback, roman numerals", "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=400&q=80"),
  createWatch("Tissot", "T-Race Chronograph", 55000, "Motorcycle-inspired design, quartz chronograph, 45mm sporty case", "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&q=80"),
  createWatch("Tissot", "Chemin des Tourelles", 65000, "COSC certified chronometer, 42mm, exhibition caseback, Swiss auto", "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=400&q=80"),

  // G-Shock
  createWatch("G-Shock", "GA-2100 CasiOak", 10000, "Carbon core guard, octagonal bezel, ultra slim", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"),
  createWatch("G-Shock", "GW-B5600 Solar", 15000, "Bluetooth, solar, multiband 6, classic square", "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&q=80"),
  createWatch("G-Shock", "GM-B2100D Full Metal", 42000, "Full stainless steel CasiOak, tough solar, Bluetooth", "https://images.unsplash.com/photo-1595520407624-66b24f2a4050?w=400&q=80"),
  createWatch("G-Shock", "GBD-H2000 HR Monitor", 35000, "Heart rate sensor, GPS, Bluetooth, solar charging, fitness tracking", "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80"),
  createWatch("G-Shock", "DW-5600E Classic", 6500, "The original square G-Shock, 200m water resistant, EL backlight", "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80"),
  createWatch("G-Shock", "GA-B001 Skeleton", 14000, "Translucent bezel and band, Bluetooth, step tracker, world time", "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80"),

  // Rolex
  createWatch("Rolex", "Submariner Date", 4500000, "Iconic diver, ceramic bezel, Oystersteel, 41mm", "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?w=400&q=80"),
  createWatch("Rolex", "Daytona", 7500000, "Legendary chronograph, tachymetric bezel, Oystersteel", "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80"),
  createWatch("Rolex", "Datejust 41", 3800000, "Fluted bezel, Jubilee bracelet, date cyclops", "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&q=80"),
  createWatch("Rolex", "GMT-Master II", 5200000, "Dual time zone, Cerachrom bicolor bezel, Oystersteel, 40mm", "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=400&q=80"),
  createWatch("Rolex", "Explorer II", 4100000, "24-hour bezel, orange hand, Oystersteel, 42mm, dual time zone", "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=400&q=80"),
  createWatch("Rolex", "Oyster Perpetual 36", 3200000, "Clean dial, no date, Oystersteel, 36mm, self-winding calibre 3230", "https://images.unsplash.com/photo-1619134778706-7015533a6150?w=400&q=80"),
];

export const brands = [...new Set(watches.map(w => w.brand))];

export const getWatchesByBrand = (brand: string) => watches.filter(w => w.brand === brand);

export const getDiscountedPrice = (originalPrice: number) => Math.round(originalPrice * 0.2);

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
