import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "between-horizontal-start",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				height="7"
				rx="1"
				width="13"
				x="8"
				y="3"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, -1.2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m2 9 3 3-3 3"
			/>
			<motion.rect
				{...part(pose({ y: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				height="7"
				rx="1"
				width="13"
				x="8"
				y="14"
			/>
		</>
	),
});
