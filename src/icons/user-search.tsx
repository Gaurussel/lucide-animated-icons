import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const head = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const shoulders = pose({ y: [0, -0.9, 0] }, { duration: 0.7, delay: 0.04, times: [0, 0.25, 1], ease: [snap, springy] });

const zoom = pose(
	{ scale: [1, 1.21, 1], rotate: [0, -12, 0] },
	{ duration: 0.7, delay: 0.05, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "user-search",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M10.3 15H7a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="10" cy="7" r="4" />
			<motion.g {...part(zoom)} style={pivot(17, 17)}>
				<circle cx="17" cy="17" r="3" />
				<path d="m21 21-1.9-1.9" />
			</motion.g>
		</>
	),
});
