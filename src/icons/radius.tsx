import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "radius",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -180, 0] }, { duration: 0.9, times: [0, 0.5, 1] }))}
				style={pivot(12, 12)}
			>
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.5, 0.65, 1] }))}
					d="m13.41 13.41 4.18 4.18"
				/>
				<motion.circle
					{...part(pose({ scale: [1, 1, 1.3, 1] }, { duration: 0.9, times: [0, 0.5, 0.7, 1] }))}
					cx="19"
					cy="19"
					r="2"
					style={centered}
				/>
				<path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
				<circle cx="12" cy="12" r="2" />
			</motion.g>
		</>
	),
});
