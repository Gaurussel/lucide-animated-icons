import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sticky-note",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -4, -4, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
			<motion.path
				{...part(
					pose({ x: [0, 1.2, 1.2, 0], y: [0, -1.2, -1.2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M15 3v4a2 2 0 0 0 2 2h4"
			/>
		</motion.g>
	),
});
