import { waLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, PHONE_DISPLAY, ADDRESS } from "@/lib/contact";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">ALN Glamz Makeover Studio</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            By Aleena Uvaise — Professional Makeup Artist in Malappuram.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold">Open 24 hours</p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg">Contact</h4>
          <a href={waLink("Hi Aleena, I want to book a makeup session.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp {PHONE_DISPLAY}
          </a>
          <a href={`tel:+${"918086706787"}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Instagram className="h-4 w-4 text-gold" /> {INSTAGRAM_HANDLE}
          </a>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg">Studio</h4>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {ADDRESS}
          </p>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ALN Glamz Makeover Studio by Aleena Uvaise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}