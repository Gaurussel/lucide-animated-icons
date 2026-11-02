import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "parentheses",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1, 1.5, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="M8 21s-4-3-4-9 4-9 4-9"
			/>
			<motion.path
				{...part(pose({ x: [0, 1, -1.5, 0] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }))}
				d="M16 3s4 3 4 9-4 9-4 9"
			/>
		</>
	),
});
