import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const open = pose(
	{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -6, -6, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "folder",
	render: (part) => (
		<motion.path
			{...part(open)}
			d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
			style={edge(0.5, 1)}
		/>
	),
});
