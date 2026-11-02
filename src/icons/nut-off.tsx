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
	name: "nut-off",
	render: (part) => (
		<>
			<motion.g {...part(split(1, 0))} style={centered}>
				<path d="M12 4V2" />
				<path d="M19 10v3.343" />
				<path d="M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" />
			</motion.g>
			<motion.g {...part(split(-1, 0.06))} style={centered}>
				<path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" />
			</motion.g>
			<motion.line {...part(strike)} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
