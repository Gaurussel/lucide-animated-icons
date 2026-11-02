import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const swing = pose({ rotate: [0, -30, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const clapper = pose({ x: [0, -3, 0] }, { duration: 0.75, times: [0, 0.14, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bell",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(12, 2)}>
			<motion.path {...part(clapper)} d="M10.268 21a2 2 0 0 0 3.464 0" />
			<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
		</motion.g>
	),
});
