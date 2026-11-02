import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-check",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.75, times: [0, 0.3, 0.7, 1] }))}>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.35, 1] }))}
				d="m17 15-5.5 5.5L9 18"
			/>
			<path d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742" />
		</motion.g>
	),
});
