import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const aim = pose(
	{ y: [0, -1.2, 0], rotate: [0, -12, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "flashlight-off",
	render: (part) => (
		<>
			<motion.g {...part(aim)} style={pivot(12, 22)}>
				<path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" />
				<path d="M7 2h11v4c0 2-2 2-2 4v1" />
				<line x1="11" x2="18" y1="6" y2="6" />
			</motion.g>
			<motion.line {...part(redraw(0.15, 0.55))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
