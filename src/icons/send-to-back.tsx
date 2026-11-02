import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "send-to-back",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose(
						{ x: [0, -1, -3, 0, 0], y: [0, -1, -3, 0, 0], scale: [1, 1, 0.88, 1, 1] },
						{ duration: 0.85, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				height="8"
				rx="2"
				style={centered}
				width="8"
				x="14"
				y="14"
			/>
			<motion.rect
				{...part(
					pose(
						{ x: [0, 1, 3, 0, 0], y: [0, 1, 3, 0, 0], scale: [1, 1, 1.06, 1, 1] },
						{ duration: 0.85, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				height="8"
				rx="2"
				style={centered}
				width="8"
				x="2"
				y="2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.2, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="M7 14v1a2 2 0 0 0 2 2h1"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.2, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="M14 7h1a2 2 0 0 1 2 2v1"
			/>
		</>
	),
});
