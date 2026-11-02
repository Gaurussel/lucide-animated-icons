import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "euro",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -4, 0] }, { duration: 0.55, delay: 0.1, times: [0, 0.4, 1] }))}>
				<path d="M4 10h12" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -4, 0] }, { duration: 0.55, delay: 0.2, times: [0, 0.4, 1] }))}>
				<path d="M4 14h9" />
			</motion.g>
			<motion.g
				{...part(pose({ pathLength: [1, 0, 1], scaleX: [1, 0.8, 1] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				style={centered}
			>
				<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
			</motion.g>
		</>
	),
});
