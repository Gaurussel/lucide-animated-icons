import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 1, -6, 0], scaleX: [1, 1, -1, 1] },
	{ duration: 0.75, times: [0, 0.1, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const lag = pose({ y: [0, 0, 2, 0] }, { duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "japanese-yen",
	render: (part) => (
		<motion.g {...part(toss)} style={pivot(12, 12)}>
			<path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
			<motion.g {...part(lag)}>
				<path d="M6 15h12" />
				<path d="M6 11h12" />
			</motion.g>
		</motion.g>
	),
});
