import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "store",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}>
				<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
				<path d="M2 7h20" />
				<path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
			</motion.g>
			<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.4, 0.4, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
