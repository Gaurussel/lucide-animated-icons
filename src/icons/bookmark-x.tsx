import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bookmark-x",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, 1, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] }))}>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.9] }))}
				d="m14.5 7.5-5 5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.25, 0.5, 0.9] }))}
				d="m9.5 7.5 5 5"
			/>
		</motion.g>
	),
});
