import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">¿Quiénes </span>
            <span className="text-tech-blue">Somos?</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">UltraCore Soluciones IT</span> es una empresa con una 
              <span className="text-tech-blue font-semibold"> década de experiencia</span>, especializada en 
              <span className="text-tech-blue"> infraestructura tecnológica</span>, 
              <span className="text-tech-blue"> desarrollo de software</span>, 
              <span className="text-tech-blue"> administración de backups</span>, 
              <span className="text-tech-blue"> ciberseguridad</span> y 
              <span className="text-tech-blue"> consultoría IT</span>. 
              Ayudamos a las empresas a crecer de manera 
              <span className="text-foreground font-semibold"> segura</span>, 
              <span className="text-foreground font-semibold"> eficiente</span> y 
              <span className="text-foreground font-semibold"> escalable</span>.
            </p>
            <div className="p-6 bg-gradient-card rounded-lg border border-border shadow-card">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                "Nos destacamos por un <span className="text-tech-blue">enfoque práctico</span>, 
                <span className="text-tech-blue"> preventivo</span> y 
                <span className="text-tech-blue"> personalizado</span>, acompañando a cada cliente como un 
                <span className="text-tech-blue"> socio tecnológico y estratégico</span>."
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Experiencia</h3>
              <p className="text-muted-foreground text-sm">
                Más de 10 años transformando empresas de diferentes sectores
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Enfoque</h3>
              <p className="text-muted-foreground text-sm">
                Soluciones prácticas, preventivas y completamente personalizadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Calidad</h3>
              <p className="text-muted-foreground text-sm">
                Compromiso con la excelencia en cada proyecto y servicio
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovación</h3>
              <p className="text-muted-foreground text-sm">
                Tecnologías de vanguardia para impulsar tu crecimiento
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;