import { businessConfig } from "@/config/business";

function toIstMinutes(date: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function parseTime(value: string): number {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + (m ?? 0);
}

export function isShopOpen(now = new Date()): boolean {
  const schema = businessConfig.openingHours.schema;
  if (!schema || !businessConfig.openingHours.hoursConfirmed) return false;

  const entries = Array.isArray(schema) ? schema : [schema];
  const day = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
  }).format(now);

  const today = entries.find((entry) => entry.dayOfWeek.includes(day));
  if (!today) return false;

  const minutes = toIstMinutes(now);
  const opens = parseTime(today.opens);
  const closes = parseTime(today.closes);
  return minutes >= opens && minutes < closes;
}
