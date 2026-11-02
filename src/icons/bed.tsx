import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bed",
	render: (part) => (
		<>
			<path d="M2 4v16" />
			<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M2 8h18a2 2 0 0 1 2 2v10" />
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.6, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M6 8v9"
					style={edge(0.5, 1)}
				/>
			</motion.g>
			<path d="M2 17h20" />
		</>
	),
});
