import React, { useState, useRef, useEffect } from "react";

const ChatWindow = ({ name = "Brooke Davis" }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "Brooke", text: "Hey Lucas!" },
    { from: "Brooke", text: "How’s your project going?" },
    { from: "Lucas", text: "Hi Brooke!" },
    { from: "Lucas", text: "It’s going well. Thanks for asking!" },
    { from: "Brooke", text: "No worries. Let me know if you need any help 😉" },
  ]);

  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { from: "Lucas", text: input }]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#f9f9fc]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
        <button className="text-blue-500 text-xl">&larr;</button>
        <h1 className="font-semibold text-base">{name}</h1>
        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-400"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5.121 17.804A8.966 8.966 0 0112 15a8.966 8.966 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  />
</svg>

        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
              msg.from === "Lucas"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-[#f1f1f4] text-black self-start"
            }`}
          >
            <div className="font-semibold text-xs mb-1">{msg.from}</div>
            <div>{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="flex items-center px-3 py-2 border-t bg-white">
        <button className="text-blue-500 text-xl mr-2">+</button>
        <input
  ref={inputRef}
  type="text"
  inputMode="text"
  autoComplete="off"
  autoCorrect="on"
  autoCapitalize="sentences"
  className="flex-1 px-4 py-2 bg-[#f1f1f4] rounded-full text-sm outline-none focus:outline-none focus:ring-2 focus:ring-blue-300"
  placeholder="Type a message..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onFocus={() => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  }}
/>

        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-5-5m5 5l-5 5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;