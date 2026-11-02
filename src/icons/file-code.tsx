import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "file-code",
	render: (part) => (
		<motion.g {...part(body)}>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M10 12.5 8 15l2 2.5"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m14 12.5 2 2.5-2 2.5"
			/>
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
		</motion.g>
	),
});
