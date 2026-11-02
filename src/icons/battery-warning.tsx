import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "battery-warning",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.75, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.7, 1] }))}
				style={edge(0, 0.5)}
			>
				<motion.path
					{...part(
						pose(
							{ opacity: [1, 0, 1, 0, 1] },
							{ duration: 0.8, delay: 0.05, times: [0, 0.2, 0.4, 0.6, 1] },
						),
					)}
					d="M10 17h.01"
				/>
				<motion.path
					{...part(pose({ opacity: [1, 0, 1, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }))}
					d="M10 7v6"
				/>
				<path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
				<path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				d="M22 14v-4"
			/>
		</>
	),
});
