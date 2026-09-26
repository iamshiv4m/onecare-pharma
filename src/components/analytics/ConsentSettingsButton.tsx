"use client";

import { GA_MEASUREMENT_ID, isValidMeasurementId } from "@/lib/analytics";

export function ConsentSettingsButton({
  className = "",
}: {
  className?: string;
}) {
  if (!isValidMeasurementId(GA_MEASUREMENT_ID)) {
    return null;
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("ocp-open-consent"))}
    >
      Analytics settings
    </button>
  );
}
