// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  <img src={LogoImage} alt="Логотип" className="logo-image" />;
  <img
    src={LogoImage}
    alt="Логотип"
    style={{ width: "150px", height: "auto" }}
  />;

  return (
    <div className="home-hero">
      <div className="overlay" />
      <div className="home-content">
        <img src={LogoImage} alt="Логотип" className="home-logo" />
        <h1>Добро пожаловать в ArtStyle!</h1>
        <p className="subtitle">Социальная сеть для творческих людей</p>
        <button className="cta-button" onClick={() => navigate("/community")}>
          Присоединиться к сообществу
        </button>

        <div className="features">
          <div className="feature-card">🎨 Галерея работ</div>
          <div className="feature-card">🖌️ Загружай свои картины</div>
          <div className="feature-card">💬 Общайся с другими художниками</div>
        </div>
      </div>
    </div>
  );
}
