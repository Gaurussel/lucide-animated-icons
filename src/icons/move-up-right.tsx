import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-up-right",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.2, 2, 0], y: [0, 1.2, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M13 5H19V11"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 1, 0], y: [0, 1.2, -1, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M19 5L5 19"
			/>
		</>
	),
});
