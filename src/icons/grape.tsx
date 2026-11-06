import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const pick = pose({ x: [0, 0.6, 0], y: [0, -2.4, 0] }, { duration: 0.75, times: [0, 0.28, 1], ease: [snap, springy] });
const dangle = pose(
	{ rotate: [0, 0, 13.2, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "grape",
	render: (part) => (
		<motion.g {...part(pick)}>
			<path d="M22 5V2l-5.89 5.89" />
			<motion.g {...part(dangle)} style={pivot(16, 8)}>
				<circle cx="16.6" cy="15.89" r="3" />
				<circle cx="8.11" cy="7.4" r="3" />
				<circle cx="12.35" cy="11.65" r="3" />
				<circle cx="13.91" cy="5.85" r="3" />
				<circle cx="18.15" cy="10.09" r="3" />
				<circle cx="6.56" cy="13.2" r="3" />
				<circle cx="10.8" cy="17.44" r="3" />
				<circle cx="5" cy="19" r="3" />
			</motion.g>
		</motion.g>
	),
});
