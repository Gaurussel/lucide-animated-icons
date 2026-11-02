import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "school",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 0, -1.8, -1.8, 0, 0] }, { duration: 0.9, times: [0, 0.15, 0.4, 0.65, 0.9, 1] }))}
				d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 1, 0.3, 0.3, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.5, 0.7, 0.9, 1] }),
				)}
				d="M14 22v-4a2 2 0 1 0-4 0v4"
				style={edge(0, 1)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.4, 1, 1] }, { duration: 0.9, times: [0, 0.5, 0.65, 0.8, 1] }))}
				cx="12"
				cy="9"
				r="2"
				style={centered}
			/>
			<path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" />
			<path d="M18 5v17" />
			<path d="M6 5v17" />
		</>
	),
});
