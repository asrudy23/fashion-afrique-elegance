
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Amirath Malick",
    location: "Oujda, Maroc",
    image: "src/images/rb-shop7.png",
    rating: 5,
    text: " RB WOMEN'S FASHION a transformé ma garde-robe ! Leurs boubous modernes allient parfaitement tradition et élégance contemporaine. Je me sens radieuse à chaque port."
  },
  {
    id: 2,
    name: "Rosna",
    location: "Oujda, Maroc ",
    image: "src/images/rb-shop5.png",
    rating: 5,
    text: "La qualité des tissus et la finition des tenues sont exceptionnelles.RB WOMEN'S FASHION capture l'essence de la beauté africaine avec un raffinement incomparable."
  },
  {
    id: 3,
    name: "Jennifer",
    location: "Oujda, Maroc",
    image: "src/images/rb-shop8.png",
    rating: 5,
    text: "Chaque pièce raconte une histoire. Porter RB WOMEN'S FASHION, c'est célébrer mes racines tout en affirmant ma modernité. Un service client exemplaire en plus !"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-fashion-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Nos Clientes
            <span className="block text-gradient-gold">Témoignent</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Découvrez ce que nos clientes pensent de leurs expériences FASHION
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-fashion-black rounded-xl p-8 hover-lift animate-fade-in border border-fashion-gold/20 hover:border-fashion-gold/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-fashion-gold fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 font-inter leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-fashion-gold/20"
                />
                <div>
                  <div className="text-fashion-gold font-semibold font-playfair">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm font-inter">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
