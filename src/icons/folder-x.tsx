import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -6, -6, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
);
const cross = pose(
	{ scale: [1, 1, 0, 0, 1], rotate: [0, 0, 90, 90, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.5, 0.65, 1] },
);

export default createAnimatedIcon({
	name: "folder-x",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
			<motion.g {...part(cross)} style={centered}>
				<path d="m9.5 10.5 5 5" />
				<path d="m14.5 10.5-5 5" />
			</motion.g>
		</motion.g>
	),
});
