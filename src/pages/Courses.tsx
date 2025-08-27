import { useState } from "react";
import { Search, BookOpen, Users, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";
import CourseCard from "@/components/CourseCard";
import courseMathCollege from "@/assets/course-math-college.jpg";
import courseFrenchPrimary from "@/assets/course-french-primary.jpg";
import coursePhysicsLycee from "@/assets/course-physics-lycee.jpg";
import courseHistoryAfrica from "@/assets/course-history-africa.jpg";
import courseComputerScience from "@/assets/course-computer-science.jpg";

const courses = [
  {
    id: "1",
    title: "Géométrie plane - Les figures de base",
    description: "Découvrez les propriétés des triangles, carrés, rectangles et cercles. Cours complet avec exercices pratiques et applications concrètes.",
    level: "Collège",
    subject: "Mathématiques",
    difficulty: "Intermédiaire",
    duration: "90 min",
    pages: 45,
    downloads: 2134,
    thumbnail: courseMathCollege,
    hasVideo: true,
    hasPdf: true,
    isPremium: false,
    content: `# Géométrie plane : Les figures de base

## Introduction
La géométrie plane étudie les figures à deux dimensions. Dans ce cours, nous explorerons les propriétés fondamentales des figures géométriques.

## 1. Les triangles
### Définition
Un triangle est un polygone à trois côtés et trois angles.

### Types de triangles
- **Triangle équilatéral** : tous les côtés sont égaux
- **Triangle isocèle** : deux côtés égaux  
- **Triangle rectangle** : un angle droit (90°)

### Propriétés importantes
- La somme des angles = 180°
- Théorème de Pythagore pour les triangles rectangles

## 2. Les quadrilatères
### Le carré
- 4 côtés égaux
- 4 angles droits
- Diagonales égales et perpendiculaires

### Le rectangle  
- Côtés opposés égaux
- 4 angles droits
- Diagonales égales

## 3. Le cercle
### Définition
Ensemble des points situés à égale distance (rayon) d'un point fixe (centre).

### Éléments du cercle
- **Rayon** : distance du centre à un point du cercle
- **Diamètre** : 2 × rayon
- **Circonférence** : 2π × rayon
- **Aire** : π × rayon²

## Exercices pratiques
1. Calculer l'aire d'un rectangle de 5m × 3m
2. Trouver la circonférence d'un cercle de rayon 4cm
3. Identifier les propriétés d'un triangle avec les côtés 3, 4, 5

## Conclusion
La géométrie plane est la base de nombreuses applications pratiques en architecture, ingénierie et art.`
  },
  {
    id: "2",
    title: "Lecture et écriture CP - Les premiers mots",
    description: "Apprentissage progressif de la lecture et de l'écriture. Méthode syllabique avec exercices ludiques et interactifs.",
    level: "Primaire",
    subject: "Français",
    difficulty: "Débutant",
    duration: "45 min",
    pages: 32,
    downloads: 890,
    thumbnail: courseFrenchPrimary,
    hasVideo: true,
    hasPdf: true,
    isPremium: false,
    content: `# Lecture et écriture CP : Les premiers mots

## Objectifs du cours
- Reconnaître les lettres de l'alphabet
- Former des syllabes simples
- Lire ses premiers mots
- Écrire en lettres cursives

## 1. L'alphabet
### Les voyelles
**A - E - I - O - U - Y**

Exercice : Répète chaque voyelle à voix haute.

### Les consonnes
**B - C - D - F - G - H - J - K - L - M - N - P - Q - R - S - T - V - W - X - Z**

## 2. Formation des syllabes
### Syllabes simples (Consonne + Voyelle)
- BA - BE - BI - BO - BU
- CA - CE - CI - CO - CU  
- DA - DE - DI - DO - DU

### Premiers mots
- **PAPA** = PA + PA
- **MAMA** = MA + MA
- **BEBE** = BE + BÉ

## 3. Lecture progressive
### Étape 1 : Mots de 2 syllabes
- MOTO
- CAFÉ  
- BÉBÉ
- PHOTO

### Étape 2 : Mots de 3 syllabes
- BANANE
- TOMATE
- CAMÉRA

## 4. Écriture cursive
### Formation des lettres
1. Tenir correctement son crayon
2. Respecter le sens d'écriture
3. Relier les lettres entre elles

### Exercices d'écriture
- Tracer des boucles
- Écrire son prénom
- Copier des mots simples

## Jeux et activités
- Loto des lettres
- Memory des syllabes  
- Dictée de mots simples

## Évaluation
À la fin de ce cours, l'enfant sait :
✓ Reconnaître toutes les lettres
✓ Lire des mots simples
✓ Écrire en cursive`
  },
  {
    id: "3",
    title: "Électricité - Circuits et lois fondamentales",
    description: "Maîtrisez les concepts électriques de base : intensité, tension, résistance. Lois d'Ohm et de Kirchhoff avec applications pratiques.",
    level: "Lycée",
    subject: "Physique-Chimie",
    difficulty: "Avancé",
    duration: "120 min",
    pages: 68,
    downloads: 1456,
    thumbnail: coursePhysicsLycee,
    hasVideo: true,
    hasPdf: true,
    isPremium: true,
    content: `# Électricité : Circuits et lois fondamentales

## Introduction
L'électricité est omniprésente dans notre quotidien. Ce cours vous permettra de comprendre les phénomènes électriques fondamentaux.

## 1. Grandeurs électriques
### L'intensité électrique (I)
- **Définition** : Quantité de charge électrique qui traverse une section de conducteur par unité de temps
- **Unité** : Ampère (A)
- **Mesure** : Ampèremètre (en série)

### La tension électrique (U)
- **Définition** : Différence de potentiel entre deux points d'un circuit
- **Unité** : Volt (V)
- **Mesure** : Voltmètre (en parallèle)

### La résistance électrique (R)
- **Définition** : Opposition qu'un matériau présente au passage du courant
- **Unité** : Ohm (Ω)
- **Mesure** : Ohmmètre

## 2. Loi d'Ohm
### Énoncé
**U = R × I**

Où :
- U = tension (V)
- R = résistance (Ω)  
- I = intensité (A)

### Applications
- Calculer la tension aux bornes d'une résistance
- Déterminer l'intensité dans un circuit
- Trouver la valeur d'une résistance

## 3. Lois de Kirchhoff
### Loi des nœuds
La somme des intensités qui arrivent à un nœud = la somme des intensités qui en repartent.

### Loi des mailles
Dans une maille fermée, la somme algébrique des tensions = 0.

## 4. Circuits série et parallèle
### Circuit série
- Même intensité partout
- Tensions s'ajoutent
- Résistances s'ajoutent : R_total = R1 + R2 + R3

### Circuit parallèle  
- Même tension partout
- Intensités s'ajoutent
- 1/R_total = 1/R1 + 1/R2 + 1/R3

## 5. Puissance électrique
### Formule
**P = U × I = R × I² = U²/R**

### Unité
Watt (W)

## Exercices d'application
1. Un résistor de 100Ω est traversé par un courant de 0,5A. Calculer la tension.
2. Dans un circuit série avec deux résistors (200Ω et 300Ω), l'intensité est de 0,2A. Calculer la tension totale.

## Applications pratiques
- Éclairage domestique
- Chauffage électrique
- Électronique

## Sécurité électrique
⚠️ **Attention** : Ne jamais manipuler l'électricité sans précautions !`
  },
  {
    id: "4",
    title: "L'Afrique précoloniale - Les grands empires",
    description: "Découvrez la richesse des civilisations africaines avant la colonisation : Empire du Ghana, Mali, Songhaï et leurs contributions.",
    level: "Collège",
    subject: "Histoire",
    difficulty: "Intermédiaire",
    duration: "75 min",
    pages: 42,
    downloads: 1678,
    thumbnail: courseHistoryAfrica,
    hasVideo: true,
    hasPdf: true,
    isPremium: false,
    content: `# L'Afrique précoloniale : Les grands empires

## Introduction
Contrairement aux idées reçues, l'Afrique possédait des civilisations brillantes bien avant l'arrivée des Européens. Explorons ces empires fascinants.

## 1. L'Empire du Ghana (300-1200)
### Localisation
Situé entre les fleuves Sénégal et Niger (actuel Mali et Mauritanie).

### Richesses
- **Or** : Mines de Bambuk et Bure
- **Sel** : Commerce transsaharien
- **Contrôle des routes commerciales**

### Organisation
- Capitale : Koumbi Saleh
- Roi appelé "Ghana" (chef de guerre)
- Armée puissante de 200 000 hommes

### Déclin
- Invasions almoravides (1076)
- Sécheresse et famines

## 2. L'Empire du Mali (1235-1500)
### Fondation
Créé par Soundiata Keïta après la bataille de Kirina (1235).

### Apogée sous Mansa Moussa (1312-1337)
- Pèlerinage à La Mecque (1324-1325)
- Distribution d'or au Caire
- Extension de Gao à l'Atlantique

### Richesses et commerce
- Mines d'or de Bambuk
- Université de Tombouctou
- Manuscrits de Tombouctou (400 000 documents)

### Villes importantes
- **Tombouctou** : Centre intellectuel
- **Djenné** : Commerce et artisanat
- **Gao** : Port sur le Niger

## 3. L'Empire Songhaï (1464-1591)
### Fondation
Sonni Ali Ber conquiert Tombouctou (1468).

### Apogée sous Askia Mohammed (1493-1528)
- Réformes administratives
- Justice et tolérance religieuse
- Développement de l'éducation

### Organisation administrative
- Provinces gouvernées par des farba
- Armée professionnelle
- Système fiscal organisé

### Chute
- Invasion marocaine (1591)
- Bataille de Tondibi

## Conclusion
L'Afrique précoloniale était riche de civilisations brillantes qui ont contribué au développement de l'humanité. Ces empires nous rappellent la grandeur du passé africain.`
  },
  {
    id: "5",
    title: "Programmation Java - Concepts avancés POO",
    description: "Maîtrisez la programmation orientée objet en Java : héritage, polymorphisme, encapsulation, interfaces et design patterns.",
    level: "Université",
    subject: "Informatique",
    difficulty: "Expert",
    duration: "180 min",
    pages: 95,
    downloads: 3456,
    thumbnail: courseComputerScience,
    hasVideo: true,
    hasPdf: true,
    isPremium: true,
    content: `# Programmation Java : Concepts avancés POO

## Introduction
Java est un langage orienté objet puissant. Ce cours approfondit les concepts avancés de la POO pour développer des applications robustes.

## 1. Rappels des fondamentaux
### Classes et Objets
\`\`\`java
public class Personne {
    private String nom;
    private int age;
    
    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    public String getNom() { return nom; }
    public int getAge() { return age; }
}
\`\`\`

### Encapsulation
- Attributs privés
- Getters/Setters
- Contrôle d'accès

## 2. Héritage
### Principe
Une classe peut hériter des propriétés d'une autre classe.

\`\`\`java
public class Etudiant extends Personne {
    private String numEtudiant;
    
    public Etudiant(String nom, int age, String numEtudiant) {
        super(nom, age);
        this.numEtudiant = numEtudiant;
    }
    
    public String getNumEtudiant() { return numEtudiant; }
}
\`\`\`

## 3. Polymorphisme
### Définition
Capacité d'un objet à prendre plusieurs formes.

## 4. Interfaces
### Définition
Contrat que doit respecter une classe.

## 5. Design Patterns courants
### Singleton
Pattern créationnel garantissant une seule instance.

### Factory
Pattern créationnel pour créer des objets.

### Observer
Pattern comportemental pour la notification d'événements.

## Conclusion
La POO en Java offre une structure robuste pour développer des applications complexes. Maîtriser ces concepts est essentiel pour tout développeur Java.`
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