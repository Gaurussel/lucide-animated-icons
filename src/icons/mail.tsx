import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.45, 0.6, 1] };

export default createAnimatedIcon({
	name: "mail",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, timing))}>
			<motion.path
				{...part(pose({ scaleY: [1, -0.8, -0.8, 1] }, timing))}
				d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
				style={edge(0.5, 0)}
			/>
			<rect height="16" rx="2" width="20" x="2" y="4" />
		</motion.g>
	),
});
