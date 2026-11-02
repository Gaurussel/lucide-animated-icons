import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const snip = (degrees: number) =>
	pose(
		{ rotate: [0, degrees, 0, degrees, 0] },
		{ duration: 0.7, times: [0, 0.12, 0.24, 0.36, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
	);
const advance = pose(
	{ x: [0, 1.5, 3, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "scissors",
	render: (part) => (
		<motion.g {...part(advance)}>
			<motion.g {...part(snip(-16))} style={pivot(12, 12)}>
				<circle cx="6" cy="6" r="3" />
				<path d="M8.12 8.12 12 12" />
				<path d="M14.8 14.8 20 20" />
			</motion.g>
			<motion.g {...part(snip(16))} style={pivot(12, 12)}>
				<path d="M20 4 8.12 15.88" />
				<circle cx="6" cy="18" r="3" />
			</motion.g>
		</motion.g>
	),
});
