import { useState } from "react";
import { Search, BookOpen, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";
import CourseCard from "@/components/CourseCard";
import ExerciseCard from "@/components/ExerciseCard";

// Import course covers
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
import courseLectureEcritureCover from "@/assets/course-lecture-ecriture-cover.jpg";
import courseTestsCover from "@/assets/course-tests-cover.jpg";
import courseLogiqueCover from "@/assets/course-logique-cover.jpg";
import courseBouclesCover from "@/assets/course-boucles-cover.jpg";
import courseTechniquesRussesCover from "@/assets/course-techniques-russes-cover.jpg";
import courseTableauxMultiCover from "@/assets/course-tableaux-multi-cover.jpg";
import courseFichiersCover from "@/assets/course-fichiers-cover.jpg";
import courseProceduresCover from "@/assets/course-procedures-cover.jpg";

// Import exercise covers
import exerciseAlgoAbc from "@/assets/exercise-algo-abc-cover.jpg";
import exerciseIntroVariables from "@/assets/exercise-intro-variables-cover.jpg";
import exerciseTests from "@/assets/exercise-tests-cover.jpg";
import exerciseLogique from "@/assets/exercise-logique-cover.jpg";
import exerciseTableaux from "@/assets/exercise-tableaux-cover.jpg";
import exerciseTechniquesRusses from "@/assets/exercise-techniques-russes-cover.jpg";
import exerciseTableauxMulti from "@/assets/exercise-tableaux-multi-cover.jpg";
import exerciseTableauxPredefini from "@/assets/exercise-tableaux-predefini-cover.jpg";
import exerciseFichiers from "@/assets/exercise-fichiers-cover.jpg";

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
    pdfUrl: "/pdfs/cours-python.pdf"
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
    pdfUrl: "/pdfs/les-bases-de-la-programmation.pdf"
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
    pdfUrl: "/pdfs/les-variables.pdf"
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
    pdfUrl: "/pdfs/introduction-algorithme.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-boulangerie.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-lavage-auto.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-location-voiture.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-mobile-money.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-poissonnerie-1.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-poissonnerie-2.pdf"
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
    pdfUrl: "/pdfs/plan-affaire-quincaillerie.pdf"
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
    pdfUrl: "/pdfs/500-idees-business-afrique.pdf"
  },
  {
    id: "13",
    title: "Lecture et Écriture - Algorithmique",
    description: "Découvrez les instructions de lecture et écriture en programmation pour permettre l'interaction avec l'utilisateur. Concepts essentiels pour tout programme interactif.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant",
    duration: "1-2 heures",
    pages: 15,
    downloads: 0,
    thumbnail: courseLectureEcritureCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/lecture-et-ecriture.pdf"
  },
  {
    id: "14",
    title: "Les Tests - Structures Conditionnelles",
    description: "Maîtrisez les structures de test (SI...ALORS...SINON) en algorithmique. Apprenez à créer des conditions et à gérer différents scénarios dans vos programmes.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Débutant",
    duration: "2-3 heures",
    pages: 28,
    downloads: 0,
    thumbnail: courseTestsCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/les-tests.pdf"
  },
  {
    id: "15",
    title: "Encore de la Logique - Opérateurs ET/OU",
    description: "Approfondissez votre compréhension des opérateurs logiques ET et OU. Transformations de Morgan, conditions composées et optimisation des tests.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "2-3 heures",
    pages: 20,
    downloads: 0,
    thumbnail: courseLogiqueCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/encore-de-la-logique.pdf"
  },
  {
    id: "16",
    title: "Les Boucles - Structures Itératives",
    description: "Apprenez à utiliser les boucles TANT QUE, POUR et autres structures répétitives. La clé pour automatiser vos traitements et créer des programmes puissants.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "3-4 heures",
    pages: 35,
    downloads: 0,
    thumbnail: courseBouclesCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/les-boucles.pdf"
  },
  {
    id: "17",
    title: "Les Techniques Russes - Algorithmes Avancés",
    description: "Découvrez des techniques algorithmiques avancées et des méthodes d'optimisation. Pour ceux qui veulent aller plus loin dans la maîtrise de l'algorithmique.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Avancé",
    duration: "4-5 heures",
    pages: 32,
    downloads: 0,
    thumbnail: courseTechniquesRussesCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: true,
    pdfUrl: "/pdfs/techniques-russes.pdf"
  },
  {
    id: "18",
    title: "Tableaux Multidimensionnels - Structures de Données",
    description: "Maîtrisez les tableaux à plusieurs dimensions (matrices, cubes de données). Manipulation avancée des structures de données en programmation.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Avancé",
    duration: "3-4 heures",
    pages: 30,
    downloads: 0,
    thumbnail: courseTableauxMultiCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/tableaux-multidimensionnels.pdf"
  },
  {
    id: "19",
    title: "Les Fichiers - Gestion des Données Persistantes",
    description: "Apprenez à lire et écrire dans des fichiers pour sauvegarder et charger des données. Gestion de fichiers texte et binaires en programmation.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "3-4 heures",
    pages: 28,
    downloads: 0,
    thumbnail: courseFichiersCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/les-fichiers.pdf"
  },
  {
    id: "20",
    title: "Procédures et Fonctions - Programmation Modulaire",
    description: "Découvrez la programmation modulaire avec les procédures et fonctions. Réutilisabilité, paramètres, et structuration efficace de votre code.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Intermédiaire",
    duration: "4-5 heures",
    pages: 40,
    downloads: 0,
    thumbnail: courseProceduresCover,
    hasVideo: false,
    hasPdf: true,
    isPremium: false,
    pdfUrl: "/pdfs/procedures-et-fonctions.pdf"
  }
];

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

const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Informatique", "Entrepreneuriat"];

const Library = () => {
  const [selectedLevel, setSelectedLevel] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Toutes");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === "Tous" || course.level === selectedLevel;
    const matchesSubject = selectedSubject === "Toutes" || course.subject === selectedSubject;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesSubject && matchesSearch;
  });

  const filteredExercises = exercises.filter(exercise => {
    const matchesLevel = selectedLevel === "Tous" || exercise.level === selectedLevel;
    const matchesSubject = selectedSubject === "Toutes" || exercise.subject === selectedSubject;
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLevel && matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <BookOpen className="h-4 w-4" />
              Bibliothèque de ressources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 animate-fade-in">
              Tous vos contenus au même endroit
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Accédez à tous nos cours et exercices. Tout ce dont vous avez besoin pour réussir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{courses.length}</div>
                <div className="text-sm text-muted-foreground">Cours disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{exercises.length}</div>
                <div className="text-sm text-muted-foreground">Séries d'exercices</div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Rechercher..."
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
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Cours ({filteredCourses.length})
              </TabsTrigger>
              <TabsTrigger value="exercises" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Exercices ({filteredExercises.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="mt-0">
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
            </TabsContent>

            <TabsContent value="exercises" className="mt-0">
              <div className="mb-8">
                <p className="text-muted-foreground">
                  {filteredExercises.length} exercice{filteredExercises.length > 1 ? 's' : ''} trouvé{filteredExercises.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
};

export default Library;
