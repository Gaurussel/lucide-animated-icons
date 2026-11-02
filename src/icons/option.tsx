import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "option",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, times: [0, 0.35, 1] }))}
				d="M3 3h6l6 18h6"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.3, 1] }, { duration: 0.4, delay: 0.3 }))}
				d="M14 3h7"
				style={edge(1, 0.5)}
			/>
		</>
	),
});
