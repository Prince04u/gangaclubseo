import { Gift, ChevronRight, Sparkles, Clock, Star, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const giftCodes = [
  { code: "GANGA500", reward: "₹500 Bonus Cash", validity: "Valid Today", status: "Active" },
  { code: "GANGAVIP", reward: "50 Free Spins", validity: "Valid This Week", status: "Active" },
  { code: "WELCOME10K", reward: "₹10,000 Welcome Bonus", validity: "New Users Only", status: "Active" },
  { code: "GANGADAILY", reward: "₹100 Daily Bonus", validity: "Login Daily", status: "Active" },
];

const GiftCode = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <Layout>
      <SEOHead
        title="Ganga Club Gift Code - Free Gift Codes Today | Redeem & Win"
        description="Get the latest Ganga Club gift code and Ganga Club free gift code today. Redeem gift codes for bonus cash, free spins & exclusive rewards. Updated daily!"
        canonical="https://ganga10.com/gift-code"
        keywords="Ganga Club gift code, Ganga Club free gift code, Ganga Club gift code today, Ganga Club redeem code, Ganga Club bonus code, free gift code Ganga Club"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How to get Ganga Club free gift code?", acceptedAnswer: { "@type": "Answer", text: "Ganga Club shares free gift codes daily on the app, website, and social media. Visit the gift code page regularly for the latest codes." } },
              { "@type": "Question", name: "How to redeem Ganga Club gift code?", acceptedAnswer: { "@type": "Answer", text: "Login to your Ganga Club account, go to the gift code section, paste the code and click Redeem. The bonus will be credited instantly." } },
              { "@type": "Question", name: "Are Ganga Club gift codes free?", acceptedAnswer: { "@type": "Answer", text: "Yes! Ganga Club free gift codes are shared daily and are completely free to use. No purchase required." } },
            ],
          }),
        }}
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl animate-slide-up">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Updated Daily
              </div>
              <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
                <span className="text-gradient-gold">Ganga Club</span> Free Gift Code
              </h1>
              <p className="text-lg text-muted-foreground">
                Get the latest Ganga Club gift codes below. Copy and redeem on ganga10.com to claim free bonus cash, free spins, and exclusive rewards!
              </p>
            </div>

            {/* Gift Codes */}
            <div className="space-y-4">
              {giftCodes.map((gc) => (
                <div key={gc.code} className="card-shine flex flex-col items-center justify-between gap-4 rounded-xl p-6 sm:flex-row">
                  <div className="flex items-center gap-4">
                    <Gift className="h-8 w-8 shrink-0 text-primary" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-bold text-foreground">{gc.code}</span>
                        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold text-green-400">{gc.status}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{gc.reward} • {gc.validity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(gc.code)}
                    className="inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Copy className="h-4 w-4" />
                    {copiedCode === gc.code ? "Copied!" : "Copy Code"}
                  </button>
                </div>
              ))}
            </div>

            {/* How to Redeem */}
            <div className="mt-16">
              <h2 className="mb-8 text-center text-2xl font-bold">
                How to Redeem <span className="text-gradient-gold">Ganga Club Gift Code</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { step: "1", title: "Copy Gift Code", text: "Copy any active Ganga Club free gift code from the list above." },
                  { step: "2", title: "Login to Ganga Club", text: "Login to your Ganga Club account at ganga10.com. New users can register first." },
                  { step: "3", title: "Redeem & Win", text: "Go to the gift code section, paste your code and click Redeem. Bonus credited instantly!" },
                ].map((s) => (
                  <div key={s.step} className="card-shine rounded-xl p-6 text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                      {s.step}
                    </div>
                    <h3 className="mb-2 font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="mb-8 text-center text-2xl font-bold">
                <span className="text-gradient-gold">Gift Code</span> FAQ
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How to get Ganga Club free gift code?", a: "Ganga Club shares free gift codes daily on this page, in the app, and on social media. Bookmark this page and check daily for new codes!" },
                  { q: "How to redeem Ganga Club gift code?", a: "Login to your Ganga Club account at ganga10.com, navigate to the gift code section, paste the code and click Redeem. The bonus will be credited to your account instantly." },
                  { q: "Are Ganga Club gift codes free?", a: "Yes! All Ganga Club gift codes listed on this page are completely free. No purchase is required to redeem them." },
                  { q: "How often are new gift codes released?", a: "Ganga Club releases new free gift codes daily. Some special codes are released during festivals and events with higher rewards." },
                ].map((faq) => (
                  <details key={faq.q} className="card-shine rounded-xl">
                    <summary className="cursor-pointer px-6 py-4 font-semibold text-foreground">{faq.q}</summary>
                    <p className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 card-shine rounded-2xl p-8 text-center glow-gold md:p-12">
              <h2 className="mb-4 text-2xl font-bold">
                Don't Have a <span className="text-gradient-gold">Ganga Club</span> Account?
              </h2>
              <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                Register on Ganga Club for free and start redeeming gift codes today. Get a welcome bonus of up to ₹10,000!
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://ganga10.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-8 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Register Now <ChevronRight className="h-5 w-5" />
                </a>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Already a member? Login →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GiftCode;
