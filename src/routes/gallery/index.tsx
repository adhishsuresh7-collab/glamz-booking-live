import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/gallery/")({
  head: () => ({
    meta: [
      { title: "Gallery — ALN Glamz Makeover Studio" },
      { name: "description", content: "Bridal, party and engagement makeup portfolio by Aleena Uvaise in Malappuram." },
      { property: "og:title", content: "Gallery — ALN Glamz Makeover Studio" },
      { property: "og:description", content: "Bridal & special-occasion makeup portfolio." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  "Bridal Look 01", "Bridal Look 02", "Engagement", "Party Glam",
  "Reception", "Soft Glam", "HD Bridal", "Hair Styling",
  "Traditional Bride", "Modern Bride", "Sangeet", "Special Occasion",
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Portfolio</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">The Gallery</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A curated selection of bridal, engagement and party transformations crafted by Aleena Uvaise.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((label, i) => (
            <figure key={i} className="group">
              <Placeholder label={label} className="aspect-[3/4] shadow-soft transition-transform duration-500 group-hover:-translate-y-1" />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href={waLink("Hi Aleena, I saw your gallery and want to enquire about booking.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full gradient-gold px-8 py-3 text-sm font-medium tracking-wide text-gold-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}