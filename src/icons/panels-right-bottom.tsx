import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "panels-right-bottom",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="M15 3v18"
			/>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 1.25, 1.25, 1], y: [0, 0, -3, 0] },
						{ duration: 0.8, times: [0, 0.35, 0.65, 1] },
					),
				)}
				d="M3 15h12"
				style={edge(0, 0.5)}
			/>
			<rect height="18" rx="2" width="18" x="3" y="3" />
		</>
	),
});
