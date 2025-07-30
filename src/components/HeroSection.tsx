import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-10">
        <Shield className="absolute top-20 left-10 h-8 w-8 text-tech-blue opacity-60 animate-float" />
        <Cpu className="absolute top-40 right-20 h-10 w-10 text-tech-glow opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <Cloud className="absolute bottom-40 left-20 h-12 w-12 text-tech-blue opacity-50 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Soluciones </span>
            <span className="text-tech-blue">Tecnológicas</span>
            <br />
            <span className="text-foreground">de </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Vanguardia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-foreground">Más de 10 años</span> transformando empresas con 
            <span className="text-tech-blue font-semibold"> infraestructura segura</span>, 
            <span className="text-tech-blue font-semibold"> desarrollo innovador</span> y 
            <span className="text-tech-blue font-semibold"> consultoría estratégica</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="tech" 
              size="xl"
              onClick={() => scrollToSection('servicios')}
              className="group"
            >
              Conocé Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline_tech" 
              size="xl"
              onClick={() => scrollToSection('contacto')}
            >
              Solicitar Reunión
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-blue mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-blue mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoreo Continuo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-blue mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Atención Personalizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;