import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-column-big",
	render: (part) => (
		<>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.rect
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				height="12"
				rx="1"
				style={edge(0.5, 1)}
				width="4"
				x="15"
				y="5"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				height="9"
				rx="1"
				style={edge(0.5, 1)}
				width="4"
				x="7"
				y="8"
			/>
		</>
	),
});
