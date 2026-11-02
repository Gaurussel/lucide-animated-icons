import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, -30, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const clapper = pose({ x: [0, -3, 0] }, { duration: 0.75, times: [0, 0.14, 1], ease: [snap, ring] });
const pop = pose({ scale: [1, 1.6, 1] }, { duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bell-dot",
	render: (part) => (
		<>
			<motion.g {...part(swing)} style={pivot(12, 2)}>
				<motion.path {...part(clapper)} d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665" />
			</motion.g>
			<motion.circle {...part(pop)} cx="18" cy="8" r="3" style={centered} />
		</>
	),
});
