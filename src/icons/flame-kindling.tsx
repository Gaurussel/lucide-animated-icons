import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flame-kindling",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 1.15, 0.95, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="m5 22 14-4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.12, times: [0, 0.3, 0.5, 1] }))}
				d="m5 18 14 4"
			/>
		</>
	),
});
