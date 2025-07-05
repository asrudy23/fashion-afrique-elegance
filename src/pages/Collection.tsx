
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Boubou Royal Doré",
    price: 189,
    originalPrice: 230,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
    category: "Boubou",
    rating: 5,
    isNew: true,
    isOnSale: true
  },
  {
    id: 2,
    name: "Robe Wax Élégance",
    price: 145,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    category: "Robe Wax",
    rating: 5,
    isNew: true
  },
  {
    id: 3,
    name: "Ensemble Pagne Moderne",
    price: 165,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
    category: "Pagne",
    rating: 4
  },
  {
    id: 4,
    name: "Tenue Mariage Luxe",
    price: 295,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    category: "Mariage",
    rating: 5,
    isNew: true
  },
  {
    id: 5,
    name: "Kaftan Brodé Or",
    price: 220,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
    category: "Kaftan",
    rating: 5
  },
  {
    id: 6,
    name: "Dashiki Premium",
    price: 95,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    category: "Dashiki",
    rating: 4,
    isOnSale: true
  },
  {
    id: 7,
    name: "Robe Ankara Festive",
    price: 175,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
    category: "Robe Wax",
    rating: 5
  },
  {
    id: 8,
    name: "Ensemble Cérémonie",
    price: 340,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    category: "Mariage",
    rating: 5,
    isNew: true
  }
];

const categories = ["Tous", "Boubou", "Robe Wax", "Pagne", "Mariage", "Kaftan", "Dashiki"];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = products.filter(product => 
    selectedCategory === "Tous" || product.category === selectedCategory
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "newest":
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="min-h-screen bg-fashion-black pt-20">
      {/* Header */}
      <section className="py-16 bg-fashion-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Notre
              <span className="block text-gradient-gold">Collection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
              Explorez notre gamme complète de tenues traditionnelles africaines modernes, 
              créées pour célébrer votre élégance unique
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-fashion-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-fashion-gold text-fashion-black'
                      : 'bg-fashion-charcoal text-gray-300 hover:bg-fashion-gold/20 hover:text-fashion-gold border border-fashion-gold/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-inter">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-fashion-charcoal border border-fashion-gold/30 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter"
              >
                <option value="newest">Plus récent</option>
                <option value="price-low">Prix croissant</option>
                <option value="price-high">Prix décroissant</option>
                <option value="name">Nom A-Z</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-gray-400 font-inter">
            {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-fashion-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ne Manquez Aucune
            <span className="block text-gradient-gold">Nouveauté</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-inter">
            Inscrivez-vous pour être la première informée de nos nouvelles créations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 bg-fashion-black border border-fashion-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter"
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

export default Collection;
