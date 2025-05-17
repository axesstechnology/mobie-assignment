import React from "react";

function Chats({ name, message, unreadCount }) {
  return (
    <div className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
      {/* Avatar */}
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
        <span className="text-sm font-medium">{name.split(" ").map(n => n[0]).join("")}</span>
      </div>

      {/* Name & Message */}
      <div className="ml-3 flex-1 min-w-0">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-gray-500 text-xs truncate">{message}</div>
      </div>

      {/* Unread Badge */}
      {unreadCount > 0 && (
        <div className="bg-blue-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount}
        </div>
      )}
    </div>
  );
}

export default Chats;
