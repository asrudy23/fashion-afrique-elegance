// Panier.js
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Trash2 ,ShoppingBag} from "lucide-react";
import Popup from "@/components/Popup";

const Panier = () => {
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Fonction pour notifier le Header d'une mise à jour
  const dispatchCartUpdate = () => {
    window.dispatchEvent(new Event("cartUpdated"));
  };
  
  const updateCartAndStorage = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatchCartUpdate();
  }

  const removeFromCart = (cartItemId) => {
    const newCart = cart.filter((item) => item.cartItemId !== cartItemId);
    updateCartAndStorage(newCart);
    setPopup({ message: "Article retiré du panier", type: "success" });
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return; // Ne pas descendre en dessous de 1
    const newCart = cart.map((item) =>
      item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
    );
    updateCartAndStorage(newCart);
  };

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  }, [cart]);


  const sendToWhatsapp = () => {
    if (cart.length === 0) return;

    const message = cart
      .map(
        (item) =>
          `🛍️*${item.name}*\n• Taille: ${item.size}\n• Couleur: ${item.color}\n• Qté: ${item.quantity}\n• Prix: ${item.price}€`
      )
      .join("\n\n");

    const finalMessage = `*Bonjour j'aimerais effectuer une commande*\n\n${message}\n\n💰 *Total*: ${total}MAD`;
    const phoneNumber = "212693710555";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank");

    // Vider le panier
    updateCartAndStorage([]);
  };
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-fashion-black text-center px-4">
        <ShoppingBag size={64} className="text-fashion-gold mb-6" />
        <h1 className="text-3xl font-playfair font-bold mb-4">Votre panier est vide</h1>
        <p className="text-gray-400 mb-8">On dirait que vous n'avez pas encore fait votre choix.</p>
        <Link to="/collection" className="btn-gold">
          Découvrir la collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fashion-black pt-24 px-4 sm:px-6 lg:px-8 text-white">
      {popup && <Popup message={popup.message} type={popup.type} onClose={() => setPopup(null)} />}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-playfair font-bold mb-8">Votre Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Colonne des articles */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-fashion-charcoal p-4 rounded-lg flex items-center justify-between gap-4 transition-all duration-300"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-400 text-sm">Taille : {item.size}</p>
                    <p className="text-gray-400 text-sm">Couleur : {item.color}</p>
                    <p className="text-fashion-gold font-bold mt-2">{item.price.toFixed(2)}€</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   {/* Sélecteur de quantité */}
                   <div className="flex items-center gap-2 border border-gray-600 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-2 py-1 text-gray-300 hover:text-fashion-gold"
                      >
                        -
                      </button>
                      <span className="font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-2 py-1 text-gray-300 hover:text-fashion-gold"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-white font-bold text-lg w-20 text-right">
                      {(item.price * item.quantity).toFixed(2)}€
                    </p>

                    <button onClick={() => removeFromCart(item.cartItemId)} className="text-gray-500 hover:text-red-500 transition-colors">
                      <Trash2 size={20} />
                    </button>
                </div>
              </div>
            ))}
          </div>

          {/* Colonne du résumé */}
          <div className="lg:col-span-1">
            <div className="bg-fashion-charcoal p-6 rounded-lg sticky top-24">
              <h2 className="text-2xl font-playfair font-bold mb-6 border-b border-fashion-gold/20 pb-4">Résumé de la commande</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Sous-total</span>
                  <span>{total}MAD</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Livraison</span>
                  <span className="text-fashion-gold">Gratuite</span>
                </div>
              </div>
              <div className="border-t border-fashion-gold/20 mt-6 pt-4">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>{total}MAD</span>
                </div>
              </div>

              <button
                onClick={sendToWhatsapp}
                className="btn-gold w-full py-3 text-lg mt-8"
              >
                Commander via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;