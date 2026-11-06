import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const twist = pose(
	{ scale: [1, 0.76, 1], rotate: [0, 0, 0] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);
const hug = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "variable",
	render: (part) => (
		<>
			<motion.path {...part(hug(2))} d="M8 21s-4-3-4-9 4-9 4-9" />
			<motion.path {...part(hug(-2))} d="M16 3s4 3 4 9-4 9-4 9" />
			<motion.g {...part(twist)} style={pivot(12, 12)}>
				<line x1="15" x2="9" y1="9" y2="15" />
				<line x1="9" x2="15" y1="9" y2="15" />
			</motion.g>
		</>
	),
});
