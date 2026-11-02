import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mouse-pointer-click",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 0.55, 1.3, 1], opacity: [1, 0.4, 1, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.6, 1] },
					),
				)}
				style={pivot(8, 8)}
			>
				<path d="M14 4.1 12 6" />
				<path d="m5.1 8-2.9-.8" />
				<path d="m6 12-1.9 2" />
				<path d="M7.2 2.2 8 5.1" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 0.86, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
				style={pivot(9.5, 9.5)}
			/>
		</>
	),
});
