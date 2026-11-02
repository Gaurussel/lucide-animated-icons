import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "backpack",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 0, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
				<path d="M8 10h8" />
				<path d="M8 18h8" />
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.85, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"
					style={edge(0.5, 1)}
				/>
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
			/>
		</>
	),
});
