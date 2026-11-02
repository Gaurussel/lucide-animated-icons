import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-dollar-sign",
	render: (part) => (
		<motion.g
			{...part(pose({ scaleX: [1, 0.1, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={centered}
		>
			<circle cx="12" cy="12" r="10" />
			<motion.g {...part(pose({ y: [0, 0, -2, 0] }, { duration: 0.75, times: [0, 0.5, 0.75, 1] }))}>
				<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
				<path d="M12 18V6" />
			</motion.g>
		</motion.g>
	),
});
