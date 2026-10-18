import type { Metadata } from "next";
import { CampaignShowcase } from "@/components/affiliate-invite";

export const metadata: Metadata = {
  title: "SHEIN Offers & App Search Codes — CartMuse",
  description: "Explore CartMuse's shared SHEIN affiliate campaigns: the favorites invitation S2AXVG7 and the women's clothing sale UQXQNT3. Check live offers on SHEIN.",
};

export default function SheinOffersPage() {
  return <div className="shein-offers-page">
    <section className="page-intro container">
      <span className="eyebrow">THE CARTMUSE SHEIN CAMPAIGN EDIT</span>
      <div className="page-intro-row">
        <h1>Two codes. <em>One place to explore.</em></h1>
        <p>Find the right invitation for your shopping plans. Each code goes in the SHEIN app search bar; check current offers before checkout.</p>
      </div>
    </section>
    <div className="container affiliate-placement"><CampaignShowcase showHeader={false}/></div>
    <section className="container invite-faq">
      <h2>A note on advertised savings.</h2>
      <p>The displayed percentages come from the original campaign sharing messages. They are not independently verified, may expire or exclude products, and are not guaranteed for every shopper. This website is independent from SHEIN.</p>
    </section>
  </div>;
}
