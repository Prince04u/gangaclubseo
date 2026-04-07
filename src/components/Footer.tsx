import { Link } from "react-router-dom";
import logo from "@/assets/ganga-club-logo.jpg";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card">
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <img src={logo} alt="Ganga Club Logo" className="h-12 w-12 rounded-lg" />
            <span className="text-xl font-bold text-gradient-gold">Ganga Club</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            India's premier online gaming destination with lottery, casino, slots, and more.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-primary">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/games" className="hover:text-foreground">Games</Link></li>
            <li><Link to="/promotions" className="hover:text-foreground">Promotions</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-primary">Games</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/games" className="hover:text-foreground">Lottery</Link></li>
            <li><Link to="/games" className="hover:text-foreground">Slots</Link></li>
            <li><Link to="/games" className="hover:text-foreground">Casino</Link></li>
            <li><Link to="/games" className="hover:text-foreground">Sports</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-primary">Support</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="https://ganga10.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Play Now</a></li>
            <li><Link to="/contact" className="hover:text-foreground">Help Center</Link></li>
            <li><Link to="/about" className="hover:text-foreground">Responsible Gaming</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Ganga Club. All rights reserved. Play responsibly. 18+</p>
      </div>
    </div>
  </footer>
);

export default Footer;
