const testimonials = [
  {
    quote: "I was drowning in 'order status' emails. Jexflow's AI assistant integrated with our shipping system and now answers all tracking questions automatically. It freed up 15 hours a week for me and my team. It's like hiring a full-time support agent for a one-time fee.",
    author: "Ben Carter",
    role: "Owner of Summit Gear Co."
  },
  {
    quote: "Our product launch was make-or-break. Jexflow's waitlist automation didn't just collect emails; it built a community. The personalized update sequences kept our audience engaged, and on launch day, we had a line of paying customers ready to go. We hit our first-month revenue goal in 48 hours.",
    author: "Jason Lee",
    role: "CTO of NovaApp"
  },
  {
    quote: "The AI assistant Jexflow built for our help desk has been a game-changer. It's handling over 70% of tier-1 support queries instantly, which has let our human team focus on complex issues. Our customer satisfaction score went up 30% because no one is left waiting.",
    author: "Maria Rodriguez",
    role: "Nail Salon Manager"
  },
  {
    quote: "I was skeptical about how 'no-code' a powerful AI automation could be. The Jexflow team made it incredibly simple. They understood my needs, built a perfect solution, and it worked flawlessly from day one. The process was shockingly smooth.",
    author: "Priya Sharma",
    role: "Developer & Indie Hacker"
  },
  {
    quote: "As a solo founder, I was wearing too many hats and heading for burnout. Jexflow automated three of my most time-consuming tasks. I've literally gotten my business and my life back. This isn't an expense; it's the best investment I've made all year.",
    author: "Tom Alvarez",
    role: "Founder of Prepify"
  },
  {
    quote: "I had 2,000 people on my waitlist for a new course, but I had no time to engage them. Jexflow's system sent tailored content and collected feedback, which made my course 10x better. The automated hype machine converted 40% of the list on day one. Unreal.",
    author: "Sophie Williams",
    role: "Personal Branding Coach"
  },
  {
    quote: "I was burning out from the constant pressure to find new video ideas. Jexflow's generator is scarily accurate. The ideas it gives me are not just generic—they're tailored to my niche and actually trending. My video views have increased by 150% since I started using it consistently.",
    author: "David Kim",
    role: "Tech Reviewer at 'Future Focus'"
  },
  {
    quote: "We manage 5 different YouTube channels for clients. Jexflow's idea generator is our secret weapon for keeping content calendars full of fresh, high-potential topics. It has cut our brainstorming time for each client from 4 hours to 20 minutes. The ROI is insane.",
    author: "Chloe Smith",
    role: "Director of Content at Pulse Marketing"
  }
];

const TestimonialsSection = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-b from-card/20 to-background overflow-hidden">
      <div className="mb-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          What Our Clients Say
        </h2>
        <p className="text-xl text-muted-foreground">
          Real results from real businesses that trusted Jexflow
        </p>
      </div>

      <div className="relative">
        {/* Fade overlay on left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Fade overlay on right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="testimonial-scroll">
          <div className="testimonial-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
              >
                <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
