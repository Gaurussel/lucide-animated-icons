import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "a-large-small",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1, 0.65, 1] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M21 14h-5" />
				<path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 1.3, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.55, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M4.5 13h6" />
				<path d="m3 16 4.5-9 4.5 9" />
			</motion.g>
		</>
	),
});
