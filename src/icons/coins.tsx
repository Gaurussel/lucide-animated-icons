import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const flip = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "coins",
	render: (part) => (
		<>
			<motion.g {...part(flip(0))} style={centered}>
				<circle cx="8" cy="8" r="6" />
				<path d="M7 6h1v4" />
			</motion.g>
			<motion.g {...part(flip(0.3))} style={centered}>
				<path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
				<path d="m16.71 13.88.7.71-2.82 2.82" />
			</motion.g>
		</>
	),
});
