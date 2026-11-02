import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const strike = pose(
	{ pathLength: [1, 0, 1, 1] },
	{ duration: 0.7, times: [0, 0.18, 0.32, 1], ease: ["easeInOut", "easeIn", "easeInOut"] },
);
const split = (side: number, lag: number) =>
	pose(
		{ x: [0, 0, 2.5 * side, 0], y: [0, 0, -2.5 * side, 0], rotate: [0, 0, 10 * side, 0] },
		{ duration: 0.7, times: [0, 0.28 + lag, 0.42 + lag, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "monitor-off",
	render: (part) => (
		<>
			<motion.g {...part(split(1, 0))} style={centered}>
				<path d="M22 15V5a2 2 0 0 0-2-2H9" />
			</motion.g>
			<motion.g {...part(split(-1, 0.06))} style={centered}>
				<path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
				<path d="M8 21h8" />
				<path d="M12 17v4" />
			</motion.g>
			<motion.path {...part(strike)} d="m2 2 20 20" />
		</>
	),
});
