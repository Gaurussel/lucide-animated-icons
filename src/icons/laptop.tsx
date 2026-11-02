import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.65, times: [0, 0.35, 0.7, 1] };

export default createAnimatedIcon({
	name: "laptop",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.78, 1, 1] }, timing))}
				d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.5, 1, 1] }, timing))}
				d="M20.054 15.987H3.946"
				style={edge(0.5, 0.5)}
			/>
		</>
	),
});
