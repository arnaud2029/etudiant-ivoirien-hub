import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const whatsappNumber = "2250123456789"; // Remplacer par le vrai numéro
  const defaultMessage = "Bonjour, je souhaite de l'aide pour accéder aux cours sur Étudiant Ivoirien.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring opacity-75"></div>
      
      {/* Main Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Continuer sur WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Fermer WhatsApp"
      >
        ×
      </button>
    </div>
  );
};

export default WhatsAppFloat;