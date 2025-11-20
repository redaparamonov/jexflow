const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full floating blur-xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full floating-delayed blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-secondary/5 rounded-full floating blur-xl" />

      <div className="content-frame relative z-10">
        <div className="section-frame max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            Our Story: The Humans Behind JEXFLOW
          </h2>
          
          {/* Founders Section */}
          <div className="mb-12">
            {/* Story Text - Full Width */}
            <div className="px-4 md:px-8 mb-16">
              <div className="max-w-5xl mx-auto">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Hi there, we're <span 
                    className="text-accent-gradient font-semibold founder-name-yassine transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => {
                      const photo = document.querySelector('.founder-photo-yassine');
                      if (photo) photo.classList.add('founder-rise');
                    }}
                    onMouseLeave={() => {
                      const photo = document.querySelector('.founder-photo-yassine');
                      if (photo) photo.classList.remove('founder-rise');
                    }}
                  >Yassine</span> and <span 
                    className="text-accent-gradient font-semibold founder-name-reda transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => {
                      const photo = document.querySelector('.founder-photo-reda');
                      if (photo) photo.classList.add('founder-rise');
                    }}
                    onMouseLeave={() => {
                      const photo = document.querySelector('.founder-photo-reda');
                      if (photo) photo.classList.remove('founder-rise');
                    }}
                  >Reda</span>. For the past ten years, we've been more than just business partners; we've been friends, dreamers, and builders. And JEXFLOW is the culmination of that shared journey.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  It all started with a shared frustration. We kept seeing brilliant businesses held back by their own systems—wasting countless hours on repetitive tasks, drowning in operational chaos, and missing out on growth because their technology wasn't working for them. They were being sold one-size-fits-all "solutions" that never quite fit.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We knew there had to be a better way.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  JEXFLOW was born from a simple, powerful conviction: your business technology shouldn't be a constraint, but a catalyst. It should be as unique and dynamic as your vision, designed from the start to evolve and scale with you.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  That's where our unique partnership comes to life.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="text-accent-gradient font-semibold founder-name-yassine">Yassine</span>, as the founder, lives in the world of business strategy. He has a knack for seeing the hidden patterns in a company—the tiny cracks in a process that leak profit, and the untapped opportunities that can unlock explosive revenue. He's the one who asks "why" a dozen times to find the root cause, not just the symptom.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="text-accent-gradient font-semibold founder-name-reda">Reda</span>, our CTO, is the architect who brings that vision to life. For a long while, he's been deep in the code, building and scaling complex systems. He speaks the language of AI and automation fluently, but his real gift is translating business problems into elegant, scalable, and robust technical solutions. He ensures the systems we build don't just work today—they're ready for tomorrow.
                </p>
                
                <p className="text-base md:text-lg text-primary font-semibold leading-relaxed mb-4">
                  Our Promise to You:
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We don't just sell you automations. We partner with you to become the architects of your future. We dive deep into your business, diagnose the real issues, and co-create intelligent systems that reduce costs, boost revenue, and give you and your team the freedom to focus on what you do best: innovating and leading.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We're not here to just be another vendor. We're here to be the catalyst for your transformation.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Let's build something remarkable together.
                </p>
                
                <p className="text-base md:text-lg text-accent-gradient font-semibold leading-relaxed">
                  — <span className="founder-name-yassine">Yassine</span> & <span className="founder-name-reda">Reda</span>
                </p>
              </div>
            </div>

            {/* Founder Photos - Centered Below Text */}
            <div className="flex justify-center items-center gap-12 md:gap-20 px-4 md:px-8">
            <a
              href="https://www.linkedin.com/in/yassine-zerhouni-2bb7b9226/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 transition-all duration-300 hover:scale-110 hover:border-accent cursor-pointer founder-photo-yassine flex-shrink-0 block"
              onMouseEnter={() => {
                const yassineName = document.querySelector('.founder-name-yassine');
                if (yassineName) yassineName.classList.add('founder-glow');
              }}
              onMouseLeave={() => {
                const yassineName = document.querySelector('.founder-name-yassine');
                if (yassineName) yassineName.classList.remove('founder-glow');
              }}
            >
              <img 
                src="/lovable-uploads/yassine-founder.jpg" 
                alt="Yassine Zerhouni - Founder" 
                className="w-full h-full object-cover"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/reda-paramonov-5b96b7380/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 transition-all duration-300 hover:scale-110 hover:border-accent cursor-pointer founder-photo-reda flex-shrink-0 block"
              onMouseEnter={() => {
                const redaName = document.querySelector('.founder-name-reda');
                if (redaName) redaName.classList.add('founder-glow');
              }}
              onMouseLeave={() => {
                const redaName = document.querySelector('.founder-name-reda');
                if (redaName) redaName.classList.remove('founder-glow');
              }}
            >
              <img 
                src="/lovable-uploads/reda-founder.jpg" 
                alt="Reda Afif - CTO" 
                className="w-full h-full object-cover"
              />
            </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Faster</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
