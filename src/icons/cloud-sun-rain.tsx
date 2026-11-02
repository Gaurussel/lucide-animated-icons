import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-sun-rain",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -22, 0] }, { duration: 0.9, times: [0, 0.4, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M12 2v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="M20 12h2" />
				<path d="m19.07 4.93-1.41 1.41" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 0.88, 1] }, { duration: 0.9, times: [0, 0.4, 1] }))}
				d="M15.947 12.65a4 4 0 0 0-5.925-4.128"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ y: [0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
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
		</>
	),
});
