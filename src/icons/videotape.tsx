import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const reel = (delay: number) => pose({ scale: [1, 0.5, 1] }, { duration: 0.45, delay });

export default createAnimatedIcon({
	name: "videotape",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.7, 1] }))}>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M2 8h20" />
			<motion.circle {...part(reel(0.1))} cx="8" cy="14" r="2" style={centered} />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M8 12h8"
			/>
			<motion.circle {...part(reel(0.3))} cx="16" cy="14" r="2" style={centered} />
		</motion.g>
	),
});
