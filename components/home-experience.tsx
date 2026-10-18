import Link from "next/link";
import { Icon } from "@/components/icon";
import { looks, shoppingGuides } from "@/lib/catalog";
import { CampaignShowcase } from "@/components/affiliate-invite";
import { LookCard } from "@/components/look-card";

export function HomeExperience() {
  return <>
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> THE ART OF FINDING MORE FOR LESS</div>
        <h1>Big style.<br/><em>Little</em> spend<span className="pink-stop">.</span></h1>
        <p>For the outfits you screenshot, the finds you can&apos;t stop thinking about, and the budget you&apos;d rather not break.</p>
        <div className="hero-buttons"><Link href="/discover" className="button button-dark button-large">Discover your next look <Icon name="arrow-up-right"/></Link><Link href="/deals" className="text-link">Explore smart deals <Icon name="arrow-right" size={17}/></Link></div>
        <div className="hero-footnote"><span className="tiny-avatar">✳</span><span>Curated for your taste, not your spending habits.</span></div>
      </div>
      <div className="hero-gallery">
        <div className="hero-image hero-image-left" style={{backgroundImage:"url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=85)"}} role="img" aria-label="Editorial fashion portrait"/>
        <div className="hero-image hero-image-right" style={{backgroundImage:"url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85)"}} role="img" aria-label="Fashion inspiration"/>
        <div className="hero-floating-tag"><span>THE GOOD-FIND CLUB</span><strong>Looks that<br/>make sense.</strong><Icon name="sparkles" size={22}/></div>
        <div className="hero-side-label">CURATED. CONSIDERED. SO YOU.</div>
        <div className="hero-squiggle">✳</div>
      </div>
    </section>
    <div className="container affiliate-placement"><CampaignShowcase /></div>
    <div className="ticker"><div className="ticker-inner">GOOD STYLE ISN&apos;T ABOUT THE PRICE <span>✳</span> DISCOVER MORE, SPEND WISELY <span>✳</span> GOOD STYLE ISN&apos;T ABOUT THE PRICE <span>✳</span> DISCOVER MORE, SPEND WISELY <span>✳</span></div></div>
    <section className="section container">
      <div className="section-topline"><span className="eyebrow">01 / FIND YOUR MOOD</span><Link href="/discover" className="small-link">Explore all edits <Icon name="arrow-up-right" size={16}/></Link></div>
      <div className="section-heading-row"><h2 className="display-heading">Currently <em>crushing on.</em></h2><p>Some looks just get you. We&apos;ve gathered a few ideas worth keeping on your radar.</p></div>
      <div className="looks-grid home-looks">{looks.slice(0,4).map((look)=><LookCard key={look.id} look={look}/>)}</div>
      <div className="center-action"><Link href="/discover" className="button button-outline">See every edit <Icon name="arrow-up-right" size={18}/></Link></div>
    </section>
    <section className="discovery-banner">
      <div className="container banner-layout">
        <div className="banner-copy"><span className="eyebrow eyebrow-light">02 / MORE THAN JUST A PRETTY FIND</span><h2>Because the<br/><em>smartest</em> look<br/>is saving.</h2><p>Know what to look for, what to skip, and how to make your money go further. We&apos;re here for the whole shopping journey.</p><Link href="/tools/savings-calculator" className="button button-light">Try the savings calculator <Icon name="arrow-up-right"/></Link></div>
        <div className="banner-art"><div className="banner-photo" role="img" aria-label="Minimal fashion flatlay"/><div className="banner-orbit">SPEND LESS • LOVE MORE •</div><div className="banner-card"><Icon name="sparkles" size={24}/><span>THE EDIT</span><strong>Your budget<br/>looks good on you.</strong></div></div>
      </div>
    </section>
    <section className="section container">
      <div className="section-topline"><span className="eyebrow">03 / A LITTLE INSIDER KNOW-HOW</span><Link href="/guide" className="small-link">All shopping guides <Icon name="arrow-up-right" size={16}/></Link></div>
      <div className="section-heading-row"><h2 className="display-heading">Your shopping <em>cheat sheet.</em></h2><p>Less guesswork. More confidence. Get the details before you tap &apos;buy&apos;.</p></div>
      <div className="guide-grid">{shoppingGuides.slice(0,3).map((guide,i)=><Link className={"guide-card guide-card-"+i} href={"/guide#"+guide.id} key={guide.id}><div className="guide-card-top"><span className="guide-number">0{i+1}</span><Icon name={guide.icon} size={29}/></div><div><span className="eyebrow">{guide.eyebrow}</span><h3>{guide.title}</h3><p>{guide.description}</p></div><span className="guide-arrow"><Icon name="arrow-up-right"/></span></Link>)}</div>
    </section>
    <section className="mini-calculator container"><div><span className="eyebrow">YOUR MONEY, YOUR RULES</span><h2>The only number that matters? <em>Your final total.</em></h2><p>Play with different savings scenarios before you go shopping.</p></div><Link href="/tools/savings-calculator" className="button button-dark">Calculate your savings <Icon name="arrow-right"/></Link></section>
    <section className="final-cta"><div className="container final-cta-inner"><span className="eyebrow">A GOOD FIND IS A GOOD FEELING</span><h2>Come for the looks.<br/><em>Stay for the smart finds.</em></h2><Link href="/discover" className="button button-dark button-large">Start exploring <Icon name="arrow-up-right"/></Link><span className="cta-doodle">✳</span></div></section>
    <div className="disclosure-strip container"><Icon name="info" size={18}/><p>CartMuse is an independent editorial discovery site. Looks are inspiration, not live SHEIN product listings; stated budgets are shopping goals, not verified prices. The SHEIN invite link may earn CartMuse a commission or referral reward from qualifying activity. <Link href="/disclosure">Our disclosure</Link>.</p></div>
  </>;
}
