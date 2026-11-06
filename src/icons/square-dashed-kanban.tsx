import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { jelly, pivot, pose, springy } from "../helpers.ts";

const drop = (delay: number) =>
	pose(
		{ y: [0, -4.2, 0], opacity: [1, 0, 1] },
		{ duration: 0.6, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "square-dashed-kanban",
	render: (part) => (
		<>
			<motion.path {...part(drop(0))} d="M8 7v7" />
			<motion.path {...part(drop(0.08))} d="M12 7v4" />
			<motion.path {...part(drop(0.16))} d="M16 7v9" />
			<motion.g {...part(jelly(0.3, 0.7))} style={pivot(12, 12)}>
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M9 3h1" />
				<path d="M14 3h1" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M21 9v1" />
				<path d="M21 14v1" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M14 21h1" />
				<path d="M9 21h1" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M3 14v1" />
				<path d="M3 9v1" />
			</motion.g>
		</>
	),
});
