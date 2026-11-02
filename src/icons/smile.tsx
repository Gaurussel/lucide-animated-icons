import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const blink = pose({ scaleY: [1, 0.1, 1, 1, 1] }, { duration: 0.8, times: [0, 0.18, 0.36, 0.7, 1] });

export default createAnimatedIcon({
	name: "smile",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, 0, -1.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}>
			<circle cx="12" cy="12" r="10" />
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 1, 1.25, 1], scaleY: [1, 1, 1.3, 1] },
						{ duration: 0.8, times: [0, 0.4, 0.65, 1] },
					),
				)}
				d="M8 14s1.5 2 4 2 4-2 4-2"
				style={centered}
			/>
			<motion.line {...part(blink)} style={centered} x1="9" x2="9.01" y1="9" y2="9" />
			<motion.line {...part(blink)} style={centered} x1="15" x2="15.01" y1="9" y2="9" />
		</motion.g>
	),
});
