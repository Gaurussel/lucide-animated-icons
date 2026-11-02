import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ticket-percent",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.45, 1] }))}
				d="M9 9h.01"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.12, times: [0, 0.25, 0.45, 1] }))}
				d="m15 9-6 6"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.2, times: [0, 0.25, 0.45, 1] }))}
				d="M15 15h.01"
			/>
		</>
	),
});
