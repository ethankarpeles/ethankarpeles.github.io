import { Link } from 'react-router-dom';
import { articles } from "@routes/articles";
import Footer from '@components/Footer/Footer.tsx';

export default function Library() {
    return (<>
        <article>
            <h1>Musings</h1>
            <ul>
                {articles.map((a) => (
                    <li key={a.path}>
                        <Link to={a.path}>{a.title}</Link>
                    </li>
                ))}
            </ul>
        </article>
        <Footer />
    </>);
}