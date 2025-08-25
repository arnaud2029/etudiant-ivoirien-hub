import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Award, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl text-white font-bold text-lg">
              ÉI
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-foreground">
                Étudiant Ivoirien
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Cours et exercices gratuits pour tous
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a 
                  href="/" 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="/signup" 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Cours
                </a>
              </li>
              <li>
                <a 
                  href="/signup" 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-2"
                >
                  <Award className="h-4 w-4" />
                  Exercices
                </a>
              </li>
              <li>
                <a 
                  href="/signup" 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Bibliothèque
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-outline" asChild>
              <a href="/login">Se connecter</a>
            </Button>
            <Button className="btn-hero" asChild>
              <a href="/signup">Créer un compte</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="space-y-4">
              <a 
                href="/"
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="/signup"
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                Cours
              </a>
              <a 
                href="/signup"
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Award className="h-4 w-4" />
                Exercices
              </a>
              <a 
                href="/signup"
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                Bibliothèque
              </a>
              <a 
                href="#contact"
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="btn-outline w-full" asChild>
                  <a href="/login">Se connecter</a>
                </Button>
                <Button className="btn-hero w-full" asChild>
                  <a href="/signup">Créer un compte</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;