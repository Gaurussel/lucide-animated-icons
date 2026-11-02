import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "orbit",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -16, 360] }, { duration: 0.9, times: [0, 0.2, 1], reset: true }))}
				style={pivot(12, 12)}
			>
				<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
				<path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
				<circle cx="19" cy="5" r="2" />
				<circle cx="5" cy="19" r="2" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.7, 1.15, 1] }, { duration: 0.9, times: [0, 0.25, 0.6, 1] }))}
				cx="12"
				cy="12"
				r="3"
				style={centered}
			/>
		</>
	),
});
