import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-dot",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.2, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				cx="18"
				cy="6"
				r="3"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"
				style={edge(0, 1)}
			/>
		</>
	),
});
