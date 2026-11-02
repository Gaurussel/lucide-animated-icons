import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-up-from-dot",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ y: [0, 1.5, -2.5, 0] }, { duration: 0.75, delay: 0.1, times: [0, 0.25, 0.6, 1] }))}
			>
				<path d="m5 9 7-7 7 7" />
				<path d="M12 16V2" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 1.7, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="21"
				r="1"
				style={centered}
			/>
		</>
	),
});
