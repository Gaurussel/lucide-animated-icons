import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "snail",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1, -2, 0] }, { duration: 0.9, times: [0, 0.25, 0.65, 1] }))}>
				<motion.path
					{...part(pose({ rotate: [0, 0, -25, 0] }, { duration: 0.9, times: [0, 0.3, 0.7, 1] }))}
					d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
					style={centered}
				/>
				<circle cx="10" cy="13" r="8" />
				<path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
				<motion.path
					{...part(pose({ rotate: [0, 0, 10, 0] }, { duration: 0.9, times: [0, 0.4, 0.75, 1] }))}
					d="M18 3 19.1 5.2"
					style={pivot(19, 5.5)}
				/>
				<motion.path
					{...part(pose({ rotate: [0, 0, -10, 0] }, { duration: 0.9, times: [0, 0.45, 0.8, 1] }))}
					d="M22 3 20.9 5.2"
					style={pivot(21, 5.5)}
				/>
			</motion.g>
		</>
	),
});
