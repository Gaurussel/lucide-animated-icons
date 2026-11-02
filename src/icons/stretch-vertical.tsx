import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "stretch-vertical",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose({ scaleY: [1, 0.8, 1, 1], x: [0, -1, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				height="20"
				rx="2"
				style={centered}
				width="6"
				x="4"
				y="2"
			/>
			<motion.rect
				{...part(
					pose(
						{ scaleY: [1, 0.8, 1, 1], x: [0, 1, 0, 0] },
						{ duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] },
					),
				)}
				height="20"
				rx="2"
				style={centered}
				width="6"
				x="14"
				y="2"
			/>
		</>
	),
});
