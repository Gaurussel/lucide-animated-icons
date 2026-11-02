import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const needle = pose({ rotate: [0, -110, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, ring] });
const dial = pose(
	{ rotate: [0, 40, 0], scale: [1, 0.85, 1] },
	{ duration: 0.75, times: [0, 0.3, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "circle-gauge",
	render: (part) => (
		<>
			<motion.path {...part(dial)} d="M15.6 2.7a10 10 0 1 0 5.7 5.7" style={pivot(12, 12)} />
			<motion.g {...part(needle)} style={pivot(12, 12)}>
				<circle cx="12" cy="12" r="2" />
				<path d="M13.4 10.6 19 5" />
			</motion.g>
		</>
	),
});
