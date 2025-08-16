import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, User, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: "Rajesh Kumar",
      lastMessage: "Welcome to your new home!",
      timestamp: "2 hours ago",
      unread: true,
      avatar: "RK"
    },
    {
      id: 2,
      name: "Amit Patel",
      lastMessage: "Your booking has been confirmed.",
      timestamp: "1 day ago",
      unread: false,
      avatar: "AP"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Rajesh Kumar",
      message: "Hi Priya, welcome to our PG!",
      timestamp: "2:30 PM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "Thank you! I'm excited to move in.",
      timestamp: "2:32 PM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Rajesh Kumar",
      message: "Your room is ready and we're excited to have you as part of our community.",
      timestamp: "2:35 PM",
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
              {/* Chat List */}
              <div className="border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Messages</h2>
                </div>
                <div className="overflow-y-auto h-full">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                        selectedChat?.id === chat.id ? 'bg-rentz-purple/10' : ''
                      }`}
                      onClick={() => setSelectedChat(chat)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rentz-purple rounded-full flex items-center justify-center text-white font-semibold">
                          {chat.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                            <span className="text-xs text-gray-500">{chat.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread && (
                          <div className="w-2 h-2 bg-rentz-purple rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="lg:col-span-2 flex flex-col">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rentz-purple rounded-full flex items-center justify-center text-white font-semibold">
                          {selectedChat.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{selectedChat.name}</h3>
                          <p className="text-sm text-gray-600">Property Owner</p>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              msg.isOwn
                                ? 'bg-rentz-purple text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-1 ${msg.isOwn ? 'text-rentz-purple/80' : 'text-gray-500'}`}>
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Type your message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage} className="bg-rentz-purple hover:bg-rentz-purple/90">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">Select a conversation</h3>
                      <p className="text-gray-500">Choose a chat from the list to start messaging</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Messages;
