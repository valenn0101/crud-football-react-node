import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.pageFooter}>
      <p>
        &copy; ${new Date().getFullYear()} Premier League Teams by{" "}
        <b>Valentin Veron Caceres</b>
      </p>
    </footer>
  );
}
