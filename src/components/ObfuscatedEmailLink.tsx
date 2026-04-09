"use client";

import * as React from "react";

type Props = {
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  /** Default is a copy-friendly obfuscated label like "name [at] domain [dot] tld". */
  obfuscatedLabel?: string;
};

function decodeAscii(codes: readonly number[]) {
  return String.fromCharCode(...codes);
}

// Keep the raw email out of rendered HTML and out of obvious plaintext in source.
const USER_CODES = [112, 104, 105, 108, 105, 112, 112] as const; // philipp
const DOMAIN_CODES = [100, 101, 114, 107, 115, 46, 100, 101, 118] as const; // derks.dev

export function ObfuscatedEmailLink({
  className,
  ariaLabel = "Send email",
  children,
  obfuscatedLabel = "philipp [at] derks [dot] dev",
}: Props) {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const email = `${decodeAscii(USER_CODES)}@${decodeAscii(DOMAIN_CODES)}`;
      window.location.href = `mailto:${email}`;
    },
    [],
  );

  return (
    <a href="#email" onClick={handleClick} aria-label={ariaLabel} className={className}>
      {children ?? obfuscatedLabel}
    </a>
  );
}

