import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, -0.6, 4.8, -3.6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "corner-right-down",
	render: (part) => (
		<motion.g {...part(dash)}>
			<motion.path {...part(redraw(0.27, 0.42))} d="M4 4h7a4 4 0 0 1 4 4v12" />
			<path d="m10 15 5 5 5-5" />
		</motion.g>
	),
});
