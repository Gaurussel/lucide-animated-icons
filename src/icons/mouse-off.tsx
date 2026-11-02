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
	name: "mouse-off",
	render: (part) => (
		<>
			<motion.g {...part(split(1, 0))} style={centered}>
				<path d="M12 6v.343" />
				<path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
			</motion.g>
			<motion.g {...part(split(-1, 0.06))} style={centered}>
				<path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
			</motion.g>
			<motion.path {...part(strike)} d="M22 22 2 2" />
		</>
	),
});
