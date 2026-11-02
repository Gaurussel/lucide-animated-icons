import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const rock = pose({ rotate: [0, -10, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: ["easeInOut", ring] });
const split = (x: number) =>
	pose({ x: [0, 0, x, 0] }, { duration: 0.75, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "egg-off",
	render: (part) => (
		<>
			<motion.g {...part(rock)} style={pivot(12, 22)}>
				<motion.path {...part(split(3.5))} d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" />
				<motion.path {...part(split(-3.5))} d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.35))} d="m2 2 20 20" />
		</>
	),
});
