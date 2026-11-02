import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "armchair",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.7, 1] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}
				d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.6, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
				style={edge(0.5, 1)}
			/>
			<path d="M5 18v2" />
			<path d="M19 18v2" />
		</>
	),
});
