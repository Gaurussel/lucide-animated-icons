import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const slam = pose(
	{ y: [0, -3, 0.6, 0] },
	{ duration: 0.7, times: [0, 0.25, 0.38, 1], ease: [snap, "easeIn", springy] },
);
const brace = pose(
	{ y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.38, 0.46, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "construction",
	render: (part) => (
		<>
			<motion.g {...part(slam)}>
				<rect height="8" rx="1" width="20" x="2" y="6" />
				<path d="M17 3v3" />
				<path d="M7 3v3" />
				<motion.path {...part(redraw(0.3, 0.3))} d="M10 14 2.3 6.3" />
				<motion.path {...part(redraw(0.36, 0.3))} d="m8 6 8 8" />
				<motion.path {...part(redraw(0.42, 0.3))} d="m14 6 7.7 7.7" />
			</motion.g>
			<motion.g {...part(brace)}>
				<path d="M17 14v7" />
				<path d="M7 14v7" />
			</motion.g>
		</>
	),
});
