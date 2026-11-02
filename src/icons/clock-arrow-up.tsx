import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clock-arrow-up",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				d="M12 6v6l1.56.78"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 0.96, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.85, 1] }))}
				d="M13.227 21.925a10 10 0 1 1 8.767-9.588"
				style={pivot(12, 12)}
			/>
			<motion.g
				{...part(
					pose(
						{ y: [0, 1.5, -3, 3, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.85, times: [0, 0.2, 0.5, 0.52, 1] },
					),
				)}
			>
				<path d="m14 18 4-4 4 4" />
				<path d="M18 22v-8" />
			</motion.g>
		</>
	),
});
