import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fonction pour mettre à jour le compteur
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      // On somme les quantités de chaque article
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount(); // Au chargement initial

    // Écoute les mises à jour depuis d'autres onglets
    window.addEventListener("storage", updateCartCount);
    // Écoute les mises à jour depuis le même onglet (notre événement personnalisé)
    window.addEventListener("cartUpdated", updateCartCount);

    // Nettoyage des écouteurs
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Collection", href: "/collection" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fashion-black/95 backdrop-blur-md border-b border-fashion-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
              <img src="src/images/logo-rb.png" alt="Logo"></img>
            </div>
            <span className="text-2xl font-playfair font-bold text-gradient-gold">
              RB WOMEN'S FASHION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-inter font-medium transition-all duration-300 relative ${
                  isActive(item.href)
                    ? "text-fashion-gold"
                    : "text-gray-300 hover:text-fashion-gold"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-fashion-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <Link
              to="/panier"
              className="relative p-2 text-gray-300 hover:text-fashion-gold transition-colors duration-300"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-fashion-gold text-fashion-black text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-fashion-gold transition-colors duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-fashion-gold/20 bg-fashion-black/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-fashion-gold bg-fashion-gold/10"
                      : "text-gray-300 hover:text-fashion-gold hover:bg-fashion-gold/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
