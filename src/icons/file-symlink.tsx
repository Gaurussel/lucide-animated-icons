import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "file-symlink",
	render: (part) => (
		<motion.g {...part(body)}>
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
			<motion.path
				{...part(pose({ x: [0, -1.5, 4, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m10 18 3-3-3-3"
			/>
		</motion.g>
	),
});
