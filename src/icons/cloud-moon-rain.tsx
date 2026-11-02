import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-moon-rain",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -18, 0] }, { duration: 0.9, times: [0, 0.4, 1] }))}
				d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
				style={pivot(16, 10)}
			/>
			<motion.path
				{...part(
					pose({ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.4, 0.45, 1] }),
				)}
				d="M7 19v2"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.1, times: [0, 0.4, 0.45, 1] },
					),
				)}
				d="M11 20v2"
			/>
			<motion.path
				{...part(pose({ y: [0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
			/>
		</>
	),
});
