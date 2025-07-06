
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/rb-shop15.png"
          alt="Femme élégante en tenue africaine moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-fashion-black/60"></div>
        <div className="absolute inset-0 african-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
            L'Élégance
            <span className="block text-gradient-gold">Africaine</span>
            <span className="block text-white">Moderne</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-inter leading-relaxed">
            Découvrez notre collection exclusive de tenues traditionnelles africaines, 
            alliant raffinement contemporain et héritage culturel authentique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/collection" className="btn-gold inline-flex items-center px-8 py-4 text-lg">
              Découvrir la Collection
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-fashion-gold border-2 border-fashion-gold rounded-lg hover:bg-fashion-gold hover:text-fashion-black transition-all duration-300"
            >
              Notre Histoire
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-fashion-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fashion-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
