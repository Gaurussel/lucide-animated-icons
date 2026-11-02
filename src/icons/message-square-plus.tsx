import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-plus",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="M9 10h6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
				d="M12 7v6"
				style={centered}
			/>
		</motion.g>
	),
});
