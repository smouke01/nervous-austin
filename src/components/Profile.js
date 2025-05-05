// src/components/Profile.js
import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ user, onUpdateUser, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || "");

  const handleSave = () => {
    const updatedUser = { ...user, name: newName };
    localStorage.setItem("user", JSON.stringify(updatedUser)); // сохраняем
    onUpdateUser(updatedUser); // сообщаем App
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Пожалуйста, войдите в аккаунт.</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Личный кабинет</h2>
      <div className="profile-details">
        <p>
          <strong>Имя:</strong>{" "}
          {isEditing ? (
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          ) : (
            user.name
          )}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <button className="edit-btn" onClick={handleSave}>
            Сохранить
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Редактировать профиль
          </button>
        )}
        <button className="logout-btn" onClick={onLogout}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Profile;
