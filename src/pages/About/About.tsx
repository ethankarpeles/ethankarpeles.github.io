import Navbar from "@components/Navbar/Navbar.tsx";
import Footer from "@components/Footer/Footer.tsx";
import ExternalLink from "@components/ExternalLink/ExternalLink.tsx";
import styles from "./About.module.css";
import headshot from "@assets/images/professional-headshot.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
}

function Content() {
  const PMG = <ExternalLink href="https://www.pmg.com/">PMG</ExternalLink>;
  const UNT = (
    <ExternalLink href="https://www.unt.edu/">
      University of North Texas
    </ExternalLink>
  );
  const UNTMath = (
    <ExternalLink href="https://math.unt.edu/">
      UNT Department of Mathematics
    </ExternalLink>
  );
  const Outstanding = (
    <ExternalLink href="https://newsletter.math.unt.edu/2024/#SecDeptAwards-1">
      Outstanding Undergraduate Student
    </ExternalLink>
  );
  const STaRS = (
    <ExternalLink href="https://math.unt.edu/research/stars.html">
      Students Talk about Research Seminar
    </ExternalLink>
  );

  return (
    <article>
      <header>
        <h1 className={styles.introduction}>Hi, I'm Ethan Karpeles</h1>
        <h2 className={styles.subintroduction}>
          <i>AI & Software Engineer I at {PMG}</i>
        </h2>
        <Socials />
      </header>
      <section className={styles.about}>
        <div className={styles.description}>
          <p>Welcome! I am an AI & Software Engineer I at {PMG}.</p>
          <p>
            My software engineering journey is grounded in a strong quantitative
            background at the {UNT}, where I recently graduated with a Bachelor
            of Science in Mathematics. In 2024, the {UNTMath} recognized my
            academic and community contributions by naming me {Outstanding}.
            Beyond the classroom, I also had the opportunity to explore
            arithmetic geometry through my research in{" "}
            <i>Rational Points on Elliptic Curves</i>, which I presented at the{" "}
            {STaRS} (STaRS).
          </p>
          <p>
            I thrive at the intersection of mathematical theory and practical
            software engineering. My goal is to leverage my mathematical
            knowledge to solve complex problems in marketing technology.
          </p>
        </div>
        <img src={headshot} className={styles.headshot} />
      </section>
      <Footer />
    </article>
  );
}

function Socials() {
  return (
    <>
      <ExternalLink href="https://www.linkedin.com/in/ethankarpeles/">
        <AiFillLinkedin className={styles.social} />
      </ExternalLink>
      <ExternalLink href="https://github.com/ethankarpeles">
        <AiFillGithub className={styles.social} />
      </ExternalLink>
    </>
  );
}
