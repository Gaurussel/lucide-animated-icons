import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const plugIn = pose({ x: [0, 1.8, 0], y: [0, -1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const spark = pose(
	{ scale: [1, 0.64, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeIn", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "plug-zap",
	render: (part) => (
		<>
			<motion.g {...part(plugIn)}>
				<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
				<path d="m2 22 3-3" />
				<path d="M7.5 13.5 10 11" />
				<path d="M10.5 16.5 13 14" />
			</motion.g>
			<motion.g {...part(spark)} style={pivot(17, 7)}>
				<motion.path {...part(redraw(0.15, 0.5))} d="m18 3-4 4h6l-4 4" />
			</motion.g>
		</>
	),
});
