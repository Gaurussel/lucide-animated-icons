import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.35, 0.6, 1];

export default createAnimatedIcon({
	name: "strikethrough",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.75, times }))}
				d="M16 4H9a3 3 0 0 0-2.83 4"
			/>
			<motion.path
				{...part(pose({ y: [0, 2.5, 2.5, 0] }, { duration: 0.75, times }))}
				d="M14 12a4 4 0 0 1 0 8H6"
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times }))}
				x1="4"
				x2="20"
				y1="12"
				y2="12"
			/>
		</>
	),
});
