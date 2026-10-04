import type { ReactNode } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

import { BookingButton } from "@/components/BookingButton";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/clinicData";
import { primaryNavigation } from "@/lib/pageContent";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 12% 10%, rgba(20,184,166,0.18), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(15,23,42,0.10), transparent 55%)",
        }}
      />

      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div>
            <Link href="/" className="font-display text-base hover:text-teal-700 md:text-lg">
              {clinic.name}
            </Link>
            <p className="text-xs text-muted-foreground">
              Dentist in Dún Laoghaire · {clinic.address.line1}
            </p>
          </div>

          <nav className="hidden items-center gap-5 text-sm md:flex">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex">
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>Call {clinic.phone}</a>
            </Button>
            <BookingButton className="hidden bg-amber-500 text-white hover:bg-amber-500/90 md:inline-flex" />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-display text-lg">{clinic.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Trusted, patient-first dental care in Dún Laoghaire.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Contact</p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{clinic.fullAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>{clinic.phone}</a>
            </p>
            <p>
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-foreground"
              >
                View on Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Explore</p>
            {primaryNavigation.map((item) => (
              <p key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </p>
            ))}
            <p className="pt-2 text-xs">
              Technical support:{" "}
              <a href={`mailto:${clinic.supportEmail}`} className="hover:text-foreground">
                {clinic.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
