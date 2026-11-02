import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, 1, -8, 6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "corner-down-left",
	render: (part) => (
		<motion.g {...part(dash)}>
			<motion.path {...part(redraw(0.27, 0.42))} d="M20 4v7a4 4 0 0 1-4 4H4" />
			<path d="m9 10-5 5 5 5" />
		</motion.g>
	),
});
