import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dot",
	render: (part) => (
		<motion.circle
			{...part(pose({ scale: [1, 0.6, 1.8, 1] }, { duration: 0.55, times: [0, 0.25, 0.6, 1] }))}
			cx="12.1"
			cy="12.1"
			r="1"
			style={centered}
		/>
	),
});
