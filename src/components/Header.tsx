"use client";

import { useState } from "react";
import Link from "next/link";
import { businessConfig } from "@/config/business";
import { IconClose, IconMenu } from "@/components/Icons";
import { BrandLogo } from "@/components/BrandLogo";
import { WhatsAppButton } from "@/components/CtaButtons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand/15 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-3">
        <Link href="/" className="inline-flex h-11 min-w-0 flex-1 items-center">
          <BrandLogo variant="header" priority />
          <span className="sr-only">{businessConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {businessConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <WhatsAppButton className="!hidden sm:!inline-flex !min-h-10 !px-4 !py-2 text-sm" />
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/15 text-brand-dark lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <IconClose className="size-6" />
            ) : (
              <IconMenu className="size-6" />
            )}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand/10 bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {businessConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mint"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton className="mt-3 w-full sm:hidden" />
        </div>
      ) : null}
    </header>
  );
}
