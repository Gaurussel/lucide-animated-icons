import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "divide",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 3, 0] }, { duration: 0.5, times: [0, 0.4, 1] }))}>
				<circle cx="12" cy="6" r="1" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.6, 1] }, { duration: 0.7, times: [0, 0.4, 0.6, 1] }))}
				style={centered}
			>
				<line x1="5" x2="19" y1="12" y2="12" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -3, 0] }, { duration: 0.5, delay: 0.1, times: [0, 0.4, 1] }))}>
				<circle cx="12" cy="18" r="1" />
			</motion.g>
		</>
	),
});
