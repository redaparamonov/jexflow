import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/jexflow/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/jexflow.ai/", label: "Instagram" }
  ];

  const footerLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Features", href: "/#features" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" }
  ];

  return (
    <footer className="py-16 border-t border-border/20 bg-gradient-to-t from-card/20 to-background">
      <div className="content-frame">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-0 mb-4">
              <span className="text-3xl font-bold text-gradient">Jex</span>
              <span className="text-3xl font-bold text-secondary">Flow</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming business automation with intelligence and elegance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card border border-border/20 rounded-lg flex items-center justify-center hover:bg-accent hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground hover:text-accent-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 JexFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;