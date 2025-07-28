import { MapPin, DollarSign, Sparkles, Stethoscope, Calendar, Shield } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: MapPin,
      title: "Localização privilegiada",
      description: "Ambiente tranquilo e acessível para visitantes"
    },
    {
      icon: DollarSign,
      title: "Preço acessível e justo",
      description: "Valores transparentes sem surpresas"
    },
    {
      icon: Sparkles,
      title: "Ambiente recém-reformado",
      description: "Instalações modernas e aconchegantes"
    },
    {
      icon: Stethoscope,
      title: "Vários profissionais envolvidos",
      description: "Equipe multidisciplinar especializada"
    },
    {
      icon: Calendar,
      title: "Atividades recreativas",
      description: "Programa completo de lazer e terapias"
    },
    {
      icon: Shield,
      title: "Segurança 24h",
      description: "Monitoramento e cuidados contínuos"
    }
  ];

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Por que escolher a 
              <span className="gradient-warm bg-clip-text text-transparent"> Casa de Repouso?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos muito mais que cuidados básicos. Cada detalhe foi pensado 
              para proporcionar bem-estar, segurança e felicidade.
            </p>
          </div>
          
          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-border shadow-gentle hover:shadow-warm transition-gentle hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-orange to-deep-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-gentle">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/80 rounded-full border border-warm-orange/20">
              <div className="w-3 h-3 bg-warm-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-deep-purple">
                Venha conhecer pessoalmente todos esses diferenciais
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;