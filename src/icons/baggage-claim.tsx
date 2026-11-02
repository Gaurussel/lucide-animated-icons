import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "baggage-claim",
	render: (part) => (
		<>
			<path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
			<motion.g {...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
				<rect height="8" rx="1" width="13" x="8" y="6" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 1, 0.75, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="18"
				cy="20"
				r="2"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 0.75, 1] }, { duration: 0.8, delay: 0.06, times: [0, 0.3, 0.6, 1] }))}
				cx="9"
				cy="20"
				r="2"
				style={centered}
			/>
		</>
	),
});
