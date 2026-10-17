"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { SHEIN_SEARCH_CODE, SHEIN_SHARE_URL } from "@/lib/catalog";

export function AffiliateInvite({ compact = false }: { compact?: boolean }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "unavailable">("idle");

  async function copyCode() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(SHEIN_SEARCH_CODE);
      setCopyState("copied");
    } catch {
      setCopyState("unavailable");
    }
  }

  return (
    <section className={"affiliate-invite" + (compact ? " affiliate-invite-compact" : "")} aria-label="CartMuse SHEIN affiliate invitation">
      <div className="affiliate-invite-copy">
        <span className="eyebrow"><Icon name="sparkles" size={16}/> A CURATED SHEIN INVITATION</span>
        <h2>My SHEIN picks.<br/><em>Your next find.</em></h2>
        <p>Want to browse the favorites behind this invitation? Open SHEIN through the link or enter the code in the <strong>SHEIN app search bar</strong>. This is an app search code, not a checkout coupon.</p>
      </div>
      <div className="affiliate-invite-action">
        <span className="invite-code-label">SHEIN APP SEARCH CODE</span>
        <div className="invite-code-row">
          <code aria-label={"SHEIN app search code " + SHEIN_SEARCH_CODE}>{SHEIN_SEARCH_CODE}</code>
          <button type="button" className="invite-copy-button" onClick={copyCode} aria-label="Copy SHEIN search code">
            <Icon name={copyState === "copied" ? "check" : "copy"} size={16}/>
            {copyState === "copied" ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="invite-copy-note" role="status" aria-live="polite">
          {copyState === "copied" ? "Paste the code into SHEIN's app search box." : copyState === "unavailable" ? "Copy unavailable here. Select the code above to copy it." : "Search inside the SHEIN app to explore the invitation."}
        </p>
        <a className="button button-dark invite-action-link" href={SHEIN_SHARE_URL} target="_blank" rel="sponsored noopener noreferrer">
          Open my SHEIN picks <Icon name="arrow-up-right" size={18}/>
        </a>
        <p className="invite-disclaimer">
          <Icon name="info" size={16}/>
          <span>The shared invitation mentions a 60% new-user coupon. Availability and eligibility are <strong>not independently verified</strong>; confirm terms and final pricing on SHEIN. Qualifying actions may earn CartMuse an affiliate commission. <Link href="/disclosure" style={{textDecoration:"underline"}}>Disclosure</Link>.</span>
        </p>
      </div>
    </section>
  );
}
