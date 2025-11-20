import { Bot, Mail, Video, Target } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Assistant",
    problem: "You're constantly answering the same \"What's your pricing?\" and \"When are you open?\" questions, distracting you from real work.",
    solution: "A custom-trained AI that provides instant, 24/7 answers on your website or Discord, slashing customer response time and freeing up your focus.",
    idealFor: "E-commerce stores, SaaS founders, agencies.",
    gradient: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)"
  },
  {
    icon: Mail,
    title: "Autonomous Waitlist Management",
    problem: "Your launch waitlist is a dead email list. People forget they signed up, leading to a weak launch day.",
    solution: "An system that automatically engages subscribers with personalized updates, exclusive teasers, and feedback surveys to build hype and guarantee a strong launch.",
    idealFor: "Startups, indie hackers, product creators.",
    gradient: "linear-gradient(to right, #5b21b6 0%, #3730a3 100%)"
  },
  {
    icon: Video,
    title: "YouTube Idea Generator",
    problem: "You waste hours staring at a blank page, struggling with creator's block and inconsistent uploads.",
    solution: "An AI tool that analyzes trends in your niche and delivers a weekly batch of viral-ready video titles, descriptions, and outline ideas in seconds.",
    idealFor: "Content creators, marketers, personal brands.",
    gradient: "linear-gradient(to right, #4338ca 0%, #2563eb 100%)"
  },
  {
    icon: Target,
    title: "Lead Qualification Bot",
    problem: "Your contact form is flooded with inquiries, but most are unqualified, wasting your sales team's precious time.",
    solution: "An AI chatbot that asks qualifying questions, books meetings for hot leads, and filters out the tire-kickers—all automatically.",
    idealFor: "B2B companies, consultants, freelancers.",
    gradient: "linear-gradient(to right, #fc466b 0%, #3f5efb 100%)"
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-card/20 to-background">
      <div className="content-frame">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-muted-foreground">
            Tailored automation that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.title}
                className="feature-card h-full overflow-hidden p-[2px]"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  backgroundImage: solution.gradient
                }}
              >
                <div className="relative z-10 p-8 bg-background/95 backdrop-blur-sm h-full rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundImage: solution.gradient }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-destructive mb-2">The Problem:</p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {solution.problem}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Our Solution:</p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {solution.solution}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm font-medium text-accent">
                        Ideal for: {solution.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;