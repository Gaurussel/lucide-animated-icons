import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-more",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], scale: [1, 1.5, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.3 }),
				)}
				d="M8 10h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], scale: [1, 1.5, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.42 }),
				)}
				d="M12 10h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], scale: [1, 1.5, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.54 }),
				)}
				d="M16 10h.01"
				style={centered}
			/>
		</motion.g>
	),
});
