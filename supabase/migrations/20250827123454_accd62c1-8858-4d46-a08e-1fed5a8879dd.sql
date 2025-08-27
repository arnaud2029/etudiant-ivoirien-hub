-- Create storage buckets for course materials
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('course-videos', 'course-videos', true, 104857600, ARRAY['video/mp4', 'video/webm', 'video/quicktime']),
  ('course-pdfs', 'course-pdfs', true, 52428800, ARRAY['application/pdf']),
  ('course-images', 'course-images', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp']);

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Primaire', 'Collège', 'Lycée', 'Université')),
  subject TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Débutant', 'Intermédiaire', 'Avancé', 'Expert')),
  duration_minutes INTEGER NOT NULL DEFAULT 0,
  total_pages INTEGER NOT NULL DEFAULT 0,
  downloads INTEGER NOT NULL DEFAULT 0,
  video_url TEXT,
  pdf_url TEXT,
  thumbnail_url TEXT,
  content TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create exercises table
CREATE TABLE public.exercises (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Primaire', 'Collège', 'Lycée', 'Université')),
  subject TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Débutant', 'Intermédiaire', 'Avancé', 'Expert')),
  duration_minutes INTEGER NOT NULL DEFAULT 0,
  exercise_type TEXT NOT NULL CHECK (exercise_type IN ('QCM', 'Vrai/Faux', 'Exercice libre', 'Problème')),
  points INTEGER NOT NULL DEFAULT 0,
  questions JSONB,
  solutions JSONB,
  video_url TEXT,
  pdf_url TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user progress table
CREATE TABLE public.user_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  exercise_id UUID REFERENCES public.exercises(id) ON DELETE CASCADE,
  progress_percentage INTEGER NOT NULL DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  completed_at TIMESTAMP WITH TIME ZONE,
  score INTEGER,
  time_spent_minutes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Create policies for courses (public read access)
CREATE POLICY "Courses are publicly readable" 
ON public.courses 
FOR SELECT 
USING (true);

-- Create policies for exercises (public read access)
CREATE POLICY "Exercises are publicly readable" 
ON public.exercises 
FOR SELECT 
USING (true);

-- Create policies for user progress (users can only see their own progress)
CREATE POLICY "Users can view their own progress" 
ON public.user_progress 
FOR SELECT 
USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create their own progress" 
ON public.user_progress 
FOR INSERT 
WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own progress" 
ON public.user_progress 
FOR UPDATE 
USING (auth.uid()::text = user_id::text);

-- Create storage policies for course videos
CREATE POLICY "Course videos are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'course-videos');

CREATE POLICY "Authenticated users can upload course videos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'course-videos' AND auth.role() = 'authenticated');

-- Create storage policies for course PDFs
CREATE POLICY "Course PDFs are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'course-pdfs');

CREATE POLICY "Authenticated users can upload course PDFs" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'course-pdfs' AND auth.role() = 'authenticated');

-- Create storage policies for course images
CREATE POLICY "Course images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'course-images');

CREATE POLICY "Authenticated users can upload course images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'course-images' AND auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_exercises_updated_at
  BEFORE UPDATE ON public.exercises
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON public.user_progress
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();