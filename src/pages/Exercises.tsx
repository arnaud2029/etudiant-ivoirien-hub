import { useState } from "react";
import { Search, Target, Trophy, BookOpen, Award, CheckCircle, Users, Clock, PlayCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";
import ExerciseCard from "@/components/ExerciseCard";
import exerciseGeneral from "@/assets/exercise-general.jpg";
import courseMathCollege from "@/assets/course-math-college.jpg";
import courseFrenchPrimary from "@/assets/course-french-primary.jpg";
import coursePhysicsLycee from "@/assets/course-physics-lycee.jpg";

const exercises = [
  {
    id: "1",
    title: "Géométrie - Quiz sur les triangles",
    description: "Testez vos connaissances sur les propriétés des triangles et leurs classifications",
    level: "Collège",
    subject: "Mathématiques", 
    difficulty: "Intermédiaire",
    duration: "15 min",
    points: 20,
    type: "QCM",
    thumbnail: courseMathCollege,
    hasVideo: false,
    hasPdf: false,
    questions: 20,
    completed: 0
  },
  {
    id: "2",
    title: "Quiz Mathématiques CE1 - Addition et soustraction",
    description: "Test vos connaissances sur les opérations de base",
    level: "Primaire",
    subject: "Mathématiques",
    duration: "15 min",
    questions: 20,
    difficulty: "Débutant",
    completed: 85,
    type: "Quiz",
    points: 100
  },
  {
    id: "3",
    title: "Exercices Français CP - Lecture",
    description: "Entraînement à la lecture de mots simples",
    level: "Primaire", 
    subject: "Français",
    duration: "20 min",
    questions: 15,
    difficulty: "Débutant",
    completed: 0,
    type: "Exercice",
    points: 80
  },
  {
    id: "4",
    title: "Problèmes Mathématiques 6ème - Géométrie",
    description: "Calculs d'aires et de périmètres",
    level: "Collège",
    subject: "Mathématiques", 
    duration: "30 min",
    questions: 12,
    difficulty: "Intermédiaire",
    completed: 45,
    type: "Problème",
    points: 150
  },
  {
    id: "5",
    title: "QCM Histoire 4ème - Afrique précoloniale",
    description: "Questions sur les grands empires africains",
    level: "Collège",
    subject: "Histoire",
    duration: "25 min",
    questions: 18,
    difficulty: "Intermédiaire", 
    completed: 100,
    type: "QCM",
    points: 120
  },
  {
    id: "6",
    title: "Analyse Mathématiques Terminale C",
    description: "Fonctions dérivées et primitives",
    level: "Lycée",
    subject: "Mathématiques",
    duration: "45 min",
    questions: 10,
    difficulty: "Avancé",
    completed: 20,
    type: "Problème",
    points: 200
  },
  {
    id: "7",
    title: "Dissertation Philosophie Terminale",
    description: "Sujets sur la conscience et la liberté",
    level: "Lycée",
    subject: "Philosophie",
    duration: "60 min",
    questions: 3,
    difficulty: "Avancé",
    completed: 0,
    type: "Dissertation",
    points: 250
  }
];

const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Mathématiques", "Français", "Sciences", "Histoire", "Physique-Chimie", "SVT", "Philosophie"];
const difficulties = ["Tous", "Débutant", "Intermédiaire", "Avancé", "Expert"];
const types = ["Tous", "Quiz", "Exercice", "Problème", "QCM", "Dissertation"];

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
                <div className="text-2xl font-bold text-primary">{exercises.length}+</div>
                <div className="text-sm text-muted-foreground">Exercices disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Types d'exercices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Tentatives possibles</div>
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
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progression</span>
                        <span className="font-medium">{exercise.completed}%</span>
                      </div>
                      <Progress 
                        value={exercise.completed} 
                        className="h-2"
                      />
                    </div>

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
                    <Button 
                      className="w-full mt-4"
                      disabled={false}
                    >
                      <PlayCircle className="h-4 w-4 mr-2" />
                      {exercise.completed === 100 ? "Refaire" : exercise.completed > 0 ? "Continuer" : "Commencer"}
                    </Button>
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