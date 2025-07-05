
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  rating, 
  isNew, 
  isOnSale 
}: ProductCardProps) => {
  return (
    <div className="group relative bg-fashion-charcoal rounded-xl overflow-hidden hover-lift hover:bg-fashion-gray-dark transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-fashion-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-fashion-gold text-fashion-black px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </span>
          )}
          {isOnSale && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Promo
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="absolute bottom-4 right-4 w-12 h-12 bg-fashion-gold text-fashion-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110">
          <ShoppingBag size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-fashion-gold text-sm font-medium uppercase tracking-wider">
            {category}
          </span>
        </div>
        
        <h3 className="text-white font-playfair text-lg font-semibold mb-3 group-hover:text-fashion-gold transition-colors duration-300">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < rating ? 'text-fashion-gold fill-current' : 'text-gray-600'
              }`}
            />
          ))}
          <span className="text-gray-400 text-sm ml-2">({rating}/5)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-fashion-gold font-bold text-xl">
            {price}€
          </span>
          {originalPrice && (
            <span className="text-gray-500 text-sm line-through">
              {originalPrice}€
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
