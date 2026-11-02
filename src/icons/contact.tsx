import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "contact",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0.3, 1] }, { duration: 0.5, times: [0, 0.4, 1] }))}
				d="M16 2v2"
			/>
			<motion.g
				{...part(
					pose({ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.4, 0.45, 1] }),
				)}
			>
				<path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
				<circle cx="12" cy="11" r="3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0.3, 1] }, { duration: 0.5, delay: 0.08, times: [0, 0.4, 1] }))}
				d="M8 2v2"
			/>
			<rect height="18" rx="2" width="18" x="3" y="4" />
		</>
	),
});
