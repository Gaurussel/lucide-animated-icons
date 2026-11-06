import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const turn = pose({ rotate: [0, -8.4, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });
const look = pose(
	{ x: [0, -1.8, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.42, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "webcam",
	render: (part) => (
		<>
			<motion.g {...part(turn)} style={pivot(12, 18)}>
				<circle cx="12" cy="10" r="8" />
				<motion.circle {...part(look)} cx="12" cy="10" r="3" />
			</motion.g>
			<path d="M7 22h10" />
			<path d="M12 22v-4" />
		</>
	),
});
