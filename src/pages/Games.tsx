import { Link } from "react-router-dom";
import {
  Trophy, Sparkles, Dices, Target, Gamepad2, Zap, Fish, Flame,
  ChevronRight, Star
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const categories = [
  {
    title: "Lottery Games",
    icon: Trophy,
    description: "Experience the thrill of lottery with Win Go, Racing, K3, 5D and more. Draw results every minute with massive jackpot prizes.",
    games: ["Win Go", "Racing", "K3", "5D Lottery", "Trx Hash"],
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Slots",
    icon: Sparkles,
    description: "Spin to win on hundreds of premium slot machines. From classic fruit slots to modern video slots with bonus features.",
    games: ["Aviator Pro", "Fortune Gems", "Money Coming", "Ganesha Fortune", "Squid Gambler"],
    color: "bg-secondary/20 text-secondary",
  },
  {
    title: "Live Casino",
    icon: Dices,
    description: "Play with real dealers in real-time. Experience the excitement of a physical casino from the comfort of your home.",
    games: ["Roulette", "Blackjack", "Baccarat", "Dragon Tiger", "Teen Patti"],
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Sports Betting",
    icon: Target,
    description: "Bet on cricket, football, tennis, kabaddi and more. Live odds, in-play betting, and competitive markets.",
    games: ["Cricket", "Football", "Tennis", "Kabaddi", "Basketball"],
    color: "bg-secondary/20 text-secondary",
  },
  {
    title: "Rummy",
    icon: Gamepad2,
    description: "Classic Indian card game with real players. Join cash tables, tournaments and win big every day.",
    games: ["Points Rummy", "Deals Rummy", "Pool Rummy"],
    color: "bg-primary/20 text-primary",
  },
  {
    title: "Fishing Games",
    icon: Fish,
    description: "Fun arcade-style fishing games with multipliers, special weapons and exciting bonus rounds.",
    games: ["Happy Fishing", "Jackpot Fishing", "All-Star Fishing"],
    color: "bg-secondary/20 text-secondary",
  },
  {
    title: "Original Games",
    icon: Flame,
    description: "Unique provably fair games exclusive to Ganga Club. Crash, Mines, Plinko and more innovative titles.",
    games: ["Aviator", "Mines", "Crash", "Plinko", "Dice"],
    color: "bg-primary/20 text-primary",
  },
];

const Games = () => (
  <Layout>
    <SEOHead
      title="All Games - Ganga Club | Lottery, Casino, Slots, Sports & More"
      description="Explore 1000+ games at Ganga Club. Play lottery, slots, live casino, sports betting, rummy, fishing & original games. Win real money instantly."
      canonical="https://ganga10.com/games"
      keywords="Ganga Club games, online lottery India, casino games, slot machines, sports betting, rummy online, fishing games, Aviator game"
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-slide-up">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Our <span className="text-gradient-gold">Game Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Over 1,000 games across 7 categories. Find your favourite and start winning today.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.title} className="card-shine rounded-xl p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${cat.color}`}>
                  <cat.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h2 className="mb-2 text-2xl font-bold">{cat.title}</h2>
                  <p className="mb-4 text-muted-foreground">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.games.map((g) => (
                      <span key={g} className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground">
                        <Star className="h-3 w-3 text-primary" /> {g}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://ganga10.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Play <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Games;
