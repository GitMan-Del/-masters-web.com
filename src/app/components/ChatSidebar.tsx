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
  const [messages, setMessages] = useState<Message[]>([]); // Start with empty messages
  
  const { data: session } = useSession();
  
  const supportAgent: SupportAgent = {
    id: "sarah-support", 
    name: "Sarah Wilson", 
    avatar: "/roxi.png", 
    online: true,
    role: "Technical Support",
    responseTime: "~2 min"
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Create new message
      const userMessage: Message = {
        id: Date.now().toString(),
        senderId: session?.user?.id || "user",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString('ro-RO', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        type: 'text',
        isFromSupport: false
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage("");
      
      // Auto-reply with system message if it's the first message
      if (messages.length === 0) {
        setTimeout(() => {
          const welcomeMessage: Message = {
            id: (Date.now() + 1).toString(),
            senderId: "system",
            content: "Connected to Masters Web Support 🛠️",
            timestamp: new Date().toLocaleTimeString('ro-RO', { 
              hour: '2-digit', 
              minute: '2-digit' 
            }),
            type: 'system',
            isFromSupport: false
          };
          setMessages(prev => [...prev, welcomeMessage]);
        }, 500);
      }
    }
  };

  const handleQuickAction = (action: string) => {
    setNewMessage(action);
  };

  return (
    <div className="w-80 bg-white shadow-sm border-l border-gray-200 h-screen flex flex-col">
      {/* Support Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Support Chat</h3>
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-lg">
            Online
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Technical assistance available</p>
      </div>

      {/* Support Agent Info */}
      <div className="p-4 border-b border-gray-200 bg-white">
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
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-lg">
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
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          // Empty state
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Start a conversation</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Need help with your project? Our support team is here to assist you with any questions or issues.
            </p>
          </div>
        ) : (
          // Messages
          <div className="space-y-4">
            {messages.map((message) => {
              const isSystem = message.type === 'system';
              const isFromSupport = message.isFromSupport;
              
              return (
                <div key={message.id} className={`${isSystem ? 'text-center' : ''}`}>
                  {isSystem ? (
                    <div className="bg-gray-100 rounded-lg p-3 mx-4">
                      <p className="text-xs text-gray-600">{message.content}</p>
                    </div>
                  ) : (
                    <div className={`flex items-start space-x-3 ${isFromSupport ? '' : 'flex-row-reverse space-x-reverse'}`}>
                      <Image
                        src={isFromSupport ? supportAgent.avatar : session?.user?.image || "/daniel.png"}
                        alt={isFromSupport ? supportAgent.name : session?.user?.name || "User"}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
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
                            : 'bg-purple-600 text-white'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask for help..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
          />
          <button 
            onClick={handleSendMessage}
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            disabled={!newMessage.trim()}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        
        {/* Quick support options */}
        <div className="flex gap-2 mt-3">
          <button 
            onClick={() => handleQuickAction("I found a bug 🐛")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-3 py-1.5 transition-colors text-xs font-medium"
          >
            🐛 Bug Report
          </button>
          <button 
            onClick={() => handleQuickAction("I need help ❓")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-3 py-1.5 transition-colors text-xs font-medium"
          >
            ❓ Help
          </button>
          <button 
            onClick={() => handleQuickAction("I have a feature request ⚡")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-3 py-1.5 transition-colors text-xs font-medium"
          >
            ⚡ Feature
          </button>
        </div>
      </div>
    </div>
  );
}