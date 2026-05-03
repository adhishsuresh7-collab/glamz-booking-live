import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Star } from "lucide-react";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title: "Reviews & Testimonials — ALN Glamz Makeover Studio" },
      { name: "description", content: "Read what brides and clients in Malappuram say about Aleena Uvaise." },
      { property: "og:title", content: "Reviews — ALN Glamz Makeover Studio" },
      { property: "og:description", content: "Client testimonials for Aleena Uvaise, makeup artist in Malappuram." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Fathima R.", role: "Bride", text: "Very professional service and amazing creativity. Aleena understood exactly what I wanted on my big day." },
  { name: "Aysha M.", role: "Engagement", text: "Makeup lasted the entire day without touch-ups. Felt absolutely beautiful from morning to night." },
  { name: "Hiba K.", role: "Party Glam", text: "Received so many compliments. The look was glamorous yet so natural on the skin." },
  { name: "Noora S.", role: "Bride", text: "Highly recommended for bridal makeup. Hygiene, products and patience — everything was perfect." },
  { name: "Safa P.", role: "Reception", text: "Aleena has a real eye for detail. The hair and makeup matched my outfit so beautifully." },
  { name: "Rafiya V.", role: "Sangeet", text: "Loved how soft and flawless my skin looked in every photo. Will definitely book again." },
  { name: "Jumana T.", role: "Bride", text: "From trial to wedding day she was incredibly professional. Felt safe and pampered throughout." },
  { name: "Lubna A.", role: "Special Occasion", text: "Quick, neat and the result was stunning. Best makeup artist in Malappuram, hands down." },
  { name: "Sumayya N.", role: "Bride", text: "She tailored the look exactly to my features. Family couldn't stop complimenting." },
];

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Loved by clients</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Reviews & Testimonials</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Honest words from brides and clients across Malappuram who trusted Aleena with their most important moments.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <article key={i} className="rounded-2xl border border-border/60 bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-6">
                <p className="font-display text-base">{r.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href={waLink("Hi Aleena, I want to book a makeup session.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full gradient-gold px-8 py-3 text-sm font-medium tracking-wide text-gold-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
          >
            Book your appointment
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}