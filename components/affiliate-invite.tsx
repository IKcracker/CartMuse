"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { sheinCampaigns, type SheinCampaign } from "@/lib/campaigns";

export function AffiliateInvite({
  compact = false,
  campaign = sheinCampaigns[0],
}: {
  compact?: boolean;
  campaign?: SheinCampaign;
}) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "unavailable">("idle");

  async function copyCode() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(campaign.code);
      setCopyState("copied");
    } catch {
      setCopyState("unavailable");
    }
  }

  return (
    <section className={"affiliate-invite" + (compact ? " affiliate-invite-compact" : "") + (campaign.id === "women-sale" ? " affiliate-invite-sale" : "")} aria-label={campaign.eyebrow}>
      <div className="affiliate-invite-copy">
        <span className="eyebrow"><Icon name="sparkles" size={16}/> {campaign.eyebrow}</span>
        <h2>{campaign.title}<br/><em>{campaign.accentTitle}</em></h2>
        <span className="affiliate-promo-label">{campaign.advertisedOffer}</span>
        <p>{campaign.summary} <strong>This is an app search code, not a checkout coupon.</strong></p>
        {compact && <Link href={campaign.page} className="text-link campaign-more">How this campaign works <Icon name="arrow-right" size={15}/></Link>}
      </div>
      <div className="affiliate-invite-action">
        <span className="invite-code-label">SHEIN APP SEARCH CODE</span>
        <div className="invite-code-row">
          <code aria-label={"SHEIN app search code " + campaign.code}>{campaign.code}</code>
          <button type="button" className="invite-copy-button" onClick={copyCode} aria-label={"Copy " + campaign.code}>
            <Icon name={copyState === "copied" ? "check" : "copy"} size={16}/>
            {copyState === "copied" ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="invite-copy-note" role="status" aria-live="polite">
          {copyState === "copied" ? "Paste the code into SHEIN's app search box." : copyState === "unavailable" ? "Copy unavailable here. Select the code above to copy it." : "Search inside the SHEIN app to explore this invitation."}
        </p>
        <a className="button button-dark invite-action-link" href={campaign.url} target="_blank" rel="sponsored noopener noreferrer">
          {campaign.cta} <Icon name="arrow-up-right" size={18}/>
        </a>
        <p className="invite-disclaimer"><Icon name="info" size={16}/>
          <span>{campaign.disclaimer} Qualifying referrals may earn CartMuse commission. <Link href="/disclosure" style={{textDecoration:"underline"}}>Disclosure</Link>.</span>
        </p>
      </div>
    </section>
  );
}

export function CampaignShowcase({ showHeader = true }: { showHeader?: boolean }) {
  return <section aria-label="Available SHEIN shared campaigns">
    {showHeader && <div className="campaign-showcase-heading">
      <div><span className="eyebrow">THE AFFILIATE CAMPAIGN EDIT</span><h2>Find your <em>next offer.</em></h2></div>
      <Link href="/shein-offers" className="text-link">All SHEIN campaigns <Icon name="arrow-right" size={17}/></Link>
    </div>}
    <div className="campaign-showcase-grid">
      {sheinCampaigns.map(campaign => <AffiliateInvite key={campaign.id} compact campaign={campaign}/>)}
    </div>
  </section>;
}
