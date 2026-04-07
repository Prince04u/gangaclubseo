import { LogIn, ChevronRight, Shield, Zap, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Login = () => (
  <Layout>
    <SEOHead
      title="Ganga Club Login - Access Your Account | Play & Win Real Cash"
      description="Ganga Club login to your account. Access 1000+ games, claim daily bonuses & gift codes. Secure Ganga Club login with instant access to lottery, casino, slots & more."
      canonical="https://ganga10.com/login"
      keywords="Ganga Club login, Ganga Club account login, Ganga Club sign in, login Ganga Club, Ganga Club app login"
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl animate-slide-up">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
              <span className="text-gradient-gold">Ganga Club</span> Login
            </h1>
            <p className="text-lg text-muted-foreground">
              Login to your Ganga Club account to play 1,000+ games, claim daily bonuses, and redeem free gift codes. Access your account securely in seconds.
            </p>
          </div>

          {/* Login CTA Card */}
          <div className="card-shine rounded-2xl p-8 text-center glow-gold md:p-12">
            <LogIn className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-2xl font-bold">Login to Ganga Club</h2>
            <p className="mx-auto mb-8 max-w-md text-muted-foreground">
              Click below to securely login to your Ganga Club account on the official platform. Enter your registered mobile number and password.
            </p>
            <a
              href="https://ganga10.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 animate-pulse-glow"
            >
              Ganga Club Login <ChevronRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-primary hover:underline">
                Register on Ganga Club
              </Link>
            </p>
          </div>

          {/* How to Login */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold">
              How to <span className="text-gradient-gold">Login to Ganga Club</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Visit Ganga Club", text: "Go to ganga10.com on your mobile browser or open the Ganga Club app." },
                { step: "2", title: "Enter Credentials", text: "Type your registered mobile number and password on the Ganga Club login page." },
                { step: "3", title: "Start Playing", text: "Access 1,000+ games, claim bonuses, and redeem your Ganga Club gift codes." },
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

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Why <span className="text-gradient-gold">Ganga Club Login</span> is Worth It
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Shield, title: "Secure Login", text: "Ganga Club login is protected with advanced encryption. Your account and funds are always safe." },
                { icon: Zap, title: "Instant Access", text: "Login to Ganga Club in seconds. No waiting — start playing your favourite games immediately." },
                { icon: Gift, title: "Daily Rewards", text: "Ganga Club members get free gift codes, cashback, and exclusive bonuses after login every day." },
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

export default Login;
