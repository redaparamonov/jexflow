import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jexflow-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "bg-background/30 backdrop-blur-[10px] border-b border-border/20" : "bg-transparent backdrop-blur-[5px]"
      }`}
    >
      <div className="content-frame">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="JexFlow" className="h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="nav-link">Home</a>
            <a href="/#about" className="nav-link">About</a>
            <a href="/#features" className="nav-link">Features</a>
            <a href="/#solutions" className="nav-link">Solutions</a>
            <a href="/#pricing" className="nav-link">Pricing</a>
            <a href="/#contact" className="nav-link">Contact</a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="sm" className="hidden md:inline-flex" asChild>
            <a href="/#contact">Get Started</a>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;