import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-lock",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<rect height="6" rx="1" width="8" x="8" y="12" />
			<motion.path
				{...part(pose({ y: [0, 0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M10 12v-2a2 2 0 1 1 4 0v2"
			/>
		</motion.g>
	),
});
