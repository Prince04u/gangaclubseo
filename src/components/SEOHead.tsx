import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  image?: string;
}

const SEOHead = ({ title, description, canonical, keywords, image }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    // Basic SEO
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Open Graph (Facebook / WhatsApp preview)
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:site_name", "Ganga Club");

    if (image) {
      setMeta("og:image", image);
    }

    // Twitter preview
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    if (image) {
      setMeta("twitter:image", image);
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical, keywords, image]);

  return null;
};

export default SEOHead;
