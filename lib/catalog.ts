export const SHOP_URL =
  process.env.NEXT_PUBLIC_SHEIN_AFFILIATE_URL?.trim() || "https://www.shein.com/";

export const categories = ["All", "Dresses", "Streetwear", "Accessories", "Beauty", "Footwear", "Workwear"] as const;
export type Category = (typeof categories)[number];

export type Look = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  image: string;
  tag: string;
  budget: number;
  description: string;
  tone: string;
};

export const looks: Look[] = [
  {
    id: "soft-summer",
    name: "The soft summer edit",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1100&q=85",
    tag: "TRENDING",
    budget: 300,
    description: "Easy silhouettes, romantic details and warm-weather inspiration.",
    tone: "#efd8d8",
  },
  {
    id: "off-duty",
    name: "Off-duty essentials",
    category: "Streetwear",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85",
    tag: "EDITOR'S PICK",
    budget: 450,
    description: "Relaxed layers and statement pieces for the everyday rotation.",
    tone: "#dfd7cc",
  },
  {
    id: "everyday-bag",
    name: "The everyday bag",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1100&q=85",
    tag: "BUDGET FIND",
    budget: 250,
    description: "Understated accessories that pull an outfit together.",
    tone: "#e5d5c7",
  },
  {
    id: "glow-up",
    name: "The glow-up shelf",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=85",
    tag: "BEAUTY EDIT",
    budget: 200,
    description: "Beauty inspiration for your next feel-good routine.",
    tone: "#efdbdc",
  },
  {
    id: "weekend-shoes",
    name: "Walk this way",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1100&q=85",
    tag: "THE SHOE EDIT",
    budget: 350,
    description: "The pairs that make even simple outfits feel special.",
    tone: "#e8e0db",
  },
  {
    id: "office-hours",
    name: "Nine-to-five, reimagined",
    category: "Workwear",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85",
    tag: "FRESH EDIT",
    budget: 500,
    description: "Polished separates with a little personality.",
    tone: "#dedbd5",
  },
  {
    id: "after-dark",
    name: "After-dark dressing",
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=1100&q=85",
    tag: "GOING OUT",
    budget: 400,
    description: "A touch of drama for evenings worth dressing up for.",
    tone: "#f1dad4",
  },
  {
    id: "cool-girl",
    name: "Weekend uniform",
    category: "Streetwear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1100&q=85",
    tag: "MOST SAVED",
    budget: 350,
    description: "Effortless outfits with a confident twist.",
    tone: "#d8d6cf",
  },
];

export type ShoppingGuide = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  audience: "new" | "all";
  steps: string[];
  icon: "gift" | "tag" | "sparkles" | "calculator";
};

export const shoppingGuides: ShoppingGuide[] = [
  {
    id: "welcome",
    title: "New shopper perks",
    eyebrow: "START HERE",
    description: "Learn where to check the current welcome benefits offered to eligible first-time shoppers.",
    audience: "new",
    steps: [
      "Open SHEIN using the official app or website.",
      "Check the new-customer promotions visible to your account.",
      "Read minimum-spend, expiry, region and product exclusions before purchasing.",
    ],
    icon: "gift",
  },
  {
    id: "app",
    title: "In-app campaigns",
    eyebrow: "SHOP SMARTER",
    description: "Some referral campaigns use an in-app search code rather than a checkout promo code.",
    audience: "all",
    steps: [
      "Open the SHEIN app and find its current campaign instructions.",
      "Use only a valid, eligible campaign code from your own referral dashboard.",
      "Confirm what reward is offered and whether the action qualifies in South Africa.",
    ],
    icon: "sparkles",
  },
  {
    id: "coupon",
    title: "Coupon stacking basics",
    eyebrow: "THE SAVINGS GUIDE",
    description: "Know when a coupon helps, and when exclusions or delivery costs can erase the saving.",
    audience: "all",
    steps: [
      "Check whether the item is already reduced.",
      "Read coupon terms: threshold, category restrictions and combination rules.",
      "Compare the final checkout total, including delivery or other charges.",
    ],
    icon: "tag",
  },
  {
    id: "budget",
    title: "Your budget, sorted",
    eyebrow: "USE THE TOOL",
    description: "Plan your budget before you shop, and estimate possible savings without guesswork.",
    audience: "all",
    steps: [
      "Set your cart value and enter a real promotion you are eligible for.",
      "Compare a percentage discount or a fixed-amount reduction.",
      "Verify the real total at checkout. CartMuse estimates are not official prices.",
    ],
    icon: "calculator",
  },
];

export function formatRand(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}
