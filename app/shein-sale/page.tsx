import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateInvite } from "@/components/affiliate-invite";
import { Icon } from "@/components/icon";
import { getSheinCampaign } from "@/lib/campaigns";

export const metadata: Metadata = {
  title: "SHEIN Women's Clothing Sale — Search UQXQNT3",
  description: "Explore the shared SHEIN women's clothing sale invitation. Search UQXQNT3 in the SHEIN app or follow the campaign link. Discounts are subject to SHEIN terms.",
};

export default function SheinSalePage() {
  return <div className="shein-code-page">
    <section className="page-intro container">
      <span className="eyebrow">THE SHEIN WOMEN&apos;S CLOTHING EDIT</span>
      <div className="page-intro-row">
        <h1>New-season finds. <em>Better shopping decisions.</em></h1>
        <p>The shared campaign advertises up to 80% off selected women&apos;s clothing. Check qualifying styles, dates and actual prices on SHEIN.</p>
      </div>
    </section>
    <div className="container affiliate-placement"><AffiliateInvite campaign={getSheinCampaign("women-sale")}/></div>
    <section className="container invite-howto">
      <span className="eyebrow">USE YOUR CODE</span>
      <h2>How to explore the sale.</h2>
      <div className="invite-steps">
        <article className="invite-step"><span>01</span><h3>Open the SHEIN app</h3><p>Use the official app, or follow the campaign invitation link.</p></article>
        <article className="invite-step"><span>02</span><h3>Enter UQXQNT3</h3><p>Search for <strong>UQXQNT3</strong> in the SHEIN app search bar, not the checkout coupon field.</p></article>
        <article className="invite-step"><span>03</span><h3>Confirm the price</h3><p>“Up to” describes a maximum advertised reduction, not a universal discount. Check each item&apos;s price and checkout terms.</p></article>
      </div>
    </section>
    <section className="container invite-faq">
      <h2>Good to know before you shop.</h2>
      <details><summary>Will every item be 80% off?</summary><p>No. “Up to 80%” is the campaign&apos;s advertised maximum; individual items may have smaller discounts or no discount, subject to the live SHEIN offer.</p></details>
      <details><summary>Is UQXQNT3 a checkout coupon?</summary><p>No. The shared campaign instructs shoppers to enter the code in the SHEIN app&apos;s search box.</p></details>
      <details><summary>Does using this link support CartMuse?</summary><p>Qualifying referrals may generate commission or referral rewards under SHEIN&apos;s applicable terms. <Link href="/disclosure" style={{textDecoration:"underline"}}>Read our affiliate disclosure</Link>.</p></details>
      <p style={{marginTop:"24px"}}><Link href="/shein-offers" className="text-link">View both SHEIN campaigns <Icon name="arrow-right" size={17}/></Link></p>
    </section>
  </div>;
}
