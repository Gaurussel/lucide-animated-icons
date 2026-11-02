import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rectangle-vertical",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose(
						{ rotate: [0, 0, -6, 0], scaleY: [1, 0.92, 1, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.6, 1] },
					),
				)}
				height="20"
				rx="2"
				style={edge(0.5, 1)}
				width="12"
				x="6"
				y="2"
			/>
		</>
	),
});
