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
  }
];

const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Informatique"];
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