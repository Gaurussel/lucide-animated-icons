import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const go = pose(
	{ y: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const back = pose(
	{ y: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{
		duration: 0.65,
		delay: 0.08,
		times: [0, 0.15, 0.35, 0.36, 1],
		ease: ["easeInOut", "easeIn", "easeInOut", springy],
	},
);

export default createAnimatedIcon({
	name: "arrow-down-up",
	render: (part) => (
		<>
			<motion.g {...part(go)}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.g {...part(back)}>
				<path d="m21 8-4-4-4 4" />
				<path d="M17 4v16" />
			</motion.g>
		</>
	),
});
