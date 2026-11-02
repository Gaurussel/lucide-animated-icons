import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "anchor",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -10, 8, -4, 0] }, { duration: 0.85, times: [0, 0.25, 0.55, 0.8, 1] }))}
				style={pivot(12, 6)}
			>
				<path d="M12 22V8" />
				<path d="M5 12H2a10 10 0 0 0 20 0h-3" />
			</motion.g>
			<motion.circle
				{...part(pose({ y: [0, -1.5, 0] }, { duration: 0.85, times: [0, 0.3, 1] }))}
				cx="12"
				cy="5"
				r="3"
			/>
		</>
	),
});
