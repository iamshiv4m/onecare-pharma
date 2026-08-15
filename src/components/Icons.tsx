import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function iconProps({ className, ...props }: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: `block shrink-0 ${className ?? "size-5"}`,
    ...props,
  };
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg {...iconProps(props)} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.86c0 1.74.46 3.44 1.34 4.94L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.2h.01c5.46 0 9.89-4.4 9.89-9.87C21.94 6.4 17.5 2 12.04 2zm5.77 14.16c-.24.68-1.4 1.26-1.94 1.34-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.78-4.18-4.93-4.38-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.24-.27.64-.39.96-.39h.7c.22 0 .52-.08.81.62.3.72 1.02 2.48 1.11 2.66.09.18.15.4.03.64-.12.24-.18.4-.36.61-.18.22-.38.48-.54.65-.18.18-.36.38-.15.74.2.36.9 1.48 1.93 2.4 1.33 1.18 2.45 1.55 2.81 1.73.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.15 1.55z" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...iconProps(props)} stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 4.8c.3-.3.8-.4 1.2-.2l2.3 1c.4.2.7.6.7 1.1v2.1c0 .4-.2.7-.5.9l-1.2.8a12.4 12.4 0 0 0 5.4 5.4l.8-1.2c.2-.3.5-.5.9-.5h2.1c.5 0 .9.3 1.1.7l1 2.3c.2.4.1.9-.2 1.2l-1.1 1.1c-.4.4-1 .6-1.5.5C11.4 20.6 3.4 12.6 4 6.3c-.1-.5.1-1.1.5-1.5L6.6 4.8z"
      />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...iconProps(props)} stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...iconProps(props)} stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...iconProps(props)} stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
