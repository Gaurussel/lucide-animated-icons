import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const lid = pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] });

export default createAnimatedIcon({
	name: "archive",
	render: (part) => (
		<>
			<motion.g {...part(lid)} style={pivot(2, 8)}>
				<rect height="5" rx="1" width="20" x="2" y="3" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.92, 1] }, { duration: 0.7, times: [0, 0.4, 0.6, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
				<motion.path
					{...part(pose({ y: [0, -4, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
					d="M10 12h4"
				/>
			</motion.g>
		</>
	),
});
