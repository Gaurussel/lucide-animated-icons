import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "wrench",
	render: (part) => (
		<motion.path
			{...part(pose({ rotate: [0, -18, 10, -6, 0] }, { duration: 0.8, times: [0, 0.25, 0.55, 0.8, 1] }))}
			d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
			style={pivot(16, 8)}
		/>
	),
});
