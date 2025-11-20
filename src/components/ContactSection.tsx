import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@jexflow.com",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+212 66219551",
    gradient: "from-secondary to-secondary/70"
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday to Friday\n09:00 AM to 05:00 PM",
    gradient: "from-accent to-accent/70"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="content-frame">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={info.title}
                className="feature-card h-full text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {info.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
