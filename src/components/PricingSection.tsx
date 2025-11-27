import purpleSilk from "@/assets/purple_silk.png";
import pinkSilk from "@/assets/pink_silk.png";
import blueSilk from "@/assets/blue_silk.png";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "AI Call Receptionist",
      price: "$1599",
      period: "One-Time Purchase",
      features: [
        "24/7 call answering & routing",
        "Customizable greeting & voice",
        "Appointment scheduling",
        "Setup in 48 hours"
      ],
      image: purpleSilk
    },
    {
      title: "AI Proposal Generator",
      price: "$1499",
      period: "One-Time Purchase",
      features: [
        "Generate proposals in 60 seconds",
        "Custom templates & branding",
        "Auto-fill from your CRM",
        "Track client engagement"
      ],
      image: pinkSilk
    },
    {
      title: "YouTube Content Generator",
      price: "$1499",
      period: "One-Time Purchase",
      features: [
        "Viral title & description generator",
        "Script outlines in your style",
        "SEO optimization built-in",
        "Lifetime access"
      ],
      image: blueSilk
    },
    {
      title: "Personalized Cold Email Generator",
      price: "$1599",
      period: "One-Time Purchase",
      features: [
        "Write 100s of personalized emails",
        "Auto-insert prospect details",
        "A/B testing built-in",
        "Spam-free guaranteed"
      ],
      image: purpleSilk
    },
    {
      title: "Lead Generator",
      price: "$1599",
      period: "One-Time Purchase",
      features: [
        "Find 500+ targeted leads daily",
        "Export to your CRM",
        "Ideal client profiling",
        "No recurring costs"
      ],
      image: pinkSilk
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="content-frame">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, One-Time Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Pay once, use forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card group relative rounded-2xl overflow-hidden w-full max-w-sm"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background/80 backdrop-blur-xl"></div>
              
              {/* Purple glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/30 group-hover:border-accent/50 transition-all duration-500"></div>
              <div className="absolute -inset-[2px] rounded-2xl transition-all duration-500" style={{boxShadow: '0 0 40px 4px hsl(267 82% 51% / 0.6), 0 0 60px 8px hsl(267 82% 51% / 0.3)'}}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: '0 0 50px 6px hsl(267 82% 51% / 0.5)'}}></div>

              {/* Content */}
              <div className="relative flex flex-col h-full">
                <div className="p-8 pb-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-bold text-gradient" style={{textShadow: '0 0 15px hsl(267 82% 51% / 0.5)'}}>{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Silk image at bottom - fills entire width */}
                <div className="mt-auto">
                  <img 
                    src={plan.image} 
                    alt="" 
                    className="w-full h-32 object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-b-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
