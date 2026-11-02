import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "radar",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.9, reset: true }))} style={pivot(12, 12)}>
				<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
				<path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
				<path d="m13.41 10.59 5.66-5.66" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 2.4, 1] }, { duration: 0.9, times: [0, 0.3, 0.42, 1] }))}
				d="M12 18h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 2.4, 1] }, { duration: 0.9, times: [0, 0.65, 0.78, 1] }))}
				d="M4 6h.01"
				style={centered}
			/>
			<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
			<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
			<circle cx="12" cy="12" r="2" />
		</>
	),
});
