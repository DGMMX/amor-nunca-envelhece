import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import heroImage from "@/assets/hero-elderly-care.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phone = "55112574-1874"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de falar com a equipe da Casa de Repouso.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-warm-orange">
                <Heart className="w-6 h-6 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Cuidando com Amor
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Porque amor, carinho e dignidade 
                <span className="gradient-warm bg-clip-text text-transparent"> não têm idade.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Na Casa de Repouso, cada idoso é tratado como família. 
                Descubra um novo padrão de cuidado, afeto e atenção.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToAbout}
                className="text-lg px-8 py-6"
              >
                Quero Saber Mais
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6 border-2 border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white"
              >
                <Phone className="w-5 h-5" />
                Fale com a Equipe
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-orange">24h</div>
                <div className="text-sm text-muted-foreground">Cuidados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-orange">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-orange">100%</div>
                <div className="text-sm text-muted-foreground">Dedicação</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Cuidado amoroso com idosos"
              className="w-full h-[600px] object-cover rounded-2xl shadow-warm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-orange/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;