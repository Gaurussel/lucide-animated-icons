import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const wind = pose({ rotate: [0, -35, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const bounce = pose(
	{ y: [0, 0, -4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "undo-dot",
	render: (part) => (
		<>
			<motion.g {...part(wind)} style={pivot(12, 17)}>
				<path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
				<path d="M3 7v6h6" />
			</motion.g>
			<motion.circle {...part(bounce)} cx="12" cy="17" r="1" />
		</>
	),
});
