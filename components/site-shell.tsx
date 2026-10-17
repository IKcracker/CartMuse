"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";

const navItems = [
  { href: "/discover", label: "Discover" },
  { href: "/shein-code", label: "SHEIN code" },
  { href: "/tools/savings-calculator", label: "Savings calculator" },
  { href: "/guide", label: "Shopping guide" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const update = () => {
      try { setSavedCount(JSON.parse(localStorage.getItem("cartmuse:saved") || "[]").length); }
      catch { setSavedCount(0); }
    };
    update();
    window.addEventListener("cartmuse:saved-changed", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("cartmuse:saved-changed", update);
      window.removeEventListener("storage", update);
    };
  }, []);


  return <>
    <div className="announcement"><span className="announcement-star">✳</span> YOUR DAILY DOSE OF STYLE, MINUS THE OVERSPEND <span className="announcement-star">✳</span></div>
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="CartMuse home">cart<span>muse</span><span className="logo-period">.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-active" : ""}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/discover?view=saved" className="icon-button saved-link" aria-label={"Saved looks (" + savedCount + ")"}><Icon name="heart" size={21} />{savedCount > 0 && <span className="saved-count">{savedCount}</span>}</Link>
          <Link href="/shein-code" className="button button-dark header-cta">Shop my SHEIN picks <Icon name="arrow-up-right" size={17} /></Link>
          <button type="button" className="icon-button menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={24} /></button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow-up-right" size={18}/></Link>)}<Link href="/about" onClick={() => setOpen(false)}>About CartMuse<Icon name="arrow-up-right" size={18}/></Link></nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <Link href="/" className="logo logo-light">cart<span>muse</span><span className="logo-period">.</span></Link>
        <p>Good taste. Better decisions.<br/>Your independent destination for finds worth saving.</p>
        <div className="footer-stamp"><Icon name="sparkles" size={17}/> MADE FOR THE LOVE OF A GOOD FIND</div>
      </div>
      <div className="footer-column"><h3>Explore</h3><Link href="/discover">All looks</Link><Link href="/deals">The deal edit</Link><Link href="/shein-code">SHEIN code</Link><Link href="/tools/savings-calculator">Savings calculator</Link><Link href="/guide">Shopping guide</Link></div>
      <div className="footer-column"><h3>CartMuse</h3><Link href="/about">Our story</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/privacy">Privacy</Link><a href="https://www.shein.com/" target="_blank" rel="noopener noreferrer">SHEIN official site <Icon name="arrow-up-right" size={13}/></a></div>
      <div className="footer-signoff"><span>BEAUTY IN THE BUDGET.</span><p>Style should feel good.<br/>So should the total.</p><span className="signoff-flower">✳</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} CartMuse. All rights reserved.</span><span>Independent platform. Not affiliated with or endorsed by SHEIN.</span><span>Made with intention ✳</span></div>
  </footer>;
}
