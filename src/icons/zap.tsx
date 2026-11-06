import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring } from "../helpers.ts";

const strike = pose(
	{ y: [0, -2.4, 1.5, 0], rotate: [0, -4.8, 4.8, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "zap",
	render: (part) => (
		<motion.g {...part(strike)} style={centered}>
			<motion.path
				{...part(redraw(0.12, 0.5))}
				d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
			/>
		</motion.g>
	),
});
