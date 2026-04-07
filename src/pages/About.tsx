import { Shield, Users, Award, HeartHandshake } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const About = () => (
  <Layout>
    <SEOHead
      title="About Ganga Club - India's Trusted Online Gaming Platform"
      description="Learn about Ganga Club, India's most trusted online gaming platform with 500K+ players. Safe, secure, and committed to responsible gaming."
      canonical="https://ganga10.com/about"
      keywords="about Ganga Club, trusted gaming platform India, responsible gaming, online gaming company"
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center animate-slide-up">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            About <span className="text-gradient-gold">Ganga Club</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            India's premier online gaming destination, trusted by over 500,000 players nationwide.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Ganga Club is India's leading online gaming platform, offering a world-class gaming experience across lottery, casino, slots, sports betting, rummy, and more. With over 1,000 games from top providers, we deliver entertainment that's fair, secure, and exciting.
          </p>
          <p>
            Founded with a mission to provide accessible and trustworthy gaming entertainment, Ganga Club combines cutting-edge technology with a deep understanding of what Indian players want. Our platform supports instant UPI deposits, fast withdrawals, and 24/7 customer support to ensure a seamless experience.
          </p>
          <p>
            We are committed to responsible gaming. All our games are provably fair, and we provide tools for players to set deposit limits, take breaks, and play responsibly.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "Licensed & Secure", text: "Advanced SSL encryption and secure payment processing." },
            { icon: Users, title: "500K+ Players", text: "A growing community of passionate gamers across India." },
            { icon: Award, title: "Award Winning", text: "Recognised for excellence in online gaming entertainment." },
            { icon: HeartHandshake, title: "Responsible Gaming", text: "Tools and support for safe, controlled gaming." },
          ].map((item) => (
            <div key={item.title} className="card-shine rounded-xl p-6 text-center">
              <item.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
