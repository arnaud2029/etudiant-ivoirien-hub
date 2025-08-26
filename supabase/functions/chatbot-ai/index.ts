import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `Tu es Kora, l'assistant virtuel d'Étudiant Ivoirien, une plateforme éducative en ligne dédiée aux étudiants ivoiriens.

INFORMATIONS SUR ÉTUDIANT IVOIRIEN :
- Plateforme éducative gratuite pour les étudiants ivoiriens
- Propose des cours pour tous les niveaux : Primaire, Secondaire, Université
- Matières disponibles : Mathématiques, Français, Sciences, Histoire-Géo, Anglais, Philosophie, etc.
- Fonctionnalités : cours vidéo, documents PDF, exercices interactifs, quiz
- Inscription gratuite avec email ou compte Gmail
- Bibliothèque de ressources avec système de filtrage par niveau et matière
- Possibilité de devenir auteur et proposer des cours
- Support disponible via WhatsApp pour une aide personnalisée

TES RESPONSABILITÉS :
- Aider les utilisateurs à naviguer sur la plateforme
- Expliquer le processus d'inscription (gratuit, via email ou Gmail)
- Présenter les cours et matières disponibles
- Guider vers les bonnes ressources selon le niveau d'étude
- Expliquer comment utiliser la bibliothèque et les exercices
- Orienter vers WhatsApp pour un support humain si nécessaire
- Encourager l'inscription pour accéder aux cours complets

STYLE DE COMMUNICATION :
- Réponds en français
- Sois bienveillant, encourageant et professionnel
- Utilise des émojis avec modération
- Reste concis mais informatif
- Propose toujours des actions concrètes (s'inscrire, consulter un cours, etc.)
- Si tu ne connais pas une information spécifique, oriente vers le support WhatsApp

Si on te demande des informations que tu ne possèdes pas sur la plateforme, propose de contacter le support via WhatsApp pour obtenir une réponse personnalisée.`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message requis' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY not found');
      return new Response(JSON.stringify({ error: 'Configuration manquante' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Préparer les messages pour OpenAI
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-10), // Garder les 10 derniers messages pour le contexte
      { role: 'user', content: message }
    ];

    console.log('Sending request to OpenAI with message:', message);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, await response.text());
      return new Response(JSON.stringify({ error: 'Erreur du service IA' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      console.error('No response from OpenAI');
      return new Response(JSON.stringify({ error: 'Pas de réponse générée' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('AI response generated successfully');

    return new Response(JSON.stringify({ 
      response: aiResponse,
      usage: data.usage 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chatbot-ai function:', error);
    return new Response(JSON.stringify({ 
      error: 'Erreur interne du serveur',
      fallback: "Désolé, je rencontre un problème technique. Tu peux me reposer ta question ou contacter notre support via WhatsApp pour une aide immédiate ! 💬"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});