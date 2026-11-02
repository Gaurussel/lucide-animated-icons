import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down-to-line",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M12 17V3" />
				<path d="m6 11 6 6 6-6" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.8, 1] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
				d="M19 21H5"
				style={centered}
			/>
		</>
	),
});
