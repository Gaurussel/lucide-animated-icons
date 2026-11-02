import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "undo-2",
	render: (part) => (
		<>
			<motion.path {...part(pose({ x: [0, 1, -2.5, -2.5, 0] }, { duration: 0.75, times }))} d="M9 14 4 9l5-5" />
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.6, 0.6, 1] }, { duration: 0.75, times }))}
				d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"
			/>
		</>
	),
});
