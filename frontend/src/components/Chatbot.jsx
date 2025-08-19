import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.reply }]);
    setInput("");
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div>
        {messages.map((m, i) => (
          <div key={i}>
            <b>You:</b> {m.user}
            <br />
            <b>Bot:</b> {m.bot}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage} className="bg-purple-700 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}