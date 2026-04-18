import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles, MessageCircle } from "lucide-react";
import { useT } from "./i18n";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Chatbot({ lang = "fr" }) {
  const t = useT(lang);
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([
    { role: "assistant", content: t.chatbot.welcome },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // Reset welcome when lang changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: t.chatbot.welcome }]);
    setSessionId(null);
  }, [lang, t.chatbot.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await axios.post(`${API}/chat`, {
        session_id: sessionId,
        message: text,
        language: lang,
      });
      setSessionId(res.data.session_id);
      setMessages((m) => [...m, { role: "assistant", content: res.data.reply }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            lang === "fr"
              ? "Oups, une erreur est survenue. Contactez-nous directement sur WhatsApp : +33 6 50 01 51 67"
              : "Oops, an error occurred. Contact us directly on WhatsApp: +33 6 50 01 51 67",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Trigger */}
      <button
        data-testid="chatbot-trigger"
        aria-label="Open Krypton AI chat"
        onClick={() => setOpen(true)}
        className={`fixed z-[60] bottom-6 ${t.dir === "rtl" ? "left-6" : "right-6"} md:bottom-8 ${t.dir === "rtl" ? "md:left-8" : "md:right-8"} chatbot-float rounded-full p-4 md:p-5 bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-[#05060F] ${open ? "scale-0 pointer-events-none" : "scale-100"} transition-transform duration-300`}
      >
        <div className="relative">
          <Bot className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.2} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#22c55e] rounded-full ring-2 ring-[#05060F]" />
        </div>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="chatbot-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`fixed z-[60] bottom-4 ${t.dir === "rtl" ? "left-4" : "right-4"} md:bottom-8 ${t.dir === "rtl" ? "md:left-8" : "md:right-8"} w-[calc(100vw-2rem)] max-w-[400px] h-[72vh] max-h-[620px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl`}
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,212,255,0.15), 0 20px 60px rgba(139,92,246,0.25), 0 0 40px rgba(0,212,255,0.15)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-[#00D4FF]/10 to-[#8B5CF6]/10">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#05060F]" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">{t.chatbot.title}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    {t.chatbot.subtitle}
                  </div>
                </div>
              </div>
              <button
                data-testid="chatbot-close"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 krypton-grid-bg"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  data-testid={`chat-msg-${m.role}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-[#05060F] font-medium rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-gray-100 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 text-gray-400 text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-2">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: "120ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#EC4899] rounded-full animate-bounce" style={{ animationDelay: "240ms" }} />
                    </span>
                    <span className="text-xs">{t.chatbot.thinking}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-[#05060F]/60">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-4 pr-1 py-1 focus-within:border-[#00D4FF]/50">
                <input
                  data-testid="chatbot-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  placeholder={t.chatbot.placeholder}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 py-2 outline-none"
                />
                <button
                  data-testid="chatbot-send"
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="p-2.5 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-[#05060F] disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 text-center mt-2 tracking-wider uppercase">
                <MessageCircle className="w-3 h-3 inline mr-1" />
                Krypton AI · Claude Sonnet 4.5
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
