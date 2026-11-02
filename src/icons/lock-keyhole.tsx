import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "lock-keyhole",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.6, 1.6, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				cx="12"
				cy="16"
				r="1"
				style={centered}
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.94, 1] }, { duration: 0.8, times: [0, 0.35, 0.75, 1] }))}
				height="12"
				rx="2"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="10"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -1.5, -1.5, 0], rotate: [0, 22, 22, 0] },
						{ duration: 0.8, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M7 10V7a5 5 0 0 1 10 0v3"
				style={pivot(17, 10)}
			/>
		</>
	),
});
