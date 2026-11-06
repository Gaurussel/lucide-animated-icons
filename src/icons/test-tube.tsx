import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose(
	{ rotate: [0, 6, -14.4, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const cork = pose(
	{ y: [0, 0, -3, 0], rotate: [0, 0, 18, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const slosh = pose(
	{ rotate: [0, 0, 21.6, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "test-tube",
	render: (part) => (
		<motion.g {...part(shake)} style={pivot(12, 2)}>
			<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
			<motion.path {...part(cork)} d="M8.5 2h7" style={pivot(12, 2)} />
			<motion.path {...part(slosh)} d="M14.5 16h-5" style={pivot(12, 16)} />
		</motion.g>
	),
});
