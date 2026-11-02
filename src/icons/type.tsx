import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.3, 0.6, 1];

export default createAnimatedIcon({
	name: "type",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.85, 1] }, { duration: 0.7, times }))}
				d="M12 4v16"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ y: [0, -2, 0, 0] }, { duration: 0.7, times }))}
				d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.6, 1] }, { duration: 0.7, times }))}
				d="M9 20h6"
				style={edge(0.5, 0.5)}
			/>
		</>
	),
});
