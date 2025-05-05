import React, { useEffect, useState } from "react";
import "./gallery.css";

// Статичные изображения
const staticImages = [
  {
    src: "https://picsum.photos/300/200?random=1",
    author: "Анна Смирнова",
    date: "01.04.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=2",
    author: "Игорь Петров",
    date: "15.03.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=3",
    author: "Кира Лебедева",
    date: "22.02.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=4",
    author: "Олег Белов",
    date: "10.02.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=5",
    author: "Марина Юдина",
    date: "01.03.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=6",
    author: "Евгений Мартынов",
    date: "18.04.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=7",
    author: "Светлана Гордеева",
    date: "27.03.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=8",
    author: "Даниил Романов",
    date: "30.03.2025",
  },
  // Новые фотографии
  {
    src: "https://picsum.photos/300/200?random=9",
    author: "Алексей Иванов",
    date: "05.05.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=10",
    author: "Екатерина Сидорова",
    date: "07.04.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=11",
    author: "Владимир Орлов",
    date: "10.05.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=12",
    author: "Ирина Козлова",
    date: "20.05.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=13",
    author: "Никита Павлов",
    date: "15.06.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=14",
    author: "Мария Федорова",
    date: "01.06.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=15",
    author: "Тимур Шарипов",
    date: "13.07.2025",
  },
  {
    src: "https://picsum.photos/300/200?random=16",
    author: "Елизавета Григорьева",
    date: "25.07.2025",
  },
];

export default function Gallery({ searchQuery }) {
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    // Загрузка работ из localStorage
    const stored = localStorage.getItem("works");
    if (stored) {
      const parsed = JSON.parse(stored);
      const formatted = parsed.map((item) => ({
        src: item.image,
        author: item.name || "Аноним",
        date: new Date(item.id).toLocaleDateString("ru-RU"),
      }));
      setUserImages(formatted);
    }
  }, []);

  // Объединение статичных и пользовательских изображений
  const allImages = [...userImages, ...staticImages];

  // Фильтрация изображений по запросу
  const filteredImages = allImages.filter((img) =>
    img.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <h2>Галерея работ</h2>
      <div className="image-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img.src} alt={`Artwork ${index}`} />
            <div className="caption">
              <strong>{img.author}</strong>
              <span>{img.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
