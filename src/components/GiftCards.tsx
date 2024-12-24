import React from 'react';
import { Gift } from 'lucide-react';

const giftCards = [
  {
    price: 40000,
    title: "Masaje Relajante",
    description: "Masaje de Relajación o Descontracturante para una persona",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    link: "https://aremko.cl/producto/regalo-masaje-de-relajacion-para-una-persona/"
  },
  {
    price: 50000,
    title: "Tina sin Hidromasaje",
    description: "Tina sin hidromasaje junto al Río Pescado para 2 personas por dos horas",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    link: "https://aremko.cl/producto/tinapara2-2/"
  },
  {
    price: 60000,
    title: "Hidromasaje",
    description: "Tina de hidromasaje para dos personas por dos horas junto al Río Pescado",
    image: "/tina-hidromasaje.jpg",
    link: "https://aremko.cl/producto/hidromasajepara2/"
  },
  {
    price: 100000,
    title: "Alojamiento",
    description: "Una noche en Cabaña Torre para dos personas",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    link: "https://aremko.cl/producto/gift-card-para-aremko-spa-100-000/"
  }
];

export default function GiftCards() {
  return (
    <section className="py-12 md:py-20 bg-[#f3f8f6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-sage-800 mb-3 md:mb-4">Gift Cards</h2>
          <p className="text-sage-600 text-sm md:text-base">
            Regala experiencias únicas de bienestar. Válidas por un año y canjeables por cualquiera de nuestros servicios.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {giftCards.map((card) => (
            <div key={card.title} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Gift className="text-sage-600" size={20} />
                  <h3 className="text-lg md:text-xl font-semibold text-sage-800">{card.title}</h3>
                </div>
                <p className="text-sage-600 text-sm md:text-base mb-4">{card.description}</p>
                <a
                  href={card.link}
                  className="block w-full text-center bg-sage-600 text-white py-2.5 rounded-md hover:bg-sage-700 transition-colors text-sm md:text-base"
                >
                  Comprar Gift Card ${card.price.toLocaleString('es-CL')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}