import { useMemo } from "react";

import { clinic } from "@/lib/clinicData";

export function MapEmbed() {
  const html = useMemo(() => clinic.mapEmbedHtml, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
      <div className="aspect-[16/11] w-full">
        <div
          className="h-full w-full [&_iframe]:h-full [&_iframe]:w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
