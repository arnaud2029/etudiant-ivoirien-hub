import { useState } from "react";
import { Search, Target, Trophy, BookOpen, Award, CheckCircle, Users, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";
import ExerciseCard from "@/components/ExerciseCard";
import exerciseAlgoAbc from "@/assets/exercise-algo-abc-cover.jpg";
import exerciseIntroVariables from "@/assets/exercise-intro-variables-cover.jpg";
import exerciseTests from "@/assets/exercise-tests-cover.jpg";
import exerciseLogique from "@/assets/exercise-logique-cover.jpg";
import exerciseTableaux from "@/assets/exercise-tableaux-cover.jpg";
import exerciseTechniquesRusses from "@/assets/exercise-techniques-russes-cover.jpg";
import exerciseTableauxMulti from "@/assets/exercise-tableaux-multi-cover.jpg";
import exerciseTableauxPredefini from "@/assets/exercise-tableaux-predefini-cover.jpg";
import exerciseFichiers from "@/assets/exercise-fichiers-cover.jpg";

const exercises = [
  {
    id: "1",
    title: "Exercices d'Algorithmique (ABC)",
    description: "Collection complète d'exercices d'algorithmique de tous niveaux : faciles, sérieux, difficiles et pour les champions. Parfait pour progresser étape par étape.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Tous niveaux",
    duration: "Variable",
    points: 500,
    type: "PDF",
    thumbnail: exerciseAlgoAbc,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-algo-abc.pdf",
    questions: 25
  },
  {
    id: "2",
    title: "Introduction à l'Algorithme et Variables",
    description: "Exercices pratiques sur l'introduction à l'algorithmique et la manipulation des variables. Idéal pour débuter en programmation.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant",
    duration: "45-60 min",
    points: 100,
    type: "PDF",
    thumbnail: exerciseIntroVariables,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-intro-variables.pdf",
    questions: 9
  },
  {
    id: "3",
    title: "Exercices sur les Tests",
    description: "Série d'exercices sur les structures conditionnelles (SI...ALORS...SINON). Maîtrisez les tests et conditions en programmation.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant",
    duration: "1-2 heures",
    points: 150,
    type: "PDF",
    thumbnail: exerciseTests,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-tests.pdf",
    questions: 12
  },
  {
    id: "4",
    title: "Exercices sur la Logique",
    description: "Approfondissez votre maîtrise des opérateurs logiques ET et OU. Exercices sur les conditions composées et transformations de Morgan.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "1-2 heures",
    points: 120,
    type: "PDF",
    thumbnail: exerciseLogique,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-logique.pdf",
    questions: 10
  },
  {
    id: "5",
    title: "Exercices sur les Tableaux",
    description: "Série d'exercices pratiques sur la manipulation des tableaux : déclaration, remplissage, parcours et algorithmes courants sur tableaux.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "2-3 heures",
    points: 200,
    type: "PDF",
    thumbnail: exerciseTableaux,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-tableaux.pdf",
    questions: 14
  },
  {
    id: "6",
    title: "Exercices - Techniques Russes",
    description: "Exercices avancés sur les techniques algorithmiques sophistiquées. Pour programmeurs expérimentés souhaitant perfectionner leurs compétences.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Avancé",
    duration: "3-4 heures",
    points: 300,
    type: "PDF",
    thumbnail: exerciseTechniquesRusses,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-techniques-russes.pdf",
    questions: 15
  },
  {
    id: "7",
    title: "Exercices - Tableaux Multidimensionnels",
    description: "Exercices sur les tableaux à plusieurs dimensions (matrices, cubes). Manipulation avancée des structures de données complexes.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Avancé",
    duration: "2-3 heures",
    points: 250,
    type: "PDF",
    thumbnail: exerciseTableauxMulti,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-tableaux-multi.pdf",
    questions: 12
  },
  {
    id: "8",
    title: "Exercices - Tableaux Prédéfinis",
    description: "Exercices sur l'utilisation des tableaux prédéfinis et structures de données built-in. Optimisez votre code avec les bonnes structures.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "2 heures",
    points: 180,
    type: "PDF",
    thumbnail: exerciseTableauxPredefini,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-tableaux-predefini.pdf",
    questions: 10
  },
  {
    id: "9",
    title: "Exercices sur les Fichiers",
    description: "Série d'exercices pratiques sur la gestion des fichiers : ouverture, lecture, écriture, et traitement de données persistantes.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "2-3 heures",
    points: 200,
    type: "PDF",
    thumbnail: exerciseFichiers,
    hasVideo: false,
    hasPdf: true,
    pdfUrl: "/pdfs/exercices-fichiers.pdf",
    questions: 11
  }
];

const levels = ["Tous", "Université"];
const subjects = ["Toutes", "Informatique"];
const difficulties = ["Tous", "Tous niveaux", "Débutant", "Intermédiaire", "Avancé"];
const types = ["Tous", "PDF"];

const Exercises = () => {
  const [selectedLevel, setSelectedLevel] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Toutes");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tous");
  const [selectedType, setSelectedType] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExercises = exercises.filter(exercise => {
    const matchesLevel = selectedLevel === "Tous" || exercise.level === selectedLevel;
    const matchesSubject = selectedSubject === "Toutes" || exercise.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === "Tous" || exercise.difficulty === selectedDifficulty;
    const matchesType = selectedType === "Tous" || exercise.type === selectedType;
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesSubject && matchesDifficulty && matchesType && matchesSearch;
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Quiz": return <Trophy className="h-4 w-4" />;
      case "Exercice": return <BookOpen className="h-4 w-4" />;
      case "Problème": return <Award className="h-4 w-4" />;
      case "QCM": return <CheckCircle className="h-4 w-4" />;
      case "Dissertation": return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getProgressColor = (completed: number) => {
    if (completed === 100) return "bg-green-500";
    if (completed >= 50) return "bg-orange-500";
    if (completed > 0) return "bg-blue-500";
    return "bg-gray-300";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Trophy className="h-4 w-4" />
              Exercices interactifs
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 animate-fade-in">
              Testez vos connaissances
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Des centaines d'exercices, quiz et problèmes pour tous les niveaux. 
              Suivez votre progression et améliorez vos compétences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{exercises.length}</div>
                <div className="text-sm text-muted-foreground">Séries d'exercices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Exercices au total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">PDF</div>
                <div className="text-sm text-muted-foreground">Format téléchargeable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-6 shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Rechercher un exercice..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Filters */}
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

              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredExercises.length} exercice{filteredExercises.length > 1 ? 's' : ''} trouvé{filteredExercises.length > 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <Card key={exercise.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(exercise.type)}
                      <Badge variant="secondary" className="text-xs">
                        {exercise.type}
                      </Badge>
                    </div>
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {exercise.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {exercise.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Exercise Info */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {exercise.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" />
                        {exercise.points} pts
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {exercise.questions} Q
                      </div>
                    </div>
                    
                    {/* Level and Subject */}
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {exercise.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {exercise.subject}
                      </Badge>
                    </div>
                    
                    {/* Action Button */}
                    <ExerciseCard exercise={exercise} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredExercises.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Aucun exercice trouvé</h3>
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

export default Exercises;