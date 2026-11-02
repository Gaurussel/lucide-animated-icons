import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flip-horizontal-2",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="m3 7 5 5-5 5V7"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="m21 7-5 5 5 5V7"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M12 20v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.06, times: [0, 0.3, 0.5, 1] }))}
				d="M12 14v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.12, times: [0, 0.3, 0.5, 1] }))}
				d="M12 8v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.18, times: [0, 0.3, 0.5, 1] }))}
				d="M12 2v2"
			/>
		</>
	),
});
