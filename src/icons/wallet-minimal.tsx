import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const tip = pose(
	{ y: [0, -1.2, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const coin = pose(
	{ x: [0, 0, 1.8, 0], scale: [1, 1, 2.2, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "wallet-minimal",
	render: (part) => (
		<motion.g {...part(tip)} style={pivot(3, 21)}>
			<motion.path {...part(coin)} d="M17 14h.01" style={centered} />
			<path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
		</motion.g>
	),
});
