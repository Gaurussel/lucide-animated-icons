import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "timer-reset",
	render: (part) => (
		<>
			<motion.path {...part(pose({ y: [0, 2, 0] }, { duration: 0.3, times: [0, 0.5, 1] }))} d="M10 2h4" />
			<motion.g
				{...part(pose({ rotate: -360 }, { duration: 0.65, delay: 0.2, reset: true }))}
				style={pivot(12, 14)}
			>
				<path d="M12 14v-4" />
				<path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
				<path d="M9 17H4v5" />
			</motion.g>
		</>
	),
});
