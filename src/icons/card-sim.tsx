import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "card-sim",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 2.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M12 14v4" />
				<path d="M8 14h8" />
				<rect height="8" rx="1" width="8" x="8" y="10" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 0.96, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
				style={centered}
			/>
		</>
	),
});
