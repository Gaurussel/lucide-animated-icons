import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-chevron-up",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.5, 0.7, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1, -2.5, -2.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.5, 0.7, 1] }))}>
				<path d="m8 14 4-4 4 4" />
			</motion.g>
		</>
	),
});
