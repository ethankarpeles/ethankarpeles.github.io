import MinecraftCalculator from "@pages/Musings/MinecraftCalculator";
import RationalPoints from "@pages/Musings/RationalPointsOnEllipticCurves.tsx";
import ReductionsOfEllipticCurves from "@pages/Musings/ReductionsOfEllipticCurves.tsx";
import JacobianConjectureCounterexample from "@pages/Musings/JacobianConjectureCounterexample.tsx";

export const articles = [
  {
    path: "jacobian-conjecture-counterexample",
    title: "On the Jacobian Conjecture Counterexample",
    description:
      "Unpacking the Jacobian conjecture and Levent Alpöge’s counterexample",
    component: JacobianConjectureCounterexample,
  },
  {
    path: "rational-points-on-elliptic-curves",
    title: "Rational Points on Elliptic Curves",
    description:
      "Intro to Pythagorean triples, Fermat's Last Theorem, and elliptic curves",
    component: RationalPoints,
  },
  {
    path: "reductions-of-elliptic-curves",
    title: "Reductions of Elliptic Curves and Their Galois Representations",
    description: "Poster presented at UNT Scholars Day in 2025",
    component: ReductionsOfEllipticCurves,
  },
  {
    path: "minecraft-calculator",
    title: "Minecraft Calculator",
    description:
      "8-bit redstone calculator built in Minecraft, inspired by Ben Eater",
    component: MinecraftCalculator,
  },
];
