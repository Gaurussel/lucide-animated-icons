import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-up-from-line",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ y: [0, 1.5, -2.5, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.6, 1] }))}
			>
				<path d="m18 9-6-6-6 6" />
				<path d="M12 3v14" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 0.8, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M5 21h14"
				style={centered}
			/>
		</>
	),
});
