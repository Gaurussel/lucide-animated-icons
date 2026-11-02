import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-down",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.5, 2, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="M8 18L12 22L16 18"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.925, 1.1, 1] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="M12 2V22"
				style={edge(0.5, 0)}
			/>
		</>
	),
});
