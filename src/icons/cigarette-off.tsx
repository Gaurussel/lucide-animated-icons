import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cigarette-off",
	render: (part) => (
		<>
			<path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
			<motion.path
				{...part(
					pose({ y: [0, -5, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.51, 1] }),
				)}
				d="M18 8c0-2.5-2-2.5-2-5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 1] }))}
				d="m2 2 20 20"
			/>
			<path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
			<motion.path
				{...part(
					pose(
						{ y: [0, -5, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.8, delay: 0.1, times: [0, 0.5, 0.51, 1] },
					),
				)}
				d="M22 8c0-2.5-2-2.5-2-5"
			/>
			<path d="M7 12v4" />
		</>
	),
});
