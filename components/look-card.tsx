"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import type { Look } from "@/lib/catalog";
import { formatRand } from "@/lib/catalog";

const storageKey = "cartmuse:saved";
function getSaved(): string[] {
  try { const value = JSON.parse(localStorage.getItem(storageKey) || "[]"); return Array.isArray(value) ? value.filter((x): x is string => typeof x === "string") : []; }
  catch { return []; }
}

export function LookCard({look}: {look: Look}) {
  const [saved,setSaved] = useState(false);
  useEffect(() => {
    const sync=()=>setSaved(getSaved().includes(look.id)); sync();
    window.addEventListener("cartmuse:saved-changed",sync);
    return ()=>window.removeEventListener("cartmuse:saved-changed",sync);
  },[look.id]);
  function toggleSaved() {
    const current=getSaved(); const updated=current.includes(look.id)?current.filter(id=>id!==look.id):[...current,look.id];
    try { localStorage.setItem(storageKey,JSON.stringify(updated)); window.dispatchEvent(new Event("cartmuse:saved-changed")); }
    catch { setSaved(!saved); }
  }
  return <article className="look-card">
    <div className="look-image-wrap" style={{backgroundColor:look.tone}}>
      {/* Editorial inspiration photography. This is not a merchant product image. */}
      <div className="look-image" style={{backgroundImage:"url('"+look.image+"')"}} role="img" aria-label={look.name}/>
      <span className="look-tag">{look.tag}</span>
      <button type="button" className={"look-heart"+(saved?" is-saved":"")} onClick={toggleSaved} aria-pressed={saved} aria-label={(saved?"Remove ":"Save ")+look.name}><Icon name="heart" size={19}/></button>
      <Link className="look-quick" href={"/discover?category="+encodeURIComponent(look.category)} aria-label={"Explore "+look.category}>Explore the edit <Icon name="arrow-up-right" size={17}/></Link>
    </div>
    <div className="look-meta"><span>{look.category.toUpperCase()}</span><span>Budget idea: {formatRand(look.budget)}</span></div>
    <h3>{look.name}</h3><p>{look.description}</p>
  </article>;
}
