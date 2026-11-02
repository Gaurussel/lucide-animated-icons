import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-power",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.7, times: [0, 0.2, 0.5, 1] }))}
				d="M12 7v4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.05, times: [0, 0.2, 0.4, 1] }))}
				d="M7.998 9.003a5 5 0 1 0 8-.005"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
		</>
	),
});
