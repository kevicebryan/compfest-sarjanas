"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Ask from "@/components/Ask";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by&nbsp;
          <code className={styles.code}>typing something...</code>
        </p>
        <h1>The Sarjanas</h1>
      </div>

      <div className={styles.center}>
        <Ask />
      </div>
    </main>
  );
}
