import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const sun = pose(
	{ y: [0, 1.2, -2.1, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const lift = pose(
	{ y: [0, 0.9, -4.2, 3, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);

const tilt = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "image-up",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(3, 21)}>
			<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
			<motion.g {...part(lift)}>
				<path d="m14 19.5 3-3 3 3" />
				<path d="M17 22v-5.5" />
			</motion.g>
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
		</motion.g>
	),
});
