import Latex from '@components/Latex/Latex.tsx';
import Footer from '@components/Footer/Footer.tsx';
import stars from '@assets/images/stars.png';
import styles from './RationalPointsOnEllipticCurves.module.css';
import pythagoreanimage from '@assets/images/pythagorean.svg';
import bijection from '@assets/images/bijection.png';
import parameterization from '@assets/images/parameterization-of-unit-circle.png';
import pierreFermat from '@assets/images/pierre-de-fermat.jpg';
import negatives from '@assets/images/negatives.png';
import fermatCurves from '@assets/images/fermat-curves.png';

export default function RationalPointsOnEllipticCurves() {
    const PythagoreanTheorem = <a href='https://en.wikipedia.org/wiki/Pythagorean_theorem' target='_blank'>Pythagorean Theorem</a>
    const PythagoreanTriple = <a href='https://en.wikipedia.org/wiki/Pythagorean_triple' target='_blank'>Pythagorean Triple</a>;
    const PrimitivePythagoreanTriple = <a href='https://en.wikipedia.org/wiki/Pythagorean_triple' target='_blank'>primitive Pythagorean Triple</a>;

    return <>
        <article>
            <h1>Rational Points on Elliptic Curves</h1>
            <section>
                <div className='imagewordcontainer'>
                    <h2>Introduction</h2>
                    <p>The information on this page has been extracted from my <a href='https://math.unt.edu/research/stars.html' target='_blank'>Students Talk about Research Seminar</a> (STaRS) presentation given on November 1, 2024. The goal of the presentation was to introduce undergraduate students with a precalculus level mathematical background to Fermat's Last Theorem and elliptic curves.</p>
                </div>
                <img src={stars} className={styles.stars} />

                <h2>Triangles</h2>
                <p>Famously, the {PythagoreanTheorem} states that if <Latex math='a,b,c' /> are the side lengths of a right triangle, with <Latex math='c' /> being the hypotenuse, then these numbers must satisfy the following equation:</p>
                <Latex math='a^2 + b^2 = c^2' center />
                <p>In the image below, we note that the area of the purple square is equal to the sum of the areas of the red and blue squares.</p>
                <div className='imagecaptioncontainer'>
                    <img src={pythagoreanimage} />
                    By <a href="https://en.wikipedia.org/wiki/User:Wapcaplet" title="en:User:Wapcaplet">en:User:Wapcaplet</a> - Transwikied from en:. Originally created by <a href="https://en.wikipedia.org/wiki/User:Michael_Hardy" title="en:User:Michael Hardy">en:User:Michael Hardy</a>, then scaled, with colour and labels being added by <a href="https://en.wikipedia.org/wiki/User:Wapcaplet" title="en:User:Wapcaplet">en:User:Wapcaplet</a>, transformed in svg format by <a href="https://fr.wikipedia.org/wiki/Utilisateur:Steff" title="fr:Utilisateur:Steff">fr:Utilisateur:Steff</a>, changed colors and font by <a href="https://de.wikipedia.org/wiki/Leo2004" title="de:Leo2004">de:Leo2004</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=640875">Link</a>
                </div>
                <p>Whole number solutions to the {PythagoreanTheorem} have been known for millennia. In fact, there is a <a href='https://en.wikipedia.org/wiki/Plimpton_322' target='_blank'>Babylonian clay tablet</a> with a list of them believed to have been written around 1800 BC. Any set of three positive integers which are the side lengths of a right triangle is called a {PythagoreanTriple}, and if these three positive integers have no common factors, we call it a {PrimitivePythagoreanTriple}.</p>

                <p>Some examples of primitive Pythagorean Triples include:</p>
                <Latex math='\{3, 4, 5\}, \ \{5, 12, 13\}, \text{ and } \{8, 15, 17\}' center />

                <p>A non-example of a {PrimitivePythagoreanTriple} is <Latex math='\{6, 8, 10\}' />. Notice that these three numbers have a common factor of <Latex math='2' />, so it is not primitive. However, it is still a {PythagoreanTriple} since you could construct a right triangle with these side lengths.</p>
            </section>

            <section>
                <h2>Counting</h2>

                <p>After seeing a few of these, it is natural to ask how many primitive Pythagorean Triples exist. Indeed, there is no obvious reason why there should even be infinitely many of them. To answer this question, we will first need to define what mathematicians mean when they say two sets have the same size (or <a href='https://en.wikipedia.org/wiki/Cardinality' target='_blank'>cardinality</a>).</p>

                <div className='imagecaptioncontainer'>
                    <img src={bijection} style={{ width: "100%" }} />
                    By <a href="https://en.wikipedia.org/wiki/User:Schapel" title="en:User:Schapel">Schapel</a> - <span lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=1059694">Link</a>
                </div>

                <p>In mathematics, we say two sets <em>have the same cardinality</em> if we can pair them up one by one. For example, if everyone in a stadium is sitting in a seat and all seats have a person sitting in them, then we know there are the same number of seats as people. The technical term for this is a <a href='https://en.wikipedia.org/wiki/Bijection' target='_blank'>bijection</a> of sets.</p>
            </section>

            <section>
                <h2>Rational Points on the Unit Circle</h2>

                <p>The unit circle is defined to be the circle of radius 1 centered at the origin with the equation <Latex math='x^2 + y^2 = 1' />.</p>

                <iframe src="https://www.desmos.com/calculator/wch7cxrqu4?embed" />

                <p>We call a point <Latex math='(x, y)' /> in 2D space a <em>rational point</em> if both coordinates <Latex math='x \text{ and } y' /> of the point are <a href='https://en.wikipedia.org/wiki/Rational_number' target='_blank'>rational numbers</a>. That is, both <Latex math='x \text{ and } y' /> can be expressed as a ratio of integers with non-zero denominator. For example, the point <Latex math='(-\frac 1 3, \frac 4 5)' /> is rational, but the point <Latex math='(\pi, \sqrt 2)' /> isn't.</p>
            </section>

            <section>
                <h2>Counting primitive Pythagorean Triples</h2>
                <p>If you think that <Latex math='a^2 + b^2 = c^2' /> and <Latex math='x^2 + y^2 = 1' /> have a similar structure, then you would be right, and this is not by coincidence!</p>
                <p>Let's use this similar structure to prove that the set of primitive Pythagorean Triples and the set of rational points on the unit circle have the same cardinality by pairing them up.</p>
                <p>Let <Latex math='\{a, b, c\}' /> be a primitive Pythagorean Triple. We would like to pair it up with some unique rational point on the unit circle.</p>
                <p>Let <Latex math='x=\frac a c' /> and <Latex math='y=\frac b c' />. Then, we can do the following:</p>
                <Latex math='\begin{align*}
                    a^2 + b^2 = c^2
                    &\implies \frac{a^2}{c^2} + \frac{b^2}{c^2} = 1 \\
                    &\implies \Big( \frac{a}{c} \Big)^2 + \Big( \frac{b}{c} \Big)^2 = 1 \\
                    &\implies x^2 + y^2 = 1
                \end{align*}' display center />
                <p>Thus, we know the point <Latex math='(x, y)' /> is actually on the unit circle. The other direction of this would be all of these steps in reverse.</p>
                <iframe src="https://www.desmos.com/calculator/eq25prgp6t?embed" />
                <p style={{ textAlign: "center" }}>Can you find the (3, 4, 5) triangle?</p>
            </section>
            <section>
                <h2>Counting Rational Points on the Unit Circle</h2>
                <p>On the unit circle, consider all the lines that look like the black one in the graph below.</p>
                <iframe src="https://www.desmos.com/calculator/ygsxmkhkyg?embed" />
                <p>Recall that the equation for a line is <Latex math='y=mx+b' /> where <Latex math='m' /> is the slope and <Latex math='b' /> is the y-intercept. In this case, we'll call our y-intercept <Latex math='t' /> so that <Latex math='b=t' /> here. Notice that if we go from the green point on the graph to our y-intercept, we travel 1 unit to the right and <Latex math='b' /> units up or down. Thus:</p>
                <Latex math='m = \text{Slope} = \frac{\text{Rise}}{\text{Run}} = \frac{t}{1} = t' center />
                <p>This means the equation for our black line is <Latex math='y=tx+t=t(1+x)' />.</p>
                <p>If we divide both sides of this equation by <Latex math='(1+x)' />, we will get:</p>
                <Latex math='t = \frac{y}{1+x}' center />
                <p>Thus, every rational point corresponds to a point on our circle. Also, while we won't do this here, some algebra will show that:</p>
                <Latex math='x=\frac{1 - t^2}{1 + t^2} \text{ and } y=\frac{2t}{1 + t^2}' center />
                <p>This allows us to get a unique rational point on the unit circle from any rational number <Latex math='t' /> and vice versa.</p>

                <div className='imagecaptioncontainer'>
                    <img src={parameterization} style={{ width: "100%" }} />
                </div>

                <p>We have shown that the set of all rational numbers, the set of rational points on the unit circle, and the set of primitive Pythagorean Triples all have the same size (up to finitely many exceptional points and symmetries which preserve cardinality). This is one example of why talking about rational points on curves is so powerful.</p>
            </section>
            <section>
                <h2>Fermat's Last Theorem</h2>
                <p>Fermat's Last Theorem says that there are no three positive integers <Latex math='\{a, b, c\}' /> that satisfy the equation <Latex math='a^n + b^n = c^n' /> whenever <Latex math='n>2' /> is an integer. While Fermat's Last Theorem was first stated in the 1630s by Pierre de Fermat, it wasn't proven until the 1990s by Andrew Wiles using deep results related to elliptic curves.</p>

                <div className='imagecaptioncontainer'>
                    <img src={pierreFermat} style={{ width: "100%" }} />
                    Photo of Pierre de Fermat (Unknown author)
                </div>

                <p>If we apply the same process that we used before of dividing out by <Latex math='c^2' /> but with <Latex math='c^n' /> in this case, we will get Fermat curves which have the equation <Latex math='x^n + y^n = 1' />.</p>
                <div className='imagecaptioncontainer'>
                    <img src={fermatCurves} style={{ width: "100%" }} />
                    Examples of Fermat curves
                </div>

                <p>Using Fermat's Last Theorem, one can show that these curves have only the trivial rational points. That is, those which are labeled on the graphs above.</p>
            </section>
            <section>
                <h2>Elliptic Curves</h2>
                <p>Let <Latex math='x, y' /> be variables and let <Latex math='a, b' /> be rational numbers. An <em>elliptic curve</em> is a smooth curve in 2D space that is defined by an equation of the form:</p>
                <Latex math='y^2 = x^3 + ax + b' center />
                <h3>Groups</h3>
                <p>A <em>group</em> is a set of things which has an operation on them with the following properties (let <Latex math='a, b, c' /> be in our group):</p>
                <ul style={{ width: "100%" }}>
                    <li>Associativity</li>
                    <Latex math='a + (b + c) = (a + b) + c' center />
                    <li>Identity</li>
                    <Latex math='a + 0 = a = 0 + a' center />
                    <li>Inverses</li>
                    <Latex math='a + (-a) = 0 = (-a) + a' center />
                    <li>Closure</li>
                    <Latex math='a + b \text{ is still in our group.}' center />
                </ul>
                <p>For example, the integers are a group under the operation of addition.</p>
                <h3>Group Operation of Elliptic Curves</h3>
                <p>The rational points on an elliptic curve are a group under the following operation:</p>
                <ol>
                    <li>Pick two points <Latex math='P \text{ and } Q' /> to add. These are the two blue points on the graph below.</li>
                    <li>Draw a line through <Latex math='P \text{ and } Q' />.</li>
                    <li>Find the third point of intersection of this line with the curve. Call it <Latex math='R' />. This is the purple circle on the graph below.</li>
                    <li>Flip the point <Latex math='R' /> across the x-axis. This new point is <Latex math='P+Q' />. This final point is represented on the graph by a purple X.</li>
                </ol>
                <iframe src="https://www.desmos.com/calculator/pkafnv67h2?embed" />
                <p>In this group, we call our identity <Latex math='\mathcal{O}' />, and we define it to be above every point on the curve. Our inverses are our points flipped across the x-axis.</p>
                <div className='imagecaptioncontainer'>
                    <img src={negatives} style={{ width: "100%" }} />
                </div>
            </section>
            <section>
                <h2>Mordell-Weil Theorem</h2>
                <p>We say a group is <em>finitely generated</em> if there is a finite set of elements in the group for which everything in the group can be expressed as a sum of those elements and their inverses with potential repetition. For example, the integers are finitely generated by the set <Latex math='\{1\}' />.</p>
                <p>The <em>Mordell-Weil Theorem</em> says that the rational points on an elliptic curve are finitely generated. This means that no matter what an elliptic curve looks like, you will always be able to find a <em>finite</em> set of points on it that generate every single rational point on the curve!</p>
            </section>
        </article >
        <Footer />
    </>;
}