import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pyramid",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scaleX: [1, 0.6, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))} style={centered}>
				<motion.path {...part(pose({ x: [0, 3, 0] }, { duration: 0.8, times: [0, 0.5, 1] }))} d="M12 2v20" />
				<path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
			</motion.g>
		</>
	),
});
