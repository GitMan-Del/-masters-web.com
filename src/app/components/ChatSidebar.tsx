"use client";

import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface SupportAgent {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
  role: string;
  responseTime?: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'file' | 'system';
  isFromSupport: boolean;
}

export default function ChatSidebar() {
  const [newMessage, setNewMessage] = useState("");
  
  
  const { data: session } = useSession();
  console.log(session);
  
  const supportAgent: SupportAgent = {
    id: "sarah-support", 
    name: "Sarah Wilson", 
    avatar: "/roxi.png", 
    online: true,
    role: "Technical Support",
    responseTime: "~2 min"
  };

  const messages: Message[] = [
    {
      id: "1",
      senderId: "system",
      content: "Connected to Masters Web Support 🛠️",
      timestamp: "09:45",
      type: 'system',
      isFromSupport: false
    },
    {
      id: "2", 
      senderId: "sarah-support",
      content: "Hi Raul! 👋 How can I help you today?",
      timestamp: "09:46",
      type: 'text',
      isFromSupport: true
    },
    {
      id: "3",
      senderId: "raul", 
      content: "Salut! Am o întrebare despre dashboard-ul nou",
      timestamp: "09:47",
      type: 'text',
      isFromSupport: false
    },
    {
      id: "4",
      senderId: "sarah-support",
      content: "Perfect! What would you like to know about the dashboard?",
      timestamp: "09:48", 
      type: 'text',
      isFromSupport: true
    },
    {
      id: "5",
      senderId: "raul",
      content: "Recent Payments scrolling funcționează perfect, mulțumesc! 💰",
      timestamp: "09:50",
      type: 'text',
      isFromSupport: false
    },
    {
      id: "6",
      senderId: "sarah-support",
      content: "Great to hear! Is there anything else I can help you with? 😊",
      timestamp: "09:51",
      type: 'text',
      isFromSupport: true
    },
    {
      id: "7",
      senderId: "raul",
      content: "PhaseCards layout arată fantastic acum! 🎯",
      timestamp: "09:52",
      type: 'text',
      isFromSupport: false
    },
    {
      id: "8",
      senderId: "sarah-support",
      content: "Wonderful! I'm glad the new layout is working well for you. Feel free to reach out if you need any assistance! 🚀",
      timestamp: "09:53",
      type: 'text',
      isFromSupport: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would normally send the message to support
      setNewMessage("");
    }
  };

  return (
    <div className="w-80 bg-white shadow-sm border-l border-gray-200 h-screen flex flex-col">
      {/* Support Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Support Chat</h3>
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
            Online
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Technical assistance available</p>
      </div>

      {/* Support Agent Info */}
      <div className="p-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src={supportAgent.avatar}
              alt={supportAgent.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            {supportAgent.online && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">{supportAgent.name}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                {supportAgent.role}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Avg. response time: {supportAgent.responseTime}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message) => {
          const isSystem = message.type === 'system';
          const isFromSupport = message.isFromSupport;
          
          return (
            <div key={message.id} className={`group ${isSystem ? 'text-center' : ''}`}>
              {isSystem ? (
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-2 mx-4">
                  <p className="text-xs text-gray-600">{message.content}</p>
                </div>
              ) : (
                <div className={`flex items-start space-x-2 ${isFromSupport ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <Image
                    src={isFromSupport ? supportAgent.avatar : session?.user?.image || "/daniel.png"}
                    alt={isFromSupport ? supportAgent.name : session?.user?.name || "User"}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                  />
                  <div className={`flex-1 min-w-0 ${isFromSupport ? '' : 'text-right'}`}>
                    <div className={`flex items-center gap-2 mb-1 ${isFromSupport ? '' : 'justify-end'}`}>
                      <span className="text-xs font-medium text-gray-900">
                        {isFromSupport ? supportAgent.name : "You"}
                      </span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <div className={`inline-block max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                      isFromSupport 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {/* Support agent typing indicator */}
        <div className="flex items-center space-x-2 text-gray-500 animate-pulse">
          <Image
            src={supportAgent.avatar}
            alt={supportAgent.name}
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover"
          />
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <span className="text-xs">{supportAgent.name} is typing...</span>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-gray-200 bg-gray-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask for help..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
          <button 
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={!newMessage.trim()}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        
        {/* Quick support options */}
        <div className="flex gap-1 mt-2 text-xs">
          <button className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 transition-colors">
            🐛 Bug Report
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 transition-colors">
            ❓ Help
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 transition-colors">
            ⚡ Feature Request
          </button>
        </div>
      </div>
    </div>
  );
}