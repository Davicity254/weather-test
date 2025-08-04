import React, { useState } from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>🌦️ Weather Dashboard</h1>
        <button className="toggle-button" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode 🌅' : '🌙 Dark Mode 🌑'}
        </button>
      </header>
      <Weather />
      <footer className="footer">
        <p>Davi City • Built with React 🌍</p>
        <p>Not real-time weather data</p>
      </footer>
    </div>
  );
}

export default App;



