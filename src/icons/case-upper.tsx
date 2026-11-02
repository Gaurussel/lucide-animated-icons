import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "case-upper",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ scaleY: [1, 0.8, 1, 1], y: [0, 0.8, 0, 0] }, { duration: 0.65, times: [0, 0.3, 0.6, 1] }),
				)}
				style={edge(0.5, 1)}
			>
				<path d="m3 15 4-8 4 8" />
				<path d="M4 13h6" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 0.8, 1, 1], y: [0, 0.8, 0, 0] },
						{ duration: 0.65, delay: 0.15, times: [0, 0.3, 0.6, 1] },
					),
				)}
				d="M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
