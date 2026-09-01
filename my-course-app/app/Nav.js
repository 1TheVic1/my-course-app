"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-left"]}>
        <div className={styles["placeholder-square"]}></div>
        <span className={styles["nav-title"]}>Veloriom Academy</span>
      </div>
      <button
        className={styles.hamburger}
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {open && (
        <div
          className={styles["nav-mobile-overlay"]}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={
          styles["nav-right"] +
          " " +
          (open ? styles["nav-mobile-open"] : "")
        }
      >
        <Link
          className={
            styles["nav-link"] +
            (pathname === "/" ? " " + styles.active : "")
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            styles["nav-link"] +
            (pathname.startsWith("/courses") ? " " + styles.active : "")
          }
          href="/courses"
        >
          Courses
        </Link>
        <Link
          className={
            styles["nav-link"] +
            (pathname.startsWith("/settings") ? " " + styles.active : "")
          }
          href="/settings"
        >
          Settings
        </Link>
        <Link
          className={
            styles["nav-link"] +
            (pathname.startsWith("/login") ? " " + styles.active : "")
          }
          href="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
