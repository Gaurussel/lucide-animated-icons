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
	name: "message-square-off",
	render: (part) => (
		<>
			<motion.g {...part(split(1, 0))} style={centered}>
				<path d="M21 15V5a2 2 0 0 0-2-2H9" />
			</motion.g>
			<motion.g {...part(split(-1, 0.06))} style={centered}>
				<path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" />
			</motion.g>
			<motion.path {...part(strike)} d="m2 2 20 20" />
		</>
	),
});
