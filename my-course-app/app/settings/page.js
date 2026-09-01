'use client';
import Nav from '../Nav';
import { useTheme } from '../contexts/ThemeContext';
import styles from './settings.module.css';

export default function Settings() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Nav />
      <div className={styles.settingsContainer}>
        <h1>Settings</h1>
        
        <div className={styles.settingItem}>
          <label className={styles.settingLabel}>
            Mode
          </label>
          <div className={styles.toggleContainer}>
            <span className={styles.themeLabel}>Light</span>
            <button 
              className={`${styles.toggle} ${isDarkMode ? styles.toggleDark : styles.toggleLight}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div className={styles.toggleSlider}></div>
            </button>
            <span className={styles.themeLabel}>Dark</span>
          </div>
        </div>
      </div>
    </>
  );
}