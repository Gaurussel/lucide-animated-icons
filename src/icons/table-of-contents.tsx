import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "table-of-contents",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.45, 1] }))}
				d="M16 12H3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.2, times: [0, 0.25, 0.45, 1] }))}
				d="M16 18H3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.45, 1] }))}
				d="M16 6H3"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				d="M21 12h.01"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.2, times: [0, 0.3, 0.5, 1] }))}
				d="M21 18h.01"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.3, times: [0, 0.3, 0.5, 1] }))}
				d="M21 6h.01"
			/>
		</>
	),
});
