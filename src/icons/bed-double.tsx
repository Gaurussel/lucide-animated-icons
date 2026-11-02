import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bed-double",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.75, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
				<path d="M12 4v6" />
			</motion.g>
			<path d="M2 18h20" />
		</>
	),
});
