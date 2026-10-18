import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/catalog-explorer";
export const metadata: Metadata = { title: "Discover fashion edits", description: "Discover mood-led outfit inspiration and budget-friendly style guides. Save looks and explore your next fashion find." };
export default function DiscoverPage() { return <CatalogExplorer />; }
