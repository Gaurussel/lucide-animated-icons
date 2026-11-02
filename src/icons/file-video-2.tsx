import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-video-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.rect
				{...part(pose({ scale: [1, 1, 1.08, 1.08, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="8"
				x="2"
				y="12"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 1.3, 1.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="m10 15.5 4 2.5v-6l-4 2.5"
				style={edge(0, 0.5)}
			/>
		</motion.g>
	),
});
