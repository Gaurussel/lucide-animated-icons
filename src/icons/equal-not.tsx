import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "equal-not",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ y: [0, 2, 2, 0], x: [0, 0, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			>
				<line x1="5" x2="19" y1="9" y2="9" />
			</motion.g>
			<motion.g
				{...part(pose({ y: [0, -2, -2, 0], x: [0, 0, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			>
				<line x1="5" x2="19" y1="15" y2="15" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.85] }))}>
				<line x1="19" x2="5" y1="5" y2="19" />
			</motion.g>
		</>
	),
});
