import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "luggage",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, 9, 9, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(16, 22)}
		>
			<motion.g {...part(pose({ x: [0, 0, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
				<motion.path
					{...part(pose({ y: [0, 0, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
					d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"
				/>
				<path d="M10 20h4" />
				<circle cx="16" cy="20" r="2" />
				<circle cx="8" cy="20" r="2" />
			</motion.g>
		</motion.g>
	),
});
