import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fingerprint",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.3, 0.5, 1] }))}
				d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.06, times: [0, 0.3, 0.5, 1] }))}
				d="M14 13.12c0 2.38 0 6.38-1 8.88"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.12, times: [0, 0.3, 0.5, 1] }))}
				d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.18, times: [0, 0.3, 0.5, 1] }))}
				d="M2 12a10 10 0 0 1 18-6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.24, times: [0, 0.3, 0.5, 1] }))}
				d="M2 16h.01"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.3, times: [0, 0.3, 0.5, 1] }))}
				d="M21.8 16c.2-2 .131-5.354 0-6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.36, times: [0, 0.3, 0.5, 1] }))}
				d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.42, times: [0, 0.3, 0.5, 1] }))}
				d="M8.65 22c.21-.66.45-1.32.57-2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.48, times: [0, 0.3, 0.5, 1] }))}
				d="M9 6.8a6 6 0 0 1 9 5.2v2"
			/>
		</>
	),
});
