import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-play",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.5, 0.7, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1, 2, 2, 0] }, { duration: 0.7, times: [0, 0.2, 0.5, 0.7, 1] }))}>
				<path d="m9 8 6 4-6 4Z" />
			</motion.g>
		</>
	),
});
