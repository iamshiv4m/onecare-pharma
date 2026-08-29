import { LocalLanding, localPageMetadata } from "@/components/LocalLanding";

export const metadata = localPageMetadata("/bhajanpura-pharmacy");

export default function BhajanpuraPharmacyPage() {
  return <LocalLanding path="/bhajanpura-pharmacy" />;
}
