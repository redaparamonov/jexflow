import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Consult",
      description: "We dive deep into your workflow to find the repetitive tasks costing you the most time and money.",
      outcome: "You get a clear automation plan with a defined ROI.",
    },
    {
      number: "2",
      title: "Develop",
      description: "Our team builds your custom solution in a secure, test environment.",
      outcome: "You receive a working prototype to preview and provide feedback on.",
    },
    {
      number: "3",
      title: "Deploy",
      description: "We integrate the final automation seamlessly into your daily operations.",
      outcome: "You start saving time immediately, with our full support to ensure success.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl floating-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to transform your business operations
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number badge */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-elegant">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 text-primary/30 w-8 h-8" />
                )}
              </div>

              {/* Step content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {step.description}
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-primary font-medium">
                  {step.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
