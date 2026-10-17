import type { Metadata } from "next";

export const metadata: Metadata = { title: "Affiliate disclosure" };

export default function DisclosurePage() {
  return <div className="legal-page container">
    <span className="eyebrow">TRANSPARENCY MATTERS</span>
    <h1>Affiliate disclosure</h1>
    <p>CartMuse is an independent editorial fashion discovery and shopping guidance website. We are not SHEIN, and this website is not operated or endorsed by SHEIN.</p>
    <h2>Our SHEIN sharing link and search code</h2>
    <p>CartMuse shares a SHEIN invitation link and the search code S2AXVG7, provided by the operator of this website through a SHEIN affiliate account. The code is intended for the SHEIN app search box, not the checkout coupon field. CartMuse may earn an affiliate commission or referral reward when a qualifying customer action is properly tracked. Tracking, qualification and payment depend on SHEIN program rules; we cannot guarantee commissions or savings.</p>
    <h2>Promotional claims</h2>
    <p>The shared SHEIN invitation advertises a 60% new-user coupon. CartMuse has not independently verified whether this promotion is currently available to any particular visitor. Minimum-spend requirements, eligibility, exclusions, expiry and actual checkout prices are determined by SHEIN and may change.</p>
    <h2>Editorial content</h2>
    <p>Fashion photos are editorial inspiration, not exact products for sale or images of verified SHEIN inventory. Illustrative budget amounts are shopping targets rather than live product prices.</p>
    <h2>Shopping safely</h2>
    <p>Confirm all promotions, eligibility, item details, shipping charges, and the final payable amount directly with SHEIN before making a purchase.</p>
  </div>;
}
