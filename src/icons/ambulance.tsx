import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ambulance",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.85, times: [0, 0.25, 0.6, 1] }))}>
			<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
			<path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
			<path d="M9 18h6" />
			<circle cx="17" cy="18" r="2" />
			<circle cx="7" cy="18" r="2" />
			<motion.g
				{...part(pose({ scale: [1, 0.6, 1, 0.6, 1] }, { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] }))}
				style={centered}
			>
				<path d="M10 10H6" />
				<path d="M8 8v4" />
			</motion.g>
		</motion.g>
	),
});
