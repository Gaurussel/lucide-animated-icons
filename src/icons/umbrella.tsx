import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "umbrella",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.35, 0.35, 1] }, { duration: 0.85, times: [0, 0.3, 0.5, 1] }))}
				d="M22 12a10.06 10.06 1 0 0-20 0Z"
				style={edge(0.5, 1)}
			/>
			<path d="M12 12v8a2 2 0 0 0 4 0" />
			<motion.path
				{...part(pose({ y: [0, 0.8, 0.8, 0] }, { duration: 0.85, times: [0, 0.3, 0.5, 1] }))}
				d="M12 2v1"
			/>
		</>
	),
});
