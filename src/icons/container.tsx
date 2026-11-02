import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "container",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.93, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				d="M10 21.9V14L2.1 9.1"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.63, delay: 0.07, times: [0, 0.25, 0.5, 1] }))}
				d="m10 14 11.9-6.9"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.56, delay: 0.14, times: [0, 0.25, 0.5, 1] }))}
				d="M14 19.8v-8.1"
			/>
			<motion.path
				{...part(
					pose(
						{ pathLength: [1, 0, 0, 1] },
						{ duration: 0.49, delay: 0.21000000000000002, times: [0, 0.25, 0.5, 1] },
					),
				)}
				d="M18 17.5V9.4"
			/>
		</>
	),
});
