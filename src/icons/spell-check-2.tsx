import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spell-check-2",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="m6 16 6-12 6 12" />
				<path d="M8 12h8" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 2.3, -2.3, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}>
				<path d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" />
			</motion.g>
		</>
	),
});
