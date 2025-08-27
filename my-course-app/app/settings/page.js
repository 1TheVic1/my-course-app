import Nav from '../Nav';
import Link from 'next/link';
import styles from './settings.module.css';

export default function Settings() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Settings Page</h1>
        {/* Add your HTML and CSS here */}
      </main>
    </>
  );
}
