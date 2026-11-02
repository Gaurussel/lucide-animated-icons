import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.3, 0.5, 0.75, 1];

export default createAnimatedIcon({
	name: "weight",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, -2.5, -2.5, 0, 0] }, { duration: 0.85, times }))}
				cx="12"
				cy="5"
				r="3"
			/>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0, 0], scaleY: [1, 1, 1, 0.9, 1] }, { duration: 0.85, times }))}
				d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
