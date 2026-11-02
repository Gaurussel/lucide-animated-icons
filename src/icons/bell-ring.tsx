import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bell-ring",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 12, -7, 0] }, { duration: 0.7, times: [0, 0.2, 0.45, 0.7, 1] }))}
				style={pivot(12, 2)}
			>
				<path d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
			</motion.g>
			<motion.path
				{...part(
					pose({ x: [0, 1, 0, 0], opacity: [1, 0.2, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M22 8c0-2.3-.8-4.3-2-6"
			/>
			<motion.path
				{...part(
					pose({ x: [0, -1, 0, 0], opacity: [1, 0.2, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M4 2C2.8 3.7 2 5.7 2 8"
			/>
		</>
	),
});
