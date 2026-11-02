import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "volleyball",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, 1, -3, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}>
			<motion.g
				{...part(pose({ rotate: [0, 0, 90, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" />
				<path d="M12 12a12.6 12.6 0 0 1-8.7 5" />
				<path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" />
				<path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" />
				<path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
			</motion.g>
			<circle cx="12" cy="12" r="10" />
		</motion.g>
	),
});
