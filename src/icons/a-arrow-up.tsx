import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "a-arrow-up",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.9, 1] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M3.5 13h6" />
				<path d="m2 16 4.5-9 4.5 9" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M18 16V7" />
				<path d="m14 11 4-4 4 4" />
			</motion.g>
		</>
	),
});
