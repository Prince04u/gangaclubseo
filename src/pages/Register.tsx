import { UserPlus, ChevronRight, Gift, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Register = () => (
  <Layout>
    <SEOHead
      title="Ganga Club Register & Sign Up - Create Account | Get ₹10,000 Bonus"
      description="Ganga Club register and sign up for free. Create your Ganga Club account today and get a welcome bonus up to ₹10,000. Ganga Club sign up takes just 30 seconds!"
      canonical="https://ganga10.com/register"
      keywords="Ganga Club register, Ganga Club sign up, create Ganga Club account, Ganga Club registration, Ganga Club new account, Ganga Club sign up bonus"
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl animate-slide-up">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
              <span className="text-gradient-gold">Ganga Club</span> Register & Sign Up
            </h1>
            <p className="text-lg text-muted-foreground">
              Ganga Club sign up is free and takes just 30 seconds. Register your Ganga Club account now and claim a welcome bonus of up to ₹10,000!
            </p>
          </div>

          {/* Register CTA */}
          <div className="card-shine rounded-2xl p-8 text-center glow-gold md:p-12">
            <UserPlus className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-2xl font-bold">Ganga Club Sign Up Now</h2>
            <p className="mx-auto mb-4 max-w-md text-muted-foreground">
              Create your Ganga Club account on the official platform. Register with your mobile number and start playing 1,000+ games instantly.
            </p>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">✓ Free Registration</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">✓ ₹10,000 Bonus</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">✓ Free Gift Code</span>
            </div>
            <a
              href="https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 animate-pulse-glow"
            >
              Ganga Club Register <ChevronRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Already registered?{" "}
              <Link to="/login" className="font-semibold text-primary hover:underline">
                Ganga Club Login
              </Link>
            </p>
          </div>

          {/* How to Register */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold">
              How to <span className="text-gradient-gold">Register on Ganga Club</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Enter Mobile Number", text: "Visit ganga10 and enter your mobile number to start Ganga Club registration." },
                { step: "2", title: "Create Password", text: "Set a strong password for your Ganga Club account. Your sign up is almost complete!" },
                { step: "3", title: "Claim Welcome Bonus", text: "After Ganga Club sign up, claim your welcome bonus up to ₹10,000 and start playing." },
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

          {/* Sign Up Benefits */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold">
              <span className="text-gradient-gold">Ganga Club Sign Up</span> Benefits
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Gift, title: "Welcome Bonus", text: "Get up to ₹10,000 welcome bonus when you register on Ganga Club. Plus daily free gift codes!" },
                { icon: Star, title: "VIP Access", text: "Ganga Club sign up unlocks VIP tiers with exclusive rewards, cashback, and personal support." },
                { icon: Trophy, title: "1000+ Games", text: "After Ganga Club registration, access lottery, casino, slots, sports, rummy, and fishing games." },
              ].map((b) => (
                <div key={b.title} className="card-shine rounded-xl p-6 text-center">
                  <b.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Register;
