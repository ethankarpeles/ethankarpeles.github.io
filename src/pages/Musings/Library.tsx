import { Link } from "react-router-dom";
import { articles } from "@routes/articles";
import styles from "./Library.module.css";
import Footer from "@components/Footer/Footer.tsx";

export default function Library() {
  return (
    <>
      <article className={styles.library}>
        <h1>Musings</h1>
        <div className={styles.cards}>
          {articles.map((article) => (
            <Link key={article.path} to={article.path} className={styles.card}>
              <div className={styles.title}>{article.title}</div>
              <div className={styles.description}>{article.description}</div>
            </Link>
          ))}
        </div>
      </article>
      <Footer />
    </>
  );
}
