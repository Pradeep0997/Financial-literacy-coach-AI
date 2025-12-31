import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { getGeminiResponse } from '../../services/gemini';
import { useUser } from '../../context/UserContext';

const ChatInterface = () => {
  const { user } = useUser();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  // Initial Greeting
  useEffect(() => {
    if (messages.length === 0 && user) {
      setMessages([{
        role: 'model',
        text: `**Namaste ${user.name}!** 🙏\n\nI see you're interested in **${user.goal}** but worried about **${user.fear}**. \n\nI'm here to clear that confusion. You can ask me things like:\n* "Is SIP safe?"\n* "How do I save for my goal?"\n* "Explain inflation like I'm 10."`
      }]);
    }
  }, [user]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    // Build history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getGeminiResponse(history, userText, user);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] w-full bg-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles size={20} className="text-brand-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">FinMantra Coach</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-gray-500">Online & Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-gray-200">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} text={m.text} />
        ))}
        {loading && (
          <div className="flex gap-2 items-center text-gray-400 text-sm ml-4">
             <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
             <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
             <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-100 transition-all">
          <input 
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask your question here..."
            className="flex-1 bg-transparent p-2 focus:outline-none text-gray-700"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-brand-600 hover:bg-brand-700 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatInterface;
