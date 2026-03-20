import React, { useState, useRef, useEffect } from "react";

const API_URL = import.meta.env.VITE_CHATBOT_API_URL;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! Ask me anything. I will fetch answers from the backend." },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    if (!API_URL) {
      const err = "Chatbot API URL is not set. Add VITE_CHATBOT_API_URL to your .env file.";
      console.error(err);
      setError(err);
      setLoading(false);
      return;
    }

    const userMessage = {
      id: Date.now() + Math.random(),
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify({ question: trimmed }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Backend error: ${response.status} ${text}`);
      }

      const contentType = response.headers.get("content-type") || "";
      let answer = "I got your question, but no answer was returned.";

      if (contentType.includes("application/json")) {
        const data = await response.json();
        answer = data.answer || data.reply || data.message || JSON.stringify(data);
      } else {
        const text = await response.text();
        answer = text?.trim() || answer;
      }

      setMessages((prev) => [...prev, { id: Date.now() + Math.random(), sender: "bot", text: answer }]);
    } catch (err) {
      console.error(err);
      const msg = typeof err === "string" ? err : err.message || "Backend request failed. Please check your backend URL and server.";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          sender: "bot",
          text: `Sorry, I couldn't fetch a response right now. ${msg}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="flex flex-col items-end">
        {open && (
          <div className="w-[320px] md:w-[380px] bg-white shadow-2xl rounded-2xl border border-slate-200 overflow-hidden mb-2 text-sm">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-semibold">AI ChatBot</div>
                <div className="text-xs text-indigo-100">Powered by Gemini</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full w-7 h-7 grid place-content-center hover:bg-white/20"
                aria-label="Close chatbot"
              >
                ✕
              </button>
            </div>
            <div className="h-72 overflow-y-auto p-3 space-y-2 bg-slate-50" ref={scrollRef}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl break-words ${
                      msg.sender === "user"
                        ? "bg-indigo-600 text-white rounded-br-none"
                        : "bg-white text-slate-800 rounded-bl-none border border-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="p-2 border-t border-slate-200 bg-white">
              <div className="flex gap-2 items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-indigo-600 text-white px-3 py-2 text-xs font-semibold hover:bg-indigo-700 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
              {error && <div className="text-xs text-red-600 mt-1">{error}</div>}
            </form>
          </div>
        )}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition"
        >
          <span className="text-lg">💬</span>
          {open ? "Close Chat" : "Ask Me"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
