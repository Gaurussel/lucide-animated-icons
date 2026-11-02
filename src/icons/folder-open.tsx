import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const open = pose(
	{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -6, -6, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "folder-open",
	render: (part) => (
		<motion.path
			{...part(open)}
			d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
			style={edge(0.5, 1)}
		/>
	),
});
