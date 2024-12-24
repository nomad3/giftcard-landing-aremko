import React from 'react';
import { Quote, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    role: "Madre",
    text: "Le regalé a mi hija un día de spa para su cumpleaños y quedó encantada. El ambiente junto al río es mágico y el servicio fue excepcional. Ver su rostro relajado y feliz después del masaje fue el mejor regalo para mí también.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    name: "Carolina Pérez",
    role: "Esposa",
    text: "Sorprendí a mi esposo con una gift card para hidromasaje. Fue una experiencia única compartir ese momento de relax juntos, escuchando el sonido del río y disfrutando del entorno natural. ¡Una experiencia que definitivamente repetiremos!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-[#edf3f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif text-sage-800 text-center mb-8 md:mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg p-4 md:p-6 shadow-lg relative">
              <Quote className="absolute top-4 right-4 text-sage-300" size={20} />
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sage-800 text-sm md:text-base">{testimonial.name}</h3>
                  <p className="text-sage-600 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sage-700 italic text-sm md:text-base">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://wa.me/56957902525"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition-colors shadow-lg"
          >
            <MessageCircle size={24} />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}