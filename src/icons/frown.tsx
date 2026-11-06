import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -9.6, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const sulk = pose({ y: [0, 1.2, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "frown",
	render: (part) => (
		<motion.g {...part(shake)} style={pivot(12, 22)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(sulk)} d="M16 16s-1.5-2-4-2-4 2-4 2" />
			<line x1="9" x2="9.01" y1="9" y2="9" />
			<line x1="15" x2="15.01" y1="9" y2="9" />
		</motion.g>
	),
});
