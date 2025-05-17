import React from "react";

export const ChatMessage = ({ text, fromMe }) => (
  <div className={`flex ${fromMe ? "justify-end" : "justify-start"} my-1 px-4`}>
    <div
      className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
        fromMe ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {text}
    </div>
  </div>
);