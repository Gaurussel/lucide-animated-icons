import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const flash = pose({ scale: [1, 3, 1] }, { duration: 0.5, times: [0, 0.2, 1], ease: [snap, springy] });
const shutter = pose(
	{ scale: [1, 1, 0.4, 1] },
	{ duration: 0.75, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", snap, springy] },
);
const recoil = pose(
	{ y: [0, 0, 2, 0], rotate: [0, 0, 6, 0] },
	{ duration: 0.75, times: [0, 0.25, 0.36, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "instagram",
	render: (part) => (
		<motion.g {...part(recoil)} style={pivot(12, 22)}>
			<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
			<motion.path {...part(shutter)} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" style={pivot(12, 12)} />
			<motion.line {...part(flash)} style={centered} x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</motion.g>
	),
});
