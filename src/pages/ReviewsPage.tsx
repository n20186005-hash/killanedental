import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHead } from "@/components/PageHead";
import { ReviewGrid } from "@/components/ReviewGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteLayout } from "@/components/SiteLayout";
import { clinic } from "@/lib/clinicData";
import {
  buildDentistSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
} from "@/lib/seo";

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHead
        title="Killane Dental Care Reviews | Dún Laoghaire Dentist"
        description="Read patient reviews for Killane Dental Care in Dún Laoghaire and see why patients mention calm care, reassurance and professionalism."
        path="/reviews"
        schema={[
          buildOrganizationSchema(),
          buildDentistSchema("/reviews"),
          buildWebPageSchema({
            title: "Killane Dental Care Reviews | Dún Laoghaire Dentist",
            description:
              "Read patient reviews for Killane Dental Care in Dún Laoghaire and see why patients mention calm care, reassurance and professionalism.",
            path: "/reviews",
          }),
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="What patients say about Killane Dental Care"
          description="Patient feedback consistently highlights calm care, clear communication and a reassuring experience in Dún Laoghaire."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <ReviewGrid />
          <Card className="rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Google rating
            </p>
            <p className="mt-4 font-display text-5xl">{clinic.rating.toFixed(1)}</p>
            <p className="mt-2 text-muted-foreground">{clinic.reviewCount} Google reviews</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Many reviews mention feeling nervous before attending and more at ease once they
              were in the clinic. That makes reviews an important trust signal for local dental
              SEO as well as new patient confidence.
            </p>
            <div className="mt-6">
              <Button asChild>
                <a href={clinic.mapUrl} target="_blank" rel="noreferrer">
                  Read reviews on Google
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
