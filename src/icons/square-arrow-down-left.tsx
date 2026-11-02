import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-arrow-down-left",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ opacity: [1, 1, 0, 0, 1], x: [0, 0.75, -3, 3, 0], y: [0, -0.75, 3, -3, 0] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="m16 8-8 8" />
				<path d="M16 16H8V8" />
			</motion.g>
		</>
	),
});
