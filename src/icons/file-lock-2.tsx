import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-lock-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<rect height="5" rx="1" width="8" x="2" y="13" />
			<motion.path
				{...part(pose({ y: [0, 0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M8 13v-2a2 2 0 1 0-4 0v2"
			/>
		</motion.g>
	),
});
