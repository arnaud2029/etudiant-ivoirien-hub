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

## Chapitre 1 : Introduction à la géométrie
### 1.1 Qu'est-ce que la géométrie ?
La géométrie est une branche des mathématiques qui étudie les formes, les tailles, les positions relatives des figures et les propriétés de l'espace.

### 1.2 Vocabulaire de base
- **Point** : Position précise dans l'espace (noté A, B, C...)
- **Droite** : Ligne infinie dans les deux sens
- **Segment** : Portion de droite limitée par deux points
- **Demi-droite** : Portion de droite limitée d'un seul côté

## Chapitre 2 : Les triangles
### 2.1 Définition et propriétés
Un triangle est un polygone à trois côtés et trois angles. La somme de ses angles intérieurs est toujours égale à 180°.

### 2.2 Classification par les côtés
- **Triangle équilatéral** : 3 côtés égaux, 3 angles de 60°
- **Triangle isocèle** : 2 côtés égaux, 2 angles égaux
- **Triangle scalène** : 3 côtés inégaux, 3 angles inégaux

### 2.3 Classification par les angles
- **Triangle rectangle** : un angle de 90°
- **Triangle obtus** : un angle > 90°
- **Triangle aigu** : tous les angles < 90°

### 2.4 Théorème de Pythagore
Dans un triangle rectangle ABC rectangle en C :
**AB² = AC² + BC²**

**Exercice d'application :**
Triangle rectangle avec AC = 3 cm et BC = 4 cm
AB² = 3² + 4² = 9 + 16 = 25
Donc AB = 5 cm

## Chapitre 3 : Les quadrilatères
### 3.1 Le carré
**Propriétés :**
- 4 côtés égaux
- 4 angles droits (90°)
- Diagonales égales et perpendiculaires
- Aire = côté²
- Périmètre = 4 × côté

### 3.2 Le rectangle
**Propriétés :**
- Côtés opposés égaux et parallèles
- 4 angles droits
- Diagonales égales
- Aire = longueur × largeur
- Périmètre = 2(longueur + largeur)

### 3.3 Le losange
**Propriétés :**
- 4 côtés égaux
- Côtés opposés parallèles
- Diagonales perpendiculaires
- Aire = (d₁ × d₂) / 2

### 3.4 Le parallélogramme
**Propriétés :**
- Côtés opposés égaux et parallèles
- Angles opposés égaux
- Aire = base × hauteur

## Chapitre 4 : Le cercle
### 4.1 Définitions
- **Centre** : Point équidistant de tous les points du cercle
- **Rayon** : Distance du centre à un point du cercle
- **Diamètre** : Segment passant par le centre (= 2 × rayon)
- **Corde** : Segment joignant deux points du cercle
- **Arc** : Portion du cercle

### 4.2 Formules importantes
- **Circonférence** : C = 2πr = πd
- **Aire** : A = πr²

**Exemple :**
Cercle de rayon 5 cm :
- Circonférence = 2π × 5 = 10π ≈ 31,4 cm
- Aire = π × 5² = 25π ≈ 78,5 cm²

## Chapitre 5 : Constructions géométriques
### 5.1 Outils nécessaires
- Règle graduée
- Compas
- Équerre
- Rapporteur

### 5.2 Constructions de base
1. **Perpendiculaire à une droite**
2. **Bissectrice d'un angle**
3. **Médiatrice d'un segment**
4. **Triangle connaissant ses trois côtés**

## Exercices d'application
### Exercice 1 : Aires et périmètres
Calculer l'aire et le périmètre d'un rectangle de 8 cm × 5 cm.
**Solution :**
- Aire = 8 × 5 = 40 cm²
- Périmètre = 2(8 + 5) = 26 cm

### Exercice 2 : Théorème de Pythagore
Dans un triangle rectangle, les côtés de l'angle droit mesurent 6 cm et 8 cm. Calculer l'hypoténuse.
**Solution :**
h² = 6² + 8² = 36 + 64 = 100
h = 10 cm

### Exercice 3 : Cercle
Un cercle a une circonférence de 31,4 cm. Calculer son rayon et son aire.
**Solution :**
C = 2πr → 31,4 = 2πr → r ≈ 5 cm
A = πr² = π × 5² ≈ 78,5 cm²

## Applications pratiques
- **Architecture** : Conception de bâtiments, calcul de surfaces
- **Ingénierie** : Calcul de structures, résistance des matériaux  
- **Art** : Proportions, perspectives, motifs géométriques
- **Navigation** : Triangulation, calcul de distances
- **Informatique** : Graphisme, modélisation 3D

## Conclusion
La géométrie plane constitue les fondations de la géométrie. Maîtriser ces concepts est essentiel pour aborder la géométrie dans l'espace et de nombreuses applications pratiques.`
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

## Chapitre 1 : L'alphabet et les sons
### 1.1 Les voyelles
**A - E - I - O - U - Y**

Les voyelles sont des sons qu'on peut prononcer seuls, la bouche ouverte.
- **A** : comme dans "PAPA"
- **E** : comme dans "BÉBÉ"  
- **I** : comme dans "MIDI"
- **O** : comme dans "MOTO"
- **U** : comme dans "LUNE"

**Activité 1 :** Entoure les voyelles dans ces mots : MAISON, ÉCOLE, JARDIN

### 1.2 Les consonnes
**B - C - D - F - G - H - J - K - L - M - N - P - Q - R - S - T - V - W - X - Z**

Les consonnes ont besoin des voyelles pour former des sons.

**Méthode d'apprentissage :**
1. Prononcer le son de la lettre
2. L'associer à un mot-référence
3. S'entraîner à la tracer

## Chapitre 2 : Formation des syllabes
### 2.1 Principe syllabique
**Consonne + Voyelle = Syllabe**

Exemples :
- B + A = BA
- M + I = MI
- R + O = RO

### 2.2 Familles de syllabes
**Famille du B :**
BA - BE - BI - BO - BU

**Famille du M :**
MA - ME - MI - MO - MU

**Famille du L :**
LA - LE - LI - LO - LU

**Exercice :** Lis ces syllabes à voix haute :
PA - PE - PI - PO - PU
DA - DE - DI - DO - DU

## Chapitre 3 : Les premiers mots
### 3.1 Mots de 2 syllabes
Une fois les syllabes maîtrisées, on peut former des mots :

**Mots simples :**
- PAPA = PA + PA
- MAMA = MA + MA  
- PIPI = PI + PI
- BOBO = BO + BO

**Autres mots courants :**
- BÉBÉ = BÉ + BÉ
- DODO = DO + DO
- LULU = LU + LU

### 3.2 Mots du quotidien
**À la maison :**
- CANAPÉ (CA-NA-PÉ)
- LAVABO (LA-VA-BO) 
- RADIO (RA-DI-O)

**À l'école :**
- BUREAU (BU-REAU)
- CAHIER (CA-HIER)
- CRAYON (CRAY-ON)

**Les animaux :**
- LAPIN (LA-PIN)
- CHEVAL (CHE-VAL)
- CANARD (CA-NARD)

## Chapitre 4 : Écriture cursive
### 4.1 Préparation à l'écriture
**Position du corps :**
- Dos droit
- Pieds au sol
- Cahier incliné

**Tenue du crayon :**
- Pince avec pouce et index
- Majeur pour soutenir
- Autres doigts repliés

### 4.2 Tracé des lettres
**Lettres rondes :** a, o, d, g, q
**Lettres à boucles :** b, f, h, k, l
**Lettres à ponts :** m, n, p, r

**Sens d'écriture :**
Toujours de gauche à droite, du haut vers le bas.

### 4.3 Liaisons entre lettres
En cursive, les lettres se lient entre elles :
- ma → m reliée à a
- to → t reliée à o  
- li → l reliée à i

## Chapitre 5 : Exercices progressifs
### 5.1 Niveau débutant
1. **Reconnaissance de lettres**
   Retrouve la lettre M dans : MAISON, AMOUR, PLUME

2. **Formation de syllabes**
   Relie les consonnes aux voyelles :
   M + A = ?
   L + I = ?
   R + O = ?

### 5.2 Niveau intermédiaire  
3. **Lecture de mots simples**
   Lis ces mots : MOTO, CAFÉ, RADIS, SALADE

4. **Dictée de syllabes**
   Écris sous la dictée : MA, LI, BO, PU, DA

### 5.3 Niveau avancé
5. **Lecture de phrases**
   "Maman lit une histoire à Léa."
   "Papa répare la moto rouge."

6. **Production d'écrits**
   Écris ton prénom en cursive.
   Écris le nom de ton animal préféré.

## Chapitre 6 : Jeux éducatifs
### 6.1 Le loto des lettres
Matériel : Cartes avec lettres et images
Règle : Associer chaque lettre à un mot qui commence par cette lettre.

### 6.2 Memory des syllabes
Matériel : Cartes avec syllabes identiques
Règle : Retrouver les paires de syllabes identiques.

### 6.3 La chasse aux mots
Dans la classe, trouve 5 objets dont le nom commence par la lettre B.

## Évaluation progressive
### Semaine 1-2 : Voyelles
✓ Je reconnais toutes les voyelles
✓ Je sais les prononcer
✓ Je peux les écrire

### Semaine 3-4 : Consonnes simples
✓ Je reconnais B, M, L, R, P, D
✓ Je forme des syllabes simples
✓ Je lis mes premières syllabes

### Semaine 5-6 : Premiers mots
✓ Je lis des mots de 2 syllabes  
✓ Je commence à écrire des mots simples
✓ Je reconnais des mots courants

### Semaine 7-8 : Phrases simples
✓ Je lis des phrases courtes
✓ Je comprends ce que je lis
✓ J'écris mon prénom et des mots familiers

## Ressources pour approfondir
- **Livres de première lecture** : Collection "J'apprends à lire"
- **Applications éducatives** : Jeux de syllabe sur tablette  
- **Activités manuelles** : Lettres rugueuses, alphabet mobile
- **Comptines** : Chansons pour mémoriser l'alphabet

## Conseils aux parents
1. **Lire ensemble** tous les jours (15 minutes minimum)
2. **Encourager** sans corriger constamment
3. **Jouer** avec les mots et les sons
4. **Être patient**, chaque enfant a son rythme
5. **Valoriser** les progrès même petits

## Conclusion
L'apprentissage de la lecture et de l'écriture est un processus progressif qui demande du temps et de la patience. Avec de la pratique quotidienne et des encouragements, chaque enfant peut réussir à maîtriser ces compétences fondamentales.`
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