import React from "react";
import Chats from "./Chats";
import { useNavigate } from "react-router-dom";
import { Plus, Settings, Users } from "lucide-react"; // Optional for icons

export const ChatList = () => {
  const navigate = useNavigate();

  const chats = [
    { name: "Haley James", message: "Stand up for what you believe in", unreadCount: 1 },
    { name: "Nathan Scott", message: "One day you’re seventeen and planning for someday. And then quietly and without...", unreadCount: 0 },
    { name: "Brooke Davis", message: "I am who I am. No excuses.", unreadCount: 1 },
    { name: "Jamie Scott", message: "Some people are a little different. I think that’s cool.", unreadCount: 0 },
    { name: "Marvin McFadden", message: "Last night in the NBA the Charlotte Bobcats quietly made a move that most sports fans...", unreadCount: 0 },
    { name: "Antwon Taylor", message: "Meet me at the Rivercourt", unreadCount: 0 },
    { name: "Jake Jagielski", message: "In your life, you're gonna go to some great places, and do some wonderful things.", unreadCount: 0 },
  ];

  const handleChatClick = (chat) => {
    navigate(`/chats/${encodeURIComponent(chat.name)}`);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f9f9fc]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <button className="text-blue-500 text-sm">Edit</button>
        <h1 className="text-lg font-semibold">Chats</h1>
        <button className="text-blue-500 text-lg">
          <Plus strokeWidth={2} size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-full bg-gray-100 text-sm outline-none"
        />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, i) => (
          <div key={i} onClick={() => handleChatClick(chat)}>
            <Chats {...chat} />
          </div>
        ))}
      </div>

      {/* Bottom Tabs */}
      <div className="flex justify-around items-center border-t p-2 bg-white text-gray-500 text-xs">
        <div className="flex flex-col items-center text-blue-500">
          <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
          </svg>
          <span>Chats</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-5 h-5 mb-1" />
          <span>Friends</span>
        </div>
        <div className="flex flex-col items-center">
          <Settings className="w-5 h-5 mb-1" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};
