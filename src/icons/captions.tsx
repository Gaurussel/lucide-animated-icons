import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "captions",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.75, times: [0, 0.2, 0.4, 1] }))}
				height="14"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="5"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -2, 0, 0], pathLength: [1, 1, 0, 1], opacity: [1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.25, 0.3, 1] },
					),
				)}
				d="M7 15h4M15 15h2M7 11h2M13 11h4"
			/>
		</>
	),
});
