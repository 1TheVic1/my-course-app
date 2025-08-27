import Nav from '../Nav';
import Link from 'next/link';
import styles from './courses.module.css';

export default function Courses() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Courses Page</h1>
        {/* Add your HTML and CSS here */}
        <div style={{ marginTop: 24 }}>
          <Link href="/">Back to Home</Link>
        </div>
      </main>
    </>
  );
}
