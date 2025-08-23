import { BookOpen, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl text-white font-bold text-xl">
                ÉI
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Étudiant Ivoirien
                </h3>
                <p className="text-sm text-muted-foreground">
                  Apprendre ensemble
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              La plateforme d'apprentissage gratuite qui accompagne les étudiants 
              ivoiriens vers la réussite académique.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#cours" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Cours
                </a>
              </li>
              <li>
                <a 
                  href="#exercices" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Exercices interactifs
                </a>
              </li>
              <li>
                <a 
                  href="#bibliotheque" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Bibliothèque
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#devenir-auteur" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Devenir auteur
                </a>
              </li>
            </ul>
          </div>

          {/* Matières */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Matières populaires
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#mathematiques" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Mathématiques
                </a>
              </li>
              <li>
                <a 
                  href="#francais" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Français
                </a>
              </li>
              <li>
                <a 
                  href="#anglais" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Anglais
                </a>
              </li>
              <li>
                <a 
                  href="#sciences" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Sciences
                </a>
              </li>
              <li>
                <a 
                  href="#histoire" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Histoire-Géographie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:arnaudkouadio2029@gmail.com" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  arnaudkouadio2029@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="tel:+2250779946362" 
                  className="hover:text-primary transition-colors duration-200"
                >
                  +2250779946362/0503490066
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <address className="not-italic">
                  Yamoussoukro, Sopim<br />
                  Côte d'Ivoire
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Étudiant Ivoirien — Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a 
                href="#confidentialite" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#cgu" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Conditions d'utilisation
              </a>
              <a 
                href="#cookies" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
          
          {/* Final tagline */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground text-sm italic">
              "Rejoignez des milliers d'étudiants ivoiriens — Commencez aujourd'hui."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;