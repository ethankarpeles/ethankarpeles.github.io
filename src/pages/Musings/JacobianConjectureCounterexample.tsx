import Footer from "@components/Footer/Footer.tsx";
import Latex from "@components/Latex/Latex.tsx";
import ExternalLink from "@components/ExternalLink/ExternalLink.tsx";
import TwitterPost from "@components/TwitterPost/TwitterPost.tsx";

export default function JacobianConjectureCounterexample() {
  return (
    <>
      <article>
        <h1>On the Jacobian Conjecture Counterexample</h1>
        <p className="articledate">July 25, 2026</p>

        <section>
          <p>
            A counterexample to the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Jacobian_conjecture">
              Jacobian Conjecture
            </ExternalLink>{" "}
            for <Latex math="n > 2" /> was recently announced by Levent Alpöge,
            who used Anthropic's Fable model to help find the result.
          </p>

          <TwitterPost url="https://x.com/__alpoge__/status/2079028340955197566" />

          <p>
            I have been having a lot of fun investigating this, and wanted to
            share an expository walkthrough of the announced counterexample. In
            particular, I plan to introduce the necessary abstract algebra,
            state the conjecture, and then explain why the function constitutes
            a counterexample. My hope is that this explanation will be
            relatively accessible without sacrificing too much rigor. I will
            only assume familiarity with basic set theory, linear algebra, and
            multivariable calculus.
          </p>
        </section>

        <section>
          <h2>Fields</h2>

          <p>
            To ensure the generality of the Jacobian conjecture is fully
            appreciated, I would like to start off with a few definitions from
            Dummit and Foote's Abstract Algebra.
          </p>

          <p>
            A{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Binary_operation">
              binary operation
            </ExternalLink>{" "}
            <Latex math="*" /> on a set <Latex math="G" /> is a function{" "}
            <Latex math="* \colon G \times G \to G" />. For any{" "}
            <Latex math="a, b \in G" />, we write <Latex math="a * b" /> for{" "}
            <Latex math="*(a, b)" />.
          </p>

          <p>
            A{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Group_(mathematics)">
              group
            </ExternalLink>{" "}
            is a set <Latex math="G" /> equipped with a binary operation
            satisfying the following properties:
          </p>
          <Latex
            math="\begin{alignedat}{2}
                    \forall a, b, c \in G &,\qquad &&(a * b) * c = a * (b * c) \\
                    \exists e \in G\colon \forall a \in G &,\qquad &&a * e = e * a = a \\
                    \forall a \in G,\ \exists a^{-1} \in G &\colon\qquad &&a * a^{-1} = a^{-1} * a = e
                \end{alignedat}"
            display
            center
          />

          <p>
            The first property is called being{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Associative_property">
              associative
            </ExternalLink>
            , in the second property we call <Latex math="e" /> the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Identity_element">
              identity
            </ExternalLink>{" "}
            of <Latex math="G" />, and <Latex math="a^{-1}" /> in the third
            property is called the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Inverse_element">
              inverse
            </ExternalLink>{" "}
            of <Latex math="a" />.
          </p>

          <p>
            Additionally, we say a group is{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Abelian_group">
              commutative
            </ExternalLink>{" "}
            if:
          </p>
          <Latex math="\forall a, b \in G \quad a * b = b * a" center />

          <p>
            A{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Field_(mathematics)">
              field
            </ExternalLink>{" "}
            <Latex math="F" /> is a set with two binary operations{" "}
            <Latex math="+" /> and <Latex math="\times" /> (called addition and
            multiplication respectively) satisfying the following properties:
          </p>
          <ul>
            <li>
              <Latex math="F" /> is a commutative group with respect to{" "}
              <Latex math="+" />. We will call the identity of this group{" "}
              <Latex math="0" />.
            </li>
            <li>
              <Latex math="F \setminus \{0\}" /> is a commutative group with
              respect to <Latex math="\times" />. We will call the identity of
              this group <Latex math="1" />.
            </li>
            <li>
              <Latex math="\forall a, b, c \in F" />, we have:
            </li>
          </ul>
          <Latex math="(a + b) \times c = (a \times c) + (b \times c)" center />
          <p style={{ textAlign: "center" }}>and</p>
          <Latex math="a \times (b + c) = (a \times b) + (a \times c)" center />

          <p>
            Real numbers, complex numbers, and rational numbers are all examples
            of fields.
          </p>

          <p>
            A fundamental property of any given field is its{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Characteristic_(algebra)">
              characteristic
            </ExternalLink>
            . It is defined to be the smallest positive integer{" "}
            <Latex math="n" /> such that:
          </p>
          <Latex
            math="\underbrace{1 + \dots + 1}_{n \text{ times}} = 0"
            center
          />
          <p>
            If no such <Latex math="n" /> exists, we say{" "}
            <Latex math="\text{char}(F) = 0" />. For the remainder of this
            article, we will restrict our attention to fields of characteristic
            zero for the sake of simplicity.
          </p>
        </section>

        <section>
          <h2>Jacobian Determinant</h2>

          <p>
            Let <Latex math="n \in \mathbb{Z}_{>0}" />. Say we have{" "}
            <Latex math="n" /> polynomials each in <Latex math="n" /> variables
            with coefficients in a field <Latex math="\mathbb{K}" />:
          </p>
          <Latex math="f_1(x_1, \dots, x_n)" center />
          <Latex math="\vdots" center />
          <Latex math="f_n(x_1, \dots, x_n)" center />

          <p>
            Here are some examples of what one of these <Latex math="f_i" />{" "}
            could look like for clarity (in the{" "}
            <Latex math="n=3, \ \mathbb{K}=\mathbb{C}" /> case):
          </p>
          <ul>
            <li>
              <Latex math="3x_1 + 7x_2 - \sqrt{2}x_1^8 x_3 + x_3^9" />
            </li>
            <li>
              <Latex math="x_2^2" />
            </li>
            <li>
              <Latex math="6" />
            </li>
            <li>
              <Latex math="0" />
            </li>
            <li>
              <Latex math="2x_1 x_2 x_3 - \pi x_1^{100} x_2" />
            </li>
          </ul>

          <p>
            Each <Latex math="f_i" /> is a formal polynomial in{" "}
            <Latex math="\mathbb{K}[x_1, \dots, x_n]" /> and induces a function:
          </p>
          <Latex math="f_i \colon \mathbb{K}^n \to \mathbb{K}" center />

          <p>
            We can combine these induced functions to create a polynomial map{" "}
            <Latex math="F \colon \mathbb{K}^n \to \mathbb{K}^n" /> by doing the
            following:
          </p>
          <Latex
            math="\begin{align*}
                    F\left( \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix} \right)
                    &\colonequals \begin{bmatrix} f_1(x_1, \dots, x_n) \\ \vdots \\ f_n(x_1, \dots, x_n) \end{bmatrix}
                \end{align*}"
            display
            center
          />

          <p>The Jacobian conjecture involves functions of this form.</p>

          <p>
            For one of the polynomials <Latex math="f_i" />, we can define the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Partial_derivative">
              partial derivative
            </ExternalLink>{" "}
            of <Latex math="f_i" /> with respect to the variable{" "}
            <Latex math="x_j" /> as a purely algebraic object as follows. For
            each term of the polynomial, we do the following:
          </p>
          <ul>
            <li>
              If the term does not have a factor of <Latex math="x_j" />, it
              contributes zero to the partial derivative.
            </li>
            <li>
              Otherwise, we write the term as:
              <Latex math="c x_1^{k_1} \cdots x_n^{k_n}" center />
              <p>
                where <Latex math="c \in \mathbb{K}" />,{" "}
                <Latex math="k_\ell \in \mathbb{Z}_{\ge 0}\; \forall \ell" />
                , and <Latex math="k_j \ge 1" />. This term contributes the
                following to the partial derivative:
              </p>
              <Latex
                math="k_j c x_1^{k_1} \cdots x_j^{k_j - 1} \cdots x_n^{k_n}"
                center
              />
            </li>
          </ul>

          <p>
            The partial derivative of <Latex math="f_i" /> is the sum of these
            contributions. Notice a key point: we never in our discussion of
            these partial derivatives needed to invoke calculus, the slope of a
            tangent line, or anything of this nature! We write the partial
            derivative of <Latex math="f_i" /> with respect to{" "}
            <Latex math="x_j" /> as{" "}
            <Latex math="\frac{\partial f_i}{\partial x_j}" />.
          </p>

          <p>
            We can then form a matrix with all possible partial derivatives of
            all <Latex math="f_i" /> as so:
          </p>
          <Latex
            math="\begin{align*}
                        DF\left( \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix} \right) &= \begin{bmatrix}
                    \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
                    \vdots & \ddots & \vdots \\
                    \frac{\partial f_n}{\partial x_1} & \dots & \frac{\partial f_n}{\partial x_n}
                \end{bmatrix}
                \end{align*}"
            display
            center
          />

          <p>
            We call this matrix the Jacobian matrix of <Latex math="F" />. The
            determinant of this matrix is called the Jacobian determinant.
          </p>
          <Latex
            math="\begin{align*}
                    J_F &= \begin{vmatrix}
                        \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
                        \vdots & \ddots & \vdots \\
                        \frac{\partial f_n}{\partial x_1} & \dots & \frac{\partial f_n}{\partial x_n}
                    \end{vmatrix}
                \end{align*}"
            display
            center
          />
        </section>

        <section>
          <h2>Jacobian Conjecture</h2>

          <p>
            Before stating the actual conjecture, I would like to show the
            following:
          </p>

          <p style={{ textAlign: "center" }}>
            If <Latex math="F" /> has a polynomial inverse function{" "}
            <Latex math="G \colon \mathbb{K}^n \to \mathbb{K}^n" />, then{" "}
            <Latex math="J_F" /> is a nonzero constant in{" "}
            <Latex math="\mathbb{K}" />.
          </p>

          <p>
            Notice that a priori <Latex math="J_F" /> could be any polynomial in{" "}
            <Latex math="x_1, \dots, x_n" /> since the determinant is just a sum
            of products of the entries of the matrix, and in this case the
            entries of the Jacobian matrix are polynomials themselves. However,
            fascinatingly, it still ends up being a nonzero constant! Here's
            why. Because <Latex math="F, G" /> are assumed to be inverse
            functions of each other, we have:
          </p>
          <Latex
            math="\begin{align*}
                    G(F(\vec{x})) &= \text{id}(\vec{x})
                \end{align*}"
            display
            center
          />

          <p>Apply the chain rule:</p>
          <Latex
            math="\begin{align*}
                    D(G(F(\vec{x}))) &= DG(F(\vec{x})) \cdot DF(\vec{x})
                \end{align*}"
            display
            center
          />

          <p>Take the determinant of both sides:</p>
          <Latex
            math="\begin{align*}
                    \text{det}(D(G(F(\vec{x})))) &= \text{det}(DG(F(\vec{x})) \cdot DF(\vec{x}))
                \end{align*}"
            display
            center
          />

          <p>By the properties of the determinant:</p>
          <Latex
            math="\begin{align*}
                    \text{det}(D(G(F(\vec{x})))) &= \text{det}(DG(F(\vec{x}))) \cdot \text{det}(DF(\vec{x}))
                \end{align*}"
            display
            center
          />

          <p>
            However <Latex math="G(F(\vec{x})) = \text{id}(\vec{x})" /> so,
          </p>
          <Latex
            math="\begin{align*}
                    \text{det}(D(G(F(\vec{x})))) &= \text{det}(D(\text{id}(\vec{x}))) \\
                    &= \text{det}(I) \\
                    &= 1
                \end{align*}"
            display
            center
          />

          <p>Thus,</p>
          <Latex
            math="\begin{align*}
                    1 &= \text{det}(DG(F(\vec{x}))) \cdot \text{det}(DF(\vec{x})) \\
                    &= \text{det}(DG(F(\vec{x}))) \cdot J_F
                \end{align*}"
            display
            center
          />

          <p>
            So, firstly, this implies{" "}
            <Latex math="J_F \mathrel{\rlap{/}{=}} 0" /> because 0 has no
            inverse under multiplication. Furthermore, <Latex math="J_F" /> and{" "}
            <Latex math="\text{det}(DG(F(\vec{x})))" /> are nonzero polynomials.
            The degree of a product of nonzero polynomials is the sum of their
            degrees. Since their product is <Latex math="1" />, which has degree
            zero, both polynomials must have degree zero. Thus,{" "}
            <Latex math="J_F" /> is a nonzero constant.
          </p>

          <p>
            Now, the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Jacobian_conjecture">
              Jacobian conjecture
            </ExternalLink>{" "}
            is the partial converse to this fact:
          </p>

          <p style={{ textAlign: "center" }}>
            Let <Latex math="\mathbb{K}" /> be a field of characteristic zero.
            If <Latex math="J_F" /> is a nonzero constant, then{" "}
            <Latex math="F" /> has an inverse function{" "}
            <Latex math="G \colon \mathbb{K}^n \to \mathbb{K}^n" /> with
            components as polynomials.
          </p>
        </section>

        <section>
          <h2>Counterexample</h2>

          <p>
            The announced counterexample is a polynomial map{" "}
            <Latex math="F \colon \mathbb{C}^3 \to \mathbb{C}^3" /> with nonzero
            constant Jacobian determinant <Latex math="J_F = -2" /> that is not
            injective and therefore cannot have a polynomial inverse. It is
            given by:
          </p>
          <Latex
            math="\begin{align*}
                    F\left( \begin{bmatrix} x \\ y \\ z \end{bmatrix} \right)
                    &= \begin{bmatrix}
                        (1 + x y)^3 z + y^2 (1 + x y) (4 + 3x y) \\[0.35em]
                        y + 3x (1 + x y)^2 z + 3x y^2 (4 + 3x y) \\[0.35em]
                        2x - 3x^2 y - x^3 z
                    \end{bmatrix}
                \end{align*}"
            display
            center
          />

          <p>
            Calculating the Jacobian determinant verifies that{" "}
            <Latex math="J_F = -2" />. The computation can be checked with{" "}
            <ExternalLink href="https://www.wolframalpha.com/input?i=Det%5BD%5B%7B%281%2Bx+y%29%5E3+z+%2B+y%5E2+%281+%2B+x+y%29+%284+%2B+3x+y%29%2C+y+%2B+3x+%281+%2B+x+y%29%5E2+z+%2B+3x+y%5E2+%284+%2B+3x+y%29%2C+2x+-+3x%5E2+y+-+x%5E3+z%7D%2C+%7B%7Bx%2Cy%2Cz%7D%7D%5D%5D">
              WolframAlpha
            </ExternalLink>
            .
          </p>

          <p>
            The reason this function is not injective is because we have three
            points in the domain of <Latex math="F" /> that map to the same
            point.
          </p>

          <Latex
            math="\begin{align*}
                    F\left(\begin{bmatrix} 0 \\ 0 \\ -1/4 \end{bmatrix}\right)
                    &= \begin{bmatrix} -1/4 \\ 0 \\ 0 \end{bmatrix} \\[2.5em]
                    F\left(\begin{bmatrix} 1 \\ -3/2 \\ 13/2 \end{bmatrix}\right)
                    &= \begin{bmatrix} -1/4 \\ 0 \\ 0 \end{bmatrix} \\[2.5em]
                    F\left(\begin{bmatrix} -1 \\ 3/2 \\ 13/2 \end{bmatrix}\right)
                    &= \begin{bmatrix} -1/4 \\ 0 \\ 0 \end{bmatrix}
                \end{align*}"
            display
            center
          />

          <p>
            This particular counterexample in <Latex math="n=3" /> can be used
            to generate counterexamples to the conjecture for all{" "}
            <Latex math="n > 2" />. The <Latex math="n=2" /> case remains open.
          </p>

          <p>
            For a deeper geometric explanation, I highly recommend reading{" "}
            <ExternalLink href="https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/">
              Terence Tao's post
            </ExternalLink>{" "}
            on this topic. He talks about the result at a much more general
            level, and it was an incredibly interesting read.
          </p>
        </section>
      </article>
      <Footer />
    </>
  );
}
