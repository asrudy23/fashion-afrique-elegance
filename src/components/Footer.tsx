
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp,FaSnapchat, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-fashion-charcoal border-t border-fashion-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <img src="/images/logo-rb.png" alt="Logo"></img>
                </div>
              <span className="text-3xl font-playfair font-bold text-gradient-gold"> RB WOMEN'S FASHION</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md font-inter leading-relaxed">
              FASHION célèbre la beauté et l'élégance de la mode traditionnelle africaine moderne. 
              Chaque pièce raconte une histoire, chaque tenue exprime votre raffinement.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rbwomen.sfashion01?utm_source=ig_web_button_share_sheet&igsh=dmlxOWFvdmFmNm15" className="w-10 h-10 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-full flex items-center justify-center text-fashion-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/c/212690799236" className="w-10 h-10 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-full flex items-center justify-center text-fashion-gold transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://www.snapchat.com/add/rbwomensfashion?share_id=EAh_BXH5Spg&locale=fr-FR" className="w-10 h-10 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-full flex items-center justify-center text-fashion-gold transition-all duration-300">
                <FaSnapchat size={18} />
              </a>
              <a href="https://www.tiktok.com/@rb.womens.fashion?_t=ZS-8xnz52sPzb6&_r=1" className="w-10 h-10 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-full flex items-center justify-center text-fashion-gold transition-all duration-300">
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-fashion-gold font-playfair font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-fashion-gold transition-colors duration-300 font-inter">Accueil</Link></li>
              <li><Link to="/collection" className="text-gray-400 hover:text-fashion-gold transition-colors duration-300 font-inter">Collection</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-fashion-gold transition-colors duration-300 font-inter">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-fashion-gold transition-colors duration-300 font-inter">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-fashion-gold font-playfair font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400 font-inter">
              <p>rbwomenshop@email.com</p>
              <p>+212 690-799236</p>
              <p>Oujda,Maroc</p>
            </div>
          </div>
        </div>

        <div className="border-t border-fashion-gold/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2025 RB WOMEN'S FASHION. Tous droits réservés. Créé avec passion pour célébrer l'élégance africaine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
