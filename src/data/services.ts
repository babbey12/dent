export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const SERVICES: Service[] = [
  {
    slug: "invisible-aligner",
    name: "Invisible Aligner",
    short: "Discreet, custom-fit clear aligners that straighten teeth without metal.",
    image: img("photo-1629909615184-74f495363b67"),
  },
  {
    slug: "orthodontics-braces",
    name: "Orthodontics (Braces)",
    short: "Modern braces by certified orthodontists for healthy, aligned smiles.",
    image: img("photo-1629909613654-28e377c37b09"),
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "Permanent titanium implants that look, feel and function like real teeth.",
    image: img("photo-1609840114035-3c981b782dfe"),
  },
  {
    slug: "gum-disease-treatment",
    name: "Gum Disease Treatment",
    short: "Specialist periodontal care to stop and reverse gum disease.",
    image: img("photo-1571772996211-2f02c9727629"),
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    short: "Smile design, veneers and bonding crafted by cosmetic specialists.",
    image: img("photo-1598256989800-fe5f95da9787"),
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    short: "Advanced surgical procedures delivered safely and comfortably.",
    image: img("photo-1579684385127-1ef15d508118"),
  },
  {
    slug: "wisdom-teeth-removal",
    name: "Wisdom Teeth Removal",
    short: "Gentle wisdom-teeth extractions with full pain management.",
    image: img("photo-1607613009820-a29f7bb81c04"),
  },
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    short: "Routine check-ups, fillings and cleanings for the whole family.",
    image: img("photo-1584515933487-779824d29309"),
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Professional whitening for several shades brighter in one visit.",
    image: img("photo-1622253692010-333f2da6031d"),
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    short: "Friendly children's dentistry from the very first tooth.",
    image: img("photo-1622253692010-333f2da6031d"),
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    short: "Crowns, bridges and full-mouth restorations done right.",
    image: img("photo-1559305616-3f99cd43e353"),
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    short: "Same-day emergency appointments when you need us most.",
    image: img("photo-1609840114035-3c981b782dfe"),
  },
];
