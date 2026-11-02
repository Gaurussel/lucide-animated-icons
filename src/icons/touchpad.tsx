import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "touchpad",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose({ scaleY: [1, 0.88, 1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.2, 0.35, 0.55, 0.75, 1] }),
				)}
				height="16"
				rx="2"
				style={edge(0.5, 1)}
				width="20"
				x="2"
				y="4"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.6, 0, 0, 1.6, 0] }, { duration: 0.8, times: [0, 0.2, 0.35, 0.55, 0.75, 1] }))}
				d="M2 14h20"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 1.6, 0, 0, 1.6, 0], scaleY: [1, 0.1, 1, 1, 0.1, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.35, 0.55, 0.75, 1] },
					),
				)}
				d="M12 20v-6"
				style={edge(0.5, 0)}
			/>
		</>
	),
});
