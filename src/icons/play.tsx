import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const launch = pose(
	{ x: [0, -2, 4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "play",
	render: (part) => (
		<motion.g {...part(launch)}>
			<motion.polygon {...part(redraw(0.1, 0.5))} points="6 3 20 12 6 21 6 3" />
		</motion.g>
	),
});
