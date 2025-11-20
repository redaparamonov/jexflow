import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Mail } from "lucide-react";

const BookingConfirmed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add confetti effect or celebration animation
    const timer = setTimeout(() => {
      // Auto-redirect after 10 seconds
      // navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-floating" />

      <div className="relative max-w-2xl w-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.3)] p-8 md:p-12 animate-scale-in">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_40px_rgba(74,222,128,0.4)] animate-bounce-slow">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              You're All Set! 🎉
            </h1>
            <p className="text-xl text-white/80">
              Your Automation Strategy Session is Confirmed
            </p>
          </div>

          {/* Details */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Check Your Email</h3>
                <p className="text-white/70 text-sm">
                  We've sent you a confirmation email with all the details and next steps for your session.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">What Happens Next?</h3>
                <p className="text-white/70 text-sm">
                  Our team will reach out within 24 hours to schedule your personalized automation strategy session.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <Button
              onClick={() => navigate("/")}
              className="w-full md:w-auto px-8 py-6 text-lg bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] transition-all duration-300"
            >
              Return to Homepage
            </Button>
            <p className="text-white/50 text-sm">
              Get ready to transform your business with AI automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
