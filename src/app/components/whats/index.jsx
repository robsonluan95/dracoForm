import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '5511999999999'; // Exemplo: +55 11 99999-9999
  const message = 'Olá, gostaria de mais informações!'; // Mensagem pré-definida

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <button onClick={handleClick} className="bg-green-500 text-white p-2 rounded">
      Falar no WhatsApp
    </button>
  );
};

export default WhatsAppButton;
