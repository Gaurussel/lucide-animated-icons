import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "repeat-2",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0, 0] }, { duration: 0.9, times: [0, 0.1, 0.4, 0.6, 1] }))}>
				<path d="m2 9 3-3 3 3" />
				<path d="M13 18H7a2 2 0 0 1-2-2V6" />
			</motion.g>
			<motion.g
				{...part(pose({ y: [0, 0, -1.5, 3, 0, 0] }, { duration: 0.9, times: [0, 0.2, 0.3, 0.6, 0.8, 1] }))}
			>
				<path d="m22 15-3 3-3-3" />
				<path d="M11 6h6a2 2 0 0 1 2 2v10" />
			</motion.g>
		</>
	),
});
