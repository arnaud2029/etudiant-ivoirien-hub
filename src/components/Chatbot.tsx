import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Salut 👋 ! Je suis Kora, ton assistant d'étude IA. Tu cherches un cours, un exercice ou de l'aide pour t'inscrire ? Je peux répondre à toutes tes questions sur Étudiant Ivoirien !",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const quickReplies = [
    "Chercher un cours",
    "Voir mes progrès", 
    "Aide inscription",
    "Parler à un conseiller"
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Préparer l'historique de conversation pour le contexte
      const conversationHistory = messages.map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text
      }));

      const { data, error } = await supabase.functions.invoke('chatbot-ai', {
        body: {
          message: text,
          conversationHistory: conversationHistory
        }
      });

      if (error) {
        console.error('Erreur Supabase:', error);
        throw new Error(error.message);
      }

      const aiResponse = data?.response || data?.fallback || "Désolé, je n'ai pas pu traiter ta demande. Peux-tu reformuler ta question ?";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Erreur chatbot:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Désolé, je rencontre un problème technique. Tu peux me reposer ta question ou contacter notre support via WhatsApp pour une aide immédiate ! 💬",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Erreur de connexion",
        description: "Problème temporaire avec l'assistant IA",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-primary to-primary-glow text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-bounce-in"
        >
          <MessageCircle className="h-6 w-6" />
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
            1
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Besoin d'aide ? Parle à Kora !
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* Chatbot Widget */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-border flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-glow text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🦉</span>
              </div>
              <div>
                <h3 className="font-semibold">Kora</h3>
                <p className="text-xs text-white/80">Assistant d'étude</p>
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  En ligne
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-gradient-to-r from-primary to-primary-glow text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-muted-foreground' : 'text-white/70'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start px-4">
              <div className="bg-muted text-foreground max-w-xs px-3 py-2 rounded-lg flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Kora réfléchit...</span>
              </div>
            </div>
          )}

          {/* Quick Replies */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-4 pb-2">
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-accent text-accent-foreground px-3 py-2 rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écris ton message..."
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(inputValue);
                  }
                }}
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="sm"
                disabled={isLoading}
                className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;