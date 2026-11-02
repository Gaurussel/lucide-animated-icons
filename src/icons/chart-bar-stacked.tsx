import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-bar-stacked",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				style={edge(0, 0.5)}
			>
				<rect height="4" rx="1" width="9" x="7" y="13" />
				<path d="M11 13v4" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				style={edge(0, 0.5)}
			>
				<rect height="4" rx="1" width="12" x="7" y="5" />
				<path d="M15 5v4" />
			</motion.g>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
		</>
	),
});
