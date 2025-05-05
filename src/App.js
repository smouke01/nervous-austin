import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Community from "./components/Community";
import Analytics from "./components/Analytics";
import Profile from "./components/Profile";

export default function App() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar
        user={user}
        onLogout={handleLogout}
        onLogin={handleLogin}
        onSearch={handleSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gallery"
          element={<Gallery searchQuery={searchQuery} />}
        />
        <Route path="/community" element={<Community />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              onUpdateUser={setUser}
              onLogout={handleLogout}
            />
          }
        />
      </Routes>
    </Router>
  );
}
