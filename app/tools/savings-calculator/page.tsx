import type { Metadata } from "next";
import { SavingsCalculator } from "@/components/savings-calculator";
export const metadata: Metadata = { title: "Shopping savings calculator", description: "Estimate shopping discounts, eligibility and your final total in South African rand before you check out." };
export default function SavingsCalculatorPage() { return <SavingsCalculator />; }
