import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const blink = (delay: number) =>
	pose({ scale: [1, 0.5, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const jump = pose({ y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "replace",
	render: (part) => (
		<>
			<motion.g {...part(blink(0.15))} style={pivot(18, 6)}>
				<path d="M14 4a2 2 0 0 1 2-2" />
				<path d="M16 10a2 2 0 0 1-2-2" />
				<path d="M20 2a2 2 0 0 1 2 2" />
				<path d="M22 8a2 2 0 0 1-2 2" />
			</motion.g>
			<motion.path {...part(jump)} d="m3 7 3 3 3-3" />
			<motion.path {...part(redraw(0, 0.5))} d="M6 10V5a3 3 0 0 1 3-3h1" />
			<motion.rect {...part(jump)} height="8" rx="2" width="8" x="2" y="14" />
		</>
	),
});
