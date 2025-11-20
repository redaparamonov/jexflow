import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/jexflow-hero-bg.jpg";
import heroItem from "@/assets/jexflow-hero-item.png";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Content - Left aligned */}
      <div className="content-frame relative z-10 w-full">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-left">
            Intelligent Automation for the{" "}
            <span className="text-gradient">Modern Business</span>
          </h1>
          
          <p className="text-base md:text-lg text-white mb-8 max-w-xl leading-relaxed text-left">
            JexFlow helps businesses harness AI-driven automation to scale faster, 
            work smarter, and stay ahead.
          </p>

          <div className="flex justify-start">
            <Button variant="outline-hero" size="lg" className="text-base px-8 py-4" asChild>
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating hero item - Full coverage */}
      <div className="absolute inset-0 z-0 animate-float-slow">
        <img 
          src={heroItem} 
          alt="JexFlow Automation" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;