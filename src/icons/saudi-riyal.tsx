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
	name: "saudi-riyal",
	render: (part) => (
		<motion.g {...part(jump)}>
			<motion.g {...part(flip)} style={pivot(12, 12)}>
				<path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" />
				<path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" />
			</motion.g>
			<motion.path {...part(bar(0.04))} d="M20 10 4 13.5" />
			<motion.path {...part(bar(0.11))} d="m20 19.5-5.5 1.2" />
		</motion.g>
	),
});
