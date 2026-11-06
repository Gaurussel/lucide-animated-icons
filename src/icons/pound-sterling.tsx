import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -0.2, 1.07, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.38, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const bar = (delay: number) =>
	pose(
		{ x: [0, 0, -3.6, 0], opacity: [1, 1, 0, 1] },
		{ duration: 0.6, delay, times: [0, 0.3, 0.31, 1], ease: ["easeInOut", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "pound-sterling",
	render: (part) => (
		<motion.g {...part(jump)}>
			<motion.g {...part(flip)} style={pivot(12, 12)}>
				<path d="M18 7c0-5.333-8-5.333-8 0" />
				<path d="M10 7v14" />
			</motion.g>
			<motion.path {...part(bar(0.04))} d="M6 13h10" />
			<motion.path {...part(bar(0.11))} d="M6 21h12" />
		</motion.g>
	),
});
