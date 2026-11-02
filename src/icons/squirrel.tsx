import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "squirrel",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2, 0, 0, 0] }, { duration: 0.8, times: [0, 0.22, 0.42, 0.7, 1] }))}>
			<path d="M15.236 22a3 3 0 0 0-2.2-5" />
			<path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.5, 0.6, 0.7, 1] }))}
				d="M18 13h.01"
			/>
			<motion.path
				{...part(pose({ rotate: [0, -8, 0, -6, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
				style={pivot(8, 18)}
			/>
		</motion.g>
	),
});
