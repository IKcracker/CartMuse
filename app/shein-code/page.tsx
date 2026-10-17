import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateInvite } from "@/components/affiliate-invite";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "SHEIN Search Code S2AXVG7 — Discover My Picks",
  description: "Enter S2AXVG7 in the SHEIN app search bar or open the shared invitation link to explore CartMuse's curated SHEIN picks. Check current terms on SHEIN.",
};

export default function SheinCodePage() {
  return <div className="shein-code-page">
    <section className="page-intro container">
      <span className="eyebrow">THE SHEIN INVITE / CARTMUSE</span>
      <div className="page-intro-row">
        <h1>Your next find <em>starts here.</em></h1>
        <p>Explore a shared SHEIN favorites collection with one simple search code. No guessing where to enter it.</p>
      </div>
    </section>
    <div className="container affiliate-placement"><AffiliateInvite /></div>
    <section className="container invite-howto">
      <span className="eyebrow">HOW IT WORKS</span>
      <h2>Three simple steps.</h2>
      <div className="invite-steps">
        <article className="invite-step"><span>01</span><h3>Open SHEIN</h3><p>Use the official SHEIN app, or follow the invitation link provided above.</p></article>
        <article className="invite-step"><span>02</span><h3>Search S2AXVG7</h3><p>If using the app, paste <strong>S2AXVG7</strong> into SHEIN&apos;s search bar. Do not enter it into the checkout coupon field.</p></article>
        <article className="invite-step"><span>03</span><h3>Check the details</h3><p>Explore the shared picks and review your account&apos;s current offers, eligibility and checkout totals before purchasing.</p></article>
      </div>
    </section>
    <section className="container invite-faq">
      <h2>Before you shop, good to know.</h2>
      <details><summary>Is S2AXVG7 a checkout coupon?</summary><p>No. The supplied SHEIN invitation instructs visitors to type the code into the <strong>SHEIN app search box</strong>. It should not be presented as a discount code for checkout.</p></details>
      <details><summary>Does everyone receive a 60% discount?</summary><p>Not necessarily. The supplied invitation advertises a 60% new-user coupon, but CartMuse cannot independently confirm its current availability or eligibility. SHEIN determines which visitors qualify and what offer appears at checkout.</p></details>
      <details><summary>Does CartMuse earn from this link?</summary><p>CartMuse may receive affiliate commission or a referral reward for qualifying activity that SHEIN successfully attributes to the account. This is not guaranteed. <Link href="/disclosure" style={{textDecoration:"underline"}}>Read the affiliate disclosure</Link>.</p></details>
      <details><summary>Can I still browse outfit ideas here?</summary><p>Absolutely. <Link href="/discover" style={{textDecoration:"underline"}}>Browse the CartMuse editorial edits</Link> for style inspiration. These are not live SHEIN catalog items.</p></details>
      <p style={{marginTop:"25px"}}><Link href="/deals" className="text-link">Explore the shopping guide <Icon name="arrow-right" size={17}/></Link></p>
    </section>
  </div>;
}
