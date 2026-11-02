import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const twist = pose({ scaleX: [1, -1, 1] }, { duration: 0.75, times: [0, 0.4, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "dna",
	render: (part) => (
		<motion.g {...part(twist)} style={pivot(12, 12)}>
			<path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
			<path d="M2 15c6.667-6 13.333 0 20-6" />
			<path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
			<motion.path {...part(redraw(0.2, 0.3))} d="M3.109 14.109 4 15" />
			<motion.path {...part(redraw(0.24, 0.3))} d="m6.5 12.5 1 1" />
			<motion.path {...part(redraw(0.28, 0.3))} d="m10 16 1.5 1.5" />
			<motion.path {...part(redraw(0.32, 0.3))} d="m7 18 2.891 2.891" />
			<motion.path {...part(redraw(0.2, 0.3))} d="m20 9 .891.891" />
			<motion.path {...part(redraw(0.24, 0.3))} d="m16.5 10.5 1 1" />
			<motion.path {...part(redraw(0.28, 0.3))} d="m14 8-1.5-1.5" />
			<motion.path {...part(redraw(0.32, 0.3))} d="m17 6-2.891-2.891" />
		</motion.g>
	),
});
