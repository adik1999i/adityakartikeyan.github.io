import React, { useState } from 'react';
import './chatbot.css';

// Simple dataset with common questions and answers
const faqData = [
  {
    question: 'who are you',
    answer: "I am Aditya Kartikeyan, a Full Stack Developer pursuing a Master's in Business Analytics at the University of Sydney.",
  },
  {
    question: 'current role',
    answer: "I am currently a Master's student in Business Analytics and a former Junior Software Engineer at Limendo India Pvt Ltd.",
  },
  {
    question: 'skills',
    answer: 'I am skilled in JavaScript, React.js, Next.js, Node.js, and proficient in Java, Python, and MySQL. I also use tools like Git, Spring Boot, and Figma for UI/UX design.',
  },
  {
    question: 'analytical tools',
    answer: 'I use Tableau and Excel for data visualization and analysis.',
  },
  {
    question: 'work experience',
    answer: 'I have worked at Limendo India Pvt Ltd as a Junior Software Engineer and Capgemini India as a Software Engineer. I have led projects, improved data retrieval speed, and conducted extensive bug analysis.',
  },
  {
    question: 'educational background',
    answer: "I am currently pursuing a Master's in Business Analytics at the University of Sydney. I also hold a B.Tech in Information Technology from SRM Institute of Science & Technology.",
  },
  {
    question: 'projects',
    answer: 'I have developed an Apartment Security Management System, a CMS using Next.js and React, and an AI-Based Peer Mentoring Solution in Figma.',
  },
];

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello! How can I assist you today?' }]);
  const [input, setInput] = useState('');
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // State to control chatbot visibility

  // Function to find an answer based on the input question
  const findAnswer = (input) => {
    const question = input.toLowerCase();
    const match = faqData.find((item) => question.includes(item.question));
    return match ? match.answer : 'Sorry, I am not sure about that. Please try asking something else!';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add the user's message to the chat
    setMessages([...messages, { sender: 'user', text: input }]);

    // Get the bot's response based on the input
    const botResponse = findAnswer(input);

    // Add the bot's response to the chat
    setMessages([...messages, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  // Function to handle quick reply buttons
  const handleQuickReply = (question) => {
    setInput(question);
    handleSend();
  };

  return (
    <div>
      {/* Open button */}
      {!isChatbotVisible && (
        <button className="chatbot-open-btn" onClick={() => setIsChatbotVisible(true)}>
          💬
        </button>
      )}

      {/* Chatbot container */}
      {isChatbotVisible && (
        <div className="chatbot">
          <div className="chatbox">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <button className="chatbot-close-btn" onClick={() => setIsChatbotVisible(false)}>
            ✖️
          </button>
          <div className="quick-replies">
            <button onClick={() => handleQuickReply('who are you')}>Who are you?</button>
            <button onClick={() => handleQuickReply('current role')}>Current Role?</button>
            <button onClick={() => handleQuickReply('skills')}>Skills?</button>
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
