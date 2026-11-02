import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const write = (delay: number) => pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, delay, times: [0, 0.3, 0.5, 1] });

export default createAnimatedIcon({
	name: "scroll-text",
	render: (part) => (
		<motion.g
			{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
			style={edge(0.5, 1)}
		>
			<motion.path {...part(write(0.1))} d="M15 12h-5" />
			<motion.path {...part(write(0))} d="M15 8h-5" />
			<path d="M19 17V5a2 2 0 0 0-2-2H4" />
			<path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
		</motion.g>
	),
});
