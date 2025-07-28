import { Heart, MessageCircle, Instagram, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo-casa-repouso.jpg";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phone = "5511999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Vim através do site da Casa de Repouso.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/casa.de.repouso', '_blank');
  };

  return (
    <footer className="bg-deep-purple text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={logoImage} 
                  alt="Casa de Repouso Logo" 
                  className="w-16 h-16 object-cover rounded-full border-2 border-white/20"
                />
                <div>
                  <h3 className="text-xl font-heading font-bold">Casa de Repouso</h3>
                  <p className="text-white/80 italic">O Amor NUNCA Envelhece</p>
                </div>
              </div>
              
              <p className="text-white/70 leading-relaxed">
                Cuidando com amor e dignidade de quem mais amamos. 
                Cada dia é uma oportunidade de fazer a diferença na vida 
                de nossos residentes e suas famílias.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-gentle"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                
                <button
                  onClick={handleInstagramClick}
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:opacity-80 transition-gentle"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold">Contato</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-warm-orange" />
                  <div>
                    <div className="font-medium">(11) 99999-9999</div>
                    <div className="text-sm text-white/70">WhatsApp e telefone</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-warm-orange" />
                  <div>
                    <div className="font-medium">São Paulo - SP</div>
                    <div className="text-sm text-white/70">Localização privilegiada</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-warm-orange" />
                  <div>
                    <div className="font-medium">@casa.de.repouso</div>
                    <div className="text-sm text-white/70">Siga no Instagram</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold">Horários</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="font-medium">Visitas</div>
                  <div className="text-sm text-white/70">Segunda à Sábado</div>
                  <div className="text-sm text-white/70">9h às 17h</div>
                </div>
                
                <div>
                  <div className="font-medium">Atendimento WhatsApp</div>
                  <div className="text-sm text-white/70">Segunda à Sábado</div>
                  <div className="text-sm text-white/70">8h às 18h</div>
                </div>
                
                <div>
                  <div className="font-medium">Emergências</div>
                  <div className="text-sm text-white/70">24 horas por dia</div>
                  <div className="text-sm text-white/70">7 dias por semana</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-white/70 text-sm">
                  © 2025 Casa de Repouso. Todos os direitos reservados.
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Projeto idealizado com afeto e respeito.
                </p>
              </div>
              
              {/* Heart Icon */}
              <div className="flex items-center space-x-2 text-warm-orange">
                <Heart className="w-5 h-5 fill-current animate-pulse" />
                <span className="text-sm font-medium">Feito com amor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;