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
	name: "mic-off",
	render: (part) => (
		<>
			<motion.g {...part(split(1, 0))} style={centered}>
				<path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
				<path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
			</motion.g>
			<motion.g {...part(split(-1, 0.06))} style={centered}>
				<path d="M5 10v2a7 7 0 0 0 12 5" />
				<path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
				<line x1="12" x2="12" y1="19" y2="22" />
			</motion.g>
			<motion.line {...part(strike)} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
