import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "minus",
	render: (part) => (
		<motion.path
			{...part(pose({ scaleX: [1, 0.55, 1, 1], y: [0, 0, 1, 0] }, { duration: 0.55, times: [0, 0.35, 0.7, 1] }))}
			d="M5 12h14"
			style={centered}
		/>
	),
});
