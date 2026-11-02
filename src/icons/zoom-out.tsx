import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "zoom-out",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 1.08, 0.84, 0.84, 1] }, { duration: 0.75, times }))} style={centered}>
				<circle cx="11" cy="11" r="8" />
				<motion.line
					{...part(pose({ scaleX: [1, 1.25, 0.8, 0.8, 1] }, { duration: 0.75, times }))}
					style={centered}
					x1="8"
					x2="14"
					y1="11"
					y2="11"
				/>
			</motion.g>
			<line x1="21" x2="16.65" y1="21" y2="16.65" />
		</>
	),
});
