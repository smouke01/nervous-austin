// components/Analytics.js
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // важно для Chart.js версии 3+

export default function Analytics() {
  const data = {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    datasets: [
      {
        label: "Новые пользователи",
        data: [50, 75, 60, 90, 100, 80],
        backgroundColor: "rgba(100, 150, 255, 0.7)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Статистика роста сообщества" },
    },
  };

  return (
    <section className="analytics-section">
      <h2>Аналитика использования</h2>
      <Bar data={data} options={options} />
    </section>
  );
}
