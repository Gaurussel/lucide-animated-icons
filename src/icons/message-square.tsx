import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square",
	render: (part) => (
		<motion.path
			{...part(pose({ scale: [1, 0.92, 1.06, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
			d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
			style={edge(0, 1)}
		/>
	),
});
