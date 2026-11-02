import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-ellipsis",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.path
				{...part(pose({ y: [0, -2, 0] }, { duration: 0.55, delay: 0.3, times: [0, 0.4, 1] }))}
				d="M17 12h.01"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, 0] }, { duration: 0.55, delay: 0.2, times: [0, 0.4, 1] }))}
				d="M12 12h.01"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, 0] }, { duration: 0.55, delay: 0.1, times: [0, 0.4, 1] }))}
				d="M7 12h.01"
			/>
		</>
	),
});
