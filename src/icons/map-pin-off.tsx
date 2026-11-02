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
	name: "map-pin-off",
	render: (part) => (
		<>
			<motion.g {...part(split(1, 0))} style={centered}>
				<path d="M12.75 7.09a3 3 0 0 1 2.16 2.16" />
				<path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" />
			</motion.g>
			<motion.g {...part(split(-1, 0.06))} style={centered}>
				<path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" />
				<path d="M9.13 9.13a3 3 0 0 0 3.74 3.74" />
			</motion.g>
			<motion.path {...part(strike)} d="m2 2 20 20" />
		</>
	),
});
