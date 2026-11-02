import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-code-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m5 12-3 3 3 3"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m9 18 3-3-3-3"
			/>
		</motion.g>
	),
});
