import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const trail = pose(
	{ y: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{
		duration: 0.65,
		delay: 0.08,
		times: [0, 0.15, 0.35, 0.36, 1],
		ease: ["easeInOut", "easeIn", "easeInOut", springy],
	},
);
const kick = pose(
	{ y: [0, 0, 1.2, 0] },
	{ duration: 0.65, times: [0, 0.1, 0.18, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "arrows-up-from-line",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="m4 6 3-3 3 3" />
				<path d="M7 17V3" />
			</motion.g>
			<motion.g {...part(trail)}>
				<path d="m14 6 3-3 3 3" />
				<path d="M17 17V3" />
			</motion.g>
			<motion.path {...part(kick)} d="M4 21h16" />
		</>
	),
});
