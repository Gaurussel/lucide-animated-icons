import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const dot = (delay: number) => pose({ scale: [1, 3, 1] }, { duration: 0.3, delay });

export default createAnimatedIcon({
	name: "palette",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -12, -12, 0] }, { duration: 0.85, times: [0, 0.25, 0.75, 1] }))}
			style={pivot(12, 12)}
		>
			<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
			<motion.circle {...part(dot(0.15))} cx="13.5" cy="6.5" fill="currentColor" r=".5" style={centered} />
			<motion.circle {...part(dot(0.3))} cx="17.5" cy="10.5" fill="currentColor" r=".5" style={centered} />
			<motion.circle {...part(dot(0.6))} cx="6.5" cy="12.5" fill="currentColor" r=".5" style={centered} />
			<motion.circle {...part(dot(0))} cx="8.5" cy="7.5" fill="currentColor" r=".5" style={centered} />
		</motion.g>
	),
});
