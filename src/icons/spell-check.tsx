import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spell-check",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}>
				<path d="m6 16 6-12 6 12" />
				<path d="M8 12h8" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.75, times: [0, 0.4, 0.55, 1] }))}
				d="m16 20 2 2 4-4"
			/>
		</>
	),
});
