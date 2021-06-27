import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
// import InfoBox from './InfoBox'
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "SF Bay Film Calendar | Bay Area Repertory Film Calendar",
  description: "Calendar for repertory films in the Bay Area.",
  keywords: "film, bay area, repertory theater, events",
};
