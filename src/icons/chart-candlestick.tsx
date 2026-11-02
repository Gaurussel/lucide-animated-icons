import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-candlestick",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.86, 0.86, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(3, 21)}
		>
			<motion.g {...part(pose({ y: [0, 3, 0] }, { duration: 0.6, times: [0, 0.45, 1] }))}>
				<path d="M9 5v4" />
				<path d="M9 15v2" />
			</motion.g>
			<motion.rect
				{...part(pose({ y: [0, 3, 0], scaleY: [1, 0.4, 1] }, { duration: 0.6, times: [0, 0.45, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="4"
				x="7"
				y="9"
			/>
			<motion.g {...part(pose({ y: [0, -3, 0] }, { duration: 0.6, delay: 0.2, times: [0, 0.45, 1] }))}>
				<path d="M17 3v2" />
				<path d="M17 13v3" />
			</motion.g>
			<motion.rect
				{...part(
					pose({ y: [0, -3, 0], scaleY: [1, 0.4, 1] }, { duration: 0.6, delay: 0.2, times: [0, 0.45, 1] }),
				)}
				height="8"
				rx="1"
				style={centered}
				width="4"
				x="15"
				y="5"
			/>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
		</motion.g>
	),
});
