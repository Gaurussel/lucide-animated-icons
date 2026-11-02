import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const body = pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "file-question-mark",
	render: (part) => (
		<motion.g {...part(body)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
			<motion.path
				{...part(pose({ rotate: [0, -14, 14, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
				style={pivot(12, 11)}
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="M12 17h.01"
			/>
		</motion.g>
	),
});
