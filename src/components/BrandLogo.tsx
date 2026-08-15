import Image from "next/image";
import { businessConfig } from "@/config/business";

const SRC = "/logo.jpg";
const INTRINSIC = { w: 1024, h: 826 };

const SIZES = {
  header: { height: 44, maxWidth: 160 },
  hero: { height: 168, maxWidth: 280 },
  footer: { height: 52, maxWidth: 180 },
} as const;

export function BrandLogo({
  variant = "header",
  priority = false,
}: {
  variant?: keyof typeof SIZES;
  priority?: boolean;
}) {
  const { height, maxWidth } = SIZES[variant];
  const width = Math.min(maxWidth, Math.round((INTRINSIC.w / INTRINSIC.h) * height));

  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden"
      style={{ width, height }}
    >
      <Image
        src={SRC}
        alt={`${businessConfig.name} logo`}
        width={INTRINSIC.w}
        height={INTRINSIC.h}
        priority={priority}
        className="h-full w-full object-contain object-center"
        sizes={`${width}px`}
      />
    </span>
  );
}
