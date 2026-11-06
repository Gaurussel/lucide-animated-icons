import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const shackle = pose(
	{ y: [0, 0.6, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const clack = pose(
	{ rotate: [0, 0, 8.4, 0] },
	{ duration: 0.7, times: [0, 0.38, 0.46, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "folder-lock",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.46, 0.7))}
				d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(clack)} style={pivot(18, 22)}>
				<rect height="5" rx="1" width="8" x="14" y="17" />
				<motion.path {...part(shackle)} d="M20 17v-2a2 2 0 1 0-4 0v2" />
			</motion.g>
		</>
	),
});
