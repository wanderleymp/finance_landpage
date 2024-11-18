import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '556933017414'; // Updated phone number
  const message = 'Olá! Gostaria de saber mais sobre o AgileFinance.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 bg-white text-gray-900 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Fale Conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;