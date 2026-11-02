import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-audio-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g
				{...part(
					pose({ scale: [1, 1, 1.12, 1, 1.12, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.6, 0.75, 1] }),
				)}
				style={centered}
			>
				<circle cx="3" cy="17" r="1" />
				<path d="M2 17v-3a4 4 0 0 1 8 0v3" />
				<circle cx="9" cy="17" r="1" />
			</motion.g>
		</motion.g>
	),
});
