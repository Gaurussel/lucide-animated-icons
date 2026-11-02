import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const seat = (delay: number) => pose({ x: [0, -1, 3, 0] }, { duration: 0.7, delay, times: [0, 0.2, 0.6, 1] });

export default createAnimatedIcon({
	name: "folder-tree",
	render: (part) => (
		<>
			<motion.path
				{...part(seat(0))}
				d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
			/>
			<motion.path
				{...part(seat(0.12))}
				d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.4, 1] }, { duration: 0.7, times: [0, 0.3, 1] }))}
				d="M3 5a2 2 0 0 0 2 2h3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.4, 1] }, { duration: 0.7, times: [0, 0.3, 1] }))}
				d="M3 3v13a2 2 0 0 0 2 2h3"
			/>
		</>
	),
});
