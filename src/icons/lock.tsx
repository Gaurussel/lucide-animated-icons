import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "lock",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.94, 1] }, { duration: 0.8, times: [0, 0.35, 0.75, 1] }))}
				height="11"
				rx="2"
				ry="2"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="11"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -1.5, -1.5, 0], rotate: [0, 22, 22, 0] },
						{ duration: 0.8, times: [0, 0.35, 0.6, 1] },
					),
				)}
				d="M7 11V7a5 5 0 0 1 10 0v4"
				style={pivot(17, 11)}
			/>
		</>
	),
});
