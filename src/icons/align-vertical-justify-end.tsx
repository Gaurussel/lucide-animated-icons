import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-vertical-justify-end",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, 2, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				height="6"
				rx="2"
				width="14"
				x="5"
				y="12"
			/>
			<motion.rect
				{...part(pose({ y: [0, 2, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.45, 1] }))}
				height="6"
				rx="2"
				width="10"
				x="7"
				y="2"
			/>
			<path d="M2 22h20" />
		</>
	),
});
