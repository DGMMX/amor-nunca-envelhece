import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip periodically
    const tooltipTimer = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "5511962157712"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre a Casa de Repouso.";
     trackWhatsAppClick();
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-warm p-4 max-w-xs mb-2 border border-border">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="pr-6">
            <p className="text-sm font-semibold text-foreground mb-1">
              💬 Olá! Como podemos ajudar?
            </p>
            <p className="text-xs text-muted-foreground">
              Clique aqui para conversar conosco no WhatsApp
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-warm hover:shadow-xl transition-gentle hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 w-16 h-16 bg-green-500/30 rounded-full animate-ping"></div>
    </div>
  );
};

export default WhatsAppFloat;