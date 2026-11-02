import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const beat = pose(
	{ scale: [1, 1, 1.4, 1] },
	{ duration: 0.7, times: [0, 0.25, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-heart",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(beat)}
				d="M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"
				style={pivot(17.5, 17)}
			/>
		</motion.g>
	),
});
