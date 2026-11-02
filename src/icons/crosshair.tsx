import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "crosshair",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				style={centered}
			>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<line x1="22" x2="18" y1="12" y2="12" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<line x1="6" x2="2" y1="12" y2="12" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<line x1="12" x2="12" y1="6" y2="2" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<line x1="12" x2="12" y1="22" y2="18" />
			</motion.g>
		</>
	),
});
