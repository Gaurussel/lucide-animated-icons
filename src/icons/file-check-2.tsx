import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "file-check-2",
	render: (part) => (
		<motion.g {...part(body)}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.45, 0.9] }))}
				d="m3 15 2 2 4-4"
			/>
		</motion.g>
	),
});
