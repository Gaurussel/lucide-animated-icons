import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "files",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 1, 1, 0], y: [0, -1, -1, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
			>
				<path d="M20 7h-3a2 2 0 0 1-2-2V2" />
				<path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
			</motion.g>
			<motion.path
				{...part(
					pose({ x: [0, -1.5, -1.5, 0], y: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }),
				)}
				d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"
			/>
		</>
	),
});
