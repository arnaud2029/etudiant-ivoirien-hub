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
  CheckCircle,
  Users,
  GraduationCap,
  BookOpen,
  Target,
  Award
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

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
    questions: Question[];
    hasVideo: boolean;
    hasPdf: boolean;
  };
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

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

  const handleAnswerSelect = (questionId: number, answer: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const submitExercise = () => {
    let correctAnswers = 0;
    exercise.questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = (correctAnswers / exercise.questions.length) * exercise.points;
    setScore(finalScore);
    setShowResults(true);
  };

  const resetExercise = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
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
              {exercise.questions.length} questions
            </div>
          </div>
          
          {/* Subject Badge */}
          <Badge variant="outline" className="w-fit">
            {exercise.subject}
          </Badge>
          
          {/* Action Button */}
          <Dialog open={isExerciseOpen} onOpenChange={setIsExerciseOpen}>
            <DialogTrigger asChild>
              <Button className="w-full btn-secondary" onClick={resetExercise}>
                <Play className="h-4 w-4 mr-2" />
                Commencer l'exercice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  {exercise.title}
                </DialogTitle>
                <DialogDescription>
                  {exercise.description} - {exercise.questions.length} questions, {exercise.points} points au total
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {!showResults ? (
                  <div className="space-y-6">
                    {/* Progress */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestion + 1} sur {exercise.questions.length}
                      </span>
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestion + 1) / exercise.questions.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Question */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {exercise.questions[currentQuestion]?.question}
                      </h3>
                      
                      {exercise.type === 'QCM' && exercise.questions[currentQuestion]?.options && (
                        <div className="space-y-2">
                          {exercise.questions[currentQuestion].options!.map((option, index) => (
                            <label key={index} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                              <input
                                type="radio"
                                name={`question-${exercise.questions[currentQuestion].id}`}
                                value={index}
                                onChange={() => handleAnswerSelect(exercise.questions[currentQuestion].id, index)}
                                checked={userAnswers[exercise.questions[currentQuestion].id] === index}
                                className="text-primary"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      
                      {exercise.type === 'Vrai/Faux' && (
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                            <input
                              type="radio"
                              name={`question-${exercise.questions[currentQuestion].id}`}
                              value="true"
                              onChange={() => handleAnswerSelect(exercise.questions[currentQuestion].id, 'true')}
                              checked={userAnswers[exercise.questions[currentQuestion].id] === 'true'}
                              className="text-primary"
                            />
                            <span>Vrai</span>
                          </label>
                          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                            <input
                              type="radio"
                              name={`question-${exercise.questions[currentQuestion].id}`}
                              value="false"
                              onChange={() => handleAnswerSelect(exercise.questions[currentQuestion].id, 'false')}
                              checked={userAnswers[exercise.questions[currentQuestion].id] === 'false'}
                              className="text-primary"
                            />
                            <span>Faux</span>
                          </label>
                        </div>
                      )}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                        disabled={currentQuestion === 0}
                      >
                        Précédent
                      </Button>
                      
                      {currentQuestion < exercise.questions.length - 1 ? (
                        <Button 
                          onClick={() => setCurrentQuestion(currentQuestion + 1)}
                          disabled={!userAnswers[exercise.questions[currentQuestion].id]}
                        >
                          Suivant
                        </Button>
                      ) : (
                        <Button 
                          onClick={submitExercise}
                          disabled={Object.keys(userAnswers).length !== exercise.questions.length}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Terminer
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Results */
                  <div className="space-y-6 text-center">
                    <div className="space-y-2">
                      <Award className="h-16 w-16 mx-auto text-yellow-500" />
                      <h3 className="text-2xl font-bold">Exercice terminé !</h3>
                      <p className="text-lg">
                        Votre score : <span className="font-bold text-primary">{score}/{exercise.points} points</span>
                      </p>
                      <p className="text-muted-foreground">
                        {Math.round((score / exercise.points) * 100)}% de réussite
                      </p>
                    </div>
                    
                    <Button onClick={() => setIsExerciseOpen(false)} className="w-full">
                      Fermer
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;