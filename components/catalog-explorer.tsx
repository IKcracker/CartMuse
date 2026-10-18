"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Icon } from "@/components/icon";
import { LookCard } from "@/components/look-card";
import { categories, looks, type Category } from "@/lib/catalog";

function Explorer() {
  const params=useSearchParams();
  const [category,setCategory]=useState<Category>(() => { const requested = params.get("category"); return requested && categories.includes(requested as Category) ? requested as Category : "All"; });
  const [search,setSearch]=useState("");
  const [maxBudget,setMaxBudget]=useState("All budgets");
  const [sort,setSort]=useState("Featured");
  const [savedOnly,setSavedOnly]=useState(() => params.get("view") === "saved");
  const [savedIds,setSavedIds]=useState<string[]>([]);
  useEffect(()=>{
    const sync=()=>{try {const value=JSON.parse(localStorage.getItem("cartmuse:saved")||"[]");setSavedIds(Array.isArray(value)?value:[]);}catch{setSavedIds([]);}};
    sync();window.addEventListener("cartmuse:saved-changed",sync);window.addEventListener("storage",sync);
    return ()=>{window.removeEventListener("cartmuse:saved-changed",sync);window.removeEventListener("storage",sync);};
  },[]);
  const results=useMemo(()=>{
    let value=looks.filter(look=>(category==="All"||look.category===category)&&(!search||[look.name,look.category,look.description,look.tag].join(" ").toLowerCase().includes(search.toLowerCase()))&&(maxBudget==="All budgets"||look.budget<=Number(maxBudget))&&(!savedOnly||savedIds.includes(look.id)));
    if(sort==="Budget: low to high")value=[...value].sort((a,b)=>a.budget-b.budget);
    if(sort==="Budget: high to low")value=[...value].sort((a,b)=>b.budget-a.budget);
    if(sort==="Name A–Z")value=[...value].sort((a,b)=>a.name.localeCompare(b.name));
    return value;
  },[category,search,maxBudget,sort,savedOnly,savedIds]);
  const reset=()=>{setCategory("All");setSearch("");setMaxBudget("All budgets");setSavedOnly(false);setSort("Featured");};
  return <div className="catalog-page">
    <section className="page-intro container"><div className="eyebrow">THE CARTMUSE EDIT / 001</div><div className="page-intro-row"><h1>Discover your <em>next thing.</em></h1><p>Scroll-worthy inspiration for every mood, every moment, and every kind of budget. Find the look that feels like you.</p></div><div className="intro-note"><Icon name="sparkles" size={18}/> Editorial inspiration — not live items or quoted store prices.</div></section>
    <div className="container catalog-tools">
      <div className="catalog-search"><Icon name="search" size={20}/><input aria-label="Search looks" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search a style, a mood, an edit..."/></div>
      <div className="catalog-sort"><Icon name="sliders" size={18}/><select aria-label="Sort looks" value={sort} onChange={e=>setSort(e.target.value)}>{["Featured","Budget: low to high","Budget: high to low","Name A–Z"].map(s=><option key={s}>{s}</option>)}</select></div>
    </div>
    <div className="container filter-area"><div className="category-pills" role="group" aria-label="Filter by category">{categories.map(item=><button className={"filter-pill "+(category===item?"active":"")} key={item} onClick={()=>setCategory(item)}>{item}</button>)}</div><div className="filter-extras"><label className="budget-select">Budget idea <select aria-label="Maximum inspiration budget" value={maxBudget} onChange={e=>setMaxBudget(e.target.value)}><option>All budgets</option>{[200,300,400,500].map(n=><option key={n} value={n}>Under R{n}</option>)}</select></label><label className="saved-check"><input type="checkbox" checked={savedOnly} onChange={e=>setSavedOnly(e.target.checked)}/><Icon name="heart" size={16}/> Saved only</label></div></div>
    <div className="container catalog-results"><div className="results-heading"><span>{results.length} curated {results.length===1?"edit":"edits"}</span><span>Thoughtfully picked, always inspiring.</span></div>
      {results.length?<div className="looks-grid catalog-grid">{results.map(look=><LookCard key={look.id} look={look}/>)}</div>:<div className="empty-state"><Icon name="search" size={35}/><h2>No looks found — yet.</h2><p>Try another mood, a higher budget, or a different category.</p><button className="button button-dark" onClick={reset}>Clear filters <Icon name="arrow-right" size={18}/></button></div>}
    </div>
    <div className="catalog-end container"><span>✳</span><p>Good finds are worth coming back for.</p><span>✳</span></div>
  </div>;
}
export function CatalogExplorer(){return <Suspense fallback={<div className="container loading-view">Gathering the good finds…</div>}><Explorer/></Suspense>;}
