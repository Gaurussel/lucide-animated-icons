import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);
const roll = pose({ rotate: [0, -25, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "clock-plus",
	render: (part) => (
		<>
			<motion.path {...part(sweep)} d="M12 6v6l3.644 1.822" style={pivot(12, 12)} />
			<motion.g {...part(twist)} style={pivot(19, 19)}>
				<path d="M16 19h6" />
				<path d="M19 16v6" />
			</motion.g>
			<motion.path {...part(roll)} d="M21.92 13.267a10 10 0 1 0-8.653 8.653" style={pivot(12, 12)} />
		</>
	),
});
