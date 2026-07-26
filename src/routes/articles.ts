import MinecraftCalculator from "@pages/Musings/MinecraftCalculator";
import RationalPoints from "@pages/Musings/RationalPointsOnEllipticCurves.tsx";
import ReductionsOfEllipticCurves from "@pages/Musings/ReductionsOfEllipticCurves.tsx";
import JacobianConjectureCounterexample from "@pages/Musings/JacobianConjectureCounterexample.tsx";

export const articles = [
  {
    path: "jacobian-conjecture-counterexample",
    title: "On the Jacobian Conjecture Counterexample",
    description:
      "An accessible breakdown of Levent Alpöge’s recent multivariable polynomial map refuting the conjecture.",
    component: JacobianConjectureCounterexample,
  },
  {
    path: "rational-points-on-elliptic-curves",
    title: "Rational Points on Elliptic Curves",
    description:
      "An introduction to Pythagorean triples, Fermat's Last Theorem, and the algebraic structure of elliptic curves.",
    component: RationalPoints,
  },
  {
    path: "reductions-of-elliptic-curves",
    title: "Reductions of Elliptic Curves and Their Galois Representations",
    description: "A poster presented at UNT Scholars Day in 2025.",
    component: ReductionsOfEllipticCurves,
  },
  {
    path: "minecraft-calculator",
    title: "Minecraft Calculator",
    description:
      "An 8-bit redstone calculator built in Minecraft, inspired by Ben Eater's breadboard computer.",
    component: MinecraftCalculator,
  },
];
