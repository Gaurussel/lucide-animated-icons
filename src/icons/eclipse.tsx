import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "eclipse",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.94, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -90, -90, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M12 2a7 7 0 1 0 10 10" />
			</motion.g>
		</>
	),
});
