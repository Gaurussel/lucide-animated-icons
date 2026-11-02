import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "table-columns-split",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.12, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M14 14v2"
			/>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M14 20v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.25, 0.45, 1] }))}
				d="M14 2v2"
			/>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.06, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M14 8v2"
			/>
			<motion.g {...part(pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M2 15h8" />
				<path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
				<path d="M2 9h8" />
				<path d="M5 3v18" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1.5, 1.5, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M22 15h-4" />
				<path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
				<path d="M22 9h-4" />
			</motion.g>
		</>
	),
});
