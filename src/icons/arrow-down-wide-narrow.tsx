import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "arrow-down-wide-narrow",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.4))} d="M11 4h10" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M11 8h7" />
			<motion.path {...part(redraw(0.26, 0.4))} d="M11 12h4" />
		</>
	),
});
