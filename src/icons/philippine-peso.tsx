import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, 1.5, -4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -1, 1.12, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const bar = (delay: number) =>
	pose(
		{ x: [0, 0, -6, 0], opacity: [1, 1, 0, 1] },
		{ duration: 0.6, delay, times: [0, 0.3, 0.31, 1], ease: ["easeInOut", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "philippine-peso",
	render: (part) => (
		<motion.g {...part(jump)}>
			<motion.g {...part(flip)} style={pivot(10, 12)}>
				<path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
			</motion.g>
			<motion.path {...part(bar(0.04))} d="M20 7H4" />
			<motion.path {...part(bar(0.11))} d="M20 11H4" />
		</motion.g>
	),
});
