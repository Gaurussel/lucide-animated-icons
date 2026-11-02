import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "syringe",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, 1.5, -2, 0], y: [0, -1.5, 2, 0] }, { duration: 0.8, times: [0, 0.25, 0.65, 1] }),
				)}
			>
				<path d="m18 2 4 4" />
				<path d="m17 7 3-3" />
				<path d="m14 4 6 6" />
			</motion.g>
			<path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.25, 0.65, 1] }))}
				d="m9 11 4 4"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, -1, 0], y: [0, 0, 1, 0] }, { duration: 0.8, times: [0, 0.25, 0.65, 1] }))}
				d="m5 19-3 3"
			/>
		</>
	),
});
