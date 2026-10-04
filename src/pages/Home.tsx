import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { Link } from "wouter";

import heroFront from "@/assets/clinic-front.png";
import heroMesh from "@/assets/abstract-teal-mesh.jpg";
import { BookingButton } from "@/components/BookingButton";
import { FAQList } from "@/components/FAQList";
import { PageHead } from "@/components/PageHead";
import { ReviewGrid } from "@/components/ReviewGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { clinic, faqs, services } from "@/lib/clinicData";
import { landingPages } from "@/lib/pageContent";
import {
  buildDentistSchema,
  buildFAQSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
} from "@/lib/seo";

function HomeFacts() {
  const items = [
    {
      title: "Google rating",
      value: `${clinic.rating.toFixed(1)} stars`,
      description: `${clinic.reviewCount} Google reviews`,
    },
    {
      title: "Location",
      value: "George's Street Lower",
      description: "Dún Laoghaire, Dublin",
    },
    {
      title: "New patients",
      value: "Currently accepted",
      description: "Call to arrange your first visit",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="rounded-3xl p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {item.title}
          </p>
          <p className="mt-3 text-xl font-semibold">{item.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <PageHead
        title="Dentist in Dún Laoghaire | Killane Dental Care"
        description="Looking for a dentist in Dún Laoghaire? Killane Dental Care provides preventive, restorative, hygiene and family dental care at 135 George's Street Lower. Call to book an appointment."
        path="/"
        schema={[
          buildOrganizationSchema(),
          buildDentistSchema("/"),
          buildWebPageSchema({
            title: "Dentist in Dún Laoghaire | Killane Dental Care",
            description:
              "Looking for a dentist in Dún Laoghaire? Killane Dental Care provides preventive, restorative, hygiene and family dental care at 135 George's Street Lower. Call to book an appointment.",
            path: "/",
          }),
          buildFAQSchema(faqs),
        ]}
      />

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

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-12 md:px-6 md:py-20">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              Dún Laoghaire Dentist
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              Trusted Dentist in Dún Laoghaire
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Calm, precise and patient-first dental care at 135 George's Street Lower.
              Killane Dental Care welcomes new patients and Medical Card enquiries.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {clinic.phone}
                </a>
              </Button>
              <BookingButton className="bg-amber-500 text-white hover:bg-amber-500/90" />
              <Button asChild size="lg" variant="outline">
                <a href={clinic.mapUrl} target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get directions
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
              <img
                src={heroFront}
                alt="Killane Dental Care in Dún Laoghaire"
                className="h-[420px] w-full object-cover md:h-[520px]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-5">
                <p className="text-sm font-semibold">{clinic.fullAddress}</p>
                <p className="mt-1 text-xs text-muted-foreground">Plus code: {clinic.plusCode}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <HomeFacts />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Core pages"
          title="Built around the services and searches that matter locally"
          description="Instead of asking one homepage to rank for everything, each key intent now has a clearer destination."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            landingPages.medicalCard,
            landingPages.newPatients,
            landingPages.nervousPatients,
            landingPages.aboutDoctor,
            ...services.map((service) => ({
              path: service.href,
              title: service.title,
              metaDescription: service.desc,
            })),
          ].map((item) => (
            <Card key={item.path} className="rounded-3xl p-6">
              <p className="font-display text-2xl">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.metaDescription}
              </p>
              <div className="mt-5">
                <Link
                  href={item.path}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  View page <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Why patients choose us"
          title="A local practice built around trust, clarity and comfort"
          description="The site now leans into the positioning already visible in reviews and search data."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="rounded-3xl p-6">
            <Star className="h-5 w-5 text-amber-500" />
            <p className="mt-4 text-lg font-semibold">Patient-first care</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A calm environment with clear communication before and during treatment.
            </p>
          </Card>
          <Card className="rounded-3xl p-6">
            <MapPin className="h-5 w-5 text-teal-700" />
            <p className="mt-4 text-lg font-semibold">Strong local relevance</p>
            <p className="mt-2 text-sm text-muted-foreground">
              A Dún Laoghaire address, clear NAP details and dedicated local landing pages.
            </p>
          </Card>
          <Card className="rounded-3xl p-6">
            <Phone className="h-5 w-5 text-teal-700" />
            <p className="mt-4 text-lg font-semibold">Straightforward booking</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear calls to action for new patients, Medical Card enquiries and general bookings.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="Patient feedback that supports the positioning"
          description="Many reviews mention reassurance, professionalism and a gentle approach for nervous patients."
        />
        <div className="mt-8">
          <ReviewGrid />
        </div>
        <div className="mt-6">
          <Link href="/reviews" className="inline-flex items-center gap-2 font-medium">
            Read more reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before booking"
          description="Helpful information for local patients looking for a dentist in Dún Laoghaire."
        />
        <div className="mt-8">
          <FAQList faqs={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-20">
        <Card className="rounded-3xl border-teal-600/20 bg-teal-600/5 p-8">
          <h2 className="font-display text-3xl">Ready to book with a Dún Laoghaire dentist?</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Call Killane Dental Care for appointments, Medical Card enquiries or first visits as a
            new patient.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>Call the clinic</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">View contact details</Link>
            </Button>
          </div>
        </Card>
      </section>
    </SiteLayout>
  );
}
