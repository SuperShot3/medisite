'use client'
import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Container, Section } from '../../components/shared/common'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { getChatResponse } from '../../utils/openai'

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

interface Suggestion {
  text: string
  showAfter?: string // После какого сообщения показывать
}

const initialSuggestions: Suggestion[] = [
  { text: 'General Checkup' },
  { text: 'Specialist Consultation' },
  { text: 'Laboratory Tests' },
]

const followUpSuggestions: { [key: string]: Suggestion[] } = {
  'General Checkup': [
    { text: 'Morning (9:00-12:00)' },
    { text: 'Afternoon (13:00-17:00)' },
    { text: 'Evening (17:00-20:00)' },
  ],
  'Specialist Consultation': [
    { text: 'Cardiology' },
    { text: 'Neurology' },
    { text: 'Orthopedics' },
    { text: 'Dermatology' },
  ],
  'Laboratory Tests': [
    { text: 'Blood Test' },
    { text: 'X-Ray' },
    { text: 'Ultrasound' },
    { text: 'MRI' },
  ],
}

export default function Appointment() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your medical assistant. I'll help you schedule an appointment. What type of medical service are you looking for?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [currentSuggestions, setCurrentSuggestions] = useState(initialSuggestions)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string) => {
    if (isLoading) return

    console.log('Sending message:', text); // Для отладки

    setMessages(prev => [...prev, {
      text,
      isUser: true,
      timestamp: new Date(),
    }])
    setIsLoading(true)

    // Обновляем подсказки на основе выбранного варианта
    if (followUpSuggestions[text]) {
      setCurrentSuggestions(followUpSuggestions[text])
    } else {
      setCurrentSuggestions([])
    }

    try {
      console.log('API Key:', process.env.NEXT_PUBLIC_API_SECRET_KEY); // Для отладки
      const response = await getChatResponse([...messages.map(msg => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.text
      })), { role: 'user', content: text }]);

      console.log('Response received:', response); // Для отладки

      setMessages(prev => [...prev, {
        text: response,
        isUser: false,
        timestamp: new Date(),
      }])
    } catch (error) {
      console.error('Error in handleSendMessage:', error)
      setMessages(prev => [...prev, {
        text: "I apologize, but I'm having trouble processing your request. Please try again.",
        isUser: false,
        timestamp: new Date(),
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <Navbar />
      <Section className="pt-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Appointment
              </h1>
              <p className="text-gray-600">
                Chat with our AI-assistant to schedule your visit
              </p>
            </div>

            {/* Чат-окно */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Заголовок чата */}
              <div className="bg-[#33c9b6] p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <p className="text-white font-medium">Medical Assistant Online</p>
                </div>
              </div>

              {/* Область сообщений */}
              <div className="h-[500px] p-6 overflow-y-auto space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-start space-x-2 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-blue-500' : 'bg-[#33c9b6]'}`}>
                      <span className="text-white text-sm font-bold">
                        {message.isUser ? 'U' : 'M'}
                      </span>
                    </div>
                    <div className={`p-4 rounded-lg shadow-sm max-w-[80%] ${message.isUser ? 'bg-blue-50' : 'bg-white'}`}>
                      <p className="text-gray-800">{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
                
                {isLoading && (
                  <div className="flex justify-center">
                    <div className="animate-pulse text-[#33c9b6]">
                      Typing...
                    </div>
                  </div>
                )}

                {/* Подсказки */}
                {!isLoading && currentSuggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {currentSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.text}
                        onClick={() => handleSendMessage(suggestion.text)}
                        className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border hover:border-[#33c9b6] hover:text-[#33c9b6] transition-colors"
                      >
                        {suggestion.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Поле ввода */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && inputMessage.trim() && !isLoading) {
                        handleSendMessage(inputMessage)
                        setInputMessage('')
                      }
                    }}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#33c9b6] focus:border-transparent"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => {
                      if (inputMessage.trim() && !isLoading) {
                        handleSendMessage(inputMessage)
                        setInputMessage('')
                      }
                    }}
                    className={`bg-[#33c9b6] p-2 rounded-lg text-white transition-colors ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
                    }`}
                    disabled={isLoading}
                  >
                    <PaperAirplaneIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </main>
  )
} 