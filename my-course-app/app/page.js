"use client";
import { useEffect, useRef } from "react";

import Nav from "./Nav";
import Link from "next/link";
import styles from "./featureblocks.module.css";
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
      <main className={pageStyles.homeMain}>
        <h1 className={pageStyles.heroTitle}>Learn New Skills Online</h1>
        <p className={pageStyles.heroSubtitle}>
          Explore a variety of courses and expand your knowledge
        </p>
        <Link href="/courses" className={pageStyles.browseCourses}>
          Browse All Courses
        </Link>
        <h2 className={pageStyles.featuredTitle}>Featured Courses</h2>
        <div className={styles["blocks-container"]} ref={containerRef}>
  <div className={styles["block"] + ' ' + styles["page-block"]}></div>
  
  <div className={styles["block"] + ' ' + styles["feature-block"]} data-block="1">
    <div className={styles["header-row"]}>
      <div className={styles["difficulty-indicator"]}>Beginner</div>
      <div className={styles["course-type"]}>Web Development</div>
    </div>
    <h3 className={styles["course-title"]}>Introduction to HTML</h3>
    <p className={styles["course-description"]}>This is a course to introduce you to the fundamentals of HTML</p>
    <div className={styles["price-container"]}>
      <span className={styles["current-price"]}>R 129.99</span>
    </div>
  </div>
  
  <div className={styles["block"] + ' ' + styles["feature-block"]} data-block="2">
    <div className={styles["header-row"]}>
      <div className={styles["difficulty-indicator"]}>Intermediate</div>
      <div className={styles["course-type"]}>Web Development</div>
    </div>
    <h3 className={styles["course-title"]}>Advanced CSS Techniques</h3>
    <p className={styles["course-description"]}>Master advanced CSS concepts including flexbox, grid, and animations</p>
    <div className={styles["price-container"]}>
      <span className={styles["old-price"]}>R 150.00</span>
      <span className={styles["current-price"]}>R 129.99</span>
    </div>
  </div>
  
  <div className={styles["block"] + ' ' + styles["feature-block"]} data-block="3">
    <div className={styles["header-row"]}>
      <div className={styles["difficulty-indicator"]}>Expert</div>
      <div className={styles["course-type"]}>Backend Development</div>
    </div>
    <h3 className={styles["course-title"]}>Node.js Architecture</h3>
    <p className={styles["course-description"]}>Build scalable backend applications with advanced Node.js patterns</p>
    <div className={styles["price-container"]}>
      <span className={styles["current-price"]}>R 129.99</span>
    </div>
  </div>
</div>
      </main>
    </>
  );
}