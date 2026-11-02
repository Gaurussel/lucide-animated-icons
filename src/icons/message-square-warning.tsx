import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-warning",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.g
				{...part(
					pose({ rotate: [0, 0, -12, 10, -5, 0] }, { duration: 0.8, times: [0, 0.4, 0.52, 0.66, 0.82, 1] }),
				)}
				style={centered}
			>
				<path d="M12 7v2" />
				<path d="M12 13h.01" />
			</motion.g>
		</motion.g>
	),
});
