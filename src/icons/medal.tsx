import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "medal",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, 7, -5, 0] }, { duration: 0.85, times: [0, 0.25, 0.55, 1] }))}
			style={pivot(12, 2)}
		>
			<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
			<path d="M11 12 5.12 2.2" />
			<path d="m13 12 5.88-9.8" />
			<path d="M8 7h8" />
			<motion.g
				{...part(pose({ rotate: [0, 0, 360] }, { duration: 0.85, times: [0, 0.3, 1], reset: true }))}
				style={pivot(12, 17)}
			>
				<circle cx="12" cy="17" r="5" />
				<path d="M12 18v-2h-.5" />
			</motion.g>
		</motion.g>
	),
});
