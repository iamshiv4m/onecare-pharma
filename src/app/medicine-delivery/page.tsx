import { LocalLanding, localPageMetadata } from "@/components/LocalLanding";

export const metadata = localPageMetadata("/medicine-delivery");

export default function MedicineDeliveryPage() {
  return <LocalLanding path="/medicine-delivery" />;
}
