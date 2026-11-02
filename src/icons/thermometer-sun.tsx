import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const shine = pose(
	{ scale: [1, 1.35, 1], rotate: [0, 25, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const rise = pose({ y: [0, -3, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "thermometer-sun",
	render: (part) => (
		<>
			<motion.g {...part(shine)} style={pivot(12, 13)}>
				<path d="M12 9a4 4 0 0 0-2 7.5" />
				<path d="M12 3v2" />
				<path d="m6.6 18.4-1.4 1.4" />
				<path d="M4 13H2" />
				<path d="M6.34 7.34 4.93 5.93" />
			</motion.g>
			<motion.path {...part(rise)} d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
		</>
	),
});
