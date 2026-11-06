import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -3, 0], rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cooking-pot",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.38, 0.7))} style={edge(0.5, 1)}>
				<path d="M2 12h20" />
				<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
			</motion.g>
			<motion.g {...part(lid)} style={pivot(4, 8)}>
				<path d="m4 8 16-4" />
				<path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
			</motion.g>
		</>
	),
});
