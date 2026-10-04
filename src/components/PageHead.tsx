import { useEffect } from "react";

import { absoluteUrl, normalizePath } from "@/lib/seo";

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  schema?: object[];
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("data-managed-seo", "true");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("data-managed-seo", "true");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function PageHead({ title, description, path, schema = [] }: PageHeadProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(normalizePath(path));

    document.title = title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const existingSchema = document.head.querySelectorAll("script[data-managed-schema]");
    existingSchema.forEach((node) => node.remove());

    schema.forEach((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-managed-schema", "true");
      script.text = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [description, path, schema, title]);

  return null;
}
