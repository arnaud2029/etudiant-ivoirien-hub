import { BookOpen, Award, Users, TrendingUp, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Gratuit pour tous",
      description: "Accès illimité à des ressources éducatives de qualité, sans frais cachés.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "Cours par niveau",
      description: "Du primaire à l'université, tout est organisé selon votre niveau d'études.",
      gradient: "from-secondary to-green-500"
    },
    {
      icon: Award,
      title: "Exercices interactifs",
      description: "Pratiquez, corrigez-vous automatiquement et progressez à votre rythme.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: TrendingUp,
      title: "Suivi personnalisé",
      description: "Suivez vos progrès, obtenez des badges et célébrez vos réussites.",
      gradient: "from-secondary to-green-500"
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Apprenez quand vous voulez, où vous voulez, selon votre emploi du temps.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Shield,
      title: "Contenu vérifié",
      description: "Tous nos cours sont créés et vérifiés par des enseignants qualifiés.",
      gradient: "from-secondary to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient-orange">Pourquoi</span>{" "}
            <span className="text-foreground">nous choisir ?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Découvrez les avantages qui font d'Étudiant Ivoirien la plateforme 
            d'apprentissage préférée des étudiants ivoiriens.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 card-float hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              <span className="text-gradient-orange">Rejoignez</span>{" "}
              <span className="text-foreground">des milliers d'étudiants</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Commencez votre parcours d'apprentissage dès aujourd'hui et 
              découvrez pourquoi tant d'étudiants nous font confiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero px-8 py-4 text-lg">
                Créer mon compte gratuit
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Explorer les cours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;