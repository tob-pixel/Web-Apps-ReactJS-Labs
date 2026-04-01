import React from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../context/ThemeContext.jsx';
import { useSettings } from '../context/SettingsContext.jsx';

const Header = ({ readCount }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useSettings();

  const text = {
    title: language === 'uk' ? 'BookShelf' : 'BookShelf',
    subtitle: language === 'uk' ? 'Твоя персональна бібліотека' : 'Your Personal Virtual Library',
    home: language === 'uk' ? 'Головна' : 'Home',
    books: language === 'uk' ? 'Книги' : 'Books',
    about: language === 'uk' ? 'Про нас' : 'About',
    booksRead: language === 'uk' ? 'Прочитано книг: ' : 'Books Read: ',
    themeLight: language === 'uk' ? '☀️ Світла тема' : '☀️ Light Mode',
    themeDark: language === 'uk' ? '🌙 Темна тема' : '🌙 Dark Mode',
    langToggle: language === 'uk' ? '🇺🇦 УКР' : '🇬🇧 EN'
  };

  return (
    <header style={{
      backgroundColor: 'var(--header-bg, var(--primary-color, #333))', // fallback if var missing
      color: 'var(--header-text, white)',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)' // subtle border for theme integration
    }}>
      <div>
        <h1 style={{ color: 'var(--header-text, white)' }}>{text.title}</h1>
        <p style={{ color: 'var(--header-text, white)' }}>{text.subtitle}</p>
        <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'var(--secondary-color, #ffeb3b)' : 'var(--header-text, white)', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>{text.home}</NavLink>
          <NavLink to="/books" style={({ isActive }) => ({ color: isActive ? 'var(--secondary-color, #ffeb3b)' : 'var(--header-text, white)', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>{text.books}</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--secondary-color, #ffeb3b)' : 'var(--header-text, white)', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>{text.about}</NavLink>
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          onClick={toggleLanguage}
          style={{
            padding: '8px 12px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: 'var(--btn-bg, #fff)',
            color: 'var(--btn-text, #333)',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
        >
          {text.langToggle}
        </button>

        <button 
          onClick={toggleTheme}
          style={{
            padding: '8px 12px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: 'var(--btn-bg, #fff)',
            color: 'var(--btn-text, #333)',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s'
          }}
        >
          {theme === 'light' ? text.themeDark : text.themeLight}
        </button>
        {readCount !== undefined && (
          <div style={{ backgroundColor: 'var(--badge-bg, white)', color: 'var(--badge-text, var(--primary-color))', padding: '5px 10px', borderRadius: '15px', fontWeight: 'bold' }}>
            {text.booksRead}{readCount}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;