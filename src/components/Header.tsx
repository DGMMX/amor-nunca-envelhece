import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo-casa-repouso.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "5511999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre a Casa de Repouso.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-gentle ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-gentle' : 'bg-background'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logoImage} 
              alt="Casa de Repouso Logo" 
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <h1 className="text-xl font-heading font-semibold text-foreground">
                Casa de Repouso
              </h1>
              <p className="text-sm text-muted-foreground italic">
                O Amor NUNCA Envelhece
              </p>
            </div>
          </div>
          
          <Button 
            variant="whatsapp" 
            onClick={handleWhatsAppClick}
            className="hidden sm:flex"
          >
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;