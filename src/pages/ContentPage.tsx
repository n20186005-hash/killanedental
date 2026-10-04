import { Link } from "wouter";

import { FAQList } from "@/components/FAQList";
import { PageHead } from "@/components/PageHead";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteLayout } from "@/components/SiteLayout";
import { BookingButton } from "@/components/BookingButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { clinic } from "@/lib/clinicData";
import { type LandingPageContent, landingPages } from "@/lib/pageContent";
import {
  buildDentistSchema,
  buildFAQSchema,
  buildOrganizationSchema,
  buildPersonSchema,
  buildWebPageSchema,
} from "@/lib/seo";

function pageSchema(page: LandingPageContent) {
  const schema: object[] = [
    buildOrganizationSchema(),
    buildDentistSchema(page.path),
    buildWebPageSchema({
      title: page.title,
      description: page.metaDescription,
      path: page.path,
    }),
  ];

  if (page.faqs.length) {
    schema.push(buildFAQSchema(page.faqs));
  }

  if (page.path === landingPages.aboutDoctor.path) {
    schema.push(buildPersonSchema(page.path));
  }

  return schema;
}

export function ContentPage({ page }: { page: LandingPageContent }) {
  return (
    <SiteLayout>
      <PageHead
        title={page.title}
        description={page.metaDescription}
        path={page.path}
        schema={pageSchema(page)}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              {page.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {page.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>Call {clinic.phone}</a>
              </Button>
              <BookingButton className="bg-amber-500 text-white hover:bg-amber-500/90" />
            </div>
          </div>

          <div className="md:col-span-5">
            <Card className="rounded-3xl p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Local Practice
              </p>
              <p className="mt-4 text-lg font-semibold">{page.summary}</p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p>{clinic.fullAddress}</p>
                <p>{clinic.phone}</p>
                <p>
                  <Link href="/contact" className="text-foreground underline underline-offset-4">
                    View address, hours and directions
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-6">
        <div className="grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <Card key={section.title} className="rounded-3xl p-6">
              <h2 className="font-display text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? (
                  <ul className="space-y-2 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={`Questions about ${page.eyebrow.toLowerCase()}`}
          description="Straightforward answers to common questions before you book."
        />
        <div className="mt-8">
          <FAQList faqs={page.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-20">
        <Card className="rounded-3xl border-teal-600/20 bg-teal-600/5 p-8">
          <h2 className="font-display text-3xl">{page.ctaTitle}</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">{page.ctaText}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>Call the clinic</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact & directions</Link>
            </Button>
          </div>
        </Card>
      </section>
    </SiteLayout>
  );
}
