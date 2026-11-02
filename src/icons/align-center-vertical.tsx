import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-center-vertical",
	render: (part) => (
		<>
			<path d="M12 2v20" />
			<motion.path
				{...part(pose({ x: [0, 2, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
			/>
			<motion.path
				{...part(pose({ x: [0, -2, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, 0] }, { duration: 0.7, delay: 0.12, times: [0, 0.45, 1] }))}
				d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 0] }, { duration: 0.7, delay: 0.12, times: [0, 0.45, 1] }))}
				d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
			/>
		</>
	),
});
