import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-speaker",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1.08, 1, 1.08, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				style={centered}
			>
				<motion.circle
					{...part(pose({ scale: [1, 1.8, 1, 1.8, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
					cx="17"
					cy="15"
					r="1"
					style={centered}
				/>
				<path d="M17 9h.01" />
				<rect height="16" rx="2" width="10" x="12" y="4" />
			</motion.g>
			<path d="M5.5 20H8" />
			<path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
		</>
	),
});
