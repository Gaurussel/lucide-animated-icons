import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "zap",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{
						x: [0, -1, 1, -0.5, 0],
						scale: [1, 0.92, 1.12, 0.96, 1],
						opacity: [1, 0.35, 1, 0.35, 1],
					},
					{ duration: 0.6, times: [0, 0.2, 0.45, 0.7, 1] },
				),
			)}
			d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
			style={centered}
		/>
	),
});
