import { useEffect } from "react";

interface SEOHeadProps {
  /** The current path, e.g., `/page-path` */
  path: string;
  /** The current language, e.g., `zh` or `en` */
  currentLang: string;
  /** The base domain, e.g., `https://example.com` */
  domain?: string;
  /** List of supported languages */
  supportedLangs?: string[];
  /** Default language code used for x-default */
  defaultLang?: string;
}

/**
 * A component to dynamically generate canonical and hreflang tags 
 * for a multilingual SEO-friendly site.
 */
export function SEOHead({
  path,
  currentLang,
  domain = "https://yourdomain.com",
  supportedLangs = ["en", "zh"],
  defaultLang = "en",
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Remove existing SEO tags to prevent duplicates during navigation
    const existingLinks = document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"]');
    existingLinks.forEach((link) => document.head.removeChild(link));

    // Normalize path to ensure it starts with / and doesn't end with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const normalizedPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');

    // 2. Add self-referencing canonical
    const canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", `${domain}/${currentLang}${normalizedPath}`);
    document.head.appendChild(canonicalLink);

    // 3. Add hreflang links for all supported languages
    supportedLangs.forEach((lang) => {
      const alternateLink = document.createElement("link");
      alternateLink.setAttribute("rel", "alternate");
      alternateLink.setAttribute("hreflang", lang);
      alternateLink.setAttribute("href", `${domain}/${lang}${normalizedPath}`);
      document.head.appendChild(alternateLink);
    });

    // 4. Add x-default hreflang link
    const xDefaultLink = document.createElement("link");
    xDefaultLink.setAttribute("rel", "alternate");
    xDefaultLink.setAttribute("hreflang", "x-default");
    // x-default often points to the default language or a language selector page
    xDefaultLink.setAttribute("href", `${domain}/${defaultLang}${normalizedPath}`);
    document.head.appendChild(xDefaultLink);

    // Cleanup on unmount
    return () => {
      const linksToRemove = document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"]');
      linksToRemove.forEach((link) => document.head.removeChild(link));
    };
  }, [path, currentLang, domain, supportedLangs, defaultLang]);

  return null; // This component does not render anything to the DOM directly
}
