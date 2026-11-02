import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "map-pinned",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}>
				<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
				<motion.circle
					{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
					cx="12"
					cy="8"
					r="2"
					style={centered}
				/>
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.55, 0.7, 1] }))}
				d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
