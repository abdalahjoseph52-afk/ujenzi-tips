import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FundiAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Habari! Mimi ni Fundi AI. Naweza kukusaidia kwa kuandika au unaweza kuongea nami (Voice).' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- 1. VOICE INPUT (Kusikiliza) ---
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Browser yako haisupport kuongea. Tafadhali tumia Chrome.");
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'sw-TZ'; // Kiswahili cha Tanzania
    recognition.continuous = false;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => setInput(event.results[0][0].transcript);
    recognition.start();
  };

  // --- 2. LOGIC YA KUTUMA (Secure Version) ---
  const handleSend = async () => {
    if (!input.trim()) return;

    // Vuta API Key kutoka kwenye faili la .env (SALAMA)
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Error: API Key haipo. Tafadhali set .env file.' }]);
      return;
    }

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`, // Tunatumia variable hapa
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", 
          messages: [
            {
              role: "system",
              content: `
                Wewe ni "Fundi AI", mshauri mkuu wa ujenzi Tanzania.
                MAAGIZO:
                1. Jibu kwa Kiswahili fasaha na rafiki.
                2. Tumia **Bold** kwenye bei au vitu muhimu.
                3. Tumia bullet points (*) kupangilia orodha.
                4. Usiweke maelezo marefu sana, kuwa 'direct'.
              `
            },
            ...messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : m.role, content: m.content })),
            { role: "user", content: input }
          ],
          temperature: 0.6,
          max_tokens: 1024,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Tatizo la mtandao");
      }

      const text = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
      
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: `⚠️ Samahani, nimeshindwa kuunganisha. Jaribu tena.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- 3. FORMATTER (Kupendezesha Maandishi) ---
  const parseBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      return part;
    });
  };

  const renderMessage = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) return (
        <div key={index} className="flex gap-2 items-start mb-2 ml-1">
          <div className="mt-2 w-1.5 h-1.5 bg-ujenzi-accent rounded-full shrink-0" />
          <span className="text-slate-700 leading-relaxed">{parseBold(trimmed.substring(2))}</span>
        </div>
      );
      if (trimmed.startsWith('### ')) return <h4 key={index} className="font-bold text-slate-900 mt-4 mb-2">{trimmed.substring(4)}</h4>;
      if (trimmed === '') return <div key={index} className="h-2" />;
      return <p key={index} className="mb-2 text-slate-700 leading-relaxed">{parseBold(line)}</p>;
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full shadow-2xl transition-all hover:scale-110 ${isOpen ? 'hidden' : 'bg-ujenzi-accent text-ujenzi-dark'}`}
      >
        <MessageSquare size={28} strokeWidth={2.5} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] w-[90vw] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ujenzi-accent rounded-full flex items-center justify-center text-ujenzi-dark">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Fundi AI</h3>
                  <p className="text-[10px] text-ujenzi-accent animate-pulse">
                    {isListening ? 'Nasikiliza...' : 'Online • Llama 3.3'}
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-slate-900 text-white rounded-tr-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.role === 'user' ? msg.content : renderMessage(msg.content)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-ujenzi-accent" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
              
              {/* Voice Button */}
              <button
                onClick={handleVoiceInput}
                className={`p-3 rounded-xl transition-all ${
                  isListening 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
                title="Bonyeza kuongea"
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isListening ? "Nasikiliza..." : "Andika..."}
                className="flex-1 bg-slate-100 border-0 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-ujenzi-accent focus:bg-white transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-ujenzi-accent text-ujenzi-dark p-2 rounded-xl hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FundiAI;