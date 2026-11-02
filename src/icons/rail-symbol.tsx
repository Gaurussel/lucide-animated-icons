import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const rail = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "rail-symbol",
	render: (part) => (
		<>
			<motion.path {...part(rail(-3))} d="M5 15h14" />
			<motion.path {...part(rail(3))} d="M5 9h14" />
			<motion.path {...part(redraw(0.05, 0.6))} d="m14 20-5-5 6-6-5-5" />
		</>
	),
});
