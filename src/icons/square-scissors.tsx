import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, springy } from "../helpers.ts";

const snip = (direction: number) =>
	pose(
		{ rotate: [0, 22 * direction, 0, 14 * direction, 0] },
		{ duration: 0.72, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);
const advance = pose(
	{ x: [0, 0, 1.2, 1.8, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "square-scissors",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.3, 0.72))} height="20" rx="2" style={centered} width="20" x="2" y="2" />
			<motion.g {...part(advance)}>
				<motion.g {...part(snip(-1))} style={pivot(11, 12)}>
					<circle cx="8" cy="8" r="2" />
					<path d="M9.414 9.414 12 12" />
					<path d="M14.8 14.8 18 18" />
				</motion.g>
				<motion.g {...part(snip(1))} style={pivot(11, 12)}>
					<circle cx="8" cy="16" r="2" />
					<path d="m18 6-8.586 8.586" />
				</motion.g>
			</motion.g>
		</>
	),
});
