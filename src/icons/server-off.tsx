import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const fall = (direction: number, delay: number) =>
	pose(
		{ y: [0, -1.5, 4, 0], rotate: [0, 0, 6 * direction, 0] },
		{ duration: 0.55, delay, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "server-off",
	render: (part) => (
		<>
			<motion.g {...part(fall(-1, 0.12))} style={pivot(12, 6)}>
				<path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
				<path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
			</motion.g>
			<motion.g {...part(fall(1, 0.2))} style={pivot(12, 18)}>
				<path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
				<path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
				<path d="M6 18h.01" />
			</motion.g>
			<motion.path {...part(redraw(0, 0.35))} d="m2 2 20 20" />
		</>
	),
});
