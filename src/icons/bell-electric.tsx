import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bell-electric",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.2, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.7, 1] }))}
				d="M18.518 17.347A7 7 0 0 1 14 19"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 1, 0.2, 1, 1] }, { duration: 0.8, delay: 0.06, times: [0, 0.2, 0.4, 0.7, 1] }),
				)}
				d="M18.8 4A11 11 0 0 1 20 9"
			/>
			<motion.g {...part(pose({ x: [0, 0, -1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.7, 1] }))}>
				<path d="M9 9h.01" />
				<circle cx="9" cy="9" r="7" />
			</motion.g>
			<motion.circle
				{...part(pose({ x: [0, 2, -2.5, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.7, 1] }))}
				cx="20"
				cy="16"
				r="2"
			/>
			<rect height="6" rx="2" width="10" x="4" y="16" />
		</>
	),
});
