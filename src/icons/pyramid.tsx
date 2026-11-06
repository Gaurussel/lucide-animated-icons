import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] };

export default createAnimatedIcon({
	name: "pyramid",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.4, 0], rotate: [0, -7.2, 0] }, timing))} style={pivot(12, 22)}>
			<path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
			<motion.path {...part(pose({ x: [0, 2.4, 0] }, timing))} d="M12 2v20" />
		</motion.g>
	),
});
