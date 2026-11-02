import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const wave = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.8, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const scrawl = pose({ pathLength: [1, 0, 1] }, { duration: 0.6, times: [0, 0.01, 1], ease: ["easeInOut", "easeOut"] });

export default createAnimatedIcon({
	name: "line-squiggle",
	render: (part) => (
		<motion.g {...part(wave)} style={centered}>
			<motion.path
				{...part(scrawl)}
				d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"
			/>
		</motion.g>
	),
});
