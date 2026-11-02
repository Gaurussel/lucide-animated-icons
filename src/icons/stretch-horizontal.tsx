import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "stretch-horizontal",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose({ scaleX: [1, 0.8, 1, 1], y: [0, -1, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				height="6"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="4"
			/>
			<motion.rect
				{...part(
					pose(
						{ scaleX: [1, 0.8, 1, 1], y: [0, 1, 0, 0] },
						{ duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] },
					),
				)}
				height="6"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="14"
			/>
		</>
	),
});
