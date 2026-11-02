import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const scroll = pose({ y: [0, 3, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mouse",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<rect height="20" rx="7" width="14" x="5" y="2" />
			<motion.path {...part(scroll)} d="M12 6v4" />
		</motion.g>
	),
});
