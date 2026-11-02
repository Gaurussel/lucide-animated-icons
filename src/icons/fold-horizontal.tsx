import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fold-horizontal",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1, 3, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M2 12h6" />
				<path d="m5 15 3-3-3-3" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1, -3, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M22 12h-6" />
				<path d="m19 9-3 3 3 3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M12 2v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.05, times: [0, 0.3, 0.5, 1] }))}
				d="M12 8v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				d="M12 14v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.15, times: [0, 0.3, 0.5, 1] }))}
				d="M12 20v2"
			/>
		</>
	),
});
