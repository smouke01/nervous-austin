import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // можешь создать для стилизации

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" className="home-link">
        ⬅️ Вернуться на главную
      </Link>
    </section>
  );
}
