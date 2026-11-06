import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -1.2, 2.4, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);
const arms = pose(
	{ rotate: [0, 0, -8.4, 0] },
	{ duration: 0.72, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, ring] },
);
const loop = pose(
	{ y: [0, 0.9, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "anchor",
	render: (part) => (
		<motion.g {...part(drop)}>
			<path d="M12 22V8" />
			<motion.path {...part(arms)} d="M5 12H2a10 10 0 0 0 20 0h-3" style={pivot(12, 8)} />
			<motion.g {...part(loop)}>
				<circle cx="12" cy="5" r="3" />
			</motion.g>
		</motion.g>
	),
});
