import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "camera",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.94, 0.94, 1] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				cx="12"
				cy="13"
				r="3"
				style={centered}
			/>
		</>
	),
});
