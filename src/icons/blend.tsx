import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "blend",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ x: [0, 2, 2, 0], y: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="9"
				cy="9"
				r="7"
			/>
			<motion.circle
				{...part(pose({ x: [0, -2, -2, 0], y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="15"
				cy="15"
				r="7"
			/>
		</>
	),
});
