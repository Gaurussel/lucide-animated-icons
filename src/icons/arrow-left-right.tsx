import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const go = pose(
	{ x: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const back = pose(
	{ x: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{
		duration: 0.65,
		delay: 0.08,
		times: [0, 0.15, 0.35, 0.36, 1],
		ease: ["easeInOut", "easeIn", "easeInOut", springy],
	},
);

export default createAnimatedIcon({
	name: "arrow-left-right",
	render: (part) => (
		<>
			<motion.g {...part(go)}>
				<path d="M8 3 4 7l4 4" />
				<path d="M4 7h16" />
			</motion.g>
			<motion.g {...part(back)}>
				<path d="m16 21 4-4-4-4" />
				<path d="M20 17H4" />
			</motion.g>
		</>
	),
});
