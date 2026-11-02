import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const droop = pose(
	{ rotate: [0, -10, 14, 0], y: [0, -1.5, 1.5, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.42, 1], ease: [snap, "easeIn", rubber] },
);

export default createAnimatedIcon({
	name: "ear-off",
	render: (part) => (
		<>
			<motion.g {...part(droop)} style={pivot(12, 20)}>
				<path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" />
				<path d="M6 8.5c0-.75.13-1.47.36-2.14" />
				<path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" />
				<path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" />
			</motion.g>
			<motion.line {...part(redraw(0.15, 0.35))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
