import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "signal-medium",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1, 1] }, { duration: 0.6, times: [0, 0.4, 0.8, 1] }))}
				d="M2 20h.01"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1, 1] }, { duration: 0.6, times: [0, 0.4, 0.8, 1], delay: 0.06 }))}
				d="M7 20v-4"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1, 1] }, { duration: 0.6, times: [0, 0.4, 0.8, 1], delay: 0.12 }))}
				d="M12 20v-8"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
