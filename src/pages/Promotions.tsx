import { Gift, Percent, Crown, Repeat, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const promos = [
  {
    title: "Welcome Bonus — Up to ₹10,000",
    description: "New members receive a massive deposit bonus on their first three deposits. Start with extra funds and multiply your winnings from day one.",
    icon: Gift,
    tag: "New Members",
  },
  {
    title: "Daily Cashback — 5% Every Day",
    description: "Get 5% cashback on your net losses every single day. The more you play, the more you earn back. No wagering requirements.",
    icon: Percent,
    tag: "Daily",
  },
  {
    title: "VIP Rewards Program",
    description: "Level up through Bronze, Silver, Gold, Platinum and Diamond tiers. Enjoy exclusive bonuses, personal account managers and special event invitations.",
    icon: Crown,
    tag: "VIP",
  },
  {
    title: "Refer & Earn ₹500 Per Friend",
    description: "Invite friends to Ganga Club and earn ₹500 for every friend who signs up and makes their first deposit. Unlimited referrals.",
    icon: Repeat,
    tag: "Referral",
  },
];

const Promotions = () => (
  <Layout>
    <SEOHead
      title="Promotions & Bonuses - Ganga Club | Welcome Bonus, Cashback & VIP"
      description="Claim exciting bonuses at Ganga Club. Welcome bonus up to ₹10,000, daily 5% cashback, VIP rewards, refer & earn ₹500. Best gaming promotions in India."
      canonical="https://ganga10.com/promotions"
      keywords="Ganga Club bonus, welcome bonus, cashback, VIP rewards, referral bonus, online gaming promotions India"
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center animate-slide-up">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            <span className="text-gradient-gold">Promotions</span> & Bonuses
          </h1>
          <p className="text-lg text-muted-foreground">
            Boost your gameplay with our generous bonuses and rewards. New offers every day!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {promos.map((p) => (
            <div key={p.title} className="card-shine rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:glow-gold">
              <div className="mb-4 flex items-center justify-between">
                <p.icon className="h-10 w-10 text-primary" />
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
              </div>
              <h2 className="mb-3 text-xl font-bold">{p.title}</h2>
              <p className="mb-6 text-sm text-muted-foreground">{p.description}</p>
              <a
                href="https://ganga10.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Claim Now <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Promotions;
