import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHead } from "@/components/PageHead";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteLayout } from "@/components/SiteLayout";
import { clinic } from "@/lib/clinicData";
import {
  buildDentistSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
} from "@/lib/seo";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHead
        title="Contact Killane Dental Care | Dentist in Dún Laoghaire"
        description="Contact Killane Dental Care at 135 George's Street Lower, Dún Laoghaire. View address, opening hours, phone number and directions."
        path="/contact"
        schema={[
          buildOrganizationSchema(),
          buildDentistSchema("/contact"),
          buildWebPageSchema({
            title: "Contact Killane Dental Care | Dentist in Dún Laoghaire",
            description:
              "Contact Killane Dental Care at 135 George's Street Lower, Dún Laoghaire. View address, opening hours, phone number and directions.",
            path: "/contact",
          }),
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Visit Killane Dental Care in Dún Laoghaire"
          description="Local dental care at 135 George's Street Lower with clear contact information, opening hours and directions."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <MapEmbed />
          </div>
          <div className="space-y-6 md:col-span-5">
            <Card className="rounded-3xl p-6">
              <p className="font-semibold">Address</p>
              <p className="mt-2 text-sm text-muted-foreground">{clinic.fullAddress}</p>
              <p className="mt-2 text-xs text-muted-foreground">Plus code: {clinic.plusCode}</p>
              <div className="mt-5">
                <Button asChild variant="outline">
                  <a href={clinic.mapUrl} target="_blank" rel="noreferrer">
                    Open in Google Maps <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="rounded-3xl p-6">
              <p className="font-semibold">Phone</p>
              <p className="mt-2 text-sm text-muted-foreground">{clinic.phone}</p>
              <div className="mt-5">
                <Button asChild>
                  <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>Call the clinic</a>
                </Button>
              </div>
            </Card>

            <Card className="rounded-3xl p-6">
              <p className="font-semibold">Opening hours</p>
              <div className="mt-4 space-y-2 text-sm">
                {clinic.hours.map((entry) => (
                  <div key={entry.day} className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">{entry.day}</span>
                    <span className="font-medium">{entry.hours}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
