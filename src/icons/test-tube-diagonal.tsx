import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose(
	{ rotate: [0, 6, -13.2, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const cork = pose(
	{ x: [0, 0, 1.8, 0], y: [0, 0, -1.8, 0], rotate: [0, 0, 21, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const slosh = pose(
	{ rotate: [0, 0, 19.2, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "test-tube-diagonal",
	render: (part) => (
		<motion.g {...part(shake)} style={pivot(19, 5)}>
			<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
			<motion.path {...part(cork)} d="m16 2 6 6" style={pivot(19, 5)} />
			<motion.path {...part(slosh)} d="M12 16H4" style={pivot(8, 16)} />
		</motion.g>
	),
});
