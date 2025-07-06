import { useState } from "react";
import { Mail, Instagram,  MapPin, Clock } from "lucide-react";
import { FaWhatsapp,FaSnapchat, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-fashion-black pt-20">
      {/* Header */}
      <section className="py-16 bg-fashion-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Nous
            <span className="block text-gradient-gold">Contacter</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter">
            Une question ? Un projet personnalisé ? Nous sommes là pour vous
            accompagner dans votre quête d'élégance africaine moderne.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-playfair font-bold text-white mb-8">
                Restons en
                <span className="block text-gradient-gold">Contact</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fashion-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-fashion-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-fashion-gold font-semibold font-playfair mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300 font-inter">
                      fashion@email.com
                    </p>
                    <p className="text-gray-300 font-inter">
                      info@fashion-africa.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fashion-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-fashion-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-fashion-gold font-semibold font-playfair mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-300 font-inter">Hay Arrabie</p>
                    <p className="text-gray-300 font-inter">
                      60000 Oujda, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fashion-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-fashion-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-fashion-gold font-semibold font-playfair mb-2">
                      Horaires
                    </h3>
                    <p className="text-gray-300 font-inter">
                      Lun - Ven: 9h00 - 18h00
                    </p>
                    <p className="text-gray-300 font-inter">
                      Sam: 10h00 - 16h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-fashion-gold font-semibold font-playfair mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/rbwomen.sfashion01?utm_source=ig_web_button_share_sheet&igsh=dmlxOWFvdmFmNm15"
                    className="w-12 h-12 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-lg flex items-center justify-center text-fashion-gold transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://wa.me/c/212690799236"
                    className="w-12 h-12 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-lg flex items-center justify-center text-fashion-gold transition-all duration-300"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                  <a
                    href="https://www.snapchat.com/add/rbwomensfashion?share_id=EAh_BXH5Spg&locale=fr-FR"
                    className="w-12 h-12 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-lg flex items-center justify-center text-fashion-gold transition-all duration-300"
                  >
                    <FaSnapchat size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@rb.womens.fashion?_t=ZS-8xnz52sPzb6&_r=1"
                    className="w-12 h-12 bg-fashion-gold/10 hover:bg-fashion-gold hover:text-fashion-black rounded-lg flex items-center justify-center text-fashion-gold transition-all duration-300"
                  >
                    <FaTiktok size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-fashion-charcoal rounded-xl p-8 border border-fashion-gold/20">
                <h2 className="text-3xl font-playfair font-bold text-white mb-8">
                  Envoyez-nous un
                  <span className="text-gradient-gold"> Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-fashion-gold font-medium mb-2 font-inter"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-fashion-black border border-fashion-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-fashion-gold font-medium mb-2 font-inter"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-fashion-black border border-fashion-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-fashion-gold font-medium mb-2 font-inter"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-fashion-black border border-fashion-gold/30 rounded-lg text-white focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="commande">
                        Question sur une commande
                      </option>
                      <option value="produit">Information produit</option>
                      <option value="personnalisation">
                        Demande de personnalisation
                      </option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-fashion-gold font-medium mb-2 font-inter"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-fashion-black border border-fashion-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fashion-gold transition-colors duration-300 font-inter resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 text-lg"
                  >
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-fashion-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Questions
              <span className="block text-gradient-gold">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-fashion-black rounded-xl p-6 border border-fashion-gold/20">
              <h3 className="text-fashion-gold font-playfair font-semibold text-xl mb-3">
                Quels sont vos délais de livraison ?
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Nos délais de livraison sont de 1-2 jours ouvrables au Maroc
                et 7-10 jours pour l'international.Pour les
                pièces personnalisées, comptez 2-3 semaines supplémentaires.
              </p>
            </div>

            <div className="bg-fashion-black rounded-xl p-6 border border-fashion-gold/20">
              <h3 className="text-fashion-gold font-playfair font-semibold text-xl mb-3">
                Proposez-vous des tailles sur mesure ?
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Absolument ! Nous proposons un service de personnalisation pour
                adapter nos créations à vos mensurations exactes. Contactez-nous
                pour plus d'informations.
              </p>
            </div>

            <div className="bg-fashion-black rounded-xl p-6 border border-fashion-gold/20">
              <h3 className="text-fashion-gold font-playfair font-semibold text-xl mb-3">
                Comment entretenir mes tenues FASHION ?
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                En général, nous recommandons un nettoyage à sec
                pour préserver les tissus et broderies délicates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
