import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "disc-2",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.75, 1] }, { duration: 0.6, delay: 0.1, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<circle cx="12" cy="12" r="4" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.3, 1] }, { duration: 0.5, delay: 0.2, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<path d="M12 12h.01" />
			</motion.g>
		</>
	),
});
