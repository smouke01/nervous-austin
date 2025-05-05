// Community.js
import React, { useState, useEffect } from "react";
import "./Community.css";

export default function Community() {
  // Работы
  const [works, setWorks] = useState(() => {
    const storedWorks = localStorage.getItem("works");
    return storedWorks ? JSON.parse(storedWorks) : [];
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [file, setFile] = useState(null);

  const handleAddWork = () => {
    if (file && authorName) {
      const newWork = {
        id: Date.now(),
        name: authorName,
        image: URL.createObjectURL(file),
      };
      const updatedWorks = [...works, newWork];
      setWorks(updatedWorks);
      localStorage.setItem("works", JSON.stringify(updatedWorks));
      setAuthorName("");
      setFile(null);
      setModalOpen(false);
    }
  };

  // Чат
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chatMessages");
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    // Если имя не введено, использовать "Аноним"
    const sender = username.trim() ? username : "Аноним";
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        text: input,
        user: sender,
        time: new Date().toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="community-container">
      <h2>Наше сообщество</h2>
      <p>
        Здесь вы можете загрузить свои работы и общаться с другими участниками.
      </p>

      <button onClick={() => setModalOpen(true)}>➕ Добавить работу</button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Новая работа</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Имя автора"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <button onClick={handleAddWork}>Сохранить</button>
            <button className="close-btn" onClick={() => setModalOpen(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}

      <ul className="works-list">
        {works.map((work) => (
          <li key={work.id} className="fade-in">
            <img src={work.image} alt="Artwork" />
            <p>{work.name}</p>
          </li>
        ))}
      </ul>

      <hr />

      <h3>Чат сообщества</h3>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <strong>{msg.user}</strong> [{msg.time}]: {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Ваше имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-username"
      />
      <input
        type="text"
        placeholder="Введите сообщение"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-message"
      />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
}
