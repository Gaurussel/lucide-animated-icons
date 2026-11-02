import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scissors",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ rotate: [0, 10, 0, 7, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.42, 0.58, 0.75, 1] }),
				)}
				style={pivot(12, 12)}
			>
				<circle cx="6" cy="6" r="3" />
				<path d="M8.12 8.12 12 12" />
				<path d="M14.8 14.8 20 20" />
			</motion.g>
			<motion.g
				{...part(
					pose({ rotate: [0, -10, 0, -7, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.42, 0.58, 0.75, 1] }),
				)}
				style={pivot(12, 12)}
			>
				<circle cx="6" cy="18" r="3" />
				<path d="M20 4 8.12 15.88" />
			</motion.g>
		</>
	),
});
