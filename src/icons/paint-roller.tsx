import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "paint-roller",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2.5, 2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<motion.rect
					{...part(pose({ scaleY: [1, 1, 0.8, 1] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
					height="6"
					rx="2"
					style={edge(0.5, 0)}
					width="16"
					x="2"
					y="2"
				/>
				<path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
				<rect height="6" rx="1" width="4" x="8" y="16" />
			</motion.g>
		</>
	),
});
