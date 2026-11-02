import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "columns-4",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M7.5 3v18"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.6, 0.6, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M12 3v18"
				style={centered}
			/>
			<motion.path
				{...part(pose({ x: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M16.5 3v18"
			/>
		</>
	),
});
