import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-sliders",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M8 12h8" />
			<motion.path
				{...part(pose({ x: [0, 0, 4, 4, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M10 11v2"
			/>
			<path d="M8 17h8" />
			<motion.path
				{...part(pose({ x: [0, 0, -4, -4, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M14 16v2"
			/>
		</motion.g>
	),
});
