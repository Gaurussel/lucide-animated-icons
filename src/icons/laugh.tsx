import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -18, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const mouth = pose({ scale: [1, 1.35, 1] }, { duration: 0.75, times: [0, 0.22, 1], ease: [snap, springy] });
const squint = pose({ y: [0, -1.5, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "laugh",
	render: (part) => (
		<motion.g {...part(shake)} style={pivot(12, 22)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(mouth)} d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" style={edge(0.5, 0)} />
			<motion.g {...part(squint)}>
				<line x1="9" x2="9.01" y1="9" y2="9" />
				<line x1="15" x2="15.01" y1="9" y2="9" />
			</motion.g>
		</motion.g>
	),
});
