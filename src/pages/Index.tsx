
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import TestimonialsSection from '../components/TestimonialsSection';
import { Link } from 'react-router-dom';
import { allProducts } from '@/mockdata/Products';
/*
const featuredProducts = [
  {
    id: 1,
    name: "Boubou Royal Doré",
    price: 189,
    originalPrice: 230,
    image: "src/images/rb-shop1.png",
    category: "Boubou",
    rating: 5,
    isNew: true,
    isOnSale: true
  },
  {
    id: 2,
    name: "Robe Wax Élégance",
    price: 145,
    image: "src/images/rb-shop1.png",
    category: "Robe Wax",
    rating: 5,
    isNew: true
  },
  {
    id: 3,
    name: "Ensemble Pagne Moderne",
    price: 165,
    image: "src/images/rb-shop1.png",
    category: "Pagne",
    rating: 4
  },
  {
    id: 4,
    name: "Tenue Mariage Luxe",
    price: 295,
    image: "src/images/rb-shop1.png",
    category: "Mariage",
    rating: 5,
    isNew: true
  }
];*/

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-fashion-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Collection
              <span className="block text-gradient-gold">Coup de Cœur</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
              Découvrez notre sélection de pièces d'exception, créées pour sublimer votre élégance naturelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {allProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/collection" className="btn-gold inline-flex items-center">
              Voir Toute la Collection
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-fashion-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Notre
                <span className="block text-gradient-gold">Histoire</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-inter leading-relaxed">
                FASHION est née de la passion de célébrer la richesse et la beauté de la mode traditionnelle africaine. 
                Chaque création reflète notre engagement envers l'excellence, l'authenticité et l'innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8 font-inter leading-relaxed">
                Nous créons des pièces qui racontent votre histoire, qui expriment votre fierté culturelle 
                et qui affirment votre raffinement dans un monde moderne.
              </p>
              <Link to="/about" className="btn-gold inline-flex items-center">
                Découvrir Notre Histoire
              </Link>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="src/images/rb-shop6.png"
                alt="Atelier FASHION"
                className="rounded-xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <section className="py-20 bg-fashion-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Restez
            <span className="block text-gradient-gold">Informée</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-inter">
            Inscrivez-vous à notre newsletter pour découvrir en avant-première 
            nos nouvelles collections et offres exclusives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 bg-fashion-charcoal border border-fashion-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter"
            />
            <button className="btn-gold px-8 py-3">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
