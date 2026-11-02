import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-parking-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
				<path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.1 }))}
				d="m2 2 20 20"
			/>
			<motion.g {...part(pose({ opacity: [1, 0.25, 0.25, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M13 13a3 3 0 1 0 0-6H9v2" />
				<path d="M9 17v-2.3" />
			</motion.g>
		</>
	),
});
