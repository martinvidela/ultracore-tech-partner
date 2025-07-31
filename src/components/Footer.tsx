import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">UltraCore</span>
            <span className="text-sm text-tech-blue font-medium">Soluciones IT</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 UltraCore Soluciones IT. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Transformando empresas con tecnología de vanguardia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;