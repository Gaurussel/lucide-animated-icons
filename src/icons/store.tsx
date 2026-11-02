import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, redraw, ring, snap } from "../helpers.ts";

const awning = pose({ y: [0, -3, 0], rotate: [0, -6, 0] }, { duration: 0.72, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "store",
	render: (part) => (
		<>
			<motion.g {...part(awning)} style={pivot(12, 2)}>
				<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
				<path d="M2 7h20" />
				<path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
			</motion.g>
			<motion.path
				{...part(jelly(0.25, 0.72))}
				d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(redraw(0.1, 0.45))} d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
		</>
	),
});
