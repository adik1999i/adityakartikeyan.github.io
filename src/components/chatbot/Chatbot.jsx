import React, { useState } from 'react';
//import nlp from 'compromise';
import './chatbot.css';

// Expanded dataset with more detailed questions and answers about you
const faqData = [
  {
    keywords: ['who', 'yourself', 'introduce', 'name', 'aditya', 'background'],
    answer: "I am Aditya Kartikeyan, a dynamic Full Stack Developer currently pursuing a Master's in Business Analytics at the University of Sydney. I excel at blending technology with strategic business insights and have a robust foundation in React.js, Next.js, Node.js, and Business Analytics.",
  },
  {
    keywords: ['current', 'role', 'position', 'job', 'doing', 'work', 'now'],
    answer: "I am currently a Master's student in Business Analytics at the University of Sydney. I previously worked as a Junior Software Engineer at Limendo India Pvt Ltd and as a Software Engineer at Capgemini India.",
  },
  {
    keywords: ['skills', 'skill', 'expertise', 'proficient', 'technical', 'good', 'know'],
    answer: 'I am skilled in JavaScript (React.js, Next.js, Node.js), and proficient in Java and Python. I have experience with Spring Boot, MySQL, Git, Agile methodologies, and Figma for UI/UX design. I am also proficient in data visualization and analysis using Tableau and Excel.',
  },
  {
    keywords: ['tools', 'analytical', 'data', 'analysis', 'analytics', 'tableau', 'excel'],
    answer: 'I am proficient in Tableau and Excel for data visualization and analysis, allowing me to derive actionable insights from complex datasets.',
  },
  {
    keywords: ['work', 'experience', 'job', 'background', 'companies', 'past', 'history'],
    answer: 'I have worked at Limendo India Pvt Ltd as a Junior Software Engineer, where I improved content management efficiency by 30% and enhanced data retrieval speeds by 20%. At Capgemini India, I was a Software Engineer leading the adoption of the Remix framework, and I mentored junior engineers while maintaining superior code quality.',
  },
  {
    keywords: ['education', 'study', 'academic', 'background', 'qualifications', 'degree'],
    answer: "I am currently pursuing a Master's in Business Analytics at the University of Sydney. I hold a B.Tech in Information Technology from SRM Institute of Science & Technology, Chennai, with a GPA of 3.53/4 (88.26%).",
  },
  {
    keywords: ['projects', 'project', 'portfolio', 'describe', 'example', 'past', 'worked'],
    answer: 'I have developed several projects, including a CMS using Next.js and React, an Analytical Dashboard that improved data retrieval speed by 20%, and an AI-Based Peer Mentoring Solution in Figma. Other notable projects include Sari-Sari Connect, which addressed technological disparity, and a personal React portfolio website.',
  },
  {
    keywords: ['contact', 'reach', 'email', 'linkedin', 'get in touch'],
    answer: 'You can reach me via email at adityak1999i@gmail.com or connect with me on LinkedIn at Aditya Kartikeyan.',
  },
  {
    keywords: ['hobbies', 'hobby', 'fun', 'interests', 'pastimes', 'enjoy', 'leisure'],
    answer: 'I enjoy coding, hiking, and working on personal tech projects. I also actively participated in coding competitions and community service initiatives during my academic career.',
  },
  {
    keywords: ['achievements', 'achievement', 'accomplishments', 'awards', 'highlights', 'recognition'],
    answer: 'I was selected in the MARD competition for my project Sari-Sari Connect among 1,700 students. I have also significantly contributed to project efficiency and quality improvements in my professional roles.',
  },
  {
    keywords: ['extracurricular', 'clubs', 'volunteering', 'community', 'service', 'activities'],
    answer: 'I was an active member of the Coding Club at SRM Institute and participated in various community service initiatives at Springdales School Dhaula Kuan.',
  },
];

// Function to find the best matching answer using keyword detection
const findAnswer = (input) => {
  const question = input.toLowerCase();
  let bestMatch = { answer: "Sorry, I'm not sure about that. Please try asking something else!", similarity: 0 };

  faqData.forEach((item) => {
    // Check if any of the keywords are present in the user's input
    const matches = item.keywords.some((keyword) => question.includes(keyword));
    if (matches) {
      bestMatch = { answer: item.answer, similarity: 1 }; // Match found
    }
  });

  return bestMatch.answer;
};

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello! How can I assist you today?' }]);
  const [input, setInput] = useState('');
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // State to control chatbot visibility

  const handleSend = () => {
    if (!input.trim()) return;

    // Add the user's message to the chat
    setMessages([...messages, { sender: 'user', text: input }]);

    // Get the bot's response based on the input
    const botResponse = findAnswer(input);

    // Add the bot's response to the chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
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
