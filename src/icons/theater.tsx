import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const curtain = (side: number) =>
	pose(
		{ x: [0, 3 * side, 0], rotate: [0, 12 * side, 0] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] },
	);
const cheer = (delay: number) =>
	pose({ y: [0, -1.5, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "theater",
	render: (part) => (
		<>
			<motion.g {...part(curtain(-1))} style={pivot(2, 2)}>
				<path d="M2 10s3-3 3-8" />
				<path d="M10 2c0 4.4-3.6 8-8 8" />
				<path d="M2 10s2 2 2 5" />
			</motion.g>
			<motion.g {...part(curtain(1))} style={pivot(22, 2)}>
				<path d="M22 10s-3-3-3-8" />
				<path d="M14 2c0 4.4 3.6 8 8 8" />
				<path d="M22 10s-2 2-2 5" />
			</motion.g>
			<motion.path {...part(redraw(0.12, 0.5))} d="M8 15h8" />
			<motion.path {...part(cheer(0.15))} d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
			<motion.path {...part(cheer(0.23))} d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
		</>
	),
});
