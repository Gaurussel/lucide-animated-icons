import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-warning",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(2, 22)}
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.g
				{...part(
					pose({ rotate: [0, 0, -12, 10, -5, 0] }, { duration: 0.8, times: [0, 0.4, 0.52, 0.66, 0.82, 1] }),
				)}
				style={centered}
			>
				<path d="M12 8v4" />
				<path d="M12 16h.01" />
			</motion.g>
		</motion.g>
	),
});
