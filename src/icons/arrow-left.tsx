import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const trail = pose(
	{ x: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{
		duration: 0.65,
		delay: 0.07,
		times: [0, 0.15, 0.35, 0.36, 1],
		ease: ["easeInOut", "easeIn", "easeInOut", springy],
	},
);
const settle = pose(
	{ rotate: [0, 0, -7.2, 0] },
	{ duration: 0.72, times: [0, 0.45, 0.55, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "arrow-left",
	render: (part) => (
		<motion.g {...part(settle)} style={centered}>
			<motion.g {...part(dash)}>
				<path d="m12 19-7-7 7-7" />
			</motion.g>
			<motion.g {...part(trail)}>
				<motion.path {...part(redraw(0.3, 0.38))} d="M19 12H5" />
			</motion.g>
		</motion.g>
	),
});
