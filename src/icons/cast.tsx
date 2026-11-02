import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cast",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] }))}
				d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1, 1] }, { duration: 0.85, times: [0, 0.12, 0.6, 0.8, 1] }))}
				d="M2 12a9 9 0 0 1 8 8"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1, 1] }, { duration: 0.85, times: [0, 0.12, 0.4, 0.6, 1] }))}
				d="M2 16a5 5 0 0 1 4 4"
			/>
			<motion.line
				{...part(
					pose(
						{ opacity: [1, 0, 0, 1, 1], scale: [1, 0.4, 0.4, 1, 1] },
						{ duration: 0.85, times: [0, 0.12, 0.2, 0.4, 1] },
					),
				)}
				style={centered}
				x1="2"
				x2="2.01"
				y1="20"
				y2="20"
			/>
		</>
	),
});
