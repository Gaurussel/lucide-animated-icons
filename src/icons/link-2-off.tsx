import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, rubber, snap } from "../helpers.ts";

const snapApart = (direction: number) =>
	pose(
		{ x: [0, 4 * direction, 0], rotate: [0, 14 * direction, 0] },
		{ duration: 0.7, times: [0, 0.22, 1], ease: [snap, rubber] },
	);

export default createAnimatedIcon({
	name: "link-2-off",
	render: (part) => (
		<>
			<motion.g {...part(snapApart(-1))} style={centered}>
				<path d="M9 17H7A5 5 0 0 1 7 7" />
				<line x1="8" x2="12" y1="12" y2="12" />
			</motion.g>
			<motion.path {...part(snapApart(1))} d="M15 7h2a5 5 0 0 1 4 8" style={centered} />
			<motion.line {...part(redraw(0.15, 0.45))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
