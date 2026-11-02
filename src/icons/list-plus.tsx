import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, -3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const twist = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "list-plus",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" />
			<motion.path {...part(line(0.07))} d="M11 12H3" />
			<motion.path {...part(line(0.14))} d="M16 18H3" />
			<motion.g {...part(hop(0.65))} style={centered}>
				<motion.g {...part(twist)} style={centered}>
					<path d="M18 9v6" />
					<path d="M21 12h-6" />
				</motion.g>
			</motion.g>
		</>
	),
});
