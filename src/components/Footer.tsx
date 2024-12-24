import React from 'react';
import { Globe, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <a 
            href="https://wa.me/56957902525" 
            className="flex items-center gap-2 text-sage-300 hover:text-white transition-colors text-sm md:text-base text-center"
          >
            <MessageCircle className="text-green-500 flex-shrink-0" size={20} />
            <span>Escríbenos por WhatsApp al +56 9 5790 2525</span>
          </a>
          <div className="flex items-center gap-2 text-sage-300 text-sm md:text-base text-center">
            <MapPin size={20} className="flex-shrink-0" />
            <span>Río Pescado km 4 p3, Puerto Varas</span>
          </div>
          <a 
            href="https://www.aremko.cl" 
            className="flex items-center gap-2 text-sage-300 hover:text-white text-sm md:text-base"
          >
            <Globe size={20} className="flex-shrink-0" />
            <span>www.aremko.cl</span>
          </a>
        </div>
        <div className="text-center text-sage-400 border-t border-sage-700 pt-6 md:pt-8 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Aremko Spa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}