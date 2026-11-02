import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "github",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, 1, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<motion.path
				{...part(pose({ rotate: [0, 0, -16, 10, 0] }, { duration: 0.7, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="M9 18c-4.51 2-5-2-7-2"
				style={pivot(9, 18)}
			/>
		</motion.g>
	),
});
