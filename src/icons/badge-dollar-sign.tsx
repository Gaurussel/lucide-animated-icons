import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "badge-dollar-sign",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.1, 1] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				style={centered}
			>
				<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
				<path d="M12 18V6" />
			</motion.g>
		</>
	),
});
