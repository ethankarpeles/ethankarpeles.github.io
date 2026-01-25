import Navbar from '@components/Navbar/Navbar.tsx';
import Footer from '@components/Footer/Footer.tsx';
import styles from './About.module.css';
import headshot from '@assets/images/professional-headshot.png';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
    return (<>
        <Navbar />
        <Content />
        <Footer />
    </>);
}

function Content() {
    const PMG = <a href='https://www.pmg.com/' target='_blank'>
        PMG
    </a>;
    const GLP = <a href='https://www.pmg.com/careers/graduate-opportunities' target='_blank'>
        PMG's Graduate Leadership Program
    </a>;
    const UNT = <a href='https://www.unt.edu/' target='_blank'>
        University of North Texas
    </a>;
    const UNTMath = <a href='https://math.unt.edu/' target='_blank'>
        UNT Department of Mathematics
    </a>
    const Outstanding = <a href='https://newsletter.math.unt.edu/2024/#SecDeptAwards-1' target='_blank'>
        Outstanding Undergraduate Student
    </a>;
    const STaRS = <a href='https://math.unt.edu/research/stars.html' target='_blank'>
        Students Talk about Research Seminar
    </a>

    return (
        <article>
            <header>
                <h1 className={styles.introduction}>Hi, I'm Ethan Karpeles</h1>
                <h2 className={styles.subintroduction}><i>AI & Software Engineer I at {PMG}</i></h2>
                <Socials />
            </header>
            <section>
                <div className='imagewordcontainer'>
                    <p>Welcome! I am an AI & Software Engineer I at {PMG}. After a rewarding internship with the company, I am returning through {GLP}.</p>
                    <p>My software engineering journey is grounded in a strong quantitative background at the {UNT}, where I recently graduated with a Bachelor of Science in Mathematics. In 2024, the {UNTMath} recognized my academic and community contributions by naming me {Outstanding}. Beyond the classroom, I also had the opportunity to explore arithmetic geometry through my research in <i>Rational Points on Elliptic Curves</i>, which I presented at the {STaRS} (STaRS).</p>
                    <p>I thrive at the intersection of mathematical theory and practical software engineering. My goal is to leverage my mathematical knowledge to solve complex problems in marketing technology.</p>
                </div>
                <img src={headshot} className={styles.headshot} />
            </section>
        </article>
    );
}

function Socials() {
    return <>
        <a href='https://www.linkedin.com/in/ethankarpeles/' target='_blank'>
            <AiFillLinkedin className={styles.social} />
        </a>
        <a href='https://github.com/ethankarpeles' target='_blank'>
            <AiFillGithub className={styles.social} />
        </a>
    </>;
}