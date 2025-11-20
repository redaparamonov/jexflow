import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const BookingPopup = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // 45-second delay trigger
    const delayTimer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 45000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(delayTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-primary/20 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] shadow-[0_0_80px_rgba(168,85,247,0.4)]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:rotate-90 duration-300"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <div className="relative">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-[100px] animate-floating" />

          <div className="relative px-8 py-10 md:px-12 md:py-14">
            <form 
              name="strategy-session" 
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/booking-confirmed");
              }}
              className="space-y-6"
            >

              <div className="space-y-4 text-center animate-fade-in-up">
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-white/90">Limited Spots Available</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Ready to Automate Your{" "}
                  <span className="text-gradient bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Busywork?
                  </span>
                </h2>

                <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                  Book a free, no-strings Automation Strategy Session. We'll analyze your business and map out a custom plan to save you not only time but business costs too!
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <div className="group">
                  <input
                    type="text"
                    name="full-name"
                    placeholder="Your full name"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 group-hover:bg-white/15"
                  />
                </div>

                <div className="group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your business email"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 group-hover:bg-white/15"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book My Free Session Now 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60 pt-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="hidden sm:block text-white/30">•</div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% confidential</span>
                </div>
                <div className="hidden sm:block text-white/30">•</div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-minute session</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
