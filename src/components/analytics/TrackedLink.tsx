"use client";

import type { ComponentProps } from "react";
import { trackCta, type CtaEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: CtaEvent;
  location: string;
};

export function TrackedLink({
  event,
  location,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      data-analytics-event={event}
      data-analytics-location={location}
      onClick={(clickEvent) => {
        onClick?.(clickEvent);
        if (!clickEvent.defaultPrevented) {
          trackCta(event, location);
        }
      }}
    />
  );
}
