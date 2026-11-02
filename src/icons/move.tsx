import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="m19 9 3 3-3 3"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="m5 9-3 3 3 3"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.85, 1.2, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="M2 12h20"
				style={centered}
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, 2, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1], delay: 0.2 }))}
				d="m15 19-3 3-3-3"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, -2, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1], delay: 0.2 }))}
				d="m9 5 3-3 3 3"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.85, 1.2, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1], delay: 0.2 }))}
				d="M12 2v20"
				style={centered}
			/>
		</>
	),
});
