import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const beat = pose(
	{ scale: [1, 1, 1.3, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "message-circle-heart",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(2, 22)}>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.path
				{...part(beat)}
				d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
				style={centered}
			/>
		</motion.g>
	),
});
