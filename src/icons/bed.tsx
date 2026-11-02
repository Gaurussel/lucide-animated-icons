import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const dip = pose(
	{ y: [0, 0, 3, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.25, 1], ease: ["easeInOut", snap, springy] },
);
const headboard = pose(
	{ rotate: [0, 0, -16, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, ring] },
);
const pillow = pose(
	{ y: [0, 0, -4.5, 0] },
	{ duration: 0.72, times: [0, 0.28, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const frame = pose(
	{ y: [0, 0, 1, 0] },
	{ duration: 0.72, times: [0, 0.22, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "bed",
	render: (part) => (
		<>
			<motion.path {...part(headboard)} d="M2 4v16" style={pivot(2, 20)} />
			<motion.g {...part(dip)}>
				<path d="M2 8h18a2 2 0 0 1 2 2v10" />
			</motion.g>
			<motion.g {...part(pillow)}>
				<path d="M6 8v9" />
			</motion.g>
			<motion.g {...part(frame)}>
				<path d="M2 17h20" />
			</motion.g>
		</>
	),
});
