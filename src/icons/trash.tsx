import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -6, 0], rotate: [0, -35, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "trash",
	render: (part) => (
		<>
			<motion.path {...part(jelly(0.38, 0.65))} d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" style={edge(0.5, 1)} />
			<motion.g {...part(lid)} style={pivot(3, 6)}>
				<path d="M3 6h18" />
				<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
			</motion.g>
		</>
	),
});
