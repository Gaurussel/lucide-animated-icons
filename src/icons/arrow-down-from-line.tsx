import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down-from-line",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.8, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M19 3H5"
				style={centered}
			/>
			<motion.g {...part(pose({ y: [0, -1.5, 2, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M12 21V7" />
				<path d="m6 15 6 6 6-6" />
			</motion.g>
		</>
	),
});
