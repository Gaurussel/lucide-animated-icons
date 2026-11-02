import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, -1, 8, -6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "corner-up-right",
	render: (part) => (
		<motion.g {...part(dash)}>
			<motion.path {...part(redraw(0.27, 0.42))} d="M4 20v-7a4 4 0 0 1 4-4h12" />
			<path d="m15 14 5-5-5-5" />
		</motion.g>
	),
});
