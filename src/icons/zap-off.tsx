import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const strike = pose(
	{ y: [0, -3, 1.8, 0], rotate: [0, -4.8, 3.6, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "zap-off",
	render: (part) => (
		<>
			<motion.g {...part(strike)} style={pivot(12, 12)}>
				<path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" />
				<path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" />
				<path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.55))} d="m2 2 20 20" />
		</>
	),
});
