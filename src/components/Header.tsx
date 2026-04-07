import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, Gift } from "lucide-react";
import logo from "@/assets/ganga-club-logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Games", path: "/games" },
  { label: "Promotions", path: "/promotions" },
  { label: "Gift Code", path: "/gift-code" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ganga Club Logo" className="h-12 w-12 rounded-lg md:h-14 md:w-14" />
          <span className="text-xl font-bold text-gradient-gold md:text-2xl">Ganga Club</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === l.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <LogIn className="h-4 w-4" /> Login
            </Link>
            <a
              href="https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gold-gradient px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <UserPlus className="h-4 w-4" /> Register
            </a>
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="text-foreground lg:hidden" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/50 bg-background p-4 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                pathname === l.path ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg border border-primary/50 py-3 text-center text-sm font-semibold text-primary"
            >
              Login
            </Link>
            <a
              href="https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-gold-gradient py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Register
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
