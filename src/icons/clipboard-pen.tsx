import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clipboard-pen",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -4, -4, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.4, 0.65, 1] }))}
				height="4"
				rx="1"
				width="8"
				x="8"
				y="2"
			/>
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" />
			<path d="M4 13.5V6a2 2 0 0 1 2-2h2" />
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.5, 1.5, -0.5, 0], y: [0, 0.8, -0.6, 0.4, 0] },
						{ duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			/>
		</>
	),
});
