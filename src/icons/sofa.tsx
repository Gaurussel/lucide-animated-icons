import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sofa",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}>
				<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
				<path d="M12 4v9" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
			</motion.g>
			<path d="M4 18v2" />
			<path d="M20 18v2" />
		</>
	),
});
