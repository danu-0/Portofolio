import { useState } from "react";
import MessageCard from "./components/Message";
import img from './assets/2.jpg';
import ollama from 'ollama';

const App = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello Master! How can I eat you today? 😊" }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    try {
      const response = await ollama.chat({
        model: "deepseek-r1:1.5b",
        messages: [...messages, newMessage],
        stream: true,
      });

      let assistantMessage = { role: "assistant", content: "" };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      for await (const chunk of response) {
        assistantMessage.content += chunk.message.content;
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { ...assistantMessage }
        ]);
      }
    } catch (error) {
      console.error("Error fetching response from Ollama:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." }
      ]);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="w-full h-screen flex flex-col shadow-lg bg-darkC">
        <div className="flex-grow overflow-y-auto overflow-x-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <MessageCard key={index} role={msg.role} message={msg.content} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center p-4 bg-darkC rounded-b-lg">
          <textarea
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-3 border rounded-xl border-pink focus:ring-2 focus:ring-darkC resize-none bg-darkC text-lightC"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className={`ml-2 px-4 py-3 rounded-e-3xl text-lightC font-semibold transition-all ${
              input.trim() ? "bg-red-300 hover:bg-pink" : "bg-grayC cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;