import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "boom-box",
	render: (part) => (
		<motion.g
			{...part(pose({ scaleY: [1, 0.94, 1, 0.94, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
			style={edge(0.5, 1)}
		>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1] }, { duration: 0.5, times: [0, 0.5, 1] }))}
				d="M8 8v1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1] }, { duration: 0.5, delay: 0.05, times: [0, 0.5, 1] }))}
				d="M12 8v1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1] }, { duration: 0.5, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M16 8v1"
				style={centered}
			/>
			<rect height="12" rx="2" width="20" x="2" y="9" />
			<motion.circle
				{...part(pose({ scale: [1, 0.5, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				cx="8"
				cy="15"
				r="2"
				style={centered}
			/>
			<motion.circle
				{...part(
					pose(
						{ scale: [1, 0.5, 1, 0.5, 1] },
						{ duration: 0.8, delay: 0.05, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				cx="16"
				cy="15"
				r="2"
				style={centered}
			/>
		</motion.g>
	),
});
