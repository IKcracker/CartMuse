import type { Metadata } from "next";

export const metadata: Metadata = { title: "Affiliate disclosure" };

export default function DisclosurePage() {
  return <div className="legal-page container">
    <span className="eyebrow">TRANSPARENCY MATTERS</span>
    <h1>Affiliate disclosure</h1>
    <p>CartMuse is an independent editorial fashion discovery and shopping guidance website. We are not SHEIN, and this website is not operated or endorsed by SHEIN.</p>
    <h2>Our SHEIN invitations and app search codes</h2>
    <p>We display two campaign shares provided through the CartMuse operator's SHEIN affiliate account. S2AXVG7 corresponds to an exclusive picks invitation; UQXQNT3 corresponds to a women's clothing sale invitation. Both are intended to be entered in the SHEIN app search bar, not at checkout. Qualifying activity through referral links or app campaigns may earn CartMuse a commission or referral reward, subject to SHEIN's attribution and program rules. We cannot guarantee commission or savings.</p>
    <h2>Promotional claims</h2>
    <p>The shared messages advertise a 60% coupon for new users and up to 80% off women's clothing, respectively. These messages are not evidence that an offer is currently available to a particular shopper. Up to 80% does not mean all products are 80% off. We have not independently verified campaign eligibility, exclusions, minimum spends, expiry or availability. SHEIN determines the final offer and checkout prices.</p>
    <h2>Editorial content</h2>
    <p>Fashion photos are editorial inspiration, not exact products for sale or images of verified SHEIN inventory. Illustrative budget amounts are shopping targets rather than live product prices.</p>
    <h2>Shopping safely</h2>
    <p>Confirm all promotions, eligibility, item details, shipping charges and the final payable amount directly with SHEIN before making a purchase.</p>
  </div>;
}
