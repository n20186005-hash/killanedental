import { clinic } from "@/lib/clinicData";

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

export function normalizePath(path: string) {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  if (withLeadingSlash === "/") {
    return "/";
  }

  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function absoluteUrl(path: string) {
  return `${clinic.domain}${normalizePath(path)}`;
}

export function buildDentistSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${absoluteUrl(path)}#dentist`,
    name: clinic.name,
    url: clinic.domain,
    telephone: clinic.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.locality,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    openingHoursSpecification: clinic.hours
      .filter((entry) => "opens" in entry && "closes" in entry)
      .map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[entry.day]}`,
        opens: entry.opens,
        closes: entry.closes,
      })),
    areaServed: ["Dún Laoghaire", "Dublin"],
    sameAs: [clinic.mapUrl],
  };
}

export function buildWebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${clinic.domain}/#website`,
      name: clinic.name,
      url: clinic.domain,
    },
    about: {
      "@id": `${clinic.domain}/#organization`,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${clinic.domain}/#organization`,
    name: clinic.name,
    url: clinic.domain,
    telephone: clinic.phone,
  };
}

export function buildFAQSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildPersonSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl(path)}#person`,
    name: clinic.doctorName,
    jobTitle: "Dentist",
    worksFor: {
      "@id": `${absoluteUrl("/")}#dentist`,
    },
    url: absoluteUrl(path),
  };
}
