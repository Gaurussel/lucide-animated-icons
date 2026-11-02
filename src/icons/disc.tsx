import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "disc",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.92, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.6, 1.5, 1] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				style={centered}
			>
				<circle cx="12" cy="12" r="2" />
			</motion.g>
		</>
	),
});
