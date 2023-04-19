import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          width={100}
          height={100}
          src="/img/logo2.png"
          alt="Premier League Logo"
        />
      </div>
      <div className={styles.title}>
        <Link href="/" className={styles.link}>
           Premier League Teams
        </Link>
      </div>
      <div className={styles.btnNewTeam}>
        <button className="btn btn-info">New Team</button>
      </div>
    </header>
  );
}
