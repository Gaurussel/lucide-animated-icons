import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pocket",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.94, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}
				d="m8 10 4 4 4-4"
			/>
		</>
	),
});
