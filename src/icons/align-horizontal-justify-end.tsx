import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-horizontal-justify-end",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ x: [0, 2, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				height="14"
				rx="2"
				width="6"
				x="2"
				y="5"
			/>
			<motion.rect
				{...part(pose({ x: [0, 2, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.45, 1] }))}
				height="10"
				rx="2"
				width="6"
				x="12"
				y="7"
			/>
			<path d="M22 2v20" />
		</>
	),
});
