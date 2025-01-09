import React, { useState } from 'react';
import './Chat.css';  // Make sure you have this CSS file for styling

const Chat = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;

        setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
        setInput('');

        setTimeout(() => {
            const botResponse = getBotResponse(input);
            setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    const getBotResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();
    
        if (lowerInput.includes('hello')) {
            return 'Hello! How can I assist you today?';
        } else if (lowerInput.includes('how are you')) {
            return 'I am just a bot, but thanks for asking!';
        } else if (lowerInput.includes('job openings')) {
            return 'Currently, we have openings in IT feild. Would you like to know more about any specific category?';
        } else if (lowerInput.includes('resume tips')) {
            return 'Make sure your resume is concise, highlights your key achievements, and is tailored to the job role you’re applying for.';
        } else if (lowerInput.includes('interview tips')) {
            return 'Be confident, research the company, and prepare answers for common interview questions like your strengths, weaknesses, and past experiences.';
        } else if (lowerInput.includes('contact support')) {
            return 'You can contact our support team at support@jobhelpline.com or call us at +123-456-7890.';
        } else if (lowerInput.includes('how to apply for a job')) {
            return 'You can visit our job portal at www.jobhelpline.com to search and apply for jobs. Let me know if you need guidance!';
        } else if (lowerInput.includes('thank you')) {
            return 'You’re welcome! Feel free to ask me anything else.';
        } else {
            return 'I am not sure how to respond to that. Can you try rephrasing your question?';
        }
    };
    

    const handleClose = () => {
        setMessages([]); // Clear chat history
        onClose(); // Call the onClose function passed from the parent
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h4>Chatbot</h4>
                <button onClick={handleClose} className="close-button">X</button>
            </div>
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
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
    );
};

export default Chat;
