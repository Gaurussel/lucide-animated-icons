import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const bar = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1], x: [0, -4, 0] },
		{ duration: 0.42, delay, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
	);
const land = pose({ y: [0, 0, -2, 0] }, { duration: 0.72, times: [0, 0.45, 0.58, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "swiss-franc",
	render: (part) => (
		<motion.g {...part(land)}>
			<motion.path {...part(redraw(0, 0.4))} d="M10 21V3h8" />
			<motion.path {...part(bar(0.2))} d="M6 16h9" />
			<motion.path {...part(bar(0.28))} d="M10 9.5h7" />
		</motion.g>
	),
});
