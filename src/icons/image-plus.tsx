import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const sun = pose(
	{ y: [0, 1.2, -2.1, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

const tilt = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "image-plus",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(3, 21)}>
			<motion.g {...part(nod)} style={pivot(19, 5)}>
				<path d="M16 5h6" />
				<path d="M19 2v6" />
			</motion.g>
			<path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
			<motion.path {...part(redraw(0.05, 0.55))} d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
		</motion.g>
	),
});
