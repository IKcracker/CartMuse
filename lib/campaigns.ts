/** User-supplied SHEIN affiliate campaign shares; promotions are NOT independently verified. */
export type SheinCampaign = {
  id: "favorites" | "women-sale";
  code: string;
  url: string;
  eyebrow: string;
  title: string;
  accentTitle: string;
  summary: string;
  advertisedOffer: string;
  disclaimer: string;
  cta: string;
  page: string;
};

export const sheinCampaigns: readonly SheinCampaign[] = [
  {
    id: "favorites",
    code: "S2AXVG7",
    url: process.env.NEXT_PUBLIC_SHEIN_AFFILIATE_URL?.trim() || "https://onelink.shein.com/57/65dw0jfxw8iz",
    eyebrow: "CURATED SHEIN INVITATION",
    title: "My SHEIN picks.",
    accentTitle: "Your next find.",
    summary: "Explore the shared SHEIN favorites collection. Enter this code in the SHEIN app search box, or use the invitation link below.",
    advertisedOffer: "Advertised: 60% new-user coupon",
    disclaimer: "The invitation mentions a 60% new-user coupon. This offer is not independently verified and may have eligibility requirements, exclusions or an expiry.",
    cta: "Browse my SHEIN picks",
    page: "/shein-code",
  },
  {
    id: "women-sale",
    code: "UQXQNT3",
    url: process.env.NEXT_PUBLIC_SHEIN_WOMENS_SALE_URL?.trim() || "https://onelink.shein.com/57/65dxq18p51jv",
    eyebrow: "WOMEN'S CLOTHING SALE",
    title: "Women's clothing.",
    accentTitle: "Sale edit.",
    summary: "Discover the shared women's clothing sale campaign. Search this code inside the SHEIN app, or follow the link below to see which offers are available.",
    advertisedOffer: "Advertised: up to 80% off",
    disclaimer: "The campaign advertises up to 80% off, not 80% off every item. Availability, eligible items, terms and actual savings must be checked on SHEIN.",
    cta: "Explore women's sale",
    page: "/shein-sale",
  },
];

export function getSheinCampaign(id: SheinCampaign["id"]) {
  const campaign = sheinCampaigns.find((entry) => entry.id === id);
  if (!campaign) throw new Error("Unknown SHEIN campaign");
  return campaign;
}
