import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mails",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, -0.8, -0.8, 1] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
				d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -1, -1, 0], y: [0, 0, 1, 1, 0] },
						{ duration: 0.7, times: [0, 0.3, 0.5, 0.65, 1] },
					),
				)}
				d="M2 8v11c0 1.1.9 2 2 2h14"
			/>
			<motion.rect
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
				height="13"
				rx="2"
				width="16"
				x="6"
				y="4"
			/>
		</>
	),
});
