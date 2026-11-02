import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cigarette",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.8, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={edge(1, 0.5)}
			>
				<path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
				<path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
				<path d="M7 12v4" />
			</motion.g>
			<motion.path
				{...part(
					pose({ y: [0, -5, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.51, 1] }),
				)}
				d="M18 8c0-2.5-2-2.5-2-5"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -5, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.8, delay: 0.1, times: [0, 0.5, 0.51, 1] },
					),
				)}
				d="M22 8c0-2.5-2-2.5-2-5"
			/>
		</>
	),
});
