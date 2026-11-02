import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "award",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1.1, 1.1, 1] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
				style={edge(0.5, 0)}
			/>
			<motion.circle
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				cx="12"
				cy="8"
				r="6"
			/>
		</>
	),
});
