import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";
import { waLink, ADDRESS, PHONE_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";
import { Sparkles, Heart, ShieldCheck, Clock, Star, MessageCircle, Instagram, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { name: "Bridal Makeup", desc: "A signature bridal look — radiant, long-lasting and tailored to your features for the most important day of your life." },
  { name: "Party Makeup", desc: "Effortless glam for soirées, receptions and celebrations — flawless skin, soft eyes, statement finishes." },
  { name: "Engagement Makeup", desc: "Soft, romantic and luminous — a fresh, dewy look that photographs beautifully under any light." },
  { name: "Hair Styling", desc: "From classic bridal updos to modern textured waves, hairstyling crafted to complement your look." },
  { name: "Special Occasion Makeovers", desc: "Birthdays, anniversaries, photoshoots — bespoke makeovers designed around the moment you're celebrating." },
];

const homeReviews = [
  { name: "Fathima R.", text: "Very professional service and amazing creativity." },
  { name: "Aysha M.", text: "Makeup lasted the entire day without touch-ups." },
  { name: "Hiba K.", text: "Received so many compliments on my look." },
  { name: "Noora S.", text: "Highly recommended for bridal makeup." },
];

const why = [
  { icon: ShieldCheck, title: "Hygienic & Professional", text: "Sanitised tools, premium products, attentive service from start to finish." },
  { icon: Clock, title: "Long-Lasting Finish", text: "Crafted to stay flawless from morning ceremonies to late-night celebrations." },
  { icon: Heart, title: "Personalised Looks", text: "Every face is unique — your makeup is designed around your features and story." },
  { icon: Sparkles, title: "Loved by Clients", text: "Trusted by brides across Malappuram for the most important days of their lives." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-editorial" />
        <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(oklch(0.2_0_0)_1px,transparent_1px)] [background-size:3px_3px]" />
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center md:py-40">
          <p className="text-[11px] uppercase tracking-[0.5em] text-gold">Best Makeup Artist in Malappuram</p>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            ALN GLAMZ
            <span className="mt-2 block font-display italic text-foreground/90">Makeover Studio</span>
          </h1>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-gold/60" />
            <p className="font-display text-xl italic tracking-wide gold-text-gradient sm:text-2xl">
              Aleena Uvaise
            </p>
            <span className="h-px w-12 bg-gold/60" />
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70">
            A personal atelier for bridal, engagement and special‑occasion makeup —
            crafted with care, precision and a signature editorial finish.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Hi Aleena, I want to book a makeup session.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-sm font-medium tracking-wide text-gold-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Book via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 bg-transparent px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
            >
              View Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 flex items-center gap-4">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/60">Trusted by 500+ brides</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Placeholder label="The Artist" className="aspect-[3/4] shadow-soft" />
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">About</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A personal touch behind every look.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I'm <span className="text-foreground">Aleena Uvaise</span>, the artist behind ALN Glamz Makeover Studio.
                For me, makeup is more than a service — it's a way to make you feel confident, radiant and entirely yourself
                on the days that matter most.
              </p>
              <p>
                Every bride and every client gets my undivided attention. I work with premium, skin-friendly products,
                maintain strict hygiene, and design each look around your features, outfit and personality so the finish
                is long-lasting and timeless in photographs.
              </p>
              <p>From the very first consultation to the final touch, my promise is simple — care, creativity and craft.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Services</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Crafted for every kind of celebration</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-luxe">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full gradient-gold text-gold-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={waLink(`Hi Aleena, I want to enquire about ${s.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground"
                >
                  Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Portfolio</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Recent transformations</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {["Bridal", "Engagement", "Party", "Reception", "Soft Glam", "HD Bridal"].map((l) => (
            <Placeholder key={l} label={l} className="aspect-[3/4] shadow-soft transition-transform duration-500 hover:-translate-y-1" />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium tracking-wide text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Words from my clients</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeReviews.map((r, i) => (
              <article key={i} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                <p className="mt-5 font-display text-sm">{r.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium tracking-wide text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Read All Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Why Choose Me</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">A standard you can feel</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border/60 bg-card p-7 text-center shadow-soft">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-gold-foreground">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="px-5 pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-background shadow-luxe md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Reserve Your Date</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Book Your Appointment Now</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-background/70">
            Limited slots each week. Send a quick message on WhatsApp and Aleena will get back to you personally.
          </p>
          <a
            href={waLink("Hi Aleena, I want to book a makeup session.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-8 py-4 text-sm font-medium tracking-wide text-gold-foreground shadow-luxe transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Book Now (WhatsApp)
          </a>
        </div>
      </section>

      {/* LOCATION + CONTACT */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Visit the Studio</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Find us in Malappuram</h2>
            <p className="mt-5 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {ADDRESS}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={waLink("Hi Aleena, I want to book a makeup session.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-gold">
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp {PHONE_DISPLAY} — Open 24 hours
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-gold">
                <Instagram className="h-4 w-4 text-gold" /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Placeholder label="Open in Google Maps" className="aspect-[4/3] shadow-soft" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
