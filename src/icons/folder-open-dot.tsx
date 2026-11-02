import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const bounce = pose(
	{ y: [0, 0, -6, 0], scale: [1, 1, 1.6, 1] },
	{ duration: 0.7, times: [0, 0.22, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-open-dot",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
				style={edge(0.5, 1)}
			/>
			<motion.circle {...part(bounce)} cx="14" cy="15" r="1" style={centered} />
		</motion.g>
	),
});
