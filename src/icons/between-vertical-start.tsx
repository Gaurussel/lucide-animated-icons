import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "between-vertical-start",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				height="13"
				rx="1"
				width="7"
				x="3"
				y="8"
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -1.2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m15 2-3 3-3-3"
			/>
			<motion.rect
				{...part(pose({ x: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				height="13"
				rx="1"
				width="7"
				x="14"
				y="8"
			/>
		</>
	),
});
