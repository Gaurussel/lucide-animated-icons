import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-check",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
				d="m9 10 2 2 4-4"
			/>
			<rect height="14" rx="2" width="20" x="2" y="3" />
			<path d="M12 17v4" />
			<path d="M8 21h8" />
		</motion.g>
	),
});
