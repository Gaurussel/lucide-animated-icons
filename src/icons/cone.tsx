import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cone",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"
			/>
			<motion.ellipse
				{...part(pose({ scaleX: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				cx="12"
				cy="19"
				rx="9"
				ry="3"
				style={centered}
			/>
		</>
	),
});
