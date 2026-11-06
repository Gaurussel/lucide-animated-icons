import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const note = pose(
	{ y: [0, -3, 0], rotate: [0, -10.8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const flag = pose({ rotate: [0, 18, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "music-2",
	render: (part) => (
		<motion.g {...part(note)} style={pivot(8, 20)}>
			<circle cx="8" cy="18" r="4" />
			<motion.path {...part(flag)} d="M12 18V2l7 4" style={pivot(12, 18)} />
		</motion.g>
	),
});
