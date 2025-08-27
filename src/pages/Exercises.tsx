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
    points: 100,
    type: "QCM",
    thumbnail: courseMathCollege,
    hasVideo: false,
    hasPdf: true,
    questions: 5,
    questionsList: [
      {
        id: 1,
        question: "Combien d'angles possède un triangle ?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "Un triangle possède toujours 3 angles intérieurs."
      },
      {
        id: 2,
        question: "Quelle est la somme des angles d'un triangle ?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
        explanation: "La somme des angles d'un triangle est toujours 180°."
      },
      {
        id: 3,
        question: "Dans un triangle rectangle, comment s'appelle le côté opposé à l'angle droit ?",
        options: ["Côté adjacent", "Hypoténuse", "Cathète", "Médiane"],
        correctAnswer: 1,
        explanation: "L'hypoténuse est le côté le plus long d'un triangle rectangle, opposé à l'angle droit."
      },
      {
        id: 4,
        question: "Un triangle équilatéral a :",
        options: ["3 côtés égaux", "2 côtés égaux", "Aucun côté égal", "4 côtés égaux"],
        correctAnswer: 0,
        explanation: "Un triangle équilatéral a ses 3 côtés de même longueur et ses 3 angles de 60°."
      },
      {
        id: 5,
        question: "Selon le théorème de Pythagore, dans un triangle rectangle de côtés 3 et 4, l'hypoténuse mesure :",
        options: ["5", "6", "7", "8"],
        correctAnswer: 0,
        explanation: "D'après Pythagore : h² = 3² + 4² = 9 + 16 = 25, donc h = 5."
      }
    ],
    completed: 0
  },
  {
    id: "2",
    title: "Additions et soustractions - CE1",
    description: "Maîtriser les opérations de base avec des nombres jusqu'à 100",
    level: "Primaire",
    subject: "Mathématiques",
    duration: "20 min",
    questions: 10,
    difficulty: "Débutant",
    completed: 85,
    type: "Calcul",
    points: 80,
    questionsList: [
      {
        id: 1,
        question: "Combien font 15 + 8 ?",
        options: ["21", "23", "24", "25"],
        correctAnswer: 1,
        explanation: "15 + 8 = 23. On peut faire 15 + 5 = 20, puis 20 + 3 = 23."
      },
      {
        id: 2,
        question: "Combien font 30 - 12 ?",
        options: ["18", "19", "17", "22"],
        correctAnswer: 0,
        explanation: "30 - 12 = 18. On peut faire 30 - 10 = 20, puis 20 - 2 = 18."
      },
      {
        id: 3,
        question: "J'ai 25 billes, j'en perds 7. Combien me reste-t-il ?",
        options: ["17", "18", "19", "32"],
        correctAnswer: 1,
        explanation: "25 - 7 = 18 billes restantes."
      }
    ]
  },
  {
    id: "3",
    title: "Lecture CP - Syllabes et mots simples",
    description: "S'entraîner à lire des syllabes et former ses premiers mots",
    level: "Primaire", 
    subject: "Français",
    duration: "25 min",
    questions: 12,
    difficulty: "Débutant",
    completed: 0,
    type: "Exercice",
    points: 60,
    questionsList: [
      {
        id: 1,
        question: "Comment se lit cette syllabe : MA ?",
        options: ["mi", "ma", "mo", "mu"],
        correctAnswer: 1,
        explanation: "MA se lit 'ma' comme dans 'maman'."
      },
      {
        id: 2,
        question: "Quel mot peut-on former avec PA + PA ?",
        options: ["maman", "papa", "bébé", "dodo"],
        correctAnswer: 1,
        explanation: "PA + PA = PAPA"
      }
    ]
  },
  {
    id: "4",
    title: "Aires et périmètres - 6ème",
    description: "Calculs d'aires et de périmètres des figures géométriques simples",
    level: "Collège",
    subject: "Mathématiques", 
    duration: "30 min",
    questions: 8,
    difficulty: "Intermédiaire",
    completed: 45,
    type: "Problème",
    points: 120,
    questionsList: [
      {
        id: 1,
        question: "Quelle est l'aire d'un rectangle de 8 cm de longueur et 5 cm de largeur ?",
        options: ["26 cm²", "40 cm²", "13 cm²", "16 cm²"],
        correctAnswer: 1,
        explanation: "Aire du rectangle = longueur × largeur = 8 × 5 = 40 cm²"
      },
      {
        id: 2,
        question: "Quel est le périmètre d'un carré de côté 7 cm ?",
        options: ["14 cm", "21 cm", "28 cm", "49 cm"],
        correctAnswer: 2,
        explanation: "Périmètre du carré = 4 × côté = 4 × 7 = 28 cm"
      }
    ]
  },
  {
    id: "5",
    title: "Empires africains - Histoire 4ème",
    description: "Découvrir les grands empires d'Afrique de l'Ouest avant la colonisation",
    level: "Collège",
    subject: "Histoire",
    duration: "25 min",
    questions: 15,
    difficulty: "Intermédiaire", 
    completed: 100,
    type: "QCM",
    points: 100,
    questionsList: [
      {
        id: 1,
        question: "Quel empire est considéré comme le premier grand empire d'Afrique de l'Ouest ?",
        options: ["Empire du Mali", "Empire Songhaï", "Empire du Ghana", "Empire du Kanem"],
        correctAnswer: 2,
        explanation: "L'Empire du Ghana (300-1200) est le premier grand empire organisé d'Afrique de l'Ouest."
      },
      {
        id: 2,
        question: "Qui était Mansa Moussa ?",
        options: ["Un roi du Ghana", "Un empereur du Mali", "Un chef Songhaï", "Un explorateur"],
        correctAnswer: 1,
        explanation: "Mansa Moussa était l'empereur du Mali (1312-1337), célèbre pour sa richesse et son pèlerinage à La Mecque."
      }
    ]
  },
  {
    id: "6",
    title: "Fonctions et dérivées - Terminale C",
    description: "Étude des fonctions, calcul de dérivées et applications",
    level: "Lycée",
    subject: "Mathématiques",
    duration: "45 min",
    questions: 6,
    difficulty: "Avancé",
    completed: 20,
    type: "Problème",
    points: 200,
    questionsList: [
      {
        id: 1,
        question: "Quelle est la dérivée de f(x) = 3x² + 5x - 2 ?",
        options: ["f'(x) = 6x + 5", "f'(x) = 3x + 5", "f'(x) = 6x + 5x", "f'(x) = 6x² + 5"],
        correctAnswer: 0,
        explanation: "La dérivée de 3x² est 6x, celle de 5x est 5, et celle de -2 est 0. Donc f'(x) = 6x + 5."
      }
    ]
  },
  {
    id: "7",
    title: "Philosophie - La conscience et l'inconscient",
    description: "Réflexion sur les concepts de conscience et d'inconscient",
    level: "Lycée",
    subject: "Philosophie",
    duration: "60 min",
    questions: 4,
    difficulty: "Avancé",
    completed: 0,
    type: "Dissertation",
    points: 250,
    questionsList: [
      {
        id: 1,
        question: "Selon Descartes, qu'est-ce qui caractérise la conscience ?",
        options: ["L'intuition", "La pensée", "La sensation", "L'émotion"],
        correctAnswer: 1,
        explanation: "Pour Descartes, 'Je pense donc je suis'. La pensée est l'attribut essentiel de la conscience."
      }
    ]
  },
];

const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Mathématiques", "Français", "Sciences", "Histoire", "Physique-Chimie", "SVT", "Philosophie", "Géographie", "Anglais", "Allemand", "Espagnol", "Éducation civique", "Arts plastiques", "Musique", "EPS", "Informatique"];
const difficulties = ["Tous", "Débutant", "Intermédiaire", "Avancé", "Expert"];
const types = ["Tous", "Quiz", "Exercice", "Problème", "QCM", "Dissertation", "Analyse de texte", "Calcul", "Rédaction"];

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