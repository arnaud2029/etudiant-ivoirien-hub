import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Star className="h-4 w-4 text-primary fill-current" />
              <span className="text-sm font-medium text-primary">
                100% Gratuit pour tous
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                <span className="text-gradient-orange">Apprendre</span>{" "}
                <span className="text-foreground">simplement.</span><br />
                <span className="text-gradient-green">Gratuitement.</span>{" "}
                <span className="text-foreground">Pour tous.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Des cours et exercices en ligne organisés par niveau et par matière. 
                Apprenez quand vous voulez, où vous voulez, à votre rythme.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hero text-lg px-8 py-4 h-auto">
                <span>Commencer maintenant</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline text-lg px-8 py-4 h-auto group"
                asChild
              >
                <a href="/cours">
                  <Play className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                  <span>Parcourir la bibliothèque</span>
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-orange">500+</div>
                <div className="text-sm text-muted-foreground">Cours disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-green">10k+</div>
                <div className="text-sm text-muted-foreground">Étudiants inscrits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-orange">95%</div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Image */}
              <img
                src={heroImage}
                alt="Étudiants ivoiriens apprenant ensemble"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📚</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Mathématiques</div>
                    <div className="text-xs text-muted-foreground">120 cours</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-bounce-in" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Français</div>
                    <div className="text-xs text-muted-foreground">85 cours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;