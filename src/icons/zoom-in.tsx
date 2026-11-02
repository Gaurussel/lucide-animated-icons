import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "zoom-in",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.92, 1.18, 1.18, 1] }, { duration: 0.75, times }))} style={centered}>
				<circle cx="11" cy="11" r="8" />
				<motion.g {...part(pose({ scale: [1, 0.6, 1.2, 1.2, 1] }, { duration: 0.75, times }))} style={centered}>
					<line x1="11" x2="11" y1="8" y2="14" />
					<line x1="8" x2="14" y1="11" y2="11" />
				</motion.g>
			</motion.g>
			<line x1="21" x2="16.65" y1="21" y2="16.65" />
		</>
	),
});
