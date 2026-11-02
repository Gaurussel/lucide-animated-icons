import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const enter = pose(
	{ x: [0, -2, 8, -6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const door = pose(
	{ x: [0, 0, 2, 0] },
	{ duration: 0.65, times: [0, 0.32, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "log-in",
	render: (part) => (
		<>
			<motion.g {...part(enter)}>
				<path d="m10 17 5-5-5-5" />
				<path d="M15 12H3" />
			</motion.g>
			<motion.path {...part(door)} d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
		</>
	),
});
