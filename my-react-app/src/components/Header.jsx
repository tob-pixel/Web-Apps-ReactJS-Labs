import React from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../context/ThemeContext.jsx';
import { useSettings } from '../context/SettingsContext.jsx';
import { Button, Badge } from './ui';

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
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text)',
      padding: 'var(--space-4)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div>
        <h1 style={{ color: 'var(--color-text)', margin: '0 0 var(--space-1) 0' }}>{text.title}</h1>
        <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>{text.subtitle}</p>
        <nav style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-3)' }}>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>{text.home}</NavLink>
          <NavLink to="/books" style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>{text.books}</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-text)', textDecoration: 'none', fontWeight: isActive ? 'bold' : 'normal' })}>{text.about}</NavLink>
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <Button 
          variant="secondary"
          onClick={toggleLanguage}
        >
          {text.langToggle}
        </Button>

        <Button 
          variant="secondary"
          onClick={toggleTheme}
        >
          {theme === 'light' ? text.themeDark : text.themeLight}
        </Button>
        {readCount !== undefined && (
          <Badge variant="primary" style={{ padding: 'var(--space-2) var(--space-3)' }}>
            {text.booksRead}{readCount}
          </Badge>
        )}
      </div>
    </header>
  );
};

export default Header;