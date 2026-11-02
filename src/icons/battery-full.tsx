import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "battery-full",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.75, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.4, 0.7, 1] }))}
				style={edge(0, 0.5)}
			>
				<motion.path
					{...part(pose({ opacity: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.1, 0.4, 0.5, 1] }))}
					d="M6 10v4"
				/>
				<motion.path
					{...part(
						pose(
							{ opacity: [1, 0, 0, 1, 1] },
							{ duration: 0.9, delay: 0.15, times: [0, 0.1, 0.4, 0.5, 1] },
						),
					)}
					d="M10 10v4"
				/>
				<motion.path
					{...part(
						pose({ opacity: [1, 0, 0, 1, 1] }, { duration: 0.9, delay: 0.3, times: [0, 0.1, 0.4, 0.5, 1] }),
					)}
					d="M14 10v4"
				/>
				<rect height="12" rx="2" width="16" x="2" y="6" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, -3, 0, 0] }, { duration: 0.9, times: [0, 0.2, 0.4, 1] }))}
				d="M22 14v-4"
			/>
		</>
	),
});
