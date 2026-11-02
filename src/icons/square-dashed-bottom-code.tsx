import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-dashed-bottom-code",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1, -2, 0] }, { duration: 0.75, times: [0, 0.25, 0.65, 1] }))}>
				<path d="M10 9.5 8 12l2 2.5" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1, -1.5, 0] }, { duration: 0.75, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M14 21h1" />
				<path d="M9 21h1" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1, 2, 0] }, { duration: 0.75, times: [0, 0.25, 0.65, 1] }))}>
				<path d="m14 9.5 2 2.5-2 2.5" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
			</motion.g>
		</>
	),
});
