import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome Anish !!</h1>
      <h3 className={styles.code}>
        <Link href="/hello">Hello See Phones....</Link>
        <br />
        <Link href="/dashboard">Go To Dashboard....</Link>
        <br />
        <Link href="/setting">Go To Setting....</Link>
      </h3>
    </main>
  );
}
