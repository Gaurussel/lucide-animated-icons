import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flashlight-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -4, 4, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" />
				<path d="M7 2h11v4c0 2-2 2-2 4v1" />
				<line x1="11" x2="18" y1="6" y2="6" />
			</motion.g>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
		</>
	),
});
