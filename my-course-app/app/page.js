"use client";
import { useEffect, useRef } from "react";

import Nav from "./Nav";
import Link from "next/link";
import styles from "./blocks.module.css";
import pageStyles from './page.module.css';

export default function Home() {
  const containerRef = useRef(null);
  useEffect(() => {
    function centerBlock1() {
      if (window.innerWidth <= 450 && containerRef.current) {
        const block1 = containerRef.current.querySelector('[data-block="1"]');
        if (block1) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const blockRect = block1.getBoundingClientRect();
          const scrollLeft =
            block1.offsetLeft - containerRect.width / 2 + blockRect.width / 2;
          containerRef.current.scrollTo({ left: scrollLeft, behavior: "auto" });
        }
      }
    }
    centerBlock1();
    window.addEventListener("resize", centerBlock1);
    return () => window.removeEventListener("resize", centerBlock1);
  }, []);
  return (
    <>
      <Nav />
      <main style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
  <h1 style={{ fontSize: 72, fontWeight: 700, marginBottom: 12, color: '#fff', textAlign: 'center', marginTop: '5vh' }}>Learn New Skills Online</h1>
  <p style={{ fontSize: 40, color: '#ccc', marginBottom: 24, textAlign: 'center', marginTop: '5vh' }}>
          Explore a variety of courses and expand your knowledge
        </p>
        <Link href="/courses" style={{
          background: '#62ff00',
          color: '#111',
          fontWeight: 600,
          fontSize: 18,
          border: 'none',
          borderRadius: 8,
          padding: '12px 32px',
          cursor: 'pointer',
          position: 'absolute',
          left: '7.5%',
          bottom: '50%',
          zIndex: 2,
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          Browse Courses
        </Link>
        <h2 style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#fff',
          textAlign: 'left',
          position: 'absolute',
          left: '7.5%',
          bottom: '40%',
          margin: 0,
          zIndex: 2
        }}>Featured Courses</h2>
        <div className={styles["blocks-container"]} ref={containerRef}>
          <div className={styles["block"] + ' ' + styles["page-block"]}></div>
          <div className={styles["block"] + ' ' + styles["feature-block"]} data-block="1"></div>
          <div className={styles["block"] + ' ' + styles["feature-block"]} data-block="2"></div>
          <div className={styles["block"] + ' ' + styles["feature-block"]} data-block="3"></div>
          <div className={styles["block"] + ' ' + styles["page-block"]}></div>
        </div>
      </main>
    </>
  );
}
