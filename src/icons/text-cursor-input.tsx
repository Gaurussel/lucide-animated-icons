import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const type = pose({ x: [0, 3, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const bump = pose(
	{ x: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "text-cursor-input",
	render: (part) => (
		<>
			<path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
			<motion.path {...part(bump)} d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
			<motion.g {...part(type)}>
				<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
				<path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
				<path d="M9 6v12" />
			</motion.g>
		</>
	),
});
