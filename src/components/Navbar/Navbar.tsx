import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '@assets/images/logo.svg';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navlogolink}>
                <img src={logo} className={styles.navlogo} />
            </Link>
            <div className={styles.navlinks}>
                <Link to="/" className={styles.navlink}>About</Link>
                <Link to="/musings" className={styles.navlink}>Musings</Link>
                <Link to="/resume" className={styles.navlink}>Resume</Link>
            </div>
        </nav>
    );
}