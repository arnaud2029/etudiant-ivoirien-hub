import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

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
      text: "Salut 👋 ! Je suis Kora, ton assistant d'étude. Tu cherches un cours, un exercice ou de l'aide pour t'inscrire ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Chercher un cours",
    "Voir mes progrès", 
    "Aide inscription",
    "Parler à un conseiller"
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "";
      
      if (text.toLowerCase().includes("cours")) {
        botResponse = "Super ! Quel niveau t'intéresse ? Primaire, Secondaire ou Université ? Tu peux aussi me dire quelle matière tu préfères 📚";
      } else if (text.toLowerCase().includes("inscription")) {
        botResponse = "Pour t'inscrire, c'est très simple ! Clique sur 'Créer un compte' en haut à droite, ou connecte-toi directement avec Gmail. C'est gratuit ! 🎓";
      } else if (text.toLowerCase().includes("conseiller")) {
        botResponse = "Je vais te connecter avec un conseiller humain. Tu peux aussi utiliser le bouton WhatsApp en bas à droite pour continuer la conversation ! 💬";
      } else {
        botResponse = "Je comprends ! Peux-tu me donner plus de détails ? Je suis là pour t'aider à trouver les meilleurs cours pour toi 😊";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
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

          {/* Quick Replies */}
          {messages.length <= 2 && (
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
                className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;