import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const times = [0, 0.3, 0.7, 1];

export default createAnimatedIcon({
	name: "webcam",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: [0, -6, 6, 0] }, { duration: 0.85, times }))} style={pivot(12, 18)}>
				<circle cx="12" cy="10" r="8" />
				<motion.circle
					{...part(pose({ x: [0, -1.5, 1.5, 0], y: [0, 0.5, 0.5, 0] }, { duration: 0.85, times }))}
					cx="12"
					cy="10"
					r="3"
				/>
			</motion.g>
			<path d="M7 22h10" />
			<path d="M12 22v-4" />
		</>
	),
});
