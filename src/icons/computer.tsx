import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "computer",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				height="8"
				rx="2"
				width="14"
				x="5"
				y="2"
			/>
			<motion.rect
				{...part(pose({ y: [0, 0, 1, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				height="8"
				rx="2"
				width="20"
				x="2"
				y="14"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 1] }, { duration: 0.4, delay: 0.35, times: [0, 0.5, 1] }))}
				d="M6 18h2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 1] }, { duration: 0.4, delay: 0.5, times: [0, 0.5, 1] }))}
				d="M12 18h6"
			/>
		</>
	),
});
