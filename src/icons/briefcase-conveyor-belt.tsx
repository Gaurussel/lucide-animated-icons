import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const ride = pose(
	{ x: [0, 10, -10, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.75, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const rollers = pose({ x: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: ["easeIn", springy] });

export default createAnimatedIcon({
	name: "briefcase-conveyor-belt",
	render: (part) => (
		<>
			<motion.g {...part(rollers)}>
				<path d="M10 20v2" />
				<path d="M14 20v2" />
				<path d="M18 20v2" />
				<path d="M6 20v2" />
			</motion.g>
			<path d="M21 20H3" />
			<motion.g {...part(ride)}>
				<path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
				<rect height="10" rx="2" width="16" x="4" y="6" />
			</motion.g>
		</>
	),
});
