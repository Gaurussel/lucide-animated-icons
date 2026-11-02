import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chrome",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={pivot(12, 12)}>
				<circle cx="12" cy="12" r="4" />
				<line x1="21.17" x2="12" y1="8" y2="8" />
				<line x1="3.95" x2="8.54" y1="6.06" y2="14" />
				<line x1="10.88" x2="15.46" y1="21.94" y2="14" />
			</motion.g>
		</>
	),
});
