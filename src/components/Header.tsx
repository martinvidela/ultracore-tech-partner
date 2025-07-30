import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">UltraCore</span>
          <span className="text-sm text-tech-blue font-medium">Soluciones IT</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('casos')}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            Casos de Éxito
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            Contacto
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline_tech" 
            size="sm"
            onClick={() => scrollToSection('contacto')}
          >
            Solicitar Reunión
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('casos')}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              Casos de Éxito
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="tech" 
              size="sm"
              onClick={() => scrollToSection('contacto')}
              className="w-fit"
            >
              Solicitar Reunión
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;