import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const charge = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.6, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);
const spark = pose(
	{ x: [0, 0, 2.5, 0] },
	{ duration: 0.72, times: [0, 0.4, 0.48, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "battery-plus",
	render: (part) => (
		<>
			<motion.g {...part(charge)} style={pivot(10, 12)}>
				<path d="M10 9v6" />
				<path d="M7 12h6" />
			</motion.g>
			<motion.g {...part(jelly(0.35, 0.7))} style={centered}>
				<path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" />
				<path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />
			</motion.g>
			<motion.path {...part(spark)} d="M22 14v-4" />
		</>
	),
});
