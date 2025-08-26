import { useState } from "react";
import { Search, BookOpen, Download, Eye, Filter, Grid, List, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";

const documents = [
  // Livres
  {
    id: 1,
    title: "Manuel de Mathématiques CM2",
    description: "Guide complet pour la classe de CM2 avec exercices corrigés",
    type: "Livre",
    level: "Primaire",
    subject: "Mathématiques",
    pages: 248,
    downloads: 3420,
    rating: 4.8,
    size: "15.2 MB",
    format: "PDF",
    author: "Ministère de l'Éducation",
    published: "2024"
  },
  {
    id: 2,
    title: "Grammaire Française - Collège",
    description: "Toutes les règles de grammaire française pour le collège",
    type: "Livre",
    level: "Collège",
    subject: "Français",
    pages: 186,
    downloads: 2890,
    rating: 4.6,
    size: "12.8 MB",
    format: "PDF",
    author: "Prof. Marie Kouadio",
    published: "2023"
  },
  {
    id: 3,
    title: "Histoire de la Côte d'Ivoire",
    description: "Des origines à nos jours - Manuel de référence",
    type: "Livre",
    level: "Lycée",
    subject: "Histoire",
    pages: 324,
    downloads: 4156,
    rating: 4.9,
    size: "28.5 MB",
    format: "PDF",
    author: "Dr. Kouassi N'Guessan",
    published: "2024"
  },
  
  // Articles
  {
    id: 4,
    title: "L'économie ivoirienne post-indépendance",
    description: "Analyse économique des 60 dernières années",
    type: "Article",
    level: "Université",
    subject: "Économie",
    pages: 45,
    downloads: 1234,
    rating: 4.5,
    size: "3.2 MB",
    format: "PDF",
    author: "Prof. Adama Diallo",
    published: "2024"
  },
  {
    id: 5,
    title: "Les changements climatiques en Afrique",
    description: "Impact sur l'agriculture et solutions durables",
    type: "Article",
    level: "Lycée",
    subject: "Sciences",
    pages: 28,
    downloads: 876,
    rating: 4.4,
    size: "2.1 MB",
    format: "PDF",
    author: "Dr. Fatima Traoré",
    published: "2024"
  },
  
  // Mémoires
  {
    id: 6,
    title: "Digitalisation de l'éducation en CI",
    description: "Mémoire de Master sur les nouvelles technologies éducatives",
    type: "Mémoire",
    level: "Université",
    subject: "Éducation",
    pages: 98,
    downloads: 654,
    rating: 4.3,
    size: "8.7 MB",
    format: "PDF",
    author: "Aminata Sanogo",
    published: "2023"
  },
  
  // Thèses
  {
    id: 7,
    title: "Intelligence Artificielle et Médecine",
    description: "Applications de l'IA dans le diagnostic médical",
    type: "Thèse",
    level: "Université",
    subject: "Informatique",
    pages: 245,
    downloads: 432,
    rating: 4.7,
    size: "18.9 MB",
    format: "PDF",
    author: "Dr. Jean-Baptiste Yao",
    published: "2023"
  },
  
  // Rapports
  {
    id: 8,
    title: "État de l'éducation en Côte d'Ivoire 2024",
    description: "Rapport annuel du Ministère de l'Éducation Nationale",
    type: "Rapport",
    level: "Tous",
    subject: "Éducation",
    pages: 156,
    downloads: 2345,
    rating: 4.2,
    size: "11.4 MB",
    format: "PDF",
    author: "MENA-CI",
    published: "2024"
  }
];

const types = ["Tous", "Livre", "Article", "Mémoire", "Thèse", "Rapport"];
const levels = ["Tous", "Primaire", "Collège", "Lycée", "Université"];
const subjects = ["Toutes", "Mathématiques", "Français", "Sciences", "Histoire", "Économie", "Éducation", "Informatique"];
const formats = ["Tous", "PDF", "EPUB", "DOCX"];

const Library = () => {
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedLevel, setSelectedLevel] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Toutes");
  const [selectedFormat, setSelectedFormat] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("downloads");

  const filteredDocuments = documents
    .filter(doc => {
      const matchesType = selectedType === "Tous" || doc.type === selectedType;
      const matchesLevel = selectedLevel === "Tous" || doc.level === selectedLevel;
      const matchesSubject = selectedSubject === "Toutes" || doc.subject === selectedSubject;
      const matchesFormat = selectedFormat === "Tous" || doc.format === selectedFormat;
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesType && matchesLevel && matchesSubject && matchesFormat && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating": return b.rating - a.rating;
        case "pages": return b.pages - a.pages;
        case "title": return a.title.localeCompare(b.title);
        default: return b.downloads - a.downloads;
      }
    });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Livre": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Article": return "bg-green-100 text-green-800 border-green-200";
      case "Mémoire": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Thèse": return "bg-red-100 text-red-800 border-red-200";
      case "Rapport": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const DocumentCard = ({ doc }: { doc: typeof documents[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge className={getTypeColor(doc.type)}>
            {doc.type}
          </Badge>
          <div className="flex items-center gap-1">
            {renderStars(doc.rating)}
            <span className="text-xs text-muted-foreground ml-1">({doc.rating})</span>
          </div>
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {doc.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {doc.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Document Info */}
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              {doc.pages} pages
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              {doc.downloads}
            </div>
            <div>{doc.format}</div>
            <div>{doc.size}</div>
          </div>
          
          {/* Author and Year */}
          <div className="text-sm">
            <p className="text-muted-foreground">Par {doc.author}</p>
            <p className="text-muted-foreground">{doc.published}</p>
          </div>
          
          {/* Badges */}
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {doc.level}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {doc.subject}
            </Badge>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button variant="default" size="sm" className="flex-1">
              <Eye className="h-4 w-4 mr-2" />
              Lire
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const DocumentListItem = ({ doc }: { doc: typeof documents[0] }) => (
    <Card className="group hover:shadow-md transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getTypeColor(doc.type)}>
                {doc.type}
              </Badge>
              <div className="flex items-center gap-1">
                {renderStars(doc.rating)}
              </div>
            </div>
            <h3 className="font-medium text-foreground truncate mb-1 group-hover:text-primary">
              {doc.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
              {doc.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{doc.author}</span>
              <span>{doc.pages} pages</span>
              <span>{doc.downloads} téléchargements</span>
              <span>{doc.size}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <BookOpen className="h-4 w-4" />
              Bibliothèque numérique
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 animate-fade-in">
              Explorez notre bibliothèque
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Accédez à des milliers de documents académiques : livres, articles, mémoires, 
              thèses et rapports. Tout gratuitement et en français.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{documents.length}K+</div>
                <div className="text-sm text-muted-foreground">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Types de documents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Accès gratuit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
              {/* Search */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Rechercher dans la bibliothèque..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Filters */}
              <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-2">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  <option value="downloads">Plus téléchargés</option>
                  <option value="rating">Mieux notés</option>
                  <option value="pages">Plus de pages</option>
                  <option value="title">Alphabétique</option>
                </select>
              </div>
              
              {/* View Toggle */}
              <div className="lg:col-span-2 flex justify-end">
                <div className="flex border border-input rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {filteredDocuments.length} document{filteredDocuments.length > 1 ? 's' : ''} trouvé{filteredDocuments.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Documents Display */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <DocumentListItem key={doc.id} doc={doc} />
              ))}
            </div>
          )}
          
          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Aucun document trouvé</h3>
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

export default Library;