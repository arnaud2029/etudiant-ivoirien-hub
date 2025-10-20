import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Clock, 
  Play, 
  FileText, 
  Trophy,
  Users,
  GraduationCap,
  BookOpen,
  Target
} from 'lucide-react';

interface ExerciseCardProps {
  exercise: {
    id: string;
    title: string;
    description: string;
    level: string;
    subject: string;
    difficulty: string;
    duration: string;
    points: number;
    type: string;
    thumbnail: string;
    questions: number;
    hasVideo: boolean;
    hasPdf: boolean;
    pdfUrl?: string;
  };
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);

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
    if (exercise.pdfUrl) {
      const link = document.createElement('a');
      link.href = exercise.pdfUrl;
      link.download = `${exercise.title}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in relative overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={exercise.thumbnail} 
          alt={exercise.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-purple-500 text-white">
            <Target className="h-3 w-3 mr-1" />
            {exercise.type}
          </Badge>
          {exercise.hasVideo && (
            <Badge variant="secondary" className="bg-red-500 text-white">
              <Play className="h-3 w-3 mr-1" />
              Vidéo
            </Badge>
          )}
          {exercise.hasPdf && (
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
            {getLevelIcon(exercise.level)}
            <Badge variant="secondary" className="text-xs">
              {exercise.level}
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
              <FileText className="h-3 w-3" />
              {exercise.questions} exercices
            </div>
          </div>
          
          {/* Subject Badge */}
          <Badge variant="outline" className="w-fit">
            {exercise.subject}
          </Badge>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Dialog open={isExerciseOpen} onOpenChange={setIsExerciseOpen}>
              <DialogTrigger asChild>
                <Button variant="default" size="sm" className="flex-1">
                  <Play className="h-4 w-4 mr-2" />
                  Consulter
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
                <DialogHeader className="p-6 pb-4">
                  <DialogTitle className="flex items-center gap-2">
                    {getLevelIcon(exercise.level)}
                    {exercise.title}
                  </DialogTitle>
                  <DialogDescription>
                    {exercise.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="h-[calc(90vh-120px)]">
                  {exercise.pdfUrl ? (
                    <iframe
                      src={exercise.pdfUrl}
                      className="w-full h-full border-0"
                      title={exercise.title}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Aucun contenu disponible
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
              <FileText className="h-4 w-4 mr-2" />
              Télécharger
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;