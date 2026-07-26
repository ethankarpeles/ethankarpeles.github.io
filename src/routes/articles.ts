import MinecraftCalculator from "@pages/Musings/MinecraftCalculator";
import RationalPoints from "@pages/Musings/RationalPointsOnEllipticCurves.tsx";
import ReductionsOfEllipticCurves from "@pages/Musings/ReductionsOfEllipticCurves.tsx";
import JacobianConjectureCounterexample from "@pages/Musings/JacobianConjectureCounterexample.tsx";

export const articles = [
  {
    path: "jacobian-conjecture-counterexample",
    title: "On the Jacobian Conjecture Counterexample",
    component: JacobianConjectureCounterexample,
  },
  {
    path: "rational-points-on-elliptic-curves",
    title: "Rational Points on Elliptic Curves",
    component: RationalPoints,
  },
  {
    path: "reductions-of-elliptic-curves",
    title: "Reductions of Elliptic Curves and Their Galois Representations",
    component: ReductionsOfEllipticCurves,
  },
  {
    path: "minecraft-calculator",
    title: "Minecraft Calculator",
    component: MinecraftCalculator,
  },
];
