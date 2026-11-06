import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 0.6, -3.6, 0], scaleX: [1, 1, -0.2, 1] },
	{ duration: 0.75, times: [0, 0.1, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const lag = pose({ y: [0, 0, 1.2, 0] }, { duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "indian-rupee",
	render: (part) => (
		<motion.g {...part(toss)} style={pivot(12, 12)}>
			<motion.g {...part(lag)}>
				<path d="M6 3h12" />
				<path d="M6 8h12" />
			</motion.g>
			<path d="m6 13 8.5 8" />
			<path d="M6 13h3" />
			<path d="M9 13c6.667 0 6.667-10 0-10" />
		</motion.g>
	),
});
