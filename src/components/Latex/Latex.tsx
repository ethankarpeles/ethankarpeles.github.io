import { useEffect, useRef } from "react";
import katex from "katex";
import styles from './Latex.module.css';

type LatexProps = {
    math: string;
    display?: boolean;
    center?: boolean;
};

export default function Latex({ math, display = false, center = false }: LatexProps) {
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        katex.render(math, ref.current, {
            displayMode: display,
            throwOnError: false,
        });
    }, [math, display]);

    return center ? (
        <div style={{ textAlign: "center" }} className={styles.latexdiv}>
            <span ref={ref} />
        </div>
    ) : (
        <span ref={ref} />
    );
}