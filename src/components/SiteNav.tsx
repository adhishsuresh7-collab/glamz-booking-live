import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-wide text-foreground">
            ALN GLAMZ
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Makeover Studio
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm font-medium tracking-wide transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-muted-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}