import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const sweep = { duration: 0.8, times: [0, 0.3, 0.7, 1] };

export default createAnimatedIcon({
	name: "brush-cleaning",
	render: (part) => (
		<motion.g {...part(pose({ rotate: [0, -12, 12, 0] }, sweep))} style={pivot(12, 2)}>
			<path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1" />
			<motion.g {...part(pose({ x: [0, 1.5, -1.5, 0] }, { ...sweep, delay: 0.05 }))}>
				<path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z" />
				<path d="m16 22-1-4" />
				<path d="m8 22 1-4" />
			</motion.g>
		</motion.g>
	),
});
