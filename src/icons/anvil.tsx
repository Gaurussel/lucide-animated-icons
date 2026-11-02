import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "anvil",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, 0, 1, 0] }, { duration: 0.65, times: [0, 0.2, 0.4, 0.65, 1] }))}>
				<path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
				<path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.7, 1, 0.85, 1] }, { duration: 0.65, times: [0, 0.2, 0.4, 0.65, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="M9 12v5" />
				<path d="M15 12v5" />
			</motion.g>
			<path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
		</>
	),
});
