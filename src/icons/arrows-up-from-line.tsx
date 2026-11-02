import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrows-up-from-line",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}>
				<path d="m4 6 3-3 3 3" />
				<path d="M7 17V3" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.8, delay: 0.08, times: [0, 0.2, 0.55, 1] }))}>
				<path d="m14 6 3-3 3 3" />
				<path d="M17 17V3" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0.7, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M4 21h16"
			/>
		</>
	),
});
