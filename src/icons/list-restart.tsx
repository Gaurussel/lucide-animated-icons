import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, -3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const rewind = pose(
	{ rotate: [0, 30, -360] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "list-restart",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M21 6H3" />
			<motion.path {...part(line(0.07))} d="M7 12H3" />
			<motion.path {...part(line(0.14))} d="M7 18H3" />
			<motion.g {...part(rewind)} style={pivot(16.5, 15)}>
				<path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
				<path d="M11 10v4h4" />
			</motion.g>
		</>
	),
});
