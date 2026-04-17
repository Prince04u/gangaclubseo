import { Link } from "react-router-dom";
import {
  Dices, Trophy, Gamepad2, Zap, Star, Users, Shield, Clock,
  ChevronRight, Sparkles, Target, Flame, LogIn, UserPlus, Gift
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import GameCard from "@/components/GameCard";

const games = [
  { title: "Lottery", description: "Win Go, Racing, K3, 5D and more exciting lottery games with huge jackpots at Ganga Club.", icon: Trophy, color: "bg-primary/20 text-primary" },
  { title: "Slots", description: "Hundreds of premium slot games including Aviator Pro, Fortune Gems, and more on Ganga Club.", icon: Sparkles, color: "bg-secondary/20 text-secondary" },
  { title: "Casino", description: "Live casino experience with real dealers for roulette, blackjack and baccarat.", icon: Dices, color: "bg-primary/20 text-primary" },
  { title: "Sports", description: "Bet on cricket, football, tennis and all major sporting events at Ganga Club.", icon: Target, color: "bg-secondary/20 text-secondary" },
  { title: "Rummy", description: "Classic card game with real players and real cash prizes every day.", icon: Gamepad2, color: "bg-primary/20 text-primary" },
  { title: "Fishing", description: "Fun arcade-style fishing games with multipliers and bonus rounds.", icon: Zap, color: "bg-secondary/20 text-secondary" },
];

const stats = [
  { label: "Active Players", value: "500K+", icon: Users },
  { label: "Games Available", value: "1000+", icon: Gamepad2 },
  { label: "Secure Platform", value: "100%", icon: Shield },
  { label: "Instant Withdrawals", value: "24/7", icon: Clock },
];

const Index = () => (
  <Layout>
    <SEOHead
      title="Ganga Club - Login, Register & Play | India's #1 Online Gaming Platform"
      description="Ganga Club is India's top online gaming platform. Ganga Club login, Ganga Club register & sign up to play lottery, slots, casino & more. Get Ganga Club free gift code today!"
      canonical="https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807"
      keywords="Ganga Club, Ganga Club login, Ganga Club register, Ganga Club sign up, Ganga Club gift code, Ganga Club free gift code, online gaming India"
    />

    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ganga Club",
          url: "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807",
          description: "Ganga Club - India's premier online gaming platform. Login, register and play lottery, casino, slots, rummy and sports betting. Get free gift codes.",
          potentialAction: { "@type": "SearchAction", target: "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807/search?q={search_term_string}", "query-input": "required name=search_term_string" },
        }),
      }}
    />

    {/* Hero */}
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,96%,56%,0.08),transparent_60%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center animate-slide-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Flame className="h-3.5 w-3.5" /> India's #1 Trusted Gaming Platform
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="text-gradient-gold">Ganga Club</span>{" "}
            — Play & Win Big
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Ganga Club login or sign up to join 500,000+ players. Play lottery, casino, slots, sports and more with instant payouts. Claim your Ganga Club free gift code today!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 animate-pulse-glow"
            >
              <LogIn className="h-5 w-5" /> Ganga Club Login
            </a>
            <a
              href="https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              <UserPlus className="h-5 w-5" /> Register Now
            </a>
          </div>
          <div className="mt-4">
            <Link
              to="/gift-code"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Gift className="h-4 w-4" /> Get Ganga Club Free Gift Code →
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border/50 bg-card/50 py-12">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
            <div className="text-2xl font-bold text-foreground md:text-3xl">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Login & Register Section */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-gold">Ganga Club Login</span> & Register
          </h2>
          <p className="text-muted-foreground">
            New to Ganga Club? Sign up in seconds. Already a member? Login to your Ganga Club account and start playing instantly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/login" className="card-shine rounded-xl p-8 text-center transition-all hover:-translate-y-1 hover:glow-gold">
            <LogIn className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Ganga Club Login</h3>
            <p className="text-sm text-muted-foreground">Access your Ganga Club account. Login securely and continue playing your favourite games.</p>
          </Link>
          <Link to="/register" className="card-shine rounded-xl p-8 text-center transition-all hover:-translate-y-1 hover:glow-gold">
            <UserPlus className="mx-auto mb-4 h-10 w-10 text-secondary" />
            <h3 className="mb-2 text-xl font-bold">Ganga Club Register</h3>
            <p className="text-sm text-muted-foreground">Create your Ganga Club account. Sign up today and claim your welcome bonus of up to ₹10,000.</p>
          </Link>
          <Link to="/gift-code" className="card-shine rounded-xl p-8 text-center transition-all hover:-translate-y-1 hover:glow-gold">
            <Gift className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Ganga Club Gift Code</h3>
            <p className="text-sm text-muted-foreground">Redeem your Ganga Club free gift code and get bonus cash, free spins and exclusive rewards.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* Games */}
    <section className="border-y border-border/50 bg-card/30 py-16 md:py-24" id="games">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Popular <span className="text-gradient-gold">Ganga Club Games</span>
          </h2>
          <p className="text-muted-foreground">
            Login to Ganga Club and explore 1,000+ games. From thrilling lottery draws to live casino tables.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <GameCard key={g.title} {...g} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View All Games <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Ganga Club */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose <span className="text-gradient-gold">Ganga Club</span>?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Shield, title: "100% Safe & Secure", text: "Ganga Club uses advanced encryption and secure payment gateways to protect your data and funds." },
            { icon: Zap, title: "Instant Transactions", text: "Deposit and withdraw instantly via UPI, bank transfer, and other popular payment methods on Ganga Club." },
            { icon: Star, title: "Free Gift Codes Daily", text: "Get Ganga Club free gift codes daily. Redeem for bonus cash, free spins and exclusive VIP rewards." },
          ].map((item) => (
            <div key={item.title} className="card-shine rounded-xl p-8 text-center">
              <item.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ for SEO */}
    <section className="border-t border-border/50 bg-card/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            <span className="text-gradient-gold">Ganga Club</span> FAQ
          </h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "How to login to Ganga Club?", acceptedAnswer: { "@type": "Answer", text: "Visit ganga10.com and click Login. Enter your registered mobile number and password to access your Ganga Club account instantly." } },
                  { "@type": "Question", name: "How to register on Ganga Club?", acceptedAnswer: { "@type": "Answer", text: "Go to ganga10.com and click Register. Enter your mobile number, create a password, and sign up. You'll receive a welcome bonus up to ₹10,000." } },
                  { "@type": "Question", name: "How to get Ganga Club free gift code?", acceptedAnswer: { "@type": "Answer", text: "Ganga Club shares free gift codes daily through the app, social media channels, and the promotions page. Check regularly for the latest codes." } },
                  { "@type": "Question", name: "Is Ganga Club safe and trusted?", acceptedAnswer: { "@type": "Answer", text: "Yes, Ganga Club is India's most trusted gaming platform with 500K+ active players, secure payments, and 24/7 customer support." } },
                  { "@type": "Question", name: "What games can I play on Ganga Club?", acceptedAnswer: { "@type": "Answer", text: "Ganga Club offers 1000+ games including lottery (Win Go, K3, 5D), slots, live casino, sports betting, rummy, fishing, and original games like Aviator." } },
                ],
              }),
            }}
          />
          <div className="space-y-4">
            {[
              { q: "How to login to Ganga Club?", a: "Visit ganga10.com and click Login. Enter your registered mobile number and password to access your Ganga Club account instantly." },
              { q: "How to register on Ganga Club?", a: "Go to ganga10.com and click Register. Enter your mobile number, create a password, and sign up. You'll receive a welcome bonus up to ₹10,000." },
              { q: "How to get Ganga Club free gift code?", a: "Ganga Club shares free gift codes daily through the app, social media channels, and the promotions page. Visit our gift code page for the latest codes and redemption instructions." },
              { q: "Is Ganga Club safe and trusted?", a: "Yes, Ganga Club is India's most trusted gaming platform with 500K+ active players, SSL encryption, secure UPI payments, and 24/7 customer support." },
              { q: "What games can I play on Ganga Club?", a: "Ganga Club offers 1,000+ games including lottery (Win Go, K3, 5D), slots (Aviator, Fortune Gems), live casino, sports betting, rummy, fishing, and original games." },
            ].map((faq) => (
              <details key={faq.q} className="card-shine rounded-xl">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-foreground">{faq.q}</summary>
                <p className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-10 px-4">
  <div className="mx-auto max-w-4xl text-center">
    
    <h2 className="text-2xl font-bold mb-4">
      Explore Gaming Platforms Like Ganga Club
    </h2>

    <p className="text-muted-foreground leading-relaxed mb-4">
      If you are enjoying 
      <a href="https://gangaclub12.net/" target="_blank" className="text-primary underline"> Ganga game</a>, 
      you can also explore other popular platforms like 
      <a href="https://13lgames.live/" target="_blank" className="text-primary underline"> 13L Game</a> 
      and 
      <a href="https://gangaclub12.in/" target="_blank" className="text-primary underline"> Ganga Club </a>. 
      These platforms offer exciting online games, bonuses, and secure gameplay similar to Ganga Club.
    </p>

    <div className="mt-4">
      <a href="https://gangaclub12.net/" target="_blank" className="underline mx-2">Ganga game</a> |
      <a href="https://13lgames.live/" target="_blank" className="underline mx-2">13L Game</a> |
      <a href="https://gangaclub12.in/" target="_blank" className="underline mx-2">Ganga club</a>
    </div>

  </div>
</section>
  </Layout>
);

export default Index;
