import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Header
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.services': 'Servicios',
      'nav.cases': 'Casos de Éxito',
      'nav.contact': 'Contacto',
      'nav.request_meeting': 'Solicitar Reunión',
      
      // Hero Section
      'hero.slide1.title': 'UltraCore, tu socio tecnológico para crecer sin límites',
      'hero.slide1.subtitle': 'Impulsamos la transformación digital de tu negocio con soluciones integrales: desarrollo de software, infraestructura IT, automatización y más.',
      'hero.slide1.description': 'Tecnología estratégica, acompañamiento real y resultados medibles.',
      'hero.slide1.cta': 'Conocé cómo podemos ayudarte',
      
      'hero.slide2.title': 'Tus datos siempre protegidos. Backups seguros, automáticos y accesibles.',
      'hero.slide2.subtitle': 'Evitá pérdidas costosas con nuestras soluciones de respaldo inteligente.',
      'hero.slide2.feature1': 'Backups en la nube y físicos',
      'hero.slide2.feature2': 'Recuperación inmediata',
      'hero.slide2.feature3': 'Seguridad multicapa contra amenazas, ransomware y errores humanos',
      'hero.slide2.description': 'Copias de seguridad diarias, automáticas y protegidas contra fallos, robos o errores humanos.',
      'hero.slide2.cta': 'Resguardá tus datos ahora',
      
      'hero.slide3.title': 'Tu infraestructura IT, más segura, rápida y eficiente.',
      'hero.slide3.subtitle': 'Gestionamos, protegemos y optimizamos tus sistemas para que tu empresa nunca se detenga.',
      'hero.slide3.description': 'Ciberseguridad, soporte y tecnología que acompañan tu crecimiento. Soluciones flexibles y escalables.',
      'hero.slide3.cta': 'Conocé nuestros servicios',
      
      // About Section
      'about.title': '¿Quiénes Somos?',
      'about.description': 'UltraCore Soluciones IT es una empresa con una década de experiencia, especializada en infraestructura tecnológica, desarrollo de software, administración de backups, ciberseguridad y consultoría IT. Ayudamos a las empresas a crecer de manera segura, eficiente y escalable.',
      'about.highlight': 'Nos destacamos por un enfoque práctico, preventivo y personalizado, acompañando a cada cliente como un socio tecnológico y estratégico.',
      
      // Services Section
      'services.title': 'Nuestros Servicios',
      'services.infrastructure.title': 'Infraestructura IT',
      'services.infrastructure.feature1': 'Diseño y mantenimiento de redes y servidores',
      'services.infrastructure.feature2': 'Migraciones (VMware, Proxmox, nube)',
      'services.infrastructure.feature3': 'Monitoreo proactivo y soporte remoto',
      
      'services.cybersecurity.title': 'Ciberseguridad',
      'services.cybersecurity.feature1': 'Auditorías y hardening',
      'services.cybersecurity.feature2': 'Protección contra ransomware',
      'services.cybersecurity.feature3': 'Firewalls, VPNs, monitoreo (Prometheus, Grafana)',
      
      'services.backups.title': 'Backups',
      'services.backups.feature1': 'Locales y en la nube',
      'services.backups.feature2': 'Esquema 3-2-1 y restauración',
      'services.backups.feature3': 'Gestión de versiones y recuperación ante desastres',
      
      'services.development.title': 'Desarrollo y Automatización',
      'services.development.feature1': 'Aplicaciones web (React, Laravel, Python)',
      'services.development.feature2': 'APIs, bots con IA, integraciones',
      'services.development.feature3': 'Optimización de procesos',
      
      'services.consulting.title': 'Consultoría IT',
      'services.consulting.feature1': 'Asesoramiento y estrategia',
      'services.consulting.feature2': 'Evaluación de riesgos',
      'services.consulting.feature3': 'Capacitación de equipos',
      
      // Other sections...
      'differentials.title': 'Nuestros Diferenciales',
      'cases.title': 'Casos de Éxito',
      'process.title': 'Nuestro Proceso',
      'contact.title': 'Contacto',
      'footer.rights': 'Todos los derechos reservados.',
    }
  },
  en: {
    translation: {
      // Header
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.cases': 'Success Cases',
      'nav.contact': 'Contact',
      'nav.request_meeting': 'Request Meeting',
      
      // Hero Section
      'hero.slide1.title': 'UltraCore, your technology partner to grow without limits',
      'hero.slide1.subtitle': 'We drive your business digital transformation with comprehensive solutions: software development, IT infrastructure, automation and more.',
      'hero.slide1.description': 'Strategic technology, real support and measurable results.',
      'hero.slide1.cta': 'Learn how we can help you',
      
      'hero.slide2.title': 'Your data always protected. Secure, automatic and accessible backups.',
      'hero.slide2.subtitle': 'Avoid costly losses with our intelligent backup solutions.',
      'hero.slide2.feature1': 'Cloud and physical backups',
      'hero.slide2.feature2': 'Immediate recovery',
      'hero.slide2.feature3': 'Multi-layer security against threats, ransomware and human errors',
      'hero.slide2.description': 'Daily, automatic backups protected against failures, theft or human errors.',
      'hero.slide2.cta': 'Protect your data now',
      
      'hero.slide3.title': 'Your IT infrastructure, more secure, fast and efficient.',
      'hero.slide3.subtitle': 'We manage, protect and optimize your systems so your business never stops.',
      'hero.slide3.description': 'Cybersecurity, support and technology that accompany your growth. Flexible and scalable solutions.',
      'hero.slide3.cta': 'Discover our services',
      
      // About Section
      'about.title': 'Who We Are?',
      'about.description': 'UltraCore IT Solutions is a company with a decade of experience, specialized in technological infrastructure, software development, backup administration, cybersecurity and IT consulting. We help companies grow securely, efficiently and scalably.',
      'about.highlight': 'We stand out for a practical, preventive and personalized approach, accompanying each client as a technological and strategic partner.',
      
      // Services Section
      'services.title': 'Our Services',
      'services.infrastructure.title': 'IT Infrastructure',
      'services.infrastructure.feature1': 'Network and server design and maintenance',
      'services.infrastructure.feature2': 'Migrations (VMware, Proxmox, cloud)',
      'services.infrastructure.feature3': 'Proactive monitoring and remote support',
      
      'services.cybersecurity.title': 'Cybersecurity',
      'services.cybersecurity.feature1': 'Audits and hardening',
      'services.cybersecurity.feature2': 'Ransomware protection',
      'services.cybersecurity.feature3': 'Firewalls, VPNs, monitoring (Prometheus, Grafana)',
      
      'services.backups.title': 'Backups',
      'services.backups.feature1': 'Local and cloud',
      'services.backups.feature2': '3-2-1 scheme and restoration',
      'services.backups.feature3': 'Version management and disaster recovery',
      
      'services.development.title': 'Development and Automation',
      'services.development.feature1': 'Web applications (React, Laravel, Python)',
      'services.development.feature2': 'APIs, AI bots, integrations',
      'services.development.feature3': 'Process optimization',
      
      'services.consulting.title': 'IT Consulting',
      'services.consulting.feature1': 'Advisory and strategy',
      'services.consulting.feature2': 'Risk assessment',
      'services.consulting.feature3': 'Team training',
      
      // Other sections...
      'differentials.title': 'Our Differentials',
      'cases.title': 'Success Cases',
      'process.title': 'Our Process',
      'contact.title': 'Contact',
      'footer.rights': 'All rights reserved.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
