import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.4, 0.6, 1] };

export default createAnimatedIcon({
	name: "glass-water",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: [0, -16, -16, 0] }, phase))} style={edge(0.5, 1)}>
				<path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
				<motion.path
					{...part(pose({ rotate: [0, 16, 16, 0], y: [0, -0.8, -0.8, 0] }, phase))}
					d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"
				/>
			</motion.g>
		</>
	),
});
