import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "banknote-x",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
				<path d="M18 12h.01" />
				<path d="M6 12h.01" />
			</motion.g>
			<motion.circle
				{...part(pose({ scaleX: [1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="12"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.35, 1] }))}
				d="m17 17 5 5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.12, times: [0, 0.2, 0.35, 1] }))}
				d="m22 17-5 5"
			/>
		</>
	),
});
