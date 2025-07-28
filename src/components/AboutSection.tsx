import { Heart, Users, Home } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe especializada",
      description: "Profissionais qualificados e dedicados ao cuidado individualizado"
    },
    {
      icon: Heart,
      title: "Cuidado individualizado", 
      description: "Cada residente recebe atenção personalizada e carinhosa"
    },
    {
      icon: Home,
      title: "Estrutura humanizada",
      description: "Ambiente acolhedor que combina conforto, segurança e afeto"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A Casa de Repouso nasceu com a missão de oferecer um lar seguro, alegre e acolhedor 
              para pessoas da terceira idade. Aqui, o cuidado vai além do físico — valorizamos 
              histórias, afetos e dignidade.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:shadow-gentle transition-gentle"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-warm-orange to-deep-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-gentle">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Quote */}
          <div className="relative p-8 bg-gradient-to-r from-gentle-lavender to-soft-peach rounded-2xl">
            <div className="absolute top-4 left-8 text-6xl text-warm-orange/30 font-serif">"</div>
            <blockquote className="text-2xl font-heading italic text-deep-purple text-center leading-relaxed pt-8">
              Envelhecer com dignidade é um direito de todos. 
              Nossa missão é transformar esse direito em realidade.
            </blockquote>
            <div className="text-center mt-6">
              <cite className="text-sm text-deep-purple/70 not-italic">
                — Equipe Casa de Repouso
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;