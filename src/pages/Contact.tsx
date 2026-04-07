import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Contact Us - Ganga Club | 24/7 Customer Support"
        description="Get in touch with Ganga Club's support team. 24/7 live chat, email support, and help center. We're here to help with deposits, withdrawals, and gameplay."
        canonical="https://ganga10.com/contact"
        keywords="Ganga Club contact, customer support, help center, live chat support, gaming support India"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center animate-slide-up">
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
              <span className="text-gradient-gold">Contact</span> Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Our support team is available 24/7. Get help with any questions or issues.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: MessageCircle, title: "Live Chat", text: "Instant support via our in-app live chat. Available 24/7.", link: "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807", linkText: "Start Chat" },
              { icon: Mail, title: "Email Support", text: "Send us an email and we'll respond within 2 hours.", link: "mailto:support@ganga10.com", linkText: "Send Email" },
              { icon: Clock, title: "24/7 Available", text: "Our team is always online to assist you, any time of day.", link: "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807", linkText: "Get Help" },
            ].map((c) => (
              <div key={c.title} className="card-shine rounded-xl p-8 text-center">
                <c.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h2 className="mb-2 text-xl font-bold">{c.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground">{c.text}</p>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                  {c.linkText}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mx-auto mt-16 max-w-xl">
            <div className="card-shine rounded-xl p-8">
              <h2 className="mb-6 text-center text-2xl font-bold">Send Us a Message</h2>
              {submitted ? (
                <div className="py-8 text-center">
                  <Send className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <p className="text-lg font-semibold">Message Sent!</p>
                  <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gold-gradient py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
