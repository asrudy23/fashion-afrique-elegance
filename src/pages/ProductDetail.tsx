
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

// Données des produits (normalement cela viendrait d'une API)
const allProducts = [
  {
    id: 1,
    name: "Boubou Royal Doré",
    price: 189,
    originalPrice: 230,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
    category: "Boubou",
    rating: 5,
    isNew: true,
    isOnSale: true,
    description: "Un boubou d'exception confectionné dans un tissu noble aux reflets dorés. Cette pièce majestueuse allie tradition et modernité pour un look royal incomparable.",
    features: ["Tissu premium brodé main", "Coupe traditionnelle revisitée", "Finitions luxueuses", "Taille ajustable"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Doré", "Noir & Or", "Bordeaux & Or"],
    care: "Nettoyage à sec recommandé",
    delivery: "Livraison gratuite sous 3-5 jours ouvrés"
  },
  {
    id: 2,
    name: "Robe Wax Élégance",
    price: 145,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    category: "Robe Wax",
    rating: 5,
    isNew: true,
    description: "Robe élégante en wax authentique aux motifs sophistiqués. Parfaite pour les occasions spéciales ou le quotidien chic.",
    features: ["Wax 100% coton", "Motifs géométriques exclusifs", "Coupe cintrée flatteuse", "Fermeture éclair invisible"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Multicolore", "Bleu & Jaune", "Rouge & Noir"],
    care: "Lavage machine 30°C",
    delivery: "Livraison gratuite sous 3-5 jours ouvrés"
  },
  {
    id: 3,
    name: "Ensemble Pagne Moderne",
    price: 165,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
    category: "Pagne",
    rating: 4,
    description: "Ensemble deux pièces moderne qui réinvente le pagne traditionnel avec une touche contemporaine.",
    features: ["Ensemble 2 pièces", "Pagne authentique", "Top ajusté", "Jupe longue fendue"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Vert & Or", "Bleu Royal", "Orange Soleil"],
    care: "Lavage délicat recommandé",
    delivery: "Livraison gratuite sous 3-5 jours ouvrés"
  },
  {
    id: 4,
    name: "Tenue Mariage Luxe",
    price: 295,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    category: "Mariage",
    rating: 5,
    isNew: true,
    description: "Tenue de mariage exceptionnelle qui fera de votre jour J un moment inoubliable. Création unique aux détails luxueux.",
    features: ["Broderies perles et fils d'or", "Traîne amovible", "Corsage ajustable", "Accessoires inclus"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blanc & Or", "Ivoire & Champagne", "Rose Poudré"],
    care: "Nettoyage professionnel uniquement",
    delivery: "Livraison express 24-48h"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-fashion-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair text-white mb-4">Produit non trouvé</h1>
          <Link to="/collection" className="btn-gold">
            Retour à la collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fashion-black pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-gray-400">
          <Link to="/" className="hover:text-fashion-gold transition-colors">Accueil</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-fashion-gold transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-fashion-gold">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-fashion-charcoal">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-fashion-gold text-sm font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="bg-fashion-gold text-fashion-black px-3 py-1 rounded-full text-sm font-semibold">
                    Nouveau
                  </span>
                )}
                {product.isOnSale && (
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Promo
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < product.rating ? 'text-fashion-gold fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">({product.rating}/5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-fashion-gold font-bold text-3xl">
                  {product.price}€
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 text-xl line-through">
                    {product.originalPrice}€
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold mb-3">Caractéristiques :</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-fashion-gold rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Taille :</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-fashion-gold bg-fashion-gold text-fashion-black'
                        : 'border-gray-600 text-gray-300 hover:border-fashion-gold hover:text-fashion-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Couleur :</h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-fashion-gold bg-fashion-gold text-fashion-black'
                        : 'border-gray-600 text-gray-300 hover:border-fashion-gold hover:text-fashion-gold'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-white font-semibold mb-3">Quantité :</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-600 text-gray-300 rounded-lg hover:border-fashion-gold hover:text-fashion-gold transition-colors"
                >
                  -
                </button>
                <span className="text-white font-semibold text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-600 text-gray-300 rounded-lg hover:border-fashion-gold hover:text-fashion-gold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button className="btn-gold flex-1 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Ajouter au Panier
              </button>
              <button className="w-12 h-12 border border-gray-600 text-gray-300 rounded-lg hover:border-fashion-gold hover:text-fashion-gold transition-colors flex items-center justify-center">
                <Heart size={20} />
              </button>
              <button className="w-12 h-12 border border-gray-600 text-gray-300 rounded-lg hover:border-fashion-gold hover:text-fashion-gold transition-colors flex items-center justify-center">
                <Share2 size={20} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-800 pt-6 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Entretien :</span>
                <span className="text-gray-300">{product.care}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Livraison :</span>
                <span className="text-gray-300">{product.delivery}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link 
            to="/collection" 
            className="inline-flex items-center gap-2 text-fashion-gold hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Retour à la collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
