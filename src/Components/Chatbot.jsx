import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/01/04/06/20250104061204-RN5FRTGF.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      const chatbotWidget = document.querySelector('[id*="bp-web-widget"]');
      if (chatbotWidget) {
        chatbotWidget.remove();
      }
    };
  }, []);

  return null;
};

export default Chatbot;