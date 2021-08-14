import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; RDMS 2021</p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </footer>
  );
}
