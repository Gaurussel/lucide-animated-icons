import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const tuck = pose({ y: [0, -5, 0], rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const shrug = pose(
	{ x: [0, 0, -2.5, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.35, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "bookmark-minus",
	render: (part) => (
		<motion.g {...part(tuck)} style={pivot(12, 3)}>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
			<motion.line {...part(shrug)} style={centered} x1="15" x2="9" y1="10" y2="10" />
		</motion.g>
	),
});
