import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookingButton } from "@/components/BookingButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroFront from "@/assets/clinic-front.png";
import heroMesh from "@/assets/abstract-teal-mesh.jpg";
import { clinic, faqs, reviews, services } from "@/lib/clinicData";

interface HomeProps {
  targetSection?: string;
}

function Stars({ value = 5 }: { value?: number }) {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={
        i < value
          ? "h-4 w-4 fill-amber-400 text-amber-400"
          : "h-4 w-4 text-muted-foreground"
      }
      aria-hidden="true"
    />
  ));
  return <div className="flex items-center gap-1">{stars}</div>;
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-teal-600" />
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-700">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
      {desc ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function MapEmbed() {
  const html = useMemo(() => clinic.mapEmbedHtml, []);
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="aspect-[16/10] w-full">
        <div
          className="h-full w-full [&_iframe]:h-full [&_iframe]:w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export default function Home({ targetSection }: HomeProps) {
  // Scroll to target section when URL changes (e.g., /#/services → scroll to #services)
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 12% 10%, rgba(20,184,166,0.18), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(15,23,42,0.10), transparent 55%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600 text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-base">{clinic.name}</p>
              <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                <Stars value={5} />
                <span className="font-medium text-foreground">{clinic.rating.toFixed(1)}</span>
                <span>({clinic.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/services" className="text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="/reviews" className="text-muted-foreground hover:text-foreground">
              Reviews
            </Link>
            <Link href="/photos" className="text-muted-foreground hover:text-foreground">
              Photos
            </Link>
            <Link href="/location" className="text-muted-foreground hover:text-foreground">
              Location
            </Link>
            <Link href="/faq" className="text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <a href="https://booking.uk.hsone.app/soe/new?pid=UIKIL01" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              Dental Booking
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex">
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`} aria-label="Call clinic">
                Call {clinic.phone}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={clinic.mapUrl} target="_blank" rel="noreferrer">
                View on Google Maps <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              backgroundImage: `url(${heroMesh})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/70 to-background" />

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:gap-8 md:px-6 md:py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-7"
            >
              <Badge className="bg-teal-600/10 text-teal-800 hover:bg-teal-600/10">
                Dún Laoghaire · Dublin
              </Badge>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                Exceptional Dental Care in Dún Laoghaire
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A calm, precise, and patient-first experience—designed around trust, comfort,
                and clear communication.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-600/90">
                  <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {clinic.phone}
                  </a>
                </Button>
                <BookingButton className="bg-amber-500 text-white hover:bg-amber-500/90" />
                <Button asChild size="lg" variant="outline" className="border-teal-600/30">
                  <a href={clinic.mapUrl} target="_blank" rel="noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Card className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Google Rating
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <Stars value={5} />
                        <div className="text-sm">
                          <span className="font-semibold">5.0</span> <span className="text-muted-foreground">(343 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/15 text-amber-700">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-500" />
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Today
                      </p>
                      <p className="mt-2 text-sm text-foreground">
                        Please see hours below
                      </p>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600/10 text-teal-700">
                      <Clock3 className="h-5 w-5" />
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="md:col-span-5"
            >
              <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
                <img
                  src={heroFront}
                  alt="Killane Dental Care storefront"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-5">
                  <p className="text-sm font-semibold">{clinic.address}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Plus code: {clinic.plusCode}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust / Quick Facts */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6" id="services">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <SectionTitle
              eyebrow="Care with clarity"
              title="Modern dentistry with a calm, precise approach"
              desc="High-trust care starts with clear explanations, comfortable visits, and attention to detail."
            />

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-600/10 text-teal-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <a
                      href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
                      className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900/5 text-slate-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">{clinic.address}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-400/15 text-amber-700">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Google rating</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Stars value={5} />
                      <span className="text-sm font-semibold">5.0</span>
                      <span className="text-sm text-muted-foreground">(343 reviews)</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {services.map((s) => (
                <Card key={s.title} className="p-5">
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Services may vary—please call to confirm availability.
            </p>
          </motion.div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6" id="reviews">
          <SectionTitle
            eyebrow="Real Google reviews"
            title="What patients say"
            desc="Selected excerpts from Google reviews—shared here in their original wording."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <div className="mt-2">
                      <Stars value={r.stars} />
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-teal-600/10 text-teal-800">
                    Google
                  </Badge>
                </div>
                <Separator className="my-4" />
                <p className="text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Photo Wall */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6" id="photos">
          <SectionTitle
            eyebrow="Gallery"
            title="Photos from Google Maps"
            desc="User-contributed photos from Google Maps."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="group overflow-hidden">
                <div className="relative">
                  {/* Placeholder: replace with real downloaded Google Maps photos */}
                  <img
                    src={heroFront}
                    alt="Gallery placeholder"
                    className="h-56 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="text-xs font-semibold tracking-widest text-white/85">
                      ADD REAL GOOGLE PHOTOS
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Replace placeholders with downloaded images
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Tip: Download selected review photos from Google Maps, then replace the placeholders in
            the project assets.
          </p>
        </section>

        {/* Location & Hours */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6" id="location">
          <SectionTitle
            eyebrow="Visit"
            title="Location & opening hours"
            desc="Find us in Dún Laoghaire. For specific appointment times, please call in advance."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <MapEmbed />
            </div>
            <div className="md:col-span-5">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600/10 text-teal-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">{clinic.address}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Plus code: {clinic.plusCode}</p>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900/5 text-slate-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <a
                      className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                      href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/15 text-amber-700">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-semibold">Hours</p>
                    <div className="mt-3 space-y-2 text-sm">
                      {clinic.hours.map((h) => (
                        <div key={h.day} className="flex items-center justify-between gap-4">
                          <span className="text-muted-foreground">{h.day}</span>
                          <span className="font-medium text-foreground">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6" id="faq">
          <SectionTitle
            eyebrow="Helpful"
            title="FAQ"
            desc="Short answers to common questions. For anything specific, please call the clinic."
          />

          <Card className="mt-8 p-2 md:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="px-2 text-left md:px-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pb-4 text-muted-foreground md:px-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-10 text-center text-xs text-muted-foreground md:px-6">
            <p>For technical support of this website, please contact: claritleonelmnicol@gmail.com</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
