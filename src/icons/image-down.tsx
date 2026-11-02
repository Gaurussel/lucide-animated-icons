import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const sun = pose(
	{ y: [0, 2, -3.5, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const drop = pose(
	{ y: [0, -3, 2.5, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] },
);

const tilt = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "image-down",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(3, 21)}>
			<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
			<motion.g {...part(drop)}>
				<path d="m14 19 3 3v-5.5" />
				<path d="m17 22 3-3" />
			</motion.g>
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
		</motion.g>
	),
});
