import { useState } from "react";
import { Search, Download, Eye, BookOpen, GraduationCap, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";

const courses = [
  // Primaire
  {
    id: 1,
    title: "Mathématiques CE1 - Les opérations de base",
    description: "Addition, soustraction et initiation à la multiplication",
    level: "Primaire",
    subject: "Mathématiques",
    duration: "45 min",
    pages: 24,
    downloads: 1240,
    difficulty: "Débutant",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 2,
    title: "Français CP - Lecture et écriture",
    description: "Apprentissage des lettres et premiers mots",
    level: "Primaire",
    subject: "Français",
    duration: "30 min",
    pages: 18,
    downloads: 890,
    difficulty: "Débutant",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 3,
    title: "Sciences CM2 - Le corps humain",
    description: "Découverte de l'anatomie et du fonctionnement du corps",
    level: "Primaire",
    subject: "Sciences",
    duration: "60 min",
    pages: 32,
    downloads: 567,
    difficulty: "Intermédiaire",
    pdfUrl: "#",
    viewUrl: "#"
  },
  
  // Collège
  {
    id: 4,
    title: "Mathématiques 6ème - Géométrie plane",
    description: "Les figures géométriques et leurs propriétés",
    level: "Collège",
    subject: "Mathématiques",
    duration: "90 min",
    pages: 45,
    downloads: 2134,
    difficulty: "Intermédiaire",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 5,
    title: "Histoire 4ème - L'Afrique précoloniale",
    description: "Les grands empires africains avant la colonisation",
    level: "Collège",
    subject: "Histoire",
    duration: "75 min",
    pages: 38,
    downloads: 1678,
    difficulty: "Intermédiaire",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 6,
    title: "Physique-Chimie 3ème - L'électricité",
    description: "Circuit électrique et lois fondamentales",
    level: "Collège",
    subject: "Physique-Chimie",
    duration: "120 min",
    pages: 52,
    downloads: 1456,
    difficulty: "Avancé",
    pdfUrl: "#",
    viewUrl: "#"
  },
  
  // Lycée
  {
    id: 7,
    title: "Mathématiques Terminale C - Analyse",
    description: "Fonctions, dérivées et intégrales",
    level: "Lycée",
    subject: "Mathématiques",
    duration: "150 min",
    pages: 68,
    downloads: 3245,
    difficulty: "Avancé",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 8,
    title: "Philosophie Terminale - Introduction",
    description: "Les grands concepts philosophiques",
    level: "Lycée",
    subject: "Philosophie",
    duration: "90 min",
    pages: 42,
    downloads: 1890,
    difficulty: "Avancé",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 9,
    title: "SVT 1ère D - La génétique",
    description: "Hérédité et transmission des caractères",
    level: "Lycée",
    subject: "SVT",
    duration: "105 min",
    pages: 55,
    downloads: 2167,
    difficulty: "Avancé",
    pdfUrl: "#",
    viewUrl: "#"
  },
  
  // Université
  {
    id: 10,
    title: "Droit Civil L1 - Introduction générale",
    description: "Principes fondamentaux du droit civil ivoirien",
    level: "Université",
    subject: "Droit",
    duration: "180 min",
    pages: 95,
    downloads: 2845,
    difficulty: "Expert",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 11,
    title: "Économie L2 - Macroéconomie",
    description: "Les grands agrégats économiques",
    level: "Université",
    subject: "Économie",
    duration: "160 min",
    pages: 78,
    downloads: 1934,
    difficulty: "Expert",
    pdfUrl: "#",
    viewUrl: "#"
  },
  {
    id: 12,
    title: "Informatique L3 - Programmation Java",
    description: "Concepts avancés de la programmation orientée objet",
    level: "Université",
    subject: "Informatique",
    duration: "200 min",
    pages: 120,
    downloads: 3456,
    difficulty: "Expert",
    pdfUrl: "#",
    viewUrl: "#"
  }
];

const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Mathématiques", "Français", "Sciences", "Histoire", "Physique-Chimie", "SVT", "Philosophie", "Droit", "Économie", "Informatique"];
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
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getLevelIcon(course.level)}
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <Badge className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Course Info */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {course.pages} pages
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {course.downloads}
                      </div>
                    </div>
                    
                    {/* Subject Badge */}
                    <Badge variant="outline" className="w-fit">
                      {course.subject}
                    </Badge>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(course.viewUrl, '_blank')}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Consulter
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(course.pdfUrl, '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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