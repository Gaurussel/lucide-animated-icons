import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "train-front-tunnel",
	render: (part) => (
		<>
			<path d="M2 22V12a10 10 0 1 1 20 0v10" />
			<motion.g
				{...part(pose({ scale: [1, 0.8, 0.8, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.45, 0.75, 1] }))}
				style={pivot(12, 18)}
			>
				<motion.g
					{...part(
						pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.85, times: [0, 0.75, 0.85, 0.95, 1] }),
					)}
				>
					<path d="M10 15h.01" />
					<path d="M14 15h.01" />
				</motion.g>
				<path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
				<path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
				<path d="m9 19-2 3" />
				<path d="m15 19 2 3" />
			</motion.g>
		</>
	),
});
