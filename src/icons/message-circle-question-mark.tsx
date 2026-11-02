import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle-question-mark",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(2, 22)}
		>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.g
				{...part(
					pose(
						{ y: [0, 0, -1.5, 0, 0], rotate: [0, 0, -10, 8, 0] },
						{ duration: 0.8, times: [0, 0.35, 0.55, 0.75, 1] },
					),
				)}
				style={centered}
			>
				<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
				<path d="M12 17h.01" />
			</motion.g>
		</motion.g>
	),
});
