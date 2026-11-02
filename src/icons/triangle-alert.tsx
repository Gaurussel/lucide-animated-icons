import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const times = [0, 0.2, 0.45, 0.7, 1];

export default createAnimatedIcon({
	name: "triangle-alert",
	render: (part) => (
		<motion.g {...part(pose({ rotate: [0, -7, 7, -4, 0] }, { duration: 0.8, times }))} style={pivot(12, 21)}>
			<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
			<motion.g {...part(pose({ scale: [1, 1.25, 1, 1.25, 1] }, { duration: 0.8, times }))} style={centered}>
				<path d="M12 9v4" />
				<path d="M12 17h.01" />
			</motion.g>
		</motion.g>
	),
});
