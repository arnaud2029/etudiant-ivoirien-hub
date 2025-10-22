import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Clock, 
  Download, 
  Eye, 
  BookOpen, 
  Play, 
  FileText, 
  Users,
  GraduationCap,
  Star,
  CheckCircle
} from 'lucide-react';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    level: string;
    subject: string;
    difficulty: string;
    duration: string;
    pages: number;
    downloads: number;
    thumbnail: string;
    hasVideo: boolean;
    hasPdf: boolean;
    content?: string;
    isPremium?: boolean;
    pdfUrl?: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [isContentOpen, setIsContentOpen] = useState(false);

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

  const handleDownload = () => {
    if (course.pdfUrl) {
      // Télécharger le PDF réel
      const link = document.createElement('a');
      link.href = course.pdfUrl;
      link.download = `${course.title}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (course.content) {
      // Télécharger le contenu en texte (fallback)
      const element = document.createElement('a');
      element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(course.content);
      element.download = `${course.title}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in relative overflow-hidden">
      {course.isPremium && (
        <div className="absolute top-2 right-2 z-10">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <Star className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}
      
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          {course.hasVideo && (
            <Badge variant="secondary" className="bg-red-500 text-white">
              <Play className="h-3 w-3 mr-1" />
              Vidéo
            </Badge>
          )}
          {course.hasPdf && (
            <Badge variant="secondary" className="bg-blue-500 text-white">
              <FileText className="h-3 w-3 mr-1" />
              PDF
            </Badge>
          )}
        </div>
      </div>

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
            <Dialog open={isContentOpen} onOpenChange={setIsContentOpen}>
              <DialogTrigger asChild>
                <Button variant="default" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  Consulter
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
                <DialogHeader className="p-6 pb-4">
                  <DialogTitle className="flex items-center gap-2">
                    {getLevelIcon(course.level)}
                    {course.title}
                  </DialogTitle>
                  <DialogDescription>
                    {course.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="h-[calc(90vh-120px)]">
                  {course.pdfUrl ? (
                    <iframe
                      src={course.pdfUrl}
                      className="w-full h-full border-0"
                      title={course.title}
                    />
                  ) : course.content ? (
                    <div className="overflow-y-auto h-full px-6 pb-6">
                      <div className="prose prose-sm max-w-none">
                        <div dangerouslySetInnerHTML={{ 
                          __html: course.content.replace(/\n/g, '<br/>').replace(/#{1,6} /g, '<h3>').replace(/<h3>/g, '<h3 class="text-lg font-semibold mt-4 mb-2">') 
                        }} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-muted-foreground">Contenu non disponible</p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;