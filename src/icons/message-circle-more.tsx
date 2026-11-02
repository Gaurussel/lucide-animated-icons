import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-more",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(2, 22)}
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], scale: [1, 1.5, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.3 }),
				)}
				d="M8 12h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], scale: [1, 1.5, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.42 }),
				)}
				d="M12 12h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], scale: [1, 1.5, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.54 }),
				)}
				d="M16 12h.01"
				style={centered}
			/>
		</motion.g>
	),
});
