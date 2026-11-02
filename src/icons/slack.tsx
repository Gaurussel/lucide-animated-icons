import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "slack",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, 0, 0, 0], y: [0, 1.5, -3.5, 0] }, { duration: 0.55, times: [0, 0.25, 0.65, 1] }),
				)}
			>
				<rect height="8" rx="1.5" width="3" x="13" y="2" />
				<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0, 0], y: [0, -1.5, 3.5, 0] },
						{ duration: 0.55, times: [0, 0.25, 0.65, 1], delay: 0.2 },
					),
				)}
			>
				<rect height="8" rx="1.5" width="3" x="8" y="14" />
				<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 3.5, 0], y: [0, 0, 0, 0] },
						{ duration: 0.55, times: [0, 0.25, 0.65, 1], delay: 0.3 },
					),
				)}
			>
				<rect height="3" rx="1.5" width="8" x="14" y="13" />
				<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1.5, -3.5, 0], y: [0, 0, 0, 0] },
						{ duration: 0.55, times: [0, 0.25, 0.65, 1], delay: 0.1 },
					),
				)}
			>
				<rect height="3" rx="1.5" width="8" x="2" y="8" />
				<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
			</motion.g>
		</>
	),
});
