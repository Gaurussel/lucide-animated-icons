import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-reply",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.g {...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<path d="m10 7-3 3 3 3" />
				<path d="M17 13v-1a2 2 0 0 0-2-2H7" />
			</motion.g>
		</motion.g>
	),
});
