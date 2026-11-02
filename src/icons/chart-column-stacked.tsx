import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-column-stacked",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				style={edge(0.5, 1)}
			>
				<rect height="9" rx="1" width="4" x="7" y="8" />
				<path d="M11 13H7" />
			</motion.g>
			<motion.g
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				style={edge(0.5, 1)}
			>
				<rect height="12" rx="1" width="4" x="15" y="5" />
				<path d="M19 9h-4" />
			</motion.g>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
		</>
	),
});
