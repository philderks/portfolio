"use client";

import type { Lang } from "@/lib/i18n";
import { useSplitFlap } from "@/hooks/useSplitFlap";

export interface SplitFlapTextProps {
  target: string;
  lang: Lang;
  className?: string;
  id?: string;
}

export function SplitFlapText({
  target,
  lang,
  className,
  id,
}: SplitFlapTextProps) {
  const { chars } = useSplitFlap(target, lang);

  if (chars.length === 0) {
    return null;
  }

  const nodes = chars.flatMap((item, i) => {
    if (item.char === "\n") {
      return [<br key={`${lang}-${i}-br`} />];
    }
    return [
      <span key={`${lang}-${i}`}>
        {item.char}
      </span>,
    ];
  });

  return (
    <span className={className} id={id}>
      {nodes}
    </span>
  );
}
