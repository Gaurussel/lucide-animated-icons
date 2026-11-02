import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-stack",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 1, 1, 0], y: [0, -1, -1, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
			>
				<path d="M21 7h-3a2 2 0 0 1-2-2V2" />
				<path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
			</motion.g>
			<motion.path
				{...part(
					pose({ x: [0, -0.5, -0.5, 0], y: [0, 0.5, 0.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }),
				)}
				d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"
			/>
			<motion.path
				{...part(
					pose({ x: [0, -1.5, -1.5, 0], y: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }),
				)}
				d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
			/>
		</>
	),
});
