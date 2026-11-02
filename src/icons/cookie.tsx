import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cookie",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -28, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				d="M8.5 8.5v.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.5, 1] }))}
				d="M16 15.5v.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.5, 1] }))}
				d="M12 12v.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 0, 0, 1] },
						{ duration: 0.7, delay: 0.15000000000000002, times: [0, 0.25, 0.5, 1] },
					),
				)}
				d="M11 17v.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.2, times: [0, 0.25, 0.5, 1] }))}
				d="M7 14v.01"
				style={centered}
			/>
		</>
	),
});
