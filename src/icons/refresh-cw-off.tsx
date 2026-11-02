import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const turn = (delay: number) =>
	pose(
		{ rotate: [0, -30, 360] },
		{ duration: 0.6, delay, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "refresh-cw-off",
	render: (part) => (
		<>
			<motion.g {...part(turn(0))} style={pivot(12, 12)}>
				<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
				<path d="M3 12C3 9.51 4 7.26 5.64 5.64" />
				<path d="M21 3v5h-5" />
			</motion.g>
			<motion.g {...part(turn(0.09))} style={pivot(12, 12)}>
				<path d="M8 16H3v5" />
				<path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
				<path d="M21 12c0 1-.16 1.97-.47 2.87" />
			</motion.g>
			<motion.path {...part(redraw(0.38, 0.3))} d="M22 22 2 2" />
		</>
	),
});
