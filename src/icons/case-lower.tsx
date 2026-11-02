import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "case-lower",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ scaleY: [1, 0.8, 1, 1], y: [0, 0.8, 0, 0] }, { duration: 0.65, times: [0, 0.3, 0.6, 1] }),
				)}
				style={edge(0.5, 1)}
			>
				<circle cx="7" cy="12" r="3" />
				<path d="M10 9v6" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ scaleY: [1, 0.8, 1, 1], y: [0, 0.8, 0, 0] },
						{ duration: 0.65, delay: 0.15, times: [0, 0.3, 0.6, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<circle cx="17" cy="12" r="3" />
				<path d="M14 7v8" />
			</motion.g>
		</>
	),
});
