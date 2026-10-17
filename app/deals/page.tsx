import type { Metadata } from "next";
import { DealFinder } from "@/components/deal-finder";
export const metadata: Metadata = { title: "The deal edit", description: "Learn how to find eligible SHEIN promotions, understand in-app codes and shop with fewer surprises." };
export default function DealsPage() { return <DealFinder />; }
