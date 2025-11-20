import { Rocket, Gem, Handshake, Shield } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning-Fast Deployment",
    description: "Get from idea to impact in weeks, not months. Our streamlined process and pre-built components mean we can deliver a working, custom automation tailored to your needs in as little as 10-14 days. Stop waiting and start saving time now."
  },
  {
    icon: Gem,
    title: "Built for Your Workflow, Not Ours",
    description: "Get a solution that fits like a glove, not a square peg. We reject one-size-fits-all templates. Every automation is custom-crafted after a deep dive into your unique processes, ensuring it works seamlessly with your team and tools."
  },
  {
    icon: Handshake,
    title: "Your Partner in Automation, Not Just a Vendor",
    description: "Gain a long-term strategic ally for continuous improvement. Our relationship doesn't end at deployment. We provide ongoing support and are here to help you refine and scale your automations as your business grows."
  },
  {
    icon: Shield,
    title: "Rock-Solid Reliability & Security",
    description: "Deploy with absolute confidence. Your operations are critical. We build with enterprise-grade security practices and ensure 99.9% uptime, so you can automate your most important tasks without a second thought."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="content-frame">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why JexFlow?
          </h2>
          <p className="text-xl text-muted-foreground">
            Designed by engineers, built for businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            That's why over 50+ founders and innovators trust Jexflow to power their growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;