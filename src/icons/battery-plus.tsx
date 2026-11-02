import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "battery-plus",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.75, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.7, 1] }))}
				style={edge(0, 0.5)}
			>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.15, 0.55, 1] }),
					)}
					d="M10 9v6"
				/>
				<path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" />
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.15, 0.55, 1] }))}
					d="M7 12h6"
				/>
				<path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				d="M22 14v-4"
			/>
		</>
	),
});
