import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-vertical",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.5, 2, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="m8 18 4 4 4-4"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, -2, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="m8 6 4-4 4 4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.85, 1.2, 1] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="M12 2v20"
				style={centered}
			/>
		</>
	),
});
