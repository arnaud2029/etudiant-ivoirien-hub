import { useState } from "react";
import { Search, BookOpen, Users, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";
import CourseCard from "@/components/CourseCard";
import coursePythonCover from "@/assets/course-python-cover.jpg";
import courseProgrammationCover from "@/assets/course-programmation-cover.jpg";
import courseVariablesCover from "@/assets/course-variables-cover.jpg";
import courseAlgorithmeCover from "@/assets/course-algorithme-cover.jpg";
import courseBoulangerieCover from "@/assets/course-boulangerie-cover.jpg";
import courseLavageAutoCover from "@/assets/course-lavage-auto-cover.jpg";
import courseLocationVoitureCover from "@/assets/course-location-voiture-cover.jpg";
import courseMobileMoneyCover from "@/assets/course-mobile-money-cover.jpg";
import coursePoissonerieCover from "@/assets/course-poissonnerie-cover.jpg";
import courseQuincaillerieCover from "@/assets/course-quincaillerie-cover.jpg";
import course500IdeesCover from "@/assets/course-500-idees-cover.jpg";

const courses = [
  {
    id: "1",
    title: "Cours de Python - Introduction à la programmation Python pour la biologie",
    description: "Cours complet de Python par l'Université Paris Cité. Couvre les variables, listes, boucles, fichiers, modules et bien plus. Idéal pour débutants en programmation scientifique.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant à Intermédiaire",
    duration: "Variable (cours complet)",
    pages: 50,
    downloads: 0,
    thumbnail: coursePythonCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/cours-python.pdf",
    content: `# Cours de Python
# Introduction à la programmation Python pour la biologie

**Par Patrick Fuchs et Pierre Poulain**
**Université Paris Cité, France**

Ce cours complet couvre tous les aspects fondamentaux de Python :

## Chapitres principaux :
- Introduction à Python et au shell
- Variables et types de données
- Affichage et formatage
- Listes et manipulation de données
- Boucles (for, while) et comparaisons
- Tests et conditions
- Fonctions
- Modules et bibliothèques
- Fichiers (lecture/écriture)
- Plus de 100 pages de contenu pédagogique

**Licence :** Creative Commons BY-SA 3.0 FR

Téléchargez le PDF complet pour accéder à l'intégralité du cours avec exemples et exercices.`
  },
  {
    id: "2", 
    title: "Les bases de la programmation",
    description: "Introduction complète à la programmation informatique. Découvrez ce qu'est un programme, les langages de programmation, les IDE et les bonnes pratiques pour bien débuter.",
    level: "Débutant",
    subject: "Informatique", 
    difficulty: "Débutant",
    duration: "Variable (cours complet)",
    pages: 20,
    downloads: 0,
    thumbnail: courseProgrammationCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/les-bases-de-la-programmation.pdf",
    content: `# Les bases de la programmation

Un cours d'introduction en douceur à la programmation informatique.

## Table des matières :
1. **Pourquoi la programmation ?**
2. **Créer des programmes**
   - Programmation dans un contexte donné
   - Les programmes comme type de fichiers particulier
3. **Au commencement était le code source**
4. **Vers l'exécutable, et au-delà !**
   - Langages compilés
   - Langages interprétés
   - Langages à machine virtuelle
5. **Il y a programmer, et bien programmer**
   - Les outils indispensables
   - Les IDE
   - Quelques outils supplémentaires
   - Les bonnes pratiques

## Objectifs :
- Faire comprendre en quoi consiste la programmation
- Introduire les notions et le vocabulaire essentiels
- Présenter les principaux langages de programmation

Idéal pour ceux qui n'ont jamais programmé et souhaitent comprendre les fondamentaux avant de se lancer.

Téléchargez le PDF complet pour accéder à l'intégralité du cours.`
  },
  {
    id: "3",
    title: "Les Variables - Algorithmique",
    description: "Cours détaillé sur les variables en programmation : leur utilité, déclaration, types numériques et manipulation. Concepts fondamentaux pour tout programmeur.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant",
    duration: "2-3 heures",
    pages: 25,
    downloads: 0,
    thumbnail: courseVariablesCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/les-variables.pdf",
    content: `# Les Variables en Programmation

Cours complet sur les variables en algorithmique et programmation.

## Contenu du cours :
- À quoi servent les variables ?
- Déclaration des variables
- Types numériques classiques
- Manipulation et utilisation des variables
- Bonnes pratiques de nommage

Téléchargez le PDF pour accéder au cours complet avec exemples et exercices.`
  },
  {
    id: "4",
    title: "Introduction à l'Algorithmique",
    description: "Découvrez les bases de l'algorithmique : qu'est-ce qu'un algorithme, comment penser algorithmiquement, et les fondamentaux pour résoudre des problèmes informatiques.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant",
    duration: "3-4 heures",
    pages: 30,
    downloads: 0,
    thumbnail: courseAlgorithmeCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/introduction-algorithme.pdf",
    content: `# Introduction à l'Algorithmique

Un cours pour comprendre les fondements de la pensée algorithmique.

## Points clés :
- Qu'est-ce que l'algorithmique ?
- Comment penser de façon algorithmique
- Instructions et résolution de problèmes
- Faut-il être matheux ?
- Premiers pas en programmation

Téléchargez le PDF complet pour démarrer votre apprentissage de l'algorithmique.`
  },
  {
    id: "5",
    title: "Plan d'Affaires - Boulangerie/Pâtisserie",
    description: "Projet complet de mise en place d'une boulangerie industrielle au Sénégal. Analyse de marché, études financières, stratégie marketing et plan opérationnel détaillé.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Intermédiaire",
    duration: "5-6 heures",
    pages: 45,
    downloads: 0,
    thumbnail: courseBoulangerieCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-boulangerie.pdf",
    content: `# Plan d'Affaires - Boulangerie/Pâtisserie

Plan d'affaires complet pour la création d'une boulangerie industrielle.

## Sections principales :
- Résumé opérationnel
- Présentation de l'offre
- Description du marché
- Étude financière
- Stratégie marketing
- Plan de mise en œuvre

Un document professionnel pour entrepreneurs souhaitant se lancer dans la boulangerie.`
  },
  {
    id: "6",
    title: "Plan d'Affaires - Station de Lavage Auto",
    description: "Business plan complet pour l'ouverture d'une station de lavage automobile. Étude de faisabilité, investissements nécessaires et projections financières.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Intermédiaire",
    duration: "4-5 heures",
    pages: 40,
    downloads: 0,
    thumbnail: courseLavageAutoCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-lavage-auto.pdf",
    content: `# Plan d'Affaires - Station de Lavage Auto

Guide complet pour créer une entreprise de lavage automobile rentable.

## Contenu :
- Analyse du marché automobile
- Investissements et équipements
- Stratégie de tarification
- Plan financier détaillé
- Marketing et acquisition clients

Téléchargez le PDF pour accéder au plan d'affaires complet.`
  },
  {
    id: "7",
    title: "Plan d'Affaires - Location de Voitures",
    description: "Projet détaillé de création d'une entreprise de location de véhicules. Stratégie commerciale, gestion de flotte et analyse de rentabilité.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Intermédiaire",
    duration: "5-6 heures",
    pages: 42,
    downloads: 0,
    thumbnail: courseLocationVoitureCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-location-voiture.pdf",
    content: `# Plan d'Affaires - Location de Voitures

Business plan professionnel pour le secteur de la location automobile.

## Points essentiels :
- Étude de marché sectorielle
- Gestion de flotte automobile
- Politique de tarification
- Assurances et aspects légaux
- Projections financières sur 3 ans

Un guide complet pour entrepreneurs du secteur automobile.`
  },
  {
    id: "8",
    title: "Plan d'Affaires - Service Mobile Money",
    description: "Plan d'affaires pour le lancement d'un service de transfert d'argent mobile. Analyse du secteur fintech, réglementation et modèle économique.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Avancé",
    duration: "6-7 heures",
    pages: 50,
    downloads: 0,
    thumbnail: courseMobileMoneyCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-mobile-money.pdf",
    content: `# Plan d'Affaires - Service Mobile Money

Guide pour créer un service de transfert d'argent mobile en Afrique.

## Sections clés :
- Écosystème fintech africain
- Réglementation et licences
- Infrastructure technique
- Partenariats bancaires
- Stratégie d'acquisition d'utilisateurs
- Modèle de revenus

Un document essentiel pour entrepreneurs fintech.`
  },
  {
    id: "9",
    title: "Plan d'Affaires - Poissonnerie (Partie 1)",
    description: "Première partie du plan d'affaires pour l'ouverture d'une poissonnerie. Étude du marché de la pêche, approvisionnement et logistique.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Intermédiaire",
    duration: "4-5 heures",
    pages: 38,
    downloads: 0,
    thumbnail: coursePoissonerieCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-poissonnerie-1.pdf",
    content: `# Plan d'Affaires - Poissonnerie (Partie 1)

Business plan pour créer une entreprise dans le secteur de la pêche.

## Contenu :
- Marché de la pêche en Afrique
- Chaîne d'approvisionnement
- Conservation et logistique
- Normes sanitaires
- Analyse concurrentielle

Première partie d'un guide complet sur l'entrepreneuriat dans la pêche.`
  },
  {
    id: "10",
    title: "Plan d'Affaires - Poissonnerie (Partie 2)",
    description: "Suite du plan d'affaires pour poissonnerie. Focus sur les aspects financiers, marketing et développement commercial.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Intermédiaire",
    duration: "4-5 heures",
    pages: 35,
    downloads: 0,
    thumbnail: coursePoissonerieCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-poissonnerie-2.pdf",
    content: `# Plan d'Affaires - Poissonnerie (Partie 2)

Deuxième partie du business plan pour le secteur de la pêche.

## Sections :
- Plan financier détaillé
- Stratégie marketing
- Développement commercial
- Ressources humaines
- Plan de croissance

Complément indispensable de la partie 1 pour entrepreneurs du secteur.`
  },
  {
    id: "11",
    title: "Plan d'Affaires - Quincaillerie",
    description: "Business plan complet pour l'ouverture d'une quincaillerie. Gestion des stocks, fournisseurs, et stratégie commerciale dans le secteur du BTP.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Intermédiaire",
    duration: "5-6 heures",
    pages: 43,
    downloads: 0,
    thumbnail: courseQuincaillerieCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/plan-affaire-quincaillerie.pdf",
    content: `# Plan d'Affaires - Quincaillerie

Guide entrepreneurial pour le secteur de la quincaillerie et du BTP.

## Points principaux :
- Marché du BTP en Afrique
- Gestion des stocks et inventaire
- Relations fournisseurs
- Stratégie de tarification
- Marketing B2B et B2C
- Projections financières

Un document complet pour entrepreneurs du secteur de la construction.`
  },
  {
    id: "12",
    title: "500 Idées de Business en Afrique",
    description: "Compilation de 500 idées d'entreprises adaptées au contexte africain. Secteurs variés, opportunités de marché et conseils pour entrepreneurs innovants.",
    level: "Université",
    subject: "Entrepreneuriat",
    difficulty: "Débutant",
    duration: "Variable",
    pages: 80,
    downloads: 0,
    thumbnail: course500IdeesCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: true,
    pdfUrl: "/pdfs/500-idees-business-afrique.pdf",
    content: `# 500 Idées de Business en Afrique

Une mine d'or pour entrepreneurs à la recherche d'opportunités.

## Ce que vous y trouverez :
- 500 idées d'affaires variées
- Opportunités par secteur
- Analyse des tendances africaines
- Idées à faible investissement
- Business à fort potentiel
- Conseils de démarrage

Parfait pour trouver l'inspiration et lancer votre projet entrepreneurial en Afrique.`
  }
];

const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Informatique", "Entrepreneuriat"];
const difficulties = ["Tous", "Débutant", "Intermédiaire", "Avancé", "Expert"];

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Toutes");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === "Tous" || course.level === selectedLevel;
    const matchesSubject = selectedSubject === "Toutes" || course.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === "Tous" || course.difficulty === selectedDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesSubject && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800 border-green-200";
      case "Intermédiaire": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Avancé": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Expert": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Primaire": return <BookOpen className="h-4 w-4" />;
      case "Collège": return <Users className="h-4 w-4" />;
      case "Lycée": return <GraduationCap className="h-4 w-4" />;
      case "Université": return <GraduationCap className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <BookOpen className="h-4 w-4" />
              Bibliothèque de cours gratuits
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 animate-fade-in">
              Explorez nos cours
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Du primaire à l'université, découvrez des centaines de cours gratuits 
              organisés par niveau et matière. Téléchargez ou consultez en ligne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{courses.length}+</div>
                <div className="text-sm text-muted-foreground">Cours disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Niveaux couverts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Matières</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-6 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Rechercher un cours..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Level Filter */}
              <div>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              {/* Subject Filter */}
              <div>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              {/* Difficulty Filter */}
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredCourses.length} cours trouvé{filteredCourses.length > 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Aucun cours trouvé</h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos filtres ou votre recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
};

export default Courses;