import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "table-rows-split",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.12, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M14 10h2"
			/>
			<motion.g {...part(pose({ y: [0, 1.5, 1.5, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M15 22v-8" />
				<path d="M3 19h18" />
				<path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
				<path d="M9 22v-8" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M15 2v4" />
				<path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
				<path d="M9 2v4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.25, 0.45, 1] }))}
				d="M2 10h2"
			/>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M20 10h2"
			/>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.06, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M8 10h2"
			/>
		</>
	),
});
