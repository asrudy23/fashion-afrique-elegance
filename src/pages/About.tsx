
const About = () => {
  return (
    <div className="min-h-screen bg-fashion-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-fashion-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">
            Notre
            <span className="block text-gradient-gold">Histoire</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed">
            FASHION est né de l'amour profond pour la richesse culturelle africaine 
            et de la vision d'une mode qui célèbre l'héritage tout en embrassant la modernité.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                Une Vision
                <span className="block text-gradient-gold">D'Élégance</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-inter leading-relaxed">
                Fondée par des passionnés de mode et de culture africaine, FASHION transcende 
                les frontières entre tradition et innovation. Chaque pièce de notre collection 
                raconte une histoire, porte un héritage et affirme une identité.
              </p>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                Nous croyons que la mode est un langage universel qui permet d'exprimer 
                sa fierté culturelle, son raffinement et sa personnalité unique.
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop"
                alt="Vision FASHION"
                className="rounded-xl shadow-2xl hover-lift"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt="Artisanat FASHION"
                className="rounded-xl shadow-2xl hover-lift"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                L'Art de
                <span className="block text-gradient-gold">L'Artisanat</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-inter leading-relaxed">
                Nos créations naissent de la collaboration avec des artisans talentueux 
                qui maîtrisent les techniques traditionnelles transmises de génération en génération. 
                Chaque pièce est confectionnée avec un soin méticuleux et une attention aux détails.
              </p>
              <p className="text-lg text-gray-300 font-inter leading-relaxed">
                Des tissus wax authentiques aux broderies dorées, en passant par les coupes modernes, 
                nous fusionnons savoir-faire ancestral et design contemporain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-fashion-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Nos
              <span className="block text-gradient-gold">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
              Les principes qui guident chacune de nos créations et interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-fashion-black rounded-xl hover-lift animate-fade-in border border-fashion-gold/20">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-fashion-black font-bold text-2xl font-playfair">A</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-fashion-gold mb-4">Authenticité</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Nous honorons l'héritage culturel africain en préservant les techniques traditionnelles 
                et en respectant l'histoire de chaque motif et textile.
              </p>
            </div>

            <div className="text-center p-8 bg-fashion-black rounded-xl hover-lift animate-fade-in border border-fashion-gold/20">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-fashion-black font-bold text-2xl font-playfair">E</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-fashion-gold mb-4">Excellence</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Chaque pièce FASHION est le résultat d'un travail minutieux, 
                d'une sélection rigoureuse des matériaux et d'un contrôle qualité exigeant.
              </p>
            </div>

            <div className="text-center p-8 bg-fashion-black rounded-xl hover-lift animate-fade-in border border-fashion-gold/20">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-fashion-black font-bold text-2xl font-playfair">I</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-fashion-gold mb-4">Innovation</h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Nous réinventons constamment la mode traditionnelle pour créer des pièces 
                qui s'adaptent au style de vie moderne sans perdre leur essence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
            Notre
            <span className="block text-gradient-gold">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 font-inter leading-relaxed mb-8">
            Permettre à chaque femme de célébrer sa beauté naturelle et son héritage culturel 
            à travers des créations qui allient tradition, élégance et modernité.
          </p>
          <p className="text-lg text-gray-300 font-inter leading-relaxed">
            FASHION, c'est plus qu'une marque de mode - c'est un pont entre les générations, 
            une célébration de la diversité culturelle et un hymne à la féminité africaine dans toute sa splendeur.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
