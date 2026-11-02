import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-up-to-line",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.8, 1] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
				d="M5 3h14"
				style={centered}
			/>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m18 13-6-6-6 6" />
				<path d="M12 7v14" />
			</motion.g>
		</>
	),
});
