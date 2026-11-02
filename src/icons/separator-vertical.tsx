import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "separator-vertical",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 1.2, -2.2, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.85, 1] }))}
				d="m8 8-4 4 4 4"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 2.2, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.85, 1] }))}
				d="m16 16 4-4-4-4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.8, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.85, 1] }))}
				d="M12 3v18"
				style={centered}
			/>
		</>
	),
});
